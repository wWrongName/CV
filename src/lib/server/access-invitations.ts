import "server-only";
import { createHash, randomBytes } from "node:crypto";
import { getDatabase } from "./storage";

export type AccessInvitation = { id: string; label: string; created_at: number; used_at: number | null; revoked_at: number | null };
function database() {
  const db = getDatabase();
  db.exec(`CREATE TABLE IF NOT EXISTS access_invitations (
    token_hash TEXT PRIMARY KEY, label TEXT NOT NULL, subscription_url TEXT NOT NULL,
    created_at INTEGER NOT NULL, used_at INTEGER, revoked_at INTEGER
  )`);
  return db;
}
const digest = (token: string) => createHash("sha256").update(token).digest("hex");
export const validInvitationToken = (token: string) => /^[a-zA-Z0-9_-]{43}$/.test(token);
export function listAccessInvitations(): AccessInvitation[] {
  return database().prepare("SELECT token_hash AS id,label,created_at,used_at,revoked_at FROM access_invitations ORDER BY created_at DESC LIMIT 50").all() as AccessInvitation[];
}
export function createAccessInvitation(label: string, subscriptionUrl: string) {
  if (label.length > 80 || subscriptionUrl.length > 4000) throw new Error("Слишком длинное значение.");
  if (subscriptionUrl) {
    const url = new URL(subscriptionUrl);
    if (url.protocol !== "https:" || url.username || url.password || url.hash) throw new Error("Нужна HTTPS-ссылка подписки.");
    subscriptionUrl = url.href;
  }
  const token = randomBytes(32).toString("base64url");
  database().prepare("INSERT INTO access_invitations(token_hash,label,subscription_url,created_at) VALUES(?,?,?,?)").run(digest(token), label, subscriptionUrl, Date.now());
  return token;
}
export function revokeAccessInvitation(id: string) {
  if (!/^[a-f0-9]{64}$/.test(id)) throw new Error("Неверное приглашение.");
  database().prepare("UPDATE access_invitations SET revoked_at=? WHERE token_hash=? AND used_at IS NULL AND revoked_at IS NULL").run(Date.now(), id);
}
export function consumeAccessInvitation(token: string, fallbackSubscription: string): string | null {
  if (!validInvitationToken(token)) return null;
  // A single conditional UPDATE gives exactly one winner, including across processes.
  const row = database().prepare(`UPDATE access_invitations SET used_at=?
    WHERE token_hash=? AND used_at IS NULL AND revoked_at IS NULL
      AND (subscription_url<>'' OR ?<>'') RETURNING subscription_url`).get(Date.now(), digest(token), fallbackSubscription) as { subscription_url: string } | undefined;
  return row ? row.subscription_url || fallbackSubscription : null;
}
