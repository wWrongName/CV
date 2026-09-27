import { NextRequest, NextResponse } from "next/server";
import { adminConfig, sameOrigin, revokeSession, sessionCookie, production } from "@/lib/server/admin-auth";

export const runtime = "nodejs";
export async function POST(request: NextRequest, { params }: { params: Promise<{ key: string }> }) {
  const config = adminConfig();
  if (!config || (await params).key !== config.key) return new Response(null, { status: 404 });
  if (!sameOrigin(request.headers, config)) return new Response(null, { status: 403 });
  revokeSession(request.cookies.get(sessionCookie)?.value, config);
  const response = NextResponse.redirect(new URL(`/control-room/${config.key}`, config.origin), 303);
  response.cookies.set(sessionCookie, "", { httpOnly: true, secure: production, sameSite: "strict", path: "/", maxAge: 0 });
  return response;
}
