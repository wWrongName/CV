import { NextRequest, NextResponse } from "next/server";
import { adminConfig, allowedAdminRequest, limitedBody, sameOrigin, sessionCookie, validSession } from "@/lib/server/admin-auth";
import { readVpnSettings, saveVpnSettings, settingsFromForm } from "@/lib/server/vpn-settings";

export const runtime = "nodejs";
export async function POST(request: NextRequest, { params }: { params: Promise<{ key: string }> }) {
  const config = adminConfig();
  if (!config || (await params).key !== config.key || !allowedAdminRequest(request.headers, config)) return new Response(null, { status: 404 });
  if (!sameOrigin(request.headers, config)) return new Response(null, { status: 403 });
  if (!validSession(request.cookies.get(sessionCookie)?.value, config)) return new Response(null, { status: 401 });
  if (!request.headers.get("content-type")?.startsWith("application/x-www-form-urlencoded")) return new Response(null, { status: 415 });
  const target = new URL(`/control-room/${config.key}`, config.origin);
  try {
    const form = new URLSearchParams(await limitedBody(request, 12000));
    saveVpnSettings(await settingsFromForm(form, readVpnSettings()));
    target.searchParams.set("vpnSaved", "1");
  } catch {
    target.searchParams.set("vpnError", "Не удалось сохранить. Проверьте HTTPS-ссылки, заполнение полей и длину нового пароля (от 12 символов).");
  }
  target.hash = "vpn-settings";
  return NextResponse.redirect(target, 303);
}
