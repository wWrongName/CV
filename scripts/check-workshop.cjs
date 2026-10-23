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
const { desktopObjects } = load("src/lib/workshop/scene.ts");
assert.deepEqual(new Set(desktopObjects.map(object => object.id)), new Set(sectionIds));
const assets = JSON.parse(fs.readFileSync("src/lib/workshop/assets.json", "utf8"));
for (const object of desktopObjects) {
  assert.ok(assets[object.art], `missing art for ${object.id}`);
  assert.ok(object.x > 0 && object.x < 100 && object.y > 0 && object.y < 100);
}
for (const asset of Object.values(assets)) for (const file of asset.files) {
  assert.ok(fs.statSync(path.join("public", file.src)).size > 0, `asset file ${file.src} exists`);
}
const edgeTiles = JSON.parse(fs.readFileSync("src/lib/workshop/environment-tiles.json", "utf8"));
assert.equal(edgeTiles.length, 9);
assert.equal(new Set(edgeTiles.map(tile => `${tile.col}:${tile.row}`)).size, 9);
for (const tile of edgeTiles) {
  assert.equal(tile.width, tile.masterRect.width, `${tile.id}: detail uses native master pixels`);
  assert.equal(tile.height, tile.masterRect.height, `${tile.id}: detail uses native master pixels`);
  assert.ok([tile.x,tile.y,tile.worldWidth,tile.worldHeight].every(Number.isFinite));
  assert.ok(fs.statSync(path.join("public", tile.file.src)).size > 0);
}
for (const name of ["universe", "resume-document", "research-document"]) {
  const source = fs.readFileSync(`src/components/${name}.tsx`, "utf8");
  assert.ok(!source.includes('`/${locale}'), `${name}: classic links stay within classic`);
}
const reactions = JSON.parse(fs.readFileSync("src/lib/workshop/reactions.json", "utf8"));
assert.deepEqual(new Set(Object.keys(reactions)), new Set(sectionIds), "every section and contacts have their own pose");
for (const [id, frame] of Object.entries(reactions)) {
  assert.ok(frame.asset.alpha && frame.asset.files.length === 2, `${id}: transparent responsive pose`);
  assert.ok(frame.width > 0 && frame.x - frame.width / 2 >= 0 && frame.x + frame.width / 2 <= 100, `${id}: pose stays inside stage`);
  for (const file of frame.asset.files) assert.ok(fs.statSync(path.join("public", file.src)).size > 0);
}
const furniture = JSON.parse(fs.readFileSync("src/lib/workshop/furniture.json", "utf8"));
for (const id of ["counter", "shelves-left", "shelves-right", "stool", "luggage", "plant-left", "plant-right", "lamp-pendant", "lamp-bulb", "lamp-desk", "desk-accessories"]) {
  assert.ok(furniture.some(layer => layer.id === id), `${id}: furniture/decor must be a separate layer`);
}
for (const layer of furniture) {
  assert.ok(Math.abs((layer.width * 1.5 / layer.height) - layer.nativeWidth / layer.nativeHeight) < .001, `${layer.id}: furniture keeps native aspect ratio`);
  for (const file of layer.files) assert.ok(fs.statSync(path.join("public", file.src)).size > 0);
}
assert.ok(furniture.length >= 34, "reference composition retains separate small props");
const css = fs.readFileSync("src/components/workshop/workshop.css", "utf8");
assert.ok(!css.includes("filter:drop-shadow(0 0 2px"), "hover cannot add the old artwork glow");
assert.match(css, /height:100dvh;overflow:clip;isolation:isolate/, "focus cannot scroll the outpainted desktop scene");
console.log(`Workshop: interactions, ${sectionIds.length} routes/${Object.keys(reactions).length} poses, ${furniture.length} separate furniture/decor layers and ${edgeTiles.length} detail tiles verified.`);

const { sampleBreath, sampleBlink } = load("src/lib/workshop/motion-timing.ts");
const motion = JSON.parse(fs.readFileSync("src/lib/workshop/default-motion.json", "utf8"));
assert.equal(motion.position, "default");
const breathPeriod = motion.breath.durationsMs.reduce((a, b) => a + b, 0);
const blinkPeriod = motion.blink.intervalsMs.reduce((a, b) => a + b + motion.blink.durationMs, 0);
for (let ms = 0; ms < Math.max(breathPeriod, blinkPeriod) * 2; ms += 17) {
  const breath = sampleBreath(ms, motion.breath.durationsMs);
  const blink = sampleBlink(ms, motion.blink.intervalsMs, motion.blink.durationMs);
  assert.ok(breath >= 0 && breath <= 1, "breath remains within its local deformation range");
  assert.ok(blink >= 0 && blink <= 1, "eyelid frame opacity stays bounded");
}
assert.equal(sampleBreath(0, motion.breath.durationsMs), 0);
assert.equal(sampleBreath(breathPeriod, motion.breath.durationsMs), 0, "breath loop joins without a jump");
assert.equal(sampleBlink(motion.blink.intervalsMs[0] + 70, motion.blink.intervalsMs, motion.blink.durationMs), 1, "blink reaches its closed frame");
assert.equal(sampleBlink(motion.blink.intervalsMs[0] + motion.blink.durationMs, motion.blink.intervalsMs, motion.blink.durationMs), 0, "blink returns to approved open eyes");
for (const src of [motion.blink.src, motion.breath.field]) assert.ok(fs.statSync(path.join("public", src)).size > 0);
assert.ok(motion.blink.x + motion.blink.width <= motion.canvas.width && motion.blink.y + motion.blink.height <= motion.canvas.height);
console.log("Default position: breathing and blink clip timing/asset bounds verified.");

const { boundedGaze, sampleHair } = load("src/lib/workshop/motion-timing.ts");
assert.deepEqual(boundedGaze(0, 0, 10, 6), { x: 0, y: 0 });
assert.ok(boundedGaze(-2, 0, 10, 6).x < 0 && boundedGaze(2, 0, 10, 6).x > 0, "gaze follows pointer direction");
for (const [x, y] of [[100, 100], [-100, -100], [1, -4], [0, 2]]) {
  const gaze = boundedGaze(x, y, motion.gaze.maxX, motion.gaze.maxY);
  assert.ok(Math.hypot(gaze.x / motion.gaze.maxX, gaze.y / motion.gaze.maxY) <= 1.000001, "diagonal gaze stays inside the eye movement ellipse");
}
for (let ms = 0; ms < 30000; ms += 31) assert.ok(Math.abs(sampleHair(ms)) <= .9, "hair sway remains bounded");
for (const src of [motion.hair.field, motion.gaze.whites, motion.gaze.irises]) assert.ok(fs.statSync(path.join("public", src)).size > 0);
assert.equal(motion.gaze.openings.length, 2, "each eye clips its moving iris to a fixed opening");
console.log("Default position: bounded pointer gaze and independent hair sway verified.");

const servicesMotion = JSON.parse(fs.readFileSync("src/lib/workshop/services-motion.json", "utf8"));
assert.equal(servicesMotion.baseWidth, reactions.services.asset.width, "expanded action canvas keeps original body scale");
assert.equal(servicesMotion.canvas.height, reactions.services.asset.height, "standing action keeps the approved height");
assert.equal(servicesMotion.gesture.mode, "wipe-glass-mesh");
for (const file of servicesMotion.gesture.image.files) assert.ok(fs.statSync(path.join("public", file.src)).size > 0);
assert.ok(servicesMotion.gesture.armOutline.length > 3, "one shared mesh defines the arm influence, without cutout seams");
assert.ok(servicesMotion.gesture.angleDegrees <= 5, "glass wiping stays a small elbow rotation");
console.log("Solutions position: registered gesture frames, timing, motion assets and original body scale verified.");

const projectsMotion = JSON.parse(fs.readFileSync("src/lib/workshop/projects-motion.json", "utf8"));
assert.equal(projectsMotion.canvas.width, reactions.projects.asset.width);
assert.equal(projectsMotion.canvas.height, reactions.projects.asset.height);
assert.ok(projectsMotion.folder.angleDegrees <= 2, "folder holding adjustment stays small");
for (const [x, y] of projectsMotion.folder.outline) assert.ok(x >= 0 && x <= projectsMotion.canvas.width && y >= 0 && y <= projectsMotion.canvas.height);
assert.ok(fs.statSync(path.join("public", projectsMotion.blink.src)).size > 0);
assert.match(reactions.projects.asset.master, /neutral/);
assert.match(assets.character.master, /neutral/);
console.log("Cases position: original geometry, shared folder/hand motion and neutral-face artwork verified.");

const { sampleHeadTilt } = load("src/lib/workshop/motion-timing.ts");
assert.equal(sampleHeadTilt(0), 0);
assert.ok(sampleHeadTilt(2000) > 0);
assert.ok(sampleHeadTilt(7000) < 0, "head gently changes direction without long holds");
for (let ms = 0; ms < 60000; ms += 31) assert.ok(Math.abs(sampleHeadTilt(ms)) <= 1, "head sway stays within its approved amplitude");
assert.ok(projectsMotion.head.angleDegrees <= 3);

const { visiblePosition } = load("src/lib/workshop/presentation.ts");
assert.equal(visiblePosition("about", null, {}), null, "first cold sprite keeps the initial seat until decoded");
assert.equal(visiblePosition("blog", "about", {about:true}), "about", "cold position cannot flash the default seat");
assert.equal(visiblePosition("research", "about", {about:true,blog:true}), "about", "a stale decode cannot replace the current pending target");
assert.equal(visiblePosition("research", "about", {about:true,research:true}), "research", "decoded target replaces the prior position directly");
assert.equal(visiblePosition(null, "about", {about:true}), null, "an explicit return to the default seat remains immediate");
console.log("Position loading: cold switches retain the previous figure, stale loads cannot interrupt and explicit rest remains immediate.");
