#!/usr/bin/env bun
// Normalize env path vars Claude Code may inject unexpanded — literal $HOME/${HOME}
// in LIFEOS_DIR/LIFEOS_CONFIG_DIR/PROJECTS_DIR resolves to a shadow dir (#1404 / PR #1451, author jbmml).
for (const __k of ["LIFEOS_DIR", "LIFEOS_CONFIG_DIR", "PROJECTS_DIR"]) {
  const __v = process.env[__k];
  if (__v && /^\$\{?HOME\}?(\/|$)/.test(__v)) process.env[__k] = __v.replace(/^\$\{?HOME\}?/, process.env.HOME ?? "~");
}


/**
 * poller-meta-monitor — watches every other Pulse monitoring job for silent failure.
 *
 * Pulse's default behavior is to silently skip jobs after 3 consecutive failures.
 * That's exactly the trap "no band in town tonight" can hide for weeks. This
 * meta-monitor reads Pulse's configured cron roster and its state file and
 * screams loudly if any enabled job has latched or gone silent beyond 3× its
 * schedule.
 *
 * Emits one of:
 *   "NO_ACTION"          — everything healthy
 *   "<alert text>"        — list of stale jobs
 *
 * Runs via PULSE.toml as a script-type job every 4 hours.
 */

import { pulseCronJobs } from "../../TOOLS/Services.ts";

// Normalize env path vars that Claude Code injects without shell expansion (LifeOS#1404)
for (const k of ["LIFEOS_DIR", "LIFEOS_CONFIG_DIR", "PROJECTS_DIR"]) {
  const v = process.env[k];
  if (v && /^\$\{?HOME\}?(\/|$)/.test(v)) process.env[k] = v.replace(/^\$\{?HOME\}?/, process.env.HOME ?? "~");
}


// The roster comes from Pulse's own config, overlaid with its state file —
// the same source `Services.ts status` reads. The hardcoded
// WATCHED_JOBS list this replaced named twelve jobs, none of which appears in
// PULSE.toml or PULSE.user.toml, so every iteration hit the "not configured
// yet" branch and the monitor reported NO_ACTION without examining anything.
// It also read `state[job]` from a file shaped `{ version, jobs: { ... } }`,
// so even correct names would never have matched a state entry.

function parseCronToMs(cron: string): number {
  // Very rough approximation for "every X hours" detection.
  // `0 */N * * *` → N hours. `*/M * * * *` → M minutes.
  const parts = cron.split(" ");
  if (parts.length < 5) return 24 * 60 * 60 * 1000;
  const hourPart = parts[1];
  const minPart = parts[0];
  const dowPart = parts[4];

  const hMatch = hourPart.match(/^\*\/(\d+)$/);
  if (hMatch) return Number(hMatch[1]) * 60 * 60 * 1000;

  const mMatch = minPart.match(/^\*\/(\d+)$/);
  if (mMatch) return Number(mMatch[1]) * 60 * 1000;

  // Daily ("0 7 * * *") → 24h
  if (hourPart.match(/^\d+$/) && minPart.match(/^\d+$/)) {
    if (dowPart === "*") return 24 * 60 * 60 * 1000;
    return 7 * 24 * 60 * 60 * 1000; // weekly
  }
  return 24 * 60 * 60 * 1000;
}

function main(): void {
  const now = Date.now();
  const stale: string[] = [];

  // Disabled jobs never run by design — /healthz counts only enabled ones too.
  for (const job of pulseCronJobs().filter((j) => j.enabled)) {
    if (job.latched) {
      stale.push(`${job.name}: ${job.failures} consecutive failures — SILENT SKIP risk`);
    }
    if (!job.lastRun) continue; // never come due yet; tolerate until it does
    const expectedIntervalMs = parseCronToMs(job.schedule);
    const sinceMs = now - job.lastRun.getTime();
    if (sinceMs > 3 * expectedIntervalMs) {
      const hoursStale = Math.round(sinceMs / (60 * 60 * 1000));
      stale.push(`${job.name}: last run ${hoursStale}h ago (expected every ${Math.round(expectedIntervalMs / 3600000)}h)`);
    }
  }

  if (stale.length === 0) {
    console.log("NO_ACTION");
    return;
  }

  console.log(`⚠️ Pulse meta-monitor: ${stale.length} monitoring job(s) silent or failing:\n`);
  for (const s of stale) console.log(`  • ${s}`);
  console.log(`\nTrust in proactive monitoring is compromised while these are silent. Investigate.`);
}

main();
