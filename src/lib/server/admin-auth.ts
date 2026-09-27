import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parseEnv } from "node:util";
import { createHash, createHmac, randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { getDatabase } from "./storage";

export const production = process.env.NODE_ENV === "production";
export const sessionCookie = production ? "__Host-resume_admin" : "resume_admin_dev";
export const sessionSeconds = 8 * 3600;
const idleMilliseconds = 30 * 60000;
type AdminConfig = { key: string; username: string; passwordHash: string; secret: string; origin: string; host: string };
export function adminConfig(): AdminConfig | null {
  let settings: Record<string, string | undefined> = process.env;
  try {
    settings = parseEnv(readFileSync(join(process.env.DATA_DIR || "/app/data", "admin.env"), "utf8"));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") return null;
  }
  const key = settings.ADMIN_ROUTE_KEY || "";
  const username = settings.ADMIN_USERNAME || "";
  const passwordHash = settings.ADMIN_PASSWORD_HASH || "";
  const secret = settings.ADMIN_SESSION_SECRET || "";
  if (!/^[a-z0-9-]{32,80}$/.test(key) || !/^[a-zA-Z0-9._-]{3,64}$/.test(username)
      || !/^scrypt-v1:[a-f0-9]{32}:[a-f0-9]{128}$/.test(passwordHash) || !/^[a-f0-9]{64,}$/.test(secret)) return null;
  try {
    const url = new URL(settings.ADMIN_ORIGIN || "");
    if (url.username || url.password || url.pathname !== "/" || url.search || url.hash) return null;
    if (production ? url.protocol !== "https:" : !["http:", "https:"].includes(url.protocol)) return null;
    return { key, username, passwordHash, secret, origin: url.origin, host: url.host };
  } catch { return null; }
}
export function allowedAdminRequest(headers: Headers, config: AdminConfig) {
  // Production is served only through the local reverse proxy, which overwrites these headers.
  return headers.get("host") === config.host && (!production || headers.get("x-forwarded-proto") === "https");
}
export function sameOrigin(headers: Headers, config: AdminConfig) {
  return allowedAdminRequest(headers, config) && headers.get("origin") === config.origin;
}
function equalText(a: string, b: string) {
  return timingSafeEqual(createHash("sha256").update(a).digest(), createHash("sha256").update(b).digest());
}
export async function verifyCredentials(username: string, password: string, config: AdminConfig) {
  const [, salt, expected] = config.passwordHash.split(":");
  const derived = await new Promise<Buffer>((resolve, reject) => {
    scrypt(password, Buffer.from(salt, "hex"), 64, { N: 32768, r: 8, p: 3, maxmem: 64 * 1024 * 1024 },
      (error, value) => error ? reject(error) : resolve(value));
  });
  const validPassword = timingSafeEqual(derived, Buffer.from(expected, "hex"));
  const validUsername = equalText(username, config.username);
  return validPassword && validUsername;
}
export function reserveLoginAttempt() {
  const db = getDatabase();
  return db.transaction(() => {
    const now = Date.now();
    const guard = db.prepare("SELECT started_at,attempts FROM login_guard WHERE id=1").get() as { started_at: number; attempts: number } | undefined;
    if (!guard || now - guard.started_at >= 15 * 60000) {
      db.prepare("INSERT OR REPLACE INTO login_guard VALUES(1,?,1)").run(now);
      return 0;
    }
    if (guard.attempts >= 8) return Math.ceil((guard.started_at + 15 * 60000 - now) / 1000);
    db.prepare("UPDATE login_guard SET attempts=attempts+1 WHERE id=1").run();
    return 0;
  })();
}
const tokenHash = (token: string, config: AdminConfig) => createHmac("sha256", config.secret).update(token).digest("hex");
const version = (config: AdminConfig) => createHash("sha256").update(config.username + config.passwordHash).digest("hex");
export function createSession(config: AdminConfig) {
  const token = randomBytes(32).toString("hex");
  const now = Date.now();
  const db = getDatabase();
  db.transaction(() => {
    db.prepare("DELETE FROM login_guard").run();
    db.prepare("DELETE FROM admin_sessions WHERE token_hash NOT IN (SELECT token_hash FROM admin_sessions ORDER BY created_at DESC LIMIT 4)").run();
    db.prepare("INSERT INTO admin_sessions VALUES(?,?,?,?,?)").run(tokenHash(token, config), version(config), now, now, now + sessionSeconds * 1000);
  })();
  return token;
}
export function validSession(token: string | undefined, config: AdminConfig) {
  if (!token || !/^[a-f0-9]{64}$/.test(token)) return false;
  const db = getDatabase();
  const hash = tokenHash(token, config);
  const row = db.prepare("SELECT version,last_seen,expires_at FROM admin_sessions WHERE token_hash=?").get(hash) as { version: string; last_seen: number; expires_at: number } | undefined;
  const now = Date.now();
  if (!row || !equalText(row.version, version(config)) || row.expires_at <= now || row.last_seen + idleMilliseconds <= now) return false;
  if (now - row.last_seen > 60000) db.prepare("UPDATE admin_sessions SET last_seen=? WHERE token_hash=?").run(now, hash);
  return true;
}
export function revokeSession(token: string | undefined, config: AdminConfig) {
  if (token && /^[a-f0-9]{64}$/.test(token)) getDatabase().prepare("DELETE FROM admin_sessions WHERE token_hash=?").run(tokenHash(token, config));
}
export async function limitedBody(request: Request, max: number) {
  if (Number(request.headers.get("content-length")) > max) throw new Error("Body too large");
  const reader = request.body?.getReader();
  if (!reader) return "";
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > max) { await reader.cancel(); throw new Error("Body too large"); }
    chunks.push(value);
  }
  return Buffer.concat(chunks).toString("utf8");
}
