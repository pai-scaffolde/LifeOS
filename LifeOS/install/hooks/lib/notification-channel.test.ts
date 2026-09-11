/**
 * notification-channel.test.ts — getNotificationChannel() must treat a Claude
 * desktop-app session as 'desktop'. The app sets none of the TERM-family
 * variables the sniff keys on, only CLAUDE_CODE_ENTRYPOINT=claude-desktop,
 * so every voice-firing hook classified it 'headless' and skipped /notify.
 * (public issue #1975)
 *
 *   bun test LifeOS/install/hooks/lib/notification-channel.test.ts
 */
import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { getNotificationChannel } from "./notification-channel";

const VARS = [
  "LIFEOS_NOTIFICATION_CHANNEL",
  "TERM",
  "TERM_PROGRAM",
  "KITTY_WINDOW_ID",
  "SSH_TTY",
  "CLAUDE_CODE_ENTRYPOINT",
] as const;

const saved: Partial<Record<(typeof VARS)[number], string | undefined>> = {};

beforeEach(() => {
  for (const k of VARS) {
    saved[k] = process.env[k];
    delete process.env[k];
  }
});

afterEach(() => {
  for (const k of VARS) {
    if (saved[k] === undefined) delete process.env[k];
    else process.env[k] = saved[k];
  }
});

describe("getNotificationChannel", () => {
  test("desktop app: entrypoint marker, no terminal identity → desktop", () => {
    process.env.CLAUDE_CODE_ENTRYPOINT = "claude-desktop";
    expect(getNotificationChannel()).toBe("desktop");
  });

  test("explicit LIFEOS_NOTIFICATION_CHANNEL still wins over the desktop marker", () => {
    process.env.CLAUDE_CODE_ENTRYPOINT = "claude-desktop";
    process.env.LIFEOS_NOTIFICATION_CHANNEL = "headless";
    expect(getNotificationChannel()).toBe("headless");
    process.env.LIFEOS_NOTIFICATION_CHANNEL = "imessage";
    expect(getNotificationChannel()).toBe("imessage");
  });

  test("no terminal identity and no desktop marker → headless", () => {
    expect(getNotificationChannel()).toBe("headless");
    process.env.CLAUDE_CODE_ENTRYPOINT = "cli";
    expect(getNotificationChannel()).toBe("headless");
  });

  test("terminal identity alone → desktop (unchanged)", () => {
    process.env.TERM = "xterm-256color";
    expect(getNotificationChannel()).toBe("desktop");
  });
});
