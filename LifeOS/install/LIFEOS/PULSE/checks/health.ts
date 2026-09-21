#!/usr/bin/env bun
/**
 * Website Health Check — Script-type job
 *
 * Zero AI cost: HTTP GET → check status → notify on failure.
 *
 * No cron entry for this ships in PULSE.toml — it only makes sense on installs
 * that name sites to check, which add a `[[job]]` row to
 * LIFEOS/USER/CONFIG/PULSE.user.toml (same shape as airgradient-poll, public
 * issue #1504: shipped default-on it reported "ok" every 5 minutes with nothing
 * to check).
 *
 * Output: failure details or NO_ACTION; exit 78 (EX_CONFIG) when no sites are
 * set; exit 1 when the check itself crashes.
 */

import { join } from "node:path"
import { readFileSync, existsSync } from "node:fs"
import { homedir } from "node:os"

const HOME = process.env.HOME ?? process.env.USERPROFILE ?? homedir()

// Bun auto-loads .env from CWD only; Pulse cron runs from LIFEOS/PULSE/, so the
// symlink at ~/.claude/.env isn't picked up. Read it directly if env is empty.
function loadSitesFromDotenv(): string | null {
  const envPath = join(HOME, ".claude", ".env")
  if (!existsSync(envPath)) return null
  try {
    const raw = readFileSync(envPath, "utf8")
    const match = raw.match(/^\s*LIFEOS_PULSE_HEALTH_SITES\s*=\s*(.+?)\s*$/m)
    if (!match) return null
    return match[1].replace(/^["']|["']$/g, "")
  } catch {
    return null
  }
}

// Sites to health-check. Override via LIFEOS_PULSE_HEALTH_SITES env var
// (comma-separated "name|url" pairs, e.g. "blog|https://blog.example.com,api|https://api.example.com").
// Empty default ships in the public release; principals add their own sites.
const SITES = (process.env.LIFEOS_PULSE_HEALTH_SITES || loadSitesFromDotenv() || "")
  .split(",")
  .map((entry) => entry.trim())
  .filter(Boolean)
  .map((entry) => {
    const [name, url] = entry.split("|").map((s) => s.trim())
    return { name: name || url, url }
  })
  .filter((s) => s.url)

interface HealthResult {
  name: string
  ok: boolean
  status?: number
  error?: string
  responseMs: number
}

async function checkSite(site: { name: string; url: string }): Promise<HealthResult> {
  const start = Date.now()
  try {
    const resp = await fetch(site.url, {
      method: "HEAD",
      signal: AbortSignal.timeout(10_000),
      redirect: "follow",
    })
    return {
      name: site.name,
      ok: resp.ok,
      status: resp.status,
      responseMs: Date.now() - start,
    }
  } catch (err) {
    return {
      name: site.name,
      ok: false,
      error: err instanceof Error ? err.message : String(err),
      responseMs: Date.now() - start,
    }
  }
}

async function main() {
  if (SITES.length === 0) {
    // sysexits(3) EX_CONFIG — not configured, not broken, and not "all sites up".
    console.error("healthcheck not configured: set LIFEOS_PULSE_HEALTH_SITES (comma-separated name|url pairs)")
    process.exit(78)
  }
  const results = await Promise.all(SITES.map(checkSite))
  const failures = results.filter((r) => !r.ok)

  if (failures.length === 0) {
    console.log("NO_ACTION")
    return
  }

  const lines = failures.map((f) => {
    if (f.error) return `${f.name}: DOWN (${f.error})`
    return `${f.name}: HTTP ${f.status} (${f.responseMs}ms)`
  })

  console.log(`Site health alert:\n${lines.join("\n")}`)
}

main().catch((err) => {
  console.error(`health-check error: ${err}`)
  // A crash is a failure, not "all sites up". Pulse fails a script job on a
  // nonzero exit (lib.ts spawnScript); printing a sentinel and exiting 0 made
  // a permanently broken check indistinguishable from a healthy one, so the
  // MAX_FAILURES breaker could never trip.
  process.exit(1)
})
