const fs = require("node:fs");
const assert = require("node:assert/strict");
const ts = require("typescript");
function load(path) {
  const exports = {};
  const code = ts.transpileModule(fs.readFileSync(path, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  new Function("exports", code)(exports);
  return exports;
}
const { journeys } = load("src/lib/journeys.ts");
const { advanceJourney } = load("src/lib/navigation.ts");
const counts = journeys.map(j => j.chapters.length);
const positions = journeys.flatMap((j, project) => j.chapters.map((_, step) => ({ project, step })));
let position = { project: 0, step: -1 };
for (const expected of positions) {
  position = advanceJourney(position, 1, counts);
  assert.deepEqual(position, expected, "forward traversal must visit every stage, including project boundaries");
}
assert.deepEqual(advanceJourney(position, 1, counts), positions.at(-1), "last stage stops forward navigation");
position = positions.at(-1);
for (const expected of [...positions].reverse().slice(1)) {
  position = advanceJourney(position, -1, counts);
  assert.deepEqual(position, expected, "backward traversal must cross project boundaries");
}
assert.deepEqual(advanceJourney(position, -1, counts), positions[0], "first stage stops backward navigation");
for (let project = 0; project < journeys.length; project++) {
  assert.deepEqual(advanceJourney({ project, step: -1 }, 1, counts), { project, step: 0 }, "map starts the selected project");
}
assert.deepEqual(advanceJourney({ project: 0, step: 1 }, 1, [2, 5]), { project: 1, step: 0 });
assert.deepEqual(advanceJourney({ project: 1, step: 0 }, -1, [2, 5]), { project: 0, step: 1 });
assert.deepEqual(advanceJourney({ project: 0, step: -1 }, -1, counts), { project: 0, step: -1 });
console.log(`Continuous navigation verified across ${positions.length} stages and ${journeys.length} projects.`);
