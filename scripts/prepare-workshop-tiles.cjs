/** Native crops from one lossless master, 4px bleed, high quality delivery WebP. */
const fs = require("node:fs/promises");
const path = require("node:path");
const assert = require("node:assert/strict");
const { createHash } = require("node:crypto");
const {createRequire} = require("node:module");
const repository = process.env.WORKSHOP_REPO || process.cwd();
const localRequire = createRequire(require("node:fs").realpathSync(path.join(repository,"node_modules/next/package.json")));
const sharp = localRequire("sharp");
const destination = process.env.WORKSHOP_OUTPUT || repository;
const input = process.argv[2] || path.join(repository,"artwork/workshop-master.webp");

(async () => {
  const master = await sharp(input).removeAlpha().raw().toBuffer({resolveWithObject:true});
  const {width,height,channels}=master.info;
  assert.equal(width,6144); assert.equal(height,4096); assert.equal(channels,3);
  const options={raw:{width,height,channels}};
  const revision=createHash("sha256").update(master.data).update("reference-core-border-v3-q95").digest("hex").slice(0,12);
  const art = path.join(destination,"artwork");
  const publicDir = path.join(destination,"public/workshop");
  await fs.mkdir(art,{recursive:true}); await fs.mkdir(publicDir,{recursive:true});
  const masterFile=path.join(art,"workshop-master.webp");
  await sharp(master.data,options).webp({lossless:true,effort:5}).toFile(masterFile);
  const previewSrc=`/workshop/environment-preview-${revision}.webp`;
  const preview=await sharp(master.data,options).resize({width:384}).webp({quality:55}).toFile(path.join(destination,"public",previewSrc));
  const environmentPath=path.join(destination,"src/lib/workshop/environment.json");
  const environment=JSON.parse(await fs.readFile(environmentPath,"utf8"));
  environment.files=[{src:previewSrc,width:preview.width,height:preview.height,bytes:preview.size}];
  await fs.writeFile(environmentPath,JSON.stringify(environment,null,2)+"\n");
  // Keep the original room plus a 64px world margin in the priority crop.
  // Border crops are requested only for genuinely wide/tall viewports.
  const boundsX=[0,1280,4864,6144],boundsY=[0,768,3328,4096];
  const names=["top-left","top-center","top-right","middle-left","center","middle-right","bottom-left","bottom-center","bottom-right"];
  const tiles=[];
  for(let row=0;row<3;row++)for(let col=0;col<3;col++){
    const id=names[row*3+col];
    const core={x:boundsX[col],y:boundsY[row],width:boundsX[col+1]-boundsX[col],height:boundsY[row+1]-boundsY[row]};
    const x=Math.max(0,core.x-4),y=Math.max(0,core.y-4);
    const right=Math.min(width,core.x+core.width+4),bottom=Math.min(height,core.y+core.height+4);
    const rect={left:x,top:y,width:right-x,height:bottom-y};
    const src=`/workshop/tile-${revision}-${id}.webp`;
    const output=path.join(destination,"public",src);
    const encoded=await sharp(master.data,options).extract(rect).webp({quality:95,smartSubsample:true,effort:6}).toFile(output);
    // Preserve native dimensions; quantify delivery compression against the master.
    const decoded=await sharp(output).removeAlpha().raw().toBuffer();
    const expected=await sharp(master.data,options).extract(rect).raw().toBuffer();
    let mse=0;
    for(let i=0;i<decoded.length;i++)mse+=(decoded[i]-expected[i])**2;
    const psnr=10*Math.log10(255**2/(mse/decoded.length));
    assert.ok(psnr>=40,`${id}: delivery compression must retain at least 40dB PSNR`);
    tiles.push({id,col,row,priority:id==="center"?"high":"low",source:"artwork/workshop-master.webp",masterRect:{x,y,width:rect.width,height:rect.height},coreRect:core,x:x/4,y:y/4,worldWidth:rect.width/4,worldHeight:rect.height/4,width:rect.width,height:rect.height,file:{src,width:encoded.width,height:encoded.height,bytes:encoded.size}});
    console.log(`${id}: ${encoded.width}×${encoded.height}, ${Math.round(encoded.size/1024)} KiB, native crop and high quality encoding verified`);
  }
  // Centre first in markup; other files start only after viewport intersection.
  tiles.sort((a,b)=>(a.id==="center"?-1:b.id==="center"?1:a.row*3+a.col-b.row*3-b.col));
  await fs.writeFile(path.join(destination,"src/lib/workshop/environment-tiles.json"),JSON.stringify(tiles,null,2)+"\n");
  console.log("All nine native tiles retain the shared master geometry and eight-pixel overlap; delivery WebPs use quality 95.");
})();
