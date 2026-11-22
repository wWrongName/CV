export async function GET() {
  return new Response(null, { status: 308, headers: { Location: "/connect", "Cache-Control": "no-store" } });
}
