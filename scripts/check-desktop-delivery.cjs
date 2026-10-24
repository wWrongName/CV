const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const sharp=require('node:module').createRequire(require.resolve('next/package.json'))('sharp');
const scenes=require('../src/lib/workshop/panorama-scenes.json');
const mobile=require('../src/lib/workshop/mobile-scene-art.json');
(async()=>{
  assert.deepEqual(Object.keys(scenes).sort(),['about','services','projects','research','process','blog','experience','contact'].sort());
  assert.deepEqual(Object.keys(scenes).filter(id=>scenes[id].sleep).sort(),['about','contact']);
  const packaged=JSON.parse(cp.execFileSync(process.execPath,['scripts/prepare-production-public.cjs','--list'],{encoding:'utf8'}));
  let count=0,total=0;
  for(const [id,group] of [...Object.entries(mobile).map(([id,value])=>["mobile-"+id,value]),...Object.entries(scenes)]){
    let previous=0;
    for(const file of group.files){
      assert.ok(file.width>previous,`${id}: ascending responsive widths`);previous=file.width;
      const buffer=fs.readFileSync('public'+file.src),meta=await sharp(buffer).metadata();
      assert.equal(meta.width,file.width,file.src);assert.equal(meta.height,file.height,file.src);
      if(file.bytes)assert.equal(buffer.length,file.bytes,file.src);
      assert.ok(packaged.includes(file.src.slice(1)),`runtime asset packaged: ${file.src}`);
      if(scenes[id]){assert.ok(buffer.length<3*1024*1024,`panorama budget: ${file.src}`);total+=buffer.length;}
      count++;
    }
    if(scenes[id])for(const key of ['light','leaves','breath','sleep','screen']){
      const region=group[key];if(!region)continue;
      assert.ok(region.every(n=>Number.isFinite(n)&&n>=0&&n<=1),`${id} ${key}: normalized bounds`);
      if(region.length===4)assert.ok(region[2]>0&&region[3]>0,`${id}: nonempty motion region`);
    }
  }
  let archivedCount=0;
  for(const name of ['workshop-desktop-v1','cozy-desktop-v4','panorama-corrections','panorama-compressed','panorama-warp-v1','panorama-items-v3','panorama-actors-v4','panorama-loading-v1']){
    const archived=require(`../deprecated/${name}/archive-manifest.json`);
    for(const file of archived.publicFiles){
      assert.ok(fs.existsSync(path.join('deprecated',name,file)),`archive retained: ${file}`);
      assert.ok(!fs.existsSync(file),`legacy file removed from public: ${file}`);
      assert.ok(!packaged.includes(file.replace(/^public\//,'')),`legacy excluded: ${file}`);archivedCount++;
    }
  }
  const crops=require('../deprecated/panorama-loading-v1/archive-manifest.json').crops;
  for(const {source,output,region} of crops){
    const [left,top,width,height,fullWidth,fullHeight]=region;
    const original=sharp(path.join('deprecated/panorama-loading-v1',source));
    const meta=await original.metadata();
    assert.equal(meta.width,fullWidth);assert.equal(meta.height,fullHeight);
    const expected=await original.extract({left,top,width,height}).ensureAlpha().raw().toBuffer();
    const actual=await sharp(output).ensureAlpha().raw().toBuffer();
    assert.ok(expected.equals(actual),`lossless crop pixels: ${output}`);
    assert.ok(packaged.includes(output.replace(/^public\//,'')),`crop packaged: ${output}`);
  }
  assert.ok(JSON.parse(fs.readFileSync('tsconfig.json','utf8')).exclude.includes('deprecated'));
  assert.match(fs.readFileSync('.dockerignore','utf8'),/^deprecated\/$/m);
  console.log(`Delivery: ${count} responsive images; 8 panoramas ${(total/1024/1024).toFixed(2)} MiB native lossless backgrounds; ${archivedCount} legacy assets retained outside production.`);
})().catch(error=>{console.error(error);process.exitCode=1});
