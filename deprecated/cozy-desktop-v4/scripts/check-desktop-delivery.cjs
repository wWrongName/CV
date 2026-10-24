const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const sharp=require('node:module').createRequire(require.resolve('next/package.json'))('sharp');
const poses=require('../src/lib/workshop/studio-poses.json');
const mobile=require('../src/lib/workshop/mobile-scene-art.json');
(async()=>{
  let count=0;
  for(const [id,group] of Object.entries({...mobile,...poses})) {
    let previous=0;
    for(const file of group.files) {
      assert.ok(file.width>previous,`${id}: ascending responsive widths`);previous=file.width;
      const b=fs.readFileSync('public'+file.src),meta=await sharp(b).metadata();
      assert.equal(meta.width,file.width,file.src);assert.equal(meta.height,file.height,file.src);
      if(file.bytes)assert.equal(b.length,file.bytes,file.src);
      if(poses[id])assert.equal(meta.hasAlpha,true,`${id}: transparent seated sprite`);
      count++;
    }
  }
  assert.ok(fs.statSync('public/workshop/cozy-room-v2-960.webp').size<512*1024,'current room background fits within 512 KiB');
  const archived=require('../deprecated/workshop-desktop-v1/archive-manifest.json');
  const packaged=JSON.parse(cp.execFileSync(process.execPath,['scripts/prepare-production-public.cjs','--list'],{encoding:'utf8'}));
  for(const file of archived.publicFiles) {
    assert.ok(fs.existsSync(path.join('deprecated/workshop-desktop-v1',file)),`archive retained: ${file}`);
    assert.ok(!fs.existsSync(file),`legacy file removed from public: ${file}`);
    assert.ok(!packaged.includes(file.replace(/^public\//,'')),`legacy file excluded from production: ${file}`);
  }
  for(const pose of Object.values(poses))for(const file of pose.files)assert.ok(packaged.includes(file.src.slice(1)),`current pose packaged: ${file.src}`);
  assert.ok(JSON.parse(fs.readFileSync('tsconfig.json','utf8')).exclude.includes('deprecated'));
  assert.match(fs.readFileSync('.dockerignore','utf8'),/^deprecated\/$/m);
  console.log(`Current delivery: ${count} responsive images, all new alpha poses packaged; ${archived.publicFiles.length} archived assets excluded from public, TypeScript and Docker.`);
})().catch(e=>{console.error(e);process.exitCode=1});
