const fs = require("node:fs");
const assert = require("node:assert/strict");
const ts = require("typescript");
function load(file) { const exports={}; new Function("exports",ts.transpileModule(fs.readFileSync(file,"utf8"),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText)(exports); return exports; }
const {mobileScenes}=load("src/lib/workshop/mobile-scenes.ts");
const {sectionIds,sectionHref}=load("src/lib/workshop/sections.ts");
assert.deepEqual(mobileScenes.map(scene=>scene.id),["services","projects","process","blog","research","experience","contact"],"requested page order");
assert.equal(new Set(mobileScenes.map(s=>s.id)).size,mobileScenes.length);
assert.deepEqual(new Set(["about",...mobileScenes.map(s=>s.id)]),new Set(sectionIds),"mobile covers every shared destination");
for(const scene of mobileScenes){for(const locale of ["ru","en"]){assert.ok(scene.title[locale]&&scene.description[locale]);assert.equal(sectionHref(scene.id,locale),`/${locale}/${scene.id}`);}}
const art=JSON.parse(fs.readFileSync("src/lib/workshop/mobile-scene-art.json","utf8"));
assert.deepEqual(new Set(Object.keys(art)),new Set(sectionIds),"every carousel page has artwork");
for(const asset of Object.values(art)){if(fs.existsSync(asset.master))assert.ok(fs.statSync(asset.master).size>0);for(const file of asset.files)assert.equal(fs.statSync(`public${file.src}`).size,file.bytes);}
const source=fs.readFileSync("src/components/workshop/mobile-index.tsx","utf8");
assert.match(source,/media="\(min-width: 900px\)" srcSet=\{desktopEmpty\}/,"desktop must not fetch mobile bitmaps");
assert.match(source,/loading=\{eager \? "eager" : "lazy"\}/,"below-fold art uses real lazy loading");
assert.ok(!source.includes("setTimeout")&&!source.includes("touchmove"),"no artificial reveal or scroll interception");
assert.ok(source.indexOf('<header className="mobile-workshop-header"') < source.indexOf('<div className="mobile-carousel"'),"fixed header must be outside the scroll rail");
const css=fs.readFileSync("src/components/workshop/mobile-workshop.css","utf8");
assert.match(css,/scroll-snap-type:x mandatory/,"native horizontal paging");
assert.match(source,/aria-current=\{active === index/,"pagination follows the active slide");
console.log("Mobile workshop: eight horizontal scenes, shared routes, locale coverage, lazy assets, media isolation and classic link verified.");
