"use client";

import { useState, useEffect, useCallback } from "react";
import { localOnlyApiCall } from "@/lib/local-api";
import { Volume2, Terminal, FileText, Zap } from "lucide-react";

// ─── System Health Vitals (Widget 18) ───
// Persistent bar at top of Activity page, visible across all tabs.
// Polls voice, tool failures, docs, and session health every 30s.

type VitalStatus = "healthy" | "degraded" | "failing" | "unknown";

interface HealthData {
  voiceHealth: { rate: number | null; status: VitalStatus };
  toolFailures: {
    failsPerHour: number | null;
    status: VitalStatus;
  };
  docFreshness: {
    status: VitalStatus;
    label: string;
  };
  activeSessions: {
    count: number;
    status: VitalStatus;
  };
}

const STATUS_COLORS: Record<string, string> = {
  healthy: "text-emerald-400",
  degraded: "text-amber-400",
  failing: "text-rose-400",
  unknown: "text-ink-3",
};

const STATUS_DOTS: Record<string, string> = {
  healthy: "bg-emerald-400",
  degraded: "bg-amber-400",
  failing: "bg-rose-400",
  unknown: "bg-ink-3",
};

// The /api/observability/* log routes return a bare array of the newest 100
// JSONL rows — there is no `summary` envelope — so the windowed counts below
// are derived here. Every helper returns null when the feed is missing or has
// nothing to measure, so an unreachable endpoint renders unknown, not healthy.

type VoiceEvent = { timestamp?: string; event_type?: string };
type ToolFailure = { timestamp?: string };
type TabFreshness = { tier?: string };

// pai-freshness-v1 tiers, as served by /api/tab-freshness and rendered by
// FreshnessIndicator. Anything else — including an unreachable feed — is
// unknown rather than fresh.
const FRESHNESS_TIERS: Record<string, { status: VitalStatus; label: string }> = {
  fresh: { status: "healthy", label: "Fresh" },
  aging: { status: "degraded", label: "Aging" },
  stale: { status: "failing", label: "Stale" },
};
const FRESHNESS_UNKNOWN = { status: "unknown" as VitalStatus, label: "Unknown" };

function within24h(timestamp: string | undefined, now: number): boolean {
  if (!timestamp) return false;
  const t = Date.parse(timestamp);
  return Number.isFinite(t) && now - t <= 24 * 60 * 60 * 1000;
}

// `skipped` events are not delivery attempts (non-desktop channel), so they
// count on neither side of the ratio.
function voiceSuccessRate(events: unknown, now: number): number | null {
  if (!Array.isArray(events)) return null;
  const attempts = (events as VoiceEvent[]).filter(
    (e) =>
      within24h(e.timestamp, now) &&
      (e.event_type === "sent" || e.event_type === "failed"),
  );
  if (attempts.length === 0) return null;
  const sent = attempts.filter((e) => e.event_type === "sent").length;
  return (sent / attempts.length) * 100;
}

// Only the newest 100 rows are served, so a day with more than 100 failures
// reads as a lower bound. That can understate how bad things are; it can never
// report a healthy rate that isn't real.
function failuresPerHour(events: unknown, now: number): number | null {
  if (!Array.isArray(events)) return null;
  return (
    (events as ToolFailure[]).filter((e) => within24h(e.timestamp, now)).length /
    24
  );
}

export default function SystemHealthVitals() {
  const [health, setHealth] = useState<HealthData | null>(null);

  const fetchHealth = useCallback(async () => {
    try {
      const now = Date.now();

      // Fetch voice events
      const voice = await localOnlyApiCall<VoiceEvent[]>(
        "/api/observability/voice-events",
      ).catch(() => null);
      const voiceRate = voiceSuccessRate(voice, now);

      // Fetch tool failures
      const failures = await localOnlyApiCall<ToolFailure[]>(
        "/api/observability/tool-failures",
      ).catch(() => null);
      const failsPerHour = failuresPerHour(failures, now);

      // Fetch documentation freshness — same feed the TabFreshnessPill reads
      const docs = await localOnlyApiCall<TabFreshness>(
        "/api/tab-freshness?tab=docs",
      ).catch(() => null);
      const docFreshness =
        (docs?.tier ? FRESHNESS_TIERS[docs.tier] : undefined) ??
        FRESHNESS_UNKNOWN;

      // Fetch algorithm state for active session count
      const algo = await localOnlyApiCall<{
        algorithms?: Array<{ active?: boolean }>;
      }>("/api/algorithm").catch(() => null);
      const activeCount =
        algo?.algorithms?.filter((a) => a.active)?.length ?? 0;

      setHealth({
        voiceHealth: {
          rate: voiceRate,
          status:
            voiceRate === null
              ? "unknown"
              : voiceRate >= 90
                ? "healthy"
                : voiceRate >= 70
                  ? "degraded"
                  : "failing",
        },
        toolFailures: {
          failsPerHour:
            failsPerHour === null ? null : Math.round(failsPerHour * 10) / 10,
          status:
            failsPerHour === null
              ? "unknown"
              : failsPerHour <= 1
                ? "healthy"
                : failsPerHour <= 5
                  ? "degraded"
                  : "failing",
        },
        docFreshness,
        activeSessions: {
          count: activeCount,
          status: activeCount > 0 ? "healthy" : "degraded",
        },
      });
    } catch {
      // Silently fail — vitals bar simply stays hidden until data arrives
    }
  }, []);

  useEffect(() => {
    fetchHealth();
    const interval = setInterval(fetchHealth, 30000);
    return () => clearInterval(interval);
  }, [fetchHealth]);

  if (!health) return null;

  return (
    <div className="flex items-center gap-6 px-4 py-1.5 bg-[rgba(15,26,51,0.5)] border-b border-white/[0.04] shrink-0">
      <VitalMetric
        icon={Volume2}
        label="Voice"
        value={
          health.voiceHealth.rate === null
            ? "—"
            : `${Math.round(health.voiceHealth.rate)}%`
        }
        status={health.voiceHealth.status}
      />
      <VitalMetric
        icon={Terminal}
        label="Tool fails"
        value={
          health.toolFailures.failsPerHour === null
            ? "—"
            : `${health.toolFailures.failsPerHour}/hr`
        }
        status={health.toolFailures.status}
      />
      <VitalMetric
        icon={FileText}
        label="Documentation"
        value={health.docFreshness.label}
        status={health.docFreshness.status}
      />
      <VitalMetric
        icon={Zap}
        label="Active"
        value={`${health.activeSessions.count}`}
        status={health.activeSessions.status}
      />
    </div>
  );
}

function VitalMetric({
  icon: Icon,
  label,
  value,
  status,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  status: VitalStatus;
}) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-2 h-2 rounded-full ${STATUS_DOTS[status]}`}
      />
      <Icon className="w-4 h-4 text-ink-3" />
      <span className="text-xs text-ink-3 uppercase">{label}</span>
      <span
        className={`text-sm font-mono font-medium ${STATUS_COLORS[status]}`}
      >
        {value}
      </span>
    </div>
  );
}
