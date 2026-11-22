import { NextRequest } from "next/server";
import { adminConfig, allowedAdminRequest, limitedBody, sameOrigin, sessionCookie, validSession } from "@/lib/server/admin-auth";
import { createAccessInvitation, revokeAccessInvitation } from "@/lib/server/access-invitations";
import { readVpnSettings } from "@/lib/server/vpn-settings";

export const runtime = "nodejs";
const headers = { "Cache-Control": "private, no-store", "Referrer-Policy": "no-referrer" };
export async function POST(request: NextRequest, { params }: { params: Promise<{ key: string }> }) {
  const config = adminConfig();
  if (!config || (await params).key !== config.key || !allowedAdminRequest(request.headers, config)) return new Response(null, { status: 404, headers });
  if (!sameOrigin(request.headers, config)) return new Response(null, { status: 403, headers });
  if (!validSession(request.cookies.get(sessionCookie)?.value, config)) return Response.json({ error: "Войдите в админку заново." }, { status: 401, headers });
  if (!request.headers.get("content-type")?.startsWith("application/x-www-form-urlencoded")) return new Response(null, { status: 415, headers });
  try {
    const form = new URLSearchParams(await limitedBody(request, 6000));
    if (form.get("action") === "revoke") {
      revokeAccessInvitation(form.get("id") || "");
      return Response.json({ ok: true }, { headers });
    }
    if (form.get("action") !== "create") throw new Error();
    const settings = readVpnSettings();
    if (!settings.enabled) return Response.json({ error: "Сначала включите страницу подключения." }, { status: 400, headers });
    const subscription = (form.get("subscriptionUrl") || "").trim();
    if (!subscription && !settings.subscriptionUrl) return Response.json({ error: "Укажите ссылку подписки." }, { status: 400, headers });
    const token = createAccessInvitation((form.get("label") || "").trim(), subscription);
    const url = new URL("/connect", config.origin); url.hash = `invite=${token}`;
    return Response.json({ url: url.href }, { status: 201, headers });
  } catch { return Response.json({ error: "Проверьте имя и HTTPS-ссылку подписки." }, { status: 400, headers }); }
}
