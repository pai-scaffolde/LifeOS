/**
 * git-commit adapter — new commits across configured repos since the last poll.
 *
 * The cursor is per-repo HEAD SHA (`git log <lastHead>..HEAD`), not wall-clock: commits
 * arrive by pull minutes-to-hours after their author date, so a `--since=<last poll>`
 * window missed nearly all of them. `--since` is only the fallback for a repo with no
 * recorded head, or whose recorded head is no longer reachable (rewritten history).
 *
 * execFile (no shell). Each repo is isolated in its own try/catch so one bad path
 * never blocks the others. Commits carry their author-date as the event timestamp,
 * so they file under the day they were actually made.
 */
import { execFileSync } from "node:child_process";
import { basename } from "node:path";
import type { ConduitConfig } from "../config.ts";
import { readState, writeState } from "../store.ts";
import type { ConduitEvent } from "../types.ts";

const UNIT = "\x1f"; // ASCII unit separator — safe field delimiter for --pretty

export function capture(config: ConduitConfig): ConduitEvent[] {
  if (!config.repos.length) return [];
  const state = readState();
  const since =
    (state.lastGitPollTs as string) ||
    new Date(Date.now() - config.pollIntervalSec * 2000).toISOString();
  const heads = { ...((state.gitHeads as Record<string, string> | undefined) ?? {}) };
  const events: ConduitEvent[] = [];
  let allOk = true;

  for (const repo of config.repos) {
    try {
      const git = (...args: string[]) =>
        execFileSync("git", ["-C", repo, ...args], {
          encoding: "utf8",
          timeout: 8000,
          stdio: ["ignore", "pipe", "ignore"], // an unreachable cursor probe is expected, not log noise
        }).trim();
      // Resolve HEAD first, then log up to that SHA, so a commit landing mid-poll is
      // never recorded as seen before it was scanned.
      const head = git("rev-parse", "HEAD");
      const last = heads[repo];
      let reachable = false;
      if (last) {
        try {
          git("cat-file", "-e", `${last}^{commit}`);
          reachable = true;
        } catch {
          // recorded head gone (history rewritten) — fall back to the time window
        }
      }
      const range = reachable ? [`${last}..${head}`] : [`--since=${since}`, head];
      const out = git("log", ...range, "--no-merges", `--pretty=format:%H${UNIT}%s${UNIT}%aI`);
      heads[repo] = head;
      if (!out) continue;
      for (const line of out.split("\n")) {
        const [sha, subject, authorDate] = line.split(UNIT);
        if (!sha) continue;
        events.push({
          ts: authorDate || new Date().toISOString(),
          type: "git-commit",
          source: "git",
          repo: basename(repo),
          detail: { sha: sha.slice(0, 10), subject },
        });
      }
    } catch {
      allOk = false; // failed scan — keep polling the rest, but do NOT advance the cursor
    }
  }

  // Only advance the cursors when EVERY repo scanned cleanly, so a transient failure never
  // skips commits in the un-scanned window. The re-scan overlap is de-duped by SHA at rollup.
  if (allOk) writeState({ gitHeads: heads, lastGitPollTs: new Date().toISOString() });
  return events;
}
