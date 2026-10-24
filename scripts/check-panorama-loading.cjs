const fs=require('node:fs'),assert=require('node:assert/strict'),ts=require('typescript');
const sceneRegistry=require('../src/lib/workshop/panorama-scenes.json');
const itemRegistry=require('../src/lib/workshop/panorama-native-items.json');
function environment(readyState='loading',idleSupport=true){
 const requests=[],pending=new Set(),callbacks=new Map(),listeners=new Map();let ticket=0,maxPending=0,decoded=0;
 class Image {
  set src(url){this.url=url;requests.push(this);pending.add(this);maxPending=Math.max(maxPending,pending.size);}
  decode(){decoded++;return Promise.resolve();}
 }
 const window={addEventListener:(event,fn)=>listeners.set(event,fn),removeEventListener:(event,fn)=>{if(listeners.get(event)===fn)listeners.delete(event);},setTimeout:fn=>{callbacks.set(++ticket,fn);return ticket;},clearTimeout:id=>callbacks.delete(id)};
 if(idleSupport){window.requestIdleCallback=fn=>{callbacks.set(++ticket,fn);return ticket;};window.cancelIdleCallback=id=>callbacks.delete(id);}
 const exports={};
 const code=ts.transpileModule(fs.readFileSync('src/lib/workshop/panorama-loading.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,esModuleInterop:true}}).outputText;
 new Function('exports','require','Image','window','document',code)(exports,name=>name.includes('native-items')?itemRegistry:sceneRegistry,Image,window,{readyState});
 const settle=async()=>{for(let i=0;i<8;i++)await Promise.resolve();};
 const finish=async(image,fail=false)=>{pending.delete(image);if(fail)image.onerror();else image.onload();await settle();};
 const idle=()=>{const batch=[...callbacks.values()];callbacks.clear();batch.forEach(fn=>fn());};
 return {api:exports,requests,pending,callbacks,listeners,idle,finish,settle,get maxPending(){return maxPending;},get decoded(){return decoded;}};
}
(async()=>{
 const e=environment(),progress=[];
 const stop=e.api.preloadPanoramaImages('about',(done,total)=>progress.push([done,total]));
 assert.equal(e.requests.length,0,'other scenes must wait for page load');
 e.listeners.get('load')();assert.equal(e.requests.length,0,'network queue waits for an idle task');
 e.idle();assert.equal(e.requests.length,2);assert.ok(e.requests.every(image=>image.fetchPriority==='low'));
 const first=e.requests[0],foreground=e.api.loadPanoramaImage(first.url);
 assert.equal(e.requests.length,2,'navigation shares an in-flight preload');assert.equal(first.fetchPriority,'high');
 await e.finish(first);assert.equal(await foreground,first,'foreground reuses the decoded image');
 for(let round=0;round<100&&(e.pending.size||e.callbacks.size);round++){
  for(const image of [...e.pending])await e.finish(image);e.idle();
 }
 assert.equal(e.pending.size,0);assert.equal(e.callbacks.size,0);assert.equal(e.maxPending,2,'only two background transfers run at once');
 assert.equal(new Set(e.requests.map(image=>image.url)).size,e.requests.length,'shared textures are fetched once');
 const current=new Set(e.api.panoramaImageUrls('about'));
 assert.ok(e.requests.every(image=>!current.has(image.url)),'initial scene assets are not downloaded again');
 for(const id of Object.keys(sceneRegistry).filter(id=>id!=='about'))for(const url of e.api.panoramaImageUrls(id)){
  assert.ok(current.has(url)||e.requests.some(image=>image.url===url),`preload covers ${id}: ${url}`);
 }
 assert.equal(progress.at(-1)[0],progress.at(-1)[1],'queue reaches completion');
 assert.equal(e.decoded,e.requests.length,'every preloaded image is decoded');
 for(const image of e.requests){assert.equal(await e.api.loadPanoramaImage(image.url),image);}
 assert.equal(e.decoded,e.requests.length,'opening a section does not decode its textures again');stop();
 const cancelled=environment('complete');const cancel=cancelled.api.preloadPanoramaImages('about',()=>assert.fail('cancelled queue reported progress'));
 cancelled.idle();cancel();for(const image of [...cancelled.pending])await cancelled.finish(image);cancelled.idle();assert.equal(cancelled.requests.length,2,'cancellation stops queued work without aborting shared transfers');
 const failed=environment('complete');failed.api.preloadPanoramaImages('about',()=>{});failed.idle();const bad=failed.requests[0];await failed.finish(bad,true);const retry=failed.api.loadPanoramaImage(bad.url);assert.equal(failed.requests.length,3,'failed preloads can be retried');await failed.finish(failed.requests.at(-1));await retry;
 const fallback=environment('complete',false);const stopFallback=fallback.api.preloadPanoramaImages('projects',()=>{});assert.equal(fallback.requests.length,0);fallback.idle();assert.equal(fallback.requests.length,2,'timer fallback supports browsers without idle callbacks');stopFallback();
 console.log('Panorama preload: post-load idle queue, two transfers, all scene textures, decoded cache reuse, cancellation and retry verified.');
})().catch(error=>{console.error(error);process.exitCode=1});
