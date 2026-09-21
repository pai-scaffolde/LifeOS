#!/usr/bin/env bun
/**
 * InstallSynthesis.ts - Materialize com.lifeos.synthesis.plist.template and bootstrap it.
 *
 *   bun ~/.claude/LIFEOS/TOOLS/InstallSynthesis.ts             # install
 *   bun ~/.claude/LIFEOS/TOOLS/InstallSynthesis.ts --uninstall # remove
 *   bun ~/.claude/LIFEOS/TOOLS/InstallSynthesis.ts --status    # check
 *
 * Weekly (Monday 03:05, plus once at load) LearningPatternSynthesis.ts --week:
 * the trailing-7-day ratings synthesis into MEMORY/LEARNING/SYNTHESIS/. Weekly
 * because --week is a 7-day window; a daily run repeats the same week 7 times.
 */

import { existsSync, readFileSync, writeFileSync, mkdirSync, unlinkSync } from "fs";
import { join } from "path";
import * as systemd from "./lib/SystemdUser";
import { homedir } from "node:os";

type SpawnProcess = {
  exited: Promise<number>;
  kill: () => void;
};

type CommandExit = {
  exit: number;
  ms: number;
  timedOut: boolean;
};

type LaunchctlResult = {
  ok: boolean;
  out: string;
  err: string;
  exit: number;
  ms: number;
};

const HOME = process.env.HOME ?? process.env.USERPROFILE ?? homedir();
const TEMPLATE_PATH = join(HOME, ".claude", "LIFEOS", "TOOLS", "com.lifeos.synthesis.plist.template");
const LAUNCH_AGENTS_DIR = join(HOME, "Library", "LaunchAgents");
const TARGET_PLIST = join(LAUNCH_AGENTS_DIR, "com.lifeos.synthesis.plist");
const LABEL = "com.lifeos.synthesis";
const COMMAND_TIMEOUT_MS = 30 * 1000;

async function exitedWithTimeout(proc: SpawnProcess): Promise<CommandExit> {
  const started = Date.now();
  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    proc.kill();
  }, COMMAND_TIMEOUT_MS);
  const exit = await proc.exited;
  clearTimeout(timer);
  return { exit, ms: Date.now() - started, timedOut };
}

async function uid(): Promise<string> {
  const proc = Bun.spawn(["id", "-u"], { stdout: "pipe", stderr: "ignore" });
  const out = await new Response(proc.stdout).text();
  const result = await exitedWithTimeout(proc);
  if (result.timedOut) throw new Error(`id -u timed out after ${result.ms}ms`);
  if (result.exit !== 0) throw new Error(`id -u failed with exit ${result.exit} after ${result.ms}ms`);
  return out.trim();
}

async function launchctl(args: string[]): Promise<LaunchctlResult> {
  const proc = Bun.spawn(["launchctl", ...args], { stdout: "pipe", stderr: "pipe" });
  const out = await new Response(proc.stdout).text();
  const err = await new Response(proc.stderr).text();
  const result = await exitedWithTimeout(proc);
  return { ok: result.exit === 0 && !result.timedOut, out, err, exit: result.exit, ms: result.ms };
}

async function detectBun(): Promise<string> {
  const proc = Bun.spawn(["which", "bun"], { stdout: "pipe", stderr: "ignore" });
  const out = await new Response(proc.stdout).text();
  const result = await exitedWithTimeout(proc);
  if (result.timedOut) throw new Error(`which bun timed out after ${result.ms}ms`);
  if (result.exit !== 0) throw new Error(`which bun failed with exit ${result.exit} after ${result.ms}ms`);
  const path = out.trim();
  if (!path) throw new Error("bun not found in PATH - install bun first");
  return path;
}

async function install(): Promise<void> {
  if (!existsSync(TEMPLATE_PATH)) {
    console.error(`[InstallSynthesis] template missing at ${TEMPLATE_PATH}`);
    process.exit(1);
  }
  const bunPath = await detectBun();
  const bunDir = bunPath.replace(/\/bun$/, "");
  console.log(`[InstallSynthesis] detected bun at ${bunPath}`);
  const template = readFileSync(TEMPLATE_PATH, "utf-8");
  const materialized = template
    .replace(/\{\{HOME\}\}/g, HOME)
    .replace(/\{\{BUN\}\}/g, bunPath)
    .replace(/\{\{BUN_DIR\}\}/g, bunDir);
  if (!existsSync(LAUNCH_AGENTS_DIR)) mkdirSync(LAUNCH_AGENTS_DIR, { recursive: true });

  const u = await uid();
  if (existsSync(TARGET_PLIST)) {
    await launchctl(["bootout", `gui/${u}`, TARGET_PLIST]);
  }

  writeFileSync(TARGET_PLIST, materialized);
  console.log(`[InstallSynthesis] wrote ${TARGET_PLIST}`);

  const r = await launchctl(["bootstrap", `gui/${u}`, TARGET_PLIST]);
  if (!r.ok) {
    console.error(`[InstallSynthesis] bootstrap failed: ${r.err.trim()}`);
    process.exit(1);
  }
  console.log(`[InstallSynthesis] launchd bootstrap OK - ${LABEL} active (weekly Mon 03:05)`);

  const status = await launchctl(["print", `gui/${u}/${LABEL}`]);
  if (status.ok) {
    const stateLine = status.out.split("\n").find((l) => l.includes("state ="));
    console.log(`[InstallSynthesis] ${stateLine?.trim() ?? "state unknown"}`);
  } else {
    console.log(`[InstallSynthesis] bootstrap succeeded but status check failed: ${status.err.trim()}`);
  }
}

async function uninstall(): Promise<void> {
  const u = await uid();
  if (existsSync(TARGET_PLIST)) {
    const r = await launchctl(["bootout", `gui/${u}`, TARGET_PLIST]);
    console.log(`[InstallSynthesis] bootout ${r.ok ? "OK" : "FAILED: " + r.err.trim()}`);
    try { unlinkSync(TARGET_PLIST); console.log(`[InstallSynthesis] removed ${TARGET_PLIST}`); } catch { /* bootout result is already reported */ }
  } else {
    console.log(`[InstallSynthesis] no plist at ${TARGET_PLIST} - nothing to do`);
  }
}

async function status(): Promise<void> {
  const u = await uid();
  const r = await launchctl(["print", `gui/${u}/${LABEL}`]);
  if (!r.ok) {
    console.log(`[InstallSynthesis] ${LABEL} not loaded`);
    process.exit(1);
  }
  console.log(r.out);
}

/* ── systemd --user backend (Linux only) ────────────────────────────────────
 * Strictly additive, mirrors InstallHealthSync.ts. On darwin nothing in this
 * section executes. Translation rules documented in lib/SystemdUser.ts.
 * ------------------------------------------------------------------------- */

async function linuxSpec(): Promise<systemd.UnitSpec> {
  const bunPath = await systemd.which("bun");
  if (!bunPath) throw new Error("bun not found in PATH - install bun first");
  return {
    label: LABEL,
    description: "LifeOS weekly learning-pattern synthesis",
    exec: [bunPath, join(HOME, ".claude", "LIFEOS", "TOOLS", "LearningPatternSynthesis.ts"), "--week"],
    logPath: join(HOME, ".claude", "LIFEOS", "MEMORY", "OBSERVABILITY", "synthesis.log"),
    workingDirectory: join(HOME, ".claude"),
    schedule: { kind: "calendar", weekday: 1, hour: 3, minute: 5 },
  };
}

async function linuxMain(arg: string | undefined): Promise<void> {
  const spec = await linuxSpec();
  const log = (m: string) => console.log(`[InstallSynthesis] ${m}`);
  if (arg === "--uninstall") { await systemd.uninstall(spec, log); return; }
  if (arg === "--status") { if (!(await systemd.status(spec, log))) process.exit(1); return; }
  if (!(await systemd.install(spec, log))) process.exit(1);
}

async function main(): Promise<void> {
  const arg = process.argv[2];
  if (systemd.isLinux()) return linuxMain(arg);
  if (arg === "--uninstall") return uninstall();
  if (arg === "--status") return status();
  return install();
}

main().catch((err) => { console.error(`[InstallSynthesis] Fatal: ${err}`); process.exit(1); });
