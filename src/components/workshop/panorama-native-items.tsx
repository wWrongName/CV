"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import {processLampLevel} from "@/lib/workshop/mobile-motion";
import registry from "@/lib/workshop/panorama-native-items.json";
import type { SectionId } from "@/lib/workshop/sections";

type Kind = "head" | "lamp" | "spindle" | "book" | "connector";
type Layer = { canvas: HTMLCanvasElement; origin: string; lit?:HTMLCanvasElement; sway?:boolean; phase?:number };
type Sources = { patch: HTMLCanvasElement; layers: Partial<Record<Kind, Layer>>; blink?: HTMLCanvasElement };
// Tight, feathered eyelid regions in original 1584 × 993 scene coordinates.
const eyes: Partial<Record<SectionId, number[][]>> = {
 services:[[1297,405,12,10]], projects:[[1020,422,21,14]],
 research:[[1018,430,24,14],[953,446,15,11]],
 process:[[1193,298,14,12]], blog:[[1104,423,22,14],[1156,438,13,10]],
 experience:[[1157,287,25,17],[1094,316,14,11]],
};
const bulbs:Record<SectionId,number[]>={about:[.925,.29,.04,.12],services:[.655,.10,.06,.055],projects:[.922,.245,.055,.045],research:[.862,.465,.08,.06],process:[.44,.07,.34,.11],blog:[.865,.375,.08,.06],experience:[.495,.33,.07,.055],contact:[.765,.17,.043,.10]};
function surface(w: number, h: number) { const c = document.createElement("canvas"); c.width = w; c.height = h; return c; }
function image(src: string): Promise<HTMLImageElement> { return new Promise((resolve, reject) => { const img = new Image(); img.onload = () => resolve(img); img.onerror = reject; img.src = src; }); }
// Cropped auxiliary textures are registered back into the native scene coordinates.
// The lossless source pixels and animation masks retain their original alignment.
async function registeredImage(src: string, region: number[] | null): Promise<HTMLImageElement | HTMLCanvasElement> {
 const img=await image(src);if(!region)return img;
 const [left,top,width,height,fullWidth,fullHeight]=region;
 const canvas=surface(fullWidth,fullHeight);canvas.getContext("2d")!.drawImage(img,left,top,width,height);return canvas;
}
function paint(source: CanvasImageSource, mask: HTMLCanvasElement, w: number, h: number) {
 const c = surface(w,h), ctx = c.getContext("2d")!; ctx.drawImage(source,0,0,w,h); ctx.globalCompositeOperation = "destination-in"; ctx.drawImage(mask,0,0); return c;
}
function Canvas({ layer, kind, blink, moving }: { layer: Layer; kind: Kind; blink?: HTMLCanvasElement; moving: boolean }) {
 const ref = useRef<HTMLCanvasElement>(null);
 useEffect(() => {
  const c = ref.current; if (!c) return; c.width=layer.canvas.width; c.height=layer.canvas.height;
  const ctx=c.getContext("2d")!; let previous=-1,raf=0;const started=performance.now();
  const draw=()=>{
   const elapsed=(performance.now()-started)/1000,t=elapsed*1000%6400;
   let amount=0;
   if(blink&&moving&&t>=6000&&t<6205) amount=t<6065?(t-6000)/65:t<6110?1:1-(t-6110)/95;
   amount=amount*amount*(3-2*amount);
   const power=kind==="lamp"&&moving?processLampLevel(performance.now()/1000+(layer.phase||0)):1;c.dataset.lampPower=power.toFixed(3);if(kind==="lamp")c.dataset.lightMode="brighten-only";
   if(amount!==previous||kind==="lamp"){previous=amount;ctx.clearRect(0,0,c.width,c.height);ctx.drawImage(layer.canvas,0,0);if(blink&&amount>0){ctx.globalAlpha=amount;ctx.drawImage(blink,0,0);ctx.globalAlpha=1;}if(kind==="lamp"&&layer.lit){ctx.globalAlpha=power*.95;ctx.drawImage(layer.lit,0,0);ctx.globalAlpha=1;}c.dataset.frame=amount===0?"open":amount===1?"closed":t<6065?"closing":"opening";c.dataset.blink=amount.toFixed(3);}
   if((blink||kind==="lamp")&&moving)raf=requestAnimationFrame(draw);
  };
  draw();return()=>cancelAnimationFrame(raf);
 },[layer,blink,moving,kind]);
 return <canvas ref={ref} className={`panorama-native-${kind}`} data-sway={layer.sway||undefined} data-item={`native-${kind}`} style={{transformOrigin:layer.origin} as CSSProperties}/>;
}

/** All item pixels retain their original full-frame coordinates and scale. */
export function PanoramaNativeItems({id,moving,onReady}:{id:SectionId;moving:boolean;onReady:()=>void}) {
 const [sources,setSources]=useState<Sources|null>(null), patchRef=useRef<HTMLCanvasElement>(null);
 const config=registry[id];
 useEffect(()=>{
  let cancelled=false;
  const create=async()=>{
   const [original,plate,mask,blink,toolMask]=await Promise.all([registeredImage(config.original,config.originalRegion),registeredImage(config.plate,config.plateRegion),registeredImage(config.mask,config.maskRegion),config.blink?registeredImage(config.blink,config.blinkRegion).catch(()=>undefined):undefined,config.toolMask?registeredImage(config.toolMask,config.toolMaskRegion):undefined]);
   if(cancelled)return;
   const w=original.width,h=original.height,c=surface(w,h),ctx=c.getContext("2d",{willReadFrequently:true})!;
   ctx.drawImage(mask,0,0,w,h);const rgb=ctx.getImageData(0,0,w,h),union=surface(w,h),unionCtx=union.getContext("2d")!,layers:Sources["layers"]={};
   let toolPixels:ImageData|undefined;
   if(toolMask){
    const tc=surface(w,h).getContext("2d")!;
    // Only the lower chuck below the black ball joint. Upper silver carriage stays fixed.
    const outline=[[1034,476],[1056,476],[1062,480],[1062,497],[1058,501],[1050,503],[1050,508],[1056,506],[1059,508],[1050,520],[1050,528],[1054,532],[1054,534],[1035,534],[1035,531],[1039,528],[1040,520],[1038,513],[1038,505],[1032,501],[1030,497],[1030,481]];
    tc.beginPath();outline.forEach(([x,y],i)=>i?tc.lineTo(x*w/1584,y*h/993):tc.moveTo(x*w/1584,y*h/993));tc.closePath();tc.clip();tc.drawImage(toolMask,0,0,w,h);toolPixels=tc.getImageData(0,0,w,h);
   }
   for(const kind of ["head","lamp","spindle","book"] as Kind[]) {
    if(kind==="spindle"&&id!=="services"||kind==="book"&&id!=="about")continue;
    const matte=surface(w,h),mctx=matte.getContext("2d")!,data=mctx.createImageData(w,h);let left=w,right=0,top=h,bottom=0,count=0;
    for(let i=0;i<rgb.data.length;i+=4){const r=rgb.data[i],g=rgb.data[i+1],b=rgb.data[i+2];const a=kind==="spindle"&&toolPixels?Math.min(toolPixels.data[i],toolPixels.data[i+1],toolPixels.data[i+2]):config.whiteMask?(kind==="head"?Math.min(r,g,b):0):kind==="head"?r-Math.max(g,b):kind==="lamp"?g-Math.max(r,b):kind==="spindle"?Math.min(r,g)-b:Math.min(g,b)-r;
     data.data[i+3]=Math.max(0,a); if(a>128){const p=i/4,x=p%w,y=Math.floor(p/w);left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);count++;}}
    if(kind==="lamp"&&id==="process"){
     const temp=surface(w,h),tt=temp.getContext("2d")!;tt.fillStyle="white";tt.beginPath();[[.448,.163],[.766,.0736],[.771,.085],[.448,.174]].forEach(([x,y],i)=>i?tt.lineTo(x*w,y*h):tt.moveTo(x*w,y*h));tt.closePath();tt.fill();data.data.set(tt.getImageData(0,0,w,h).data);count=1;left=.43*w;right=.79*w;top=.05*h;bottom=.16*h;
    }
    if(count<1)continue;
    if(kind==="lamp"&&id!=="process"){
     // Fill the glass inside the outlined lantern, keeping bulb and cage rigidly joined.
     const l=Math.max(0,left-2),t=Math.max(0,top-2),bw=Math.min(w-1,right+2)-l+1,bh=Math.min(h-1,bottom+2)-t+1;
     const outside=new Uint8Array(bw*bh),queue=new Int32Array(bw*bh);let start=0,end=0;
     const visit=(x:number,y:number)=>{const k=y*bw+x;if(outside[k]||data.data[((y+t)*w+x+l)*4+3]>12)return;outside[k]=1;queue[end++]=k;};
     for(let x=0;x<bw;x++){visit(x,0);visit(x,bh-1);}for(let y=0;y<bh;y++){visit(0,y);visit(bw-1,y);}
     while(start<end){const k=queue[start++],x=k%bw,y=Math.floor(k/bw);if(x)visit(x-1,y);if(x<bw-1)visit(x+1,y);if(y)visit(x,y-1);if(y<bh-1)visit(x,y+1);}
     for(let y=0;y<bh;y++)for(let x=0;x<bw;x++)if(!outside[y*bw+x])data.data[((y+t)*w+x+l)*4+3]=255;
    }
    mctx.putImageData(data,0,0);
    layers[kind]={canvas:paint(original,matte,w,h),origin:`${(left+right)/2/w*100}% ${(kind==="head"?bottom:top)/h*100}%`};
    if(kind==="lamp"){
     layers.lamp!.sway=["about","services","contact"].includes(id);layers.lamp!.phase=Object.keys(registry).indexOf(id)*.47;
     const light=surface(w,h),lc=light.getContext("2d",{willReadFrequently:true})!;lc.drawImage(original,0,0);const originalPixels=lc.getImageData(0,0,w,h),lit=lc.createImageData(w,h),[x0,y0,bw,bh]=bulbs[id];
     for(let y=Math.floor(y0*h);y<Math.min(h,(y0+bh)*h);y++)for(let x=Math.floor(x0*w);x<Math.min(w,(x0+bw)*w);x++){
      const i=(y*w+x)*4,r=originalPixels.data[i],g=originalPixels.data[i+1],b=originalPixels.data[i+2];
      const u=(x/w-x0-bw/2)/(bw/2),v=(y/h-y0-bh/2)/(bh/2),d=u*u+v*v;const heat=id==="process"?1:Math.max(0,Math.min(1,(1.05-d)/.45));
      lit.data[i]=Math.min(255,r+75);lit.data[i+1]=Math.min(255,g+55);lit.data[i+2]=Math.min(255,b+30);lit.data[i+3]=Math.round(heat*data.data[i+3]);
     }
     lc.clearRect(0,0,w,h);lc.putImageData(lit,0,0);layers.lamp!.lit=light;
    }
    if(kind!=="book")unionCtx.drawImage(matte,0,0);
    if(kind==="head"&&blink){layers.head!.canvas.dataset.blink="available";}
   }
   if(id==="services"){const stem=surface(w,h),sc=stem.getContext("2d")!;const x=1045*w/1584,y=472*h/993,sw=5*w/1584;const metal=sc.createLinearGradient(x-sw/2,0,x+sw/2,0);metal.addColorStop(0,"#272824");metal.addColorStop(.5,"#9d9780");metal.addColorStop(1,"#41413a");sc.fillStyle=metal;sc.fillRect(x-sw/2,y,sw,16*h/993);layers.connector={canvas:stem,origin:"50% 50%"};}
   // Only restore background immediately beneath selected moving objects.
   const expanded=surface(w,h),ex=expanded.getContext("2d")!;for(let dy=-2;dy<=2;dy++)for(let dx=-2;dx<=2;dx++)ex.drawImage(union,dx,dy);
   let blinkLayer:HTMLCanvasElement|undefined;
   if(blink&&layers.head&&eyes[id]){
    const blinkMask=surface(w,h),bc=blinkMask.getContext("2d")!;
    for(const [x,y,rx,ry] of eyes[id]!){
     bc.save();bc.translate(x*w/1584,y*h/993);bc.scale(rx*w/1584,ry*h/993);
     const feather=bc.createRadialGradient(0,0,.72,0,0,1);feather.addColorStop(0,"white");feather.addColorStop(1,"transparent");bc.fillStyle=feather;bc.fillRect(-1,-1,2,2);bc.restore();
    }
    bc.globalCompositeOperation="destination-in";bc.drawImage(layers.head.canvas,0,0);
    blinkLayer=paint(blink,blinkMask,w,h);
   }
   if(!cancelled){setSources({patch:paint(plate,expanded,w,h),layers,blink:blinkLayer});}
  };
  create().catch(()=>{if(!cancelled)onReady();});return()=>{cancelled=true;};
 },[id,config,onReady]);
 useEffect(()=>{if(!sources||!patchRef.current)return;const c=patchRef.current;c.width=sources.patch.width;c.height=sources.patch.height;c.getContext("2d")!.drawImage(sources.patch,0,0);onReady();},[sources,onReady]);
 if(!sources)return null;
 return <div className="panorama-native-items" data-moving={moving}><canvas ref={patchRef} className="panorama-native-patch"/>{(Object.entries(sources.layers) as [Kind,Layer][]).map(([kind,layer])=><Canvas key={kind} kind={kind} layer={layer} moving={moving} blink={kind==="head"?sources.blink:undefined}/>)}</div>;
}
