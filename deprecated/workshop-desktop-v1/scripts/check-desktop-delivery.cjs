const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),ts=require('typescript');
const sharp=require('node:module').createRequire(require.resolve('next/package.json'))('sharp');
function load(file){const exports={};new Function('exports','require',ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,esModuleInterop:true}}).outputText)(exports,id=>require(path.resolve(path.dirname(file),id)));return exports;}
const {desktopImageSizes}=load('src/lib/workshop/image-sizes.ts');
for(const [w,h] of [[1280,800],[2560,1080],[900,1200],[3440,1440]])for(const width of [3.15,4.8,22.2,78.580729]){
 const stage=Math.max(.6*h,Math.min(w,1.5*h));const [,min,ideal,max]=desktopImageSizes(width).match(/clamp\(([\d.]+)dvh, ([\d.]+)vw, ([\d.]+)dvh\)/);
 const source=Math.max(+min*h/100,Math.min(+ideal*w/100,+max*h/100));assert.ok(Math.abs(source-stage*width/100)<.002,'sizes follow actual bounded stage across aspect ratios');
}
const {reactionTextureFiles}=load('src/lib/workshop/reaction-textures.ts');
for(const id of ['about','blog','contact','experience','process','projects','research','services'])for(const w of [80,2000]){
 const files=reactionTextureFiles(id,w,2);assert.equal(new Set(files).size,files.length);assert.ok(files.length<4,'only the textures actually used by the renderer are prefetched');for(const file of files)assert.ok(fs.existsSync('public'+file),file);
}
// Prefetch and first hover share the same decoded object, even without HTTP cache.
let imageCreations=0;
class FakeImage { constructor(){imageCreations++;this.listeners={};} addEventListener(event,fn){this.listeners[event]=fn;} }
const cacheExports={};new Function('exports','Image',ts.transpileModule(fs.readFileSync('src/lib/workshop/motion-images.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText)(cacheExports,FakeImage);
const prefetched=cacheExports.motionImage('/blink.webp');assert.equal(cacheExports.motionImage('/blink.webp'),prefetched);assert.equal(imageCreations,1);
prefetched.listeners.error();assert.notEqual(cacheExports.motionImage('/blink.webp'),prefetched,'failed images can be retried');
const base={src:'/base.webp',currentSrc:'/base-768.webp'};cacheExports.rememberMotionImage(base);assert.equal(cacheExports.motionImage(base.currentSrc),base,'reuse decoded responsive pose');

(async()=>{const assets=require('../src/lib/workshop/assets.json'),furniture=require('../src/lib/workshop/furniture.json'),tiles=require('../src/lib/workshop/environment-tiles.json');let count=0;
for(const group of [...Object.values(assets),...furniture,...tiles]){
 const files=group.files||[group.file];assert.ok(files.length>=2,'responsive variants exist');let previous=0;
 for(const file of files){assert.ok(file.width>previous,'srcset widths are unique and ascending');previous=file.width;const b=fs.readFileSync('public'+file.src);assert.equal(b.length,file.bytes);const m=await sharp(b).metadata();assert.equal(m.width,file.width);assert.equal(m.height,file.height);count++;}
}
for(const field of require('../docs/lossless-motion-fields.json')){const raw=await sharp('public'+field.src).ensureAlpha().raw().toBuffer();assert.equal(require('node:crypto').createHash('sha256').update(raw).digest('hex'),field.rgbaSha256,'motion fields preserve every decoded RGBA pixel');}
const center=tiles.find(t=>t.id==='center');assert.ok(center.files.some(f=>f.width<=1920),'ordinary screens need not fetch the native 3592px tile');
console.log(`Desktop delivery: ${count} correctly sized variants, stage-bound sizes and lean motion texture manifests verified.`);
})().catch(e=>{console.error(e);process.exitCode=1});
