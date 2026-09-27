import { eventValues, recordEvent, type EventKind } from "@/lib/server/storage";
import { limitedBody } from "@/lib/server/admin-auth";

export const runtime = "nodejs";
let minute = 0;
let received = 0;
export async function POST(request: Request) {
  if (process.env.ANALYTICS_ENABLED !== "true") return new Response(null, { status: 204 });
  const current = Math.floor(Date.now() / 60000);
  if (current !== minute) { minute = current; received = 0; }
  if (++received > 3000) return new Response(null, { status: 429 });
  try {
    const origin = request.headers.get("origin");
    if (!origin || new URL(origin).host !== request.headers.get("host")) return new Response(null, { status: 403 });
    if (!request.headers.get("content-type")?.startsWith("application/json")) return new Response(null, { status: 415 });
    const body = JSON.parse(await limitedBody(request, 512)) as { kind?: unknown; value?: unknown };
    if (typeof body.kind !== "string" || typeof body.value !== "string" || !Object.hasOwn(eventValues, body.kind)) return new Response(null, { status: 400 });
    const kind = body.kind as EventKind;
    if (!(eventValues[kind] as readonly string[]).includes(body.value)) return new Response(null, { status: 400 });
    recordEvent(kind, body.value);
    return new Response(null, { status: 204, headers: { "Cache-Control": "no-store" } });
  } catch { return new Response(null, { status: 400 }); }
}
