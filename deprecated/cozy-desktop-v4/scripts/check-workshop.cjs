const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");
const ts = require("typescript");

function load(file) {
  const exports = {};
  const code = ts.transpileModule(fs.readFileSync(file, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  new Function("exports", code)(exports);
  return exports;
}
const { workshopReducer, initialWorkshopState } = load("src/lib/workshop/interaction.ts");
const { sectionIds, sectionFromPath, sectionHref } = load("src/lib/workshop/sections.ts");
let state = workshopReducer(initialWorkshopState, { type: "attend", target: "projects", source: "pointer" });
assert.deepEqual(state, { mode: "attending", target: "projects" });
assert.strictEqual(workshopReducer(state, { type: "leave", target: "projects" }), state, "leaving an object preserves its pose and description");
assert.strictEqual(workshopReducer(state, { type: "pointer-leave" }), state, "leaving the scene preserves the last pose");
assert.deepEqual(workshopReducer(state, { type: "attend", target: "blog", source: "pointer" }), { mode: "attending", target: "blog" }, "another object replaces the retained pose");
assert.strictEqual(workshopReducer(state, { type: "rest" }), initialWorkshopState, "returning to the seat restores the default pose");
state = workshopReducer(state, { type: "activate", target: "projects" });
assert.strictEqual(workshopReducer(state, { type: "rest" }), state, "the default seat cannot interrupt navigation");
assert.deepEqual(workshopReducer(state, { type: "attend", target: "blog", source: "pointer" }), state, "hover cannot interrupt opening");
assert.deepEqual(workshopReducer(state, { type: "leave", target: "projects" }), state, "leaving an activated object cannot cancel navigation");
state = workshopReducer(state, { type: "route-opened", target: "projects" });
assert.deepEqual(workshopReducer(state, { type: "attend", target: "services", source: "keyboard" }), state, "focus behind a panel cannot interrupt reading");
assert.deepEqual(workshopReducer(state, { type: "route-closed" }), { mode: "attending", target: "projects" }, "closing a section restores its pose");
assert.strictEqual(workshopReducer(initialWorkshopState, { type: "route-closed" }), initialWorkshopState, "initial home visit keeps the default pose");
const contactOpening = workshopReducer(initialWorkshopState, { type: "activate", target: "contact" });
assert.deepEqual(contactOpening, { mode: "opening", target: "contact" }, "contacts open a native section like other objects");
assert.deepEqual(workshopReducer(contactOpening, { type: "route-opened", target: "contact" }), { mode: "reading", target: "contact" });
assert.deepEqual(workshopReducer({ mode: "reading", target: "contact" }, { type: "route-closed" }), { mode: "attending", target: "contact" });
const keyboard = workshopReducer(initialWorkshopState, { type: "attend", target: "research", source: "keyboard" });
const pointer = workshopReducer(initialWorkshopState, { type: "attend", target: "research", source: "pointer" });
assert.deepEqual(keyboard, pointer, "keyboard and pointer address the same objects");
assert.strictEqual(workshopReducer(keyboard, { type: "leave", target: "research" }), keyboard, "blurring an object preserves the last keyboard pose");
assert.strictEqual(workshopReducer(state, { type: "pointer", x: .2, y: .8 }), state, "gaze data does not rerender the scene");

for (const locale of ["ru", "en"]) {
  assert.equal(sectionFromPath(`/${locale}`, locale), null);
  assert.equal(sectionFromPath(`/${locale}/`, locale), null);
  for (const section of sectionIds) assert.equal(sectionFromPath(sectionHref(section, locale), locale), section);
  assert.equal(sectionFromPath(`/classic/${locale}`, locale), undefined, "classic routes cannot mount the new workshop");
  assert.equal(sectionFromPath(`/${locale}/unknown`, locale), undefined);
}
assert.equal(new Set(sectionIds).size, sectionIds.length);
const poses = JSON.parse(fs.readFileSync("src/lib/workshop/studio-poses.json", "utf8"));
assert.deepEqual(new Set(Object.keys(poses)), new Set(["idle", "write", "board", "review"]));
const { sampleBreath, sampleHair } = load("src/lib/workshop/motion-timing.ts");
for (let ms=0; ms<60000; ms+=31) {
  assert.ok(sampleBreath(ms,[4100,4500,3900]) >= 0 && sampleBreath(ms,[4100,4500,3900]) <= 1);
  assert.ok(Math.abs(sampleHair(ms)) <= .9);
}
for (const source of ["src/components/workshop/studio-character.tsx", "src/components/workshop/studio-room.tsx"]) {
  const code=fs.readFileSync(source,"utf8");
  assert.ok(code.includes("prefers-reduced-motion") && code.includes("visibilitychange"));
}
console.log(`Workshop: shared navigation, ${sectionIds.length} routes, four room-specific poses and bounded motion verified.`);
