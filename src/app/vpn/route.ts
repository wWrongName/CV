import { createHash } from "node:crypto";
import { adminConfig, allowedAdminRequest, verifyCredentials } from "@/lib/server/admin-auth";
import { readVpnSettings } from "@/lib/server/vpn-settings";
import { renderVpnPage } from "@/lib/server/vpn-page";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const successful = new Map<string, number>();
const failed = new Map<string, { count: number; until: number }>();
const privateHeaders = { "Cache-Control": "private, no-store, max-age=0", "X-Robots-Tag": "noindex, nofollow, noarchive", "Referrer-Policy": "no-referrer", "X-Content-Type-Options": "nosniff", "X-Frame-Options": "DENY" };
export async function GET(request: Request) {
  const config = adminConfig();
  if (!config || !allowedAdminRequest(request.headers, config)) return new Response(null, { status: 404, headers: privateHeaders });
  const settings = readVpnSettings();
  if (!settings.enabled || !settings.passwordHash) return new Response("Страница временно недоступна.", { status: 503, headers: privateHeaders });
  const authorization = request.headers.get("authorization") || "";
  const cachedKey = createHash("sha256").update(settings.username + settings.passwordHash + authorization).digest("hex");
  let valid = (successful.get(cachedKey) || 0) > Date.now();
  if (!valid && authorization.startsWith("Basic ") && authorization.length < 1024) {
    // Angie replaces this header; retain only an ephemeral digest for throttling.
    const source = createHash("sha256").update(request.headers.get("x-forwarded-for") || "local").digest("hex");
    const guard = failed.get(source);
    if (guard && guard.until > Date.now() && guard.count >= 20) return new Response("Повторите попытку позже.", { status: 429, headers: { ...privateHeaders, "Retry-After": "60" } });
    const text = Buffer.from(authorization.slice(6), "base64").toString("utf8");
    const colon = text.indexOf(":");
    if (colon > 0 && colon <= 64 && text.length <= 194) valid = await verifyCredentials(text.slice(0, colon), text.slice(colon + 1), { username: settings.username, passwordHash: settings.passwordHash });
    if (valid) {
      if (successful.size >= 256) successful.clear();
      successful.set(cachedKey, Date.now() + 5 * 60000); failed.delete(source);
    } else {
      if (failed.size >= 2048) failed.clear();
      failed.set(source, { count: guard && guard.until > Date.now() ? guard.count + 1 : 1, until: Date.now() + 60000 });
    }
  }
  if (!valid) return new Response("Требуются логин и пароль.", { status: 401, headers: { ...privateHeaders, "WWW-Authenticate": 'Basic realm="WWN VPN", charset="UTF-8"' } });
  const { html, csp } = renderVpnPage(settings);
  return new Response(html, { headers: { ...privateHeaders, "Content-Type": "text/html; charset=utf-8", "Content-Security-Policy": csp } });
}
