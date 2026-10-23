const fs = require("node:fs");
const assert = require("node:assert/strict");
const ts = require("typescript");
function load(file, imports = {}) {
  const exports = {};
  new Function("exports", "require", ts.transpileModule(fs.readFileSync(file, "utf8"), {compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText)(exports, name => imports[name]);
  return exports;
}
const { mobileMotion, patchOffset, motionBudget, coverTransform, cityWindowLevel, processLampLevel, resumePortraitFrame, sleepingCatScale, mobileLampItems, mobileCatItems, catItemLayout, lampItemAngle } = load("src/lib/workshop/mobile-motion.ts");
const scenes = load("src/lib/workshop/mobile-scenes.ts");
const { mobileSlideIds, mobileSlideAnchor, mobileSlideFromHash } = load("src/lib/workshop/mobile-navigation.ts", {"./mobile-scenes":scenes});
assert.deepEqual(Object.keys(mobileMotion).sort(), [...mobileSlideIds].sort());
for (let i = 0; i < mobileSlideIds.length; i++) {
  assert.equal(mobileSlideFromHash(`#${mobileSlideAnchor(i)}`), i, "language round-trip preserves each stable slide ID");
}
for (const hash of ["", "#paas", "#mobile-missing", "#mobile-contact-extra"]) assert.equal(mobileSlideFromHash(hash), 0);
for (const patches of Object.values(mobileMotion)) for (const patch of patches) {
  const [x,y,w,h] = patch.box;
  assert.ok(x >= 0 && y >= 0 && x+w <= 480 && y+h <= 1040);
  let min = Infinity, max = -Infinity;
  for (let t = 0; t < patch.period*2; t += .25) {
    for (const [u,v] of [[0,.5],[1,.5],[.5,0],[.5,1],[0,0],[1,1]]) {
      assert.deepEqual(patchOffset(patch,u,v,t),[0,0],"crop edges and physical contacts stay pinned throughout the loop");
    }
    const [dx,dy] = patchOffset(patch,.5,.5,t);
    assert.ok(Number.isFinite(dx) && Number.isFinite(dy));
    assert.ok(Math.abs(dx) <= patch.amplitude && Math.abs(dy) <= patch.amplitude);
    min = Math.min(min,dx+dy); max = Math.max(max,dx+dy);
    if (patch.kind === "spindle") assert.equal(dx,0,"fixed robot base: tool movement is axial");
  }
  assert.ok(max-min > .05,`${patch.kind} actually moves`);
  const start = patchOffset(patch,.4,.6,0), end = patchOffset(patch,.4,.6,patch.period);
  assert.ok(Math.abs(start[0]-end[0]) < 1e-8 && Math.abs(start[1]-end[1]) < 1e-8,"loops join continuously");
}
for (const width of [320,390,768]) for (const dpr of [1,2,3,4]) {
  const budget = motionBudget(width,dpr,false);
  assert.ok(budget.width <= 640 && budget.fps <= 16,"pixel and frame budgets do not grow with phone DPR");
}
assert.equal(motionBudget(390,3,true).fps,12);
for (const [width,height] of [[390,780],[360,640],[768,1024],[844,390]]) {
  const {scale,x,y} = coverTransform(width,height,1038);
  assert.ok(480*scale >= width && 1038*scale >= height,"matches full-bleed object-fit cover");
  assert.equal(x,(width-480*scale)*.5); assert.equal(y,(height-1038*scale)*.45);
}
console.log("Mobile motion: all 8 locale anchors, pinned mesh boundaries, axial robot tool, moving loops, cover alignment and phone rendering budgets verified.");

for(const scene of ["about","contact"]) {
  const sizes = scene === "about" ? [268,98] : [584,286];
  for(let t=0;t<8.6;t+=.1) {
    const box=catItemLayout(scene,...sizes,t);
    assert.ok(Math.abs(box.y+box.height-mobileCatItems[scene].bottom)<1e-9,"cat paws stay grounded");
    assert.ok(sleepingCatScale(t,scene)>=1 && sleepingCatScale(t,scene)<=1.036,"calm breathing amplitude");
  }
  const box=catItemLayout(scene,...sizes,0);
  assert.ok(Math.abs(box.width/box.height-sizes[0]/sizes[1])<1e-9,"cat sprite is never flattened");
}
assert.deepEqual(new Set(Array.from({length:60},(_,i)=>resumePortraitFrame(i/10))),new Set([0,1,2]),"three actual head-turn frames");
assert.ok(processLampLevel(0)-processLampLevel(1.15)>.6,"lamp voltage dip is perceptible");
for(let i=0;i<12;i++) {
  const levels=Array.from({length:100},(_,t)=>cityWindowLevel(t/10,i));
  assert.ok(Math.max(...levels)-Math.min(...levels)>.85,"city windows actually dim and light up");
}
assert.ok(!mobileMotion.blog.some(p=>p.kind==="paper") && !mobileMotion.research.some(p=>p.kind==="paper"),"paper stays still");
assert.ok(!Object.values(mobileMotion).flat().some(p=>p.kind==="lamp"||p.kind==="breath"||p.kind==="portrait"),"lamps, cats and portraits use independent items rather than background warps");
let itemBytes=fs.statSync("public/workshop/mobile-resume-head-v1.webp").size;
for(const [id,item] of Object.entries(mobileLampItems)) {
  for(let t=0;t<item.period;t+=.1) assert.ok(Math.abs(lampItemAngle(t,item.period,item.angle))<=Math.PI*item.angle/180+1e-9);
  for(const suffix of ["lamp-v1","lamp-plate-v1"])itemBytes+=fs.statSync(`public/workshop/mobile-${id}-${suffix}.webp`).size;
}
for(const id of Object.keys(mobileCatItems))for(const suffix of ["cat-v1",`cat-plate-${id==="contact"?"v2":"v1"}`])itemBytes+=fs.statSync(`public/workshop/mobile-${id}-${suffix}.webp`).size;
assert.ok(itemBytes<256*1024,"all small mobile motion items fit within 256KiB combined");
const tiles=JSON.parse(fs.readFileSync("src/lib/workshop/environment-tiles.json","utf8"));
assert.ok(tiles.reduce((n,t)=>n+fs.statSync(`public${t.file.src}`).size,0)<4*1024*1024,"desktop delivery background stays within 4MiB at native resolution");
console.log(`Independent mobile items: natural cat aspect/ground contact, quiet breathing, 3 head turns, visible lights, rigid lamp rotations and ${itemBytes} byte total item budget verified.`);
