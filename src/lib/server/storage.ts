import "server-only";
import Database from "better-sqlite3";
import { chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

let database: Database.Database | undefined;
let cleanedDay = "";
export function getDatabase() {
  if (!database) {
    const directory = process.env.DATA_DIR || join(process.cwd(), "data");
    mkdirSync(directory, { recursive: true, mode: 0o700 });
    const path = join(directory, "site.sqlite");
    database = new Database(path);
    chmodSync(path, 0o600);
    database.pragma("journal_mode = WAL");
    database.pragma("busy_timeout = 5000");
    database.exec(`
      CREATE TABLE IF NOT EXISTS daily_events (
        day TEXT NOT NULL, kind TEXT NOT NULL, value TEXT NOT NULL,
        count INTEGER NOT NULL DEFAULT 0, PRIMARY KEY(day, kind, value)
      );
      CREATE TABLE IF NOT EXISTS admin_sessions (
        token_hash TEXT PRIMARY KEY, version TEXT NOT NULL,
        created_at INTEGER NOT NULL, last_seen INTEGER NOT NULL, expires_at INTEGER NOT NULL
      );
      CREATE TABLE IF NOT EXISTS login_guard (
        id INTEGER PRIMARY KEY CHECK (id = 1), started_at INTEGER NOT NULL, attempts INTEGER NOT NULL
      );
    `);
  }
  const today = new Date().toISOString().slice(0, 10);
  if (today !== cleanedDay) {
    database.prepare("DELETE FROM daily_events WHERE day < ?").run(new Date(Date.now() - 365 * 86400000).toISOString().slice(0, 10));
    database.prepare("DELETE FROM admin_sessions WHERE expires_at < ? OR last_seen < ?").run(Date.now(), Date.now() - 30 * 60000);
    cleanedDay = today;
  }
  return database;
}

export const eventValues = {
  page_view: ["/ru", "/en", "/ru/experience", "/en/experience", "/ru/research", "/en/research"],
  project_open: ["paas", "operations", "delivery-platform", "resilience", "llm-security", "llmops"],
  pdf_download: ["ru", "en"],
} as const;
export type EventKind = keyof typeof eventValues;
export function recordEvent(kind: EventKind, value: string) {
  getDatabase().prepare(`INSERT INTO daily_events(day,kind,value,count) VALUES(?,?,?,1)
    ON CONFLICT(day,kind,value) DO UPDATE SET count=count+1`).run(new Date().toISOString().slice(0, 10), kind, value);
}
export type EventRow = { day: string; kind: EventKind; value: string; count: number };
export function readMetrics(days: number) {
  const since = new Date(Date.now() - (days - 1) * 86400000).toISOString().slice(0, 10);
  return getDatabase().prepare("SELECT day,kind,value,count FROM daily_events WHERE day >= ? ORDER BY day").all(since) as EventRow[];
}
