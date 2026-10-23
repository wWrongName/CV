const fs = require("node:fs");
const assert = require("node:assert/strict");
const ts = require("typescript");
function load(file) {
  const exports = {};
  const code = ts.transpileModule(fs.readFileSync(file, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  new Function("exports", code)(exports);
  return exports;
}
const { projectDiagrams } = load("src/lib/workshop/project-diagrams.ts");
const { journeys } = load("src/lib/journeys.ts");
const english = JSON.parse(fs.readFileSync("src/lib/journeys.en.json", "utf8"));
assert.deepEqual(Object.keys(projectDiagrams).sort(), journeys.map(p => p.id).sort());
for (const localeProjects of [journeys, english]) for (const project of localeProjects) {
  const diagram = projectDiagrams[project.id];
  const ids = new Set(project.nodes.map(node => node.id));
  const seen = new Set();
  assert.equal(new Set(diagram.routes.map(route => route.id)).size, diagram.routes.length);
  for (const route of diagram.routes) {
    assert.ok(route.steps.length >= 2 && route.steps.length <= 3, `${project.id}/${route.id}: readable route`);
    assert.equal(route.relations.length, route.steps.length - 1, `${project.id}/${route.id}: each adjacent pair has one explicit relationship`);
    for (const step of route.steps) {
      assert.ok(ids.has(step.node), `${project.id}: unknown component ${step.node}`);
      seen.add(step.node);
      for (const label of [step.detail, step.label].filter(Boolean)) for (const locale of ["ru", "en"]) assert.ok(label[locale]?.trim());
    }
    for (const copy of [route.title, ...route.relations.map(edge => edge.label)]) for (const locale of ["ru", "en"]) assert.ok(copy[locale]?.trim(), `${project.id}: every label is translated`);
  }
  assert.deepEqual(seen, ids, `${project.id}: no original component is lost`);
}
const route = (project, id) => projectDiagrams[project].routes.find(route => route.id === id);
const path = (project, id) => route(project, id).steps.map(step => step.node);
const edges = project => projectDiagrams[project].routes.flatMap(route => route.relations.map((relation, i) => [route.steps[i].node, route.steps[i+1].node]));
assert.deepEqual(path("paas", "gitops"), ["git", "argo", "kube"], "GitOps must include its source of desired state");
assert.ok(!edges("operations").some(([a,b]) => a === "sentry" && b === "grafana"), "Sentry is not a prerequisite for all monitoring data");
assert.deepEqual(path("operations", "observability"), ["kube", "grafana"]);
assert.deepEqual(path("operations", "errors"), ["kube", "sentry"]);
assert.equal(route("operations", "access").relations[0].kind, "context", "access tooling is a functional relationship, not an invented single network hop");
assert.deepEqual(path("delivery-platform", "quality"), ["ci", "quality", "ci"], "analysis returns to pipeline instead of becoming a deployer");
assert.deepEqual(path("delivery-platform", "deployment"), ["ci", "helm", "runtime"]);
assert.deepEqual(path("llmops", "requests"), ["app", "gateway", "inference"]);
assert.deepEqual(path("llmops", "release"), ["config", "inference"]);
assert.ok(!edges("llmops").some(([a,b]) => a === "eval" && b === "inference"), "evaluation tooling does not deploy inference");
assert.deepEqual(path("resilience", "traffic"), ["traffic", "protection", "app"]);
assert.deepEqual(path("resilience", "response"), ["monitor", "runbook", "api"], "response must reach the prepared actions");
assert.deepEqual(path("resilience", "control"), ["api", "protection"], "actions must reach the protection service");
assert.match(route("resilience", "response").relations[1].label.en, /Engineer/, "do not invent automatic alert-to-script execution");
console.log(`Project diagrams: ${journeys.length} cases, RU/EN component coverage, labelled routes and semantic regressions verified.`);

const { caseStories } = load("src/lib/workshop/case-stories.ts");
assert.deepEqual(Object.keys(caseStories).sort(), journeys.map(p => p.id).sort());
for (const [id, story] of Object.entries(caseStories)) {
  assert.equal(story.chapters.length, 4, `${id}: existing four chapter anchors remain valid`);
  for (const locale of ["ru", "en"]) {
    for (const copy of [story.title, story.summary, ...story.chapters.flatMap(chapter => [chapter.label,chapter.title,chapter.text,...(chapter.steps || []),...(chapter.points || [])])]) assert.ok(copy[locale]?.trim(), `${id}: complete reader-facing copy`);
  }
  assert.equal(story.chapters[2].steps.length, 3, `${id}: the reader gets a concrete workflow`);
  assert.ok(story.chapters[3].points.length >= 3, `${id}: explicit deliverables or pilot criteria`);
}
assert.match(caseStories.llmops.context.en, /Reference architecture/);
assert.match(caseStories.llmops.chapters[3].text.en, /must be validated in a pilot/);
const resume = JSON.parse(fs.readFileSync("src/lib/resume.json", "utf8"));
const deploymentResult = resume.jobs.find(job => job.id === "zoloto585").sections[0].items[0].impact;
assert.match(deploymentResult, /примерно в 3 раза/, "deployment improvement is supported by the published resume");
assert.match(caseStories.operations.chapters[3].title.ru, /примерно в три раза/);
console.log("Case narratives: five source-backed stories, four stable chapters, workflows, outcomes and reference-architecture caveats checked.");
