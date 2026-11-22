import { adminConfig, allowedAdminRequest, limitedBody, sameOrigin } from "@/lib/server/admin-auth";
import { consumeAccessInvitation } from "@/lib/server/access-invitations";
import { readVpnSettings } from "@/lib/server/vpn-settings";
import { renderInvitationGate, renderInvitationUsed, renderVpnPage } from "@/lib/server/vpn-page";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
// Native form POSTs need a non-null Origin. Only the origin can leave this page.
const privateHeaders = { "Cache-Control": "private, no-store, max-age=0", "X-Robots-Tag": "noindex, nofollow, noarchive", "Referrer-Policy": "strict-origin", "X-Content-Type-Options": "nosniff", "X-Frame-Options": "DENY" };
function page(result: { html: string; csp: string }, status = 200) {
  return new Response(result.html, { status, headers: { ...privateHeaders, "Content-Type": "text/html; charset=utf-8", "Content-Security-Policy": result.csp } });
}
export async function GET(request: Request) {
  const config = adminConfig();
  if (!config || !allowedAdminRequest(request.headers, config)) return new Response(null, { status: 404, headers: privateHeaders });
  const settings = readVpnSettings();
  if (!settings.enabled) return new Response("Страница временно недоступна.", { status: 503, headers: privateHeaders });
  // GET and link previews never redeem an invitation or disclose the subscription.
  return page(renderInvitationGate(settings.title));
}
export async function POST(request: Request) {
  const config = adminConfig();
  if (!config || !allowedAdminRequest(request.headers, config)) return new Response(null, { status: 404, headers: privateHeaders });
  if (!sameOrigin(request.headers, config)) return new Response(null, { status: 403, headers: privateHeaders });
  if (!request.headers.get("content-type")?.startsWith("application/x-www-form-urlencoded")) return new Response(null, { status: 415, headers: privateHeaders });
  const settings = readVpnSettings();
  if (!settings.enabled) return new Response("Страница временно недоступна.", { status: 503, headers: privateHeaders });
  let subscription: string | null = null;
  try {
    const form = new URLSearchParams(await limitedBody(request, 512));
    subscription = consumeAccessInvitation(form.get("invite") || "", settings.subscriptionUrl);
  } catch { return new Response(null, { status: 400, headers: privateHeaders }); }
  if (!subscription) return page(renderInvitationUsed(settings.title), 410);
  return page(renderVpnPage({ ...settings, subscriptionUrl: subscription }));
}
