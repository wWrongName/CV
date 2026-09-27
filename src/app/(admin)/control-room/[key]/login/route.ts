import { NextRequest, NextResponse } from "next/server";
import { adminConfig, sameOrigin, limitedBody, reserveLoginAttempt, verifyCredentials, createSession, sessionCookie, sessionSeconds, production } from "@/lib/server/admin-auth";

export const runtime = "nodejs";
export async function POST(request: NextRequest, { params }: { params: Promise<{ key: string }> }) {
  const config = adminConfig();
  if (!config || (await params).key !== config.key) return new Response(null, { status: 404 });
  if (!sameOrigin(request.headers, config)) return new Response(null, { status: 403 });
  if (!request.headers.get("content-type")?.startsWith("application/x-www-form-urlencoded")) return new Response(null, { status: 415 });
  let form: URLSearchParams;
  try { form = new URLSearchParams(await limitedBody(request, 4096)); } catch { return new Response(null, { status: 413 }); }
  const username = form.get("username") || "";
  const password = form.get("password") || "";
  if (username.length > 64 || password.length > 128) return new Response(null, { status: 400 });
  const retry = reserveLoginAttempt();
  if (retry) return new Response("Слишком много попыток входа. Попробуйте через 15 минут.", { status: 429, headers: { "Retry-After": String(retry) } });
  const target = new URL(`/control-room/${config.key}`, config.origin);
  if (!await verifyCredentials(username, password, config)) {
    target.searchParams.set("error", "credentials");
    return NextResponse.redirect(target, 303);
  }
  const response = NextResponse.redirect(target, 303);
  response.cookies.set(sessionCookie, createSession(config), { httpOnly: true, secure: production, sameSite: "strict", path: "/", maxAge: sessionSeconds });
  return response;
}
