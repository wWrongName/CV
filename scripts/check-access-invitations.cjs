const fs = require("node:fs");
const assert = require("node:assert/strict");
const ts = require("typescript");
const Database = require("better-sqlite3");
const db = new Database(":memory:");
function load(path, overrides = {}) {
  const exports = {};
  const code = ts.transpileModule(fs.readFileSync(path, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const dependency = name => overrides[name] || (name === "server-only" ? {} : name === "./storage" ? { getDatabase: () => db } : require(name));
  new Function("exports", "require", code)(exports, dependency);
  return exports;
}
const invitations = load("src/lib/server/access-invitations.ts");
const fallback = "https://example.invalid/sub/default";
const personal = "https://example.invalid/sub/personal";
const first = invitations.createAccessInvitation("First", "");
assert.match(first, /^[a-zA-Z0-9_-]{43}$/);
assert.ok(!JSON.stringify(db.prepare("SELECT * FROM access_invitations").all()).includes(first), "Only token hashes may be stored");
assert.equal(invitations.consumeAccessInvitation(first, fallback), fallback);
assert.equal(invitations.consumeAccessInvitation(first, fallback), null, "A consumed invitation cannot reopen access");
const second = invitations.createAccessInvitation("Second", personal);
assert.equal(invitations.consumeAccessInvitation(second, fallback), personal, "Personal subscriptions take precedence");
const revoked = invitations.createAccessInvitation("Revoked", "");
invitations.revokeAccessInvitation(invitations.listAccessInvitations().find(row => row.label === "Revoked").id);
assert.equal(invitations.consumeAccessInvitation(revoked, fallback), null);
const missing = invitations.createAccessInvitation("Missing configuration", "");
assert.equal(invitations.consumeAccessInvitation(missing, ""), null);
assert.equal(invitations.consumeAccessInvitation(missing, fallback), fallback, "A missing subscription must not burn the invitation");
assert.equal(invitations.consumeAccessInvitation("invalid", fallback), null);
assert.throws(() => invitations.createAccessInvitation("Unsafe URL", "javascript:alert(1)"));
const { renderVpnPage, renderInvitationGate, renderInvitationUsed } = load("src/lib/server/vpn-page.ts");
const settings = { title: "WWN <test>", downloadUrl: "https://github.com/Happ-proxy/happ-android/releases/latest", installText: "Install", connectText: "Connect", subscriptionUrl: personal + "?x=</textarea><script>alert(1)</script>" };
const page = renderVpnPage(settings);
assert.ok(page.html.includes("WWN &lt;test&gt;"));
assert.ok(!page.html.includes("</textarea><script>alert"));
assert.ok(!renderInvitationGate(settings.title).html.includes(personal));
assert.ok(!renderInvitationUsed(settings.title).html.includes(personal));
assert.ok(page.csp.includes("frame-ancestors 'none'"));
assert.ok(!page.html.includes("localStorage"));
(async () => {
  const routeSettings = { ...settings, enabled: true, subscriptionUrl: fallback };
  const handler = load("src/app/connect/route.ts", {
    "@/lib/server/admin-auth": {
      adminConfig: () => ({ origin: "https://example.invalid" }),
      allowedAdminRequest: () => true,
      sameOrigin: requestHeaders => requestHeaders.get("origin") === "https://example.invalid",
      limitedBody: request => request.text(),
    },
    "@/lib/server/access-invitations": invitations,
    "@/lib/server/vpn-settings": { readVpnSettings: () => routeSettings },
    "@/lib/server/vpn-page": { renderVpnPage, renderInvitationGate, renderInvitationUsed },
  });
  const token = invitations.createAccessInvitation("Browser flow", personal);
  let response = await handler.GET(new Request("https://example.invalid/connect"));
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("referrer-policy"), "strict-origin", "Native form POSTs must preserve their Origin for CSRF validation");
  assert.ok(!(await response.text()).includes(personal), "Previews cannot disclose access");
  const post = origin => handler.POST(new Request("https://example.invalid/connect", { method: "POST", headers: { origin, "content-type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ invite: token }) }));
  assert.equal((await post("https://other.invalid")).status, 403);
  response = await post("https://example.invalid");
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("set-cookie"), null, "No session may survive redemption");
  assert.ok(response.headers.get("cache-control").includes("no-store"));
  assert.ok((await response.text()).includes(personal));
  assert.equal((await post("https://example.invalid")).status, 410);
  db.close();
  console.log("One-use access: hash-only tokens, replay rejection, revocation, safe previews, native form Origin and no session cookies verified.");
})().catch(error => { console.error(error); process.exitCode = 1; });
