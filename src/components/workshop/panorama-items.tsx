"use client";

import { useEffect, useRef, useState } from "react";
import type { SectionId } from "@/lib/workshop/sections";
import { cityWindowLevel, processLampLevel } from "@/lib/workshop/mobile-motion";
import { desktopDogs, dogBackWeight, dogSleepAnchor } from "@/lib/workshop/panorama-motion";
import { PanoramaNativeItems } from "./panorama-native-items";
import { createCharacterMesh } from "./character-mesh";

export type Point = readonly [number,number];
type Quad = readonly [Point,Point,Point,Point];
type Screen = { corners: Quad; kind: "terminal"|"network"|"contact" };
type Items = { light: readonly number[]; screen?: Screen; vine: readonly number[] };
export const panoramaItems: Record<SectionId,Items> = {
 about:{light:[.94,.355,.035,.07],screen:{corners:[[.738,.644],[.800,.641],[.795,.72],[.756,.72]],kind:"terminal"},vine:[.902,-.02,.05,.28]},
 services:{light:[.68,.13,.06,.04],screen:{corners:[[.704,.493],[.751,.489],[.777,.572],[.731,.574]],kind:"terminal"},vine:[.948,-.01,.045,.30]},
 projects:{light:[.941,.275,.05,.035],screen:{corners:[[.668,.159],[.93,.085],[.93,.463],[.668,.463]],kind:"network"},vine:[.50,-.015,.05,.27]},
 research:{light:[.89,.49,.055,.027],vine:[.79,-.015,.045,.30]},
 process:{light:[.61,.125,.18,.018],vine:[.37,-.01,.05,.32]},
 blog:{light:[.91,.406,.058,.025],vine:[.48,-.015,.05,.3]},
 experience:{light:[.52,.36,.05,.025],vine:[.60,-.015,.045,.29]},
 contact:{light:[.786,.224,.023,.056],screen:{corners:[[.718,.48],[.876,.477],[.876,.642],[.714,.636]],kind:"contact"},vine:[.915,-.015,.05,.31]},
};

const dogItems=desktopDogs;

/** Transparent dog sprite; only the ribcage moves. Head, paws and contact with desk stay pinned. */
function SleepingDog({ id, moving }: { id:keyof typeof dogItems; moving:boolean }) {
 const item=dogItems[id], height=item.width*244/512*1586/992;
 const img=useRef<HTMLImageElement>(null),canvas=useRef<HTMLCanvasElement>(null);
 const [loaded,setLoaded]=useState(false),[rendered,setRendered]=useState(false);
 useEffect(()=>{if(img.current?.complete&&img.current.naturalWidth)setLoaded(true);},[]);
 useEffect(()=>{
  if(!moving||!loaded||!img.current||!canvas.current){setRendered(false);return;}
  let mesh:ReturnType<typeof createCharacterMesh>;
  try{mesh=createCharacterMesh(canvas.current,img.current,{width:512,height:244,pivot:{x:0,y:0},amplitudes:[7,0,0],weights:(x,y)=>{
   const weight=dogBackWeight(x,y);
   return [0,weight,0];
  }});}catch{return;}
  let frame=0,last=0,elapsed=0;
  const draw=(now:number)=>{if(now-last>1000/24){elapsed+=Math.min(70,now-last);last=now;mesh.draw(0,(1-Math.cos(elapsed/684))/2,0);}frame=requestAnimationFrame(draw);};
  mesh.draw(0,0,0);setRendered(true);last=performance.now();frame=requestAnimationFrame(draw);
  return()=>{cancelAnimationFrame(frame);mesh.dispose();setRendered(false);};
 },[moving,loaded]);
 return <><div className="panorama-dog-item" data-rendered={rendered} style={{left:`${item.x*100}%`,top:`${(item.bottom-height)*100}%`,width:`${item.width*100}%`}}>
  <img ref={img} src="/workshop/sleeping-cavalier-v1-512.webp" width="512" height="244" alt="" onLoad={()=>setLoaded(true)}/><canvas ref={canvas}/>
 </div><span className="panorama-sleep" style={{left:`${dogSleepAnchor(id).x*100}%`,top:`${dogSleepAnchor(id).y*100}%`}}><i>z</i><i>z</i><i>z</i></span></>;
}

function glow(ctx:CanvasRenderingContext2D,x:number,y:number,rx:number,ry:number,alpha:number,color="255,195,102"){
 ctx.save();ctx.translate(x,y);ctx.scale(rx,ry);const g=ctx.createRadialGradient(0,0,0,0,0,1);g.addColorStop(0,`rgba(${color},${alpha})`);g.addColorStop(1,`rgba(${color},0)`);ctx.fillStyle=g;ctx.fillRect(-1,-1,2,2);ctx.restore();
}
function clip(ctx:CanvasRenderingContext2D,q:Quad){ctx.beginPath();q.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.closePath();ctx.clip();}

/** Transparent emission/screen layer. It never draws, warps or resamples the background. */
function ScreenAndLights({id,moving,width,height}:{id:SectionId;moving:boolean;width:number;height:number}){
 const canvas=useRef<HTMLCanvasElement>(null);
 useEffect(()=>{
  const el=canvas.current;if(!el)return;
  const ctx=el.getContext("2d");if(!ctx)return;
  let frame=0,last=0,time=0;
  const item=panoramaItems[id];
  const draw=(now:number)=>{
   if(now-last>=1000/24||!moving){time+=moving?Math.min(70,now-(last||now))/1000:0;last=now;
    const r=el.getBoundingClientRect(),dpr=Math.min(devicePixelRatio,1.5),w=Math.round(r.width*dpr),h=Math.round(r.height*dpr);
    if(el.width!==w||el.height!==h){el.width=w;el.height=h;}
    ctx.setTransform(el.width,0,0,el.height,0,0);ctx.clearRect(0,0,1,1);
    // Same warm additive light and voltage cycle as mobile; no dark overlay.
    const power=moving?processLampLevel(now/1000+Object.keys(panoramaItems).indexOf(id)*.47):1;el.dataset.lampPower=power.toFixed(3);
    const [lx,ly,rx,ry]=item.light;
    if(id==="process"){
     ctx.save();clip(ctx,[[.448,.163],[.766,.0736],[.771,.085],[.448,.174]]);
     ctx.fillStyle=`rgba(255,231,159,${power*.4})`;ctx.fillRect(.44,.07,.34,.11);ctx.restore();
     glow(ctx,.61,.125,.18,.027,power*.18);
    }else glow(ctx,lx,ly,rx,ry,.03+power*.23);
    if(item.screen){
     const {corners:q,kind}=item.screen;ctx.save();clip(ctx,q);
     const left=Math.min(...q.map(p=>p[0])),right=Math.max(...q.map(p=>p[0])),top=Math.min(...q.map(p=>p[1])),bottom=Math.max(...q.map(p=>p[1]));
     const sw=right-left,sh=bottom-top,pulse=.5+.5*Math.sin(time*1.5);
     ctx.fillStyle=`rgba(72,193,220,${.018+.035*pulse})`;ctx.fillRect(left,top,sw,sh);
     const sy=top+(time*.018%sh);ctx.fillStyle="rgba(143,239,248,.14)";ctx.fillRect(left,sy,sw,.0018);
     if(kind==="terminal")for(let row=0;row<7;row++){
      const line=(row*17+Math.floor(time*.7)*11)%61;
      ctx.fillStyle=`rgba(152,236,224,${.15+row%3*.06})`;ctx.fillRect(left+sw*.08,top+sh*(.16+row*.085),sw*(.14+line/100),.0012);
     }
     if(kind==="network"){
      const nodes=[[.16,.57],[.37,.54],[.47,.62],[.67,.54],[.80,.66]];
      nodes.forEach(([u,v],i)=>{const x=left+sw*u,y=top+sh*v,a=Math.pow(.5+.5*Math.sin(time*2-i*1.4),3);glow(ctx,x,y,.009,.014,a*.6,"112,244,230");});
      ctx.strokeStyle="rgba(151,249,236,.45)";ctx.lineWidth=1/width;ctx.setLineDash([.004,.008]);ctx.lineDashOffset=-time*.012;ctx.beginPath();nodes.forEach(([u,v],i)=>i?ctx.lineTo(left+sw*u,top+sh*v):ctx.moveTo(left+sw*u,top+sh*v));ctx.stroke();
     }
     if(kind==="contact"){
      glow(ctx,left+sw*.55,top+sh*.5,sw*.3,sh*.4,.08+.12*pulse,"98,214,255");
      const burst=Math.pow(Math.max(0,Math.sin(time*1.7)),18);for(let i=0;i<5;i++){ctx.fillStyle=`rgba(161,230,255,${burst*.26})`;ctx.fillRect(left,top+sh*((i*.19+time*.11)%1),sw,.001);}
     }
     ctx.restore();
    }
    if(id==="about"){
     const windows=[[.775,.326],[.783,.372],[.788,.412],[.758,.441],[.754,.486],[.804,.46],[.812,.503],[.832,.52],[.795,.556],[.732,.519],[.54,.57],[.495,.621],[.43,.637],[.37,.625],[.25,.62],[.12,.625],[.082,.639],[.61,.55],[.56,.58]];
     windows.forEach(([x,y],i)=>{const a=cityWindowLevel(time,i);glow(ctx,x,y,.0035,.006,a*.5);ctx.fillStyle=`rgba(255,224,144,${a})`;ctx.fillRect(x,y,.0012,.0025);});
    }
   }
   if(moving)frame=requestAnimationFrame(draw);
  };
  draw(performance.now());return()=>cancelAnimationFrame(frame);
 },[id,moving,width,height]);
 return <canvas ref={canvas} className="panorama-emission-items" data-item="screens-and-lights"/>;
}

export function PanoramaItems({id,active,width,height,onReady}:{id:SectionId;active:boolean;width:number;height:number;onReady:()=>void}){
 const [moving,setMoving]=useState(false);
 useEffect(()=>{
  const m=matchMedia("(min-width: 900px) and (prefers-reduced-motion: no-preference)");
  const update=()=>setMoving(active&&m.matches&&!document.hidden);update();m.addEventListener("change",update);document.addEventListener("visibilitychange",update);
  return()=>{m.removeEventListener("change",update);document.removeEventListener("visibilitychange",update);};
 },[active]);
 return <div className="panorama-items" data-moving={moving}>
  {id==="about"&&<div className="panorama-cloud-item"><img src="/workshop/panorama-clouds-item-v1.webp" alt=""/></div>}
  <ScreenAndLights id={id} moving={moving} width={width} height={height}/>
  {(id==="about"||id==="contact")&&<SleepingDog id={id} moving={moving}/>}
  <PanoramaNativeItems id={id} moving={moving} onReady={onReady}/>
 </div>;
}
