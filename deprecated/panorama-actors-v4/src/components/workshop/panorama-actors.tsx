"use client";
import {useEffect,useLayoutEffect,useRef,useState,type CSSProperties} from "react";
import registry from "@/lib/workshop/panorama-actors.json";
import type {SectionId} from "@/lib/workshop/sections";

type Box=readonly number[];
type Source={image:HTMLImageElement;cells:Box[]};
function bounds(data:ImageData,x0:number,y0:number,w:number,h:number):Box{
 let left=w,top=h,right=0,bottom=0;
 for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(data.data[((y+y0)*data.width+x+x0)*4+3]>128){left=Math.min(left,x);top=Math.min(top,y);right=Math.max(right,x);bottom=Math.max(bottom,y);}
 return [x0+left,y0+top,Math.max(0,right-left+1),Math.max(0,bottom-top+1)];
}
function Sprite({source,cell,box,kind,moving,blink=false,trim=0,origin="50% 95%"}:{source:Source;cell:number;box:Box;kind:string;moving:boolean;blink?:boolean;trim?:number;origin?:string}){
 const canvas=useRef<HTMLCanvasElement>(null);
 useLayoutEffect(()=>{
  const el=canvas.current;if(!el)return;const ctx=el.getContext("2d");if(!ctx)return;
  let last=-1;
  const start=performance.now();
  function draw(){
   const time=performance.now()-start,frame=blink&&moving&&(time%5900>4950&&time%5900<5150)?cell+1:cell;
   if(frame===last)return;last=frame;
   const [x,y,w,h]=source.cells[frame]||[];if(!w||!h||!el||!ctx)return;
   const rect=el.getBoundingClientRect();el.width=Math.max(1,Math.round(rect.width*Math.min(devicePixelRatio,2)));el.height=Math.max(1,Math.round(rect.height*Math.min(devicePixelRatio,2)));
   ctx.clearRect(0,0,el.width,el.height);ctx.drawImage(source.image,x,y,w,h*(1-trim),0,0,el.width,el.height);el.dataset.frame=String(frame);
  }
  draw();const timer=blink&&moving?setInterval(draw,65):undefined;
  return()=>{if(timer)clearInterval(timer);};
 },[source,cell,moving,blink,trim]);
 const style:CSSProperties={left:`${box[0]*100}%`,top:`${box[1]*100}%`,width:`${box[2]*100}%`,height:`${box[3]*100}%`,transformOrigin:origin};
 return <div className={`panorama-actor panorama-actor-${kind}`} data-item={kind} style={style}><canvas ref={canvas}/></div>;
}

export function PanoramaActors({id,moving,onReady}:{id:SectionId;moving:boolean;onReady:()=>void}){
 const config=registry[id];const [source,setSource]=useState<Source|null>(null);
 useEffect(()=>{
  let cancelled=false;const img=new Image();
  img.onload=()=>{if(cancelled)return;const c=document.createElement("canvas");c.width=img.naturalWidth;c.height=img.naturalHeight;const ctx=c.getContext("2d",{willReadFrequently:true});if(!ctx)return;ctx.drawImage(img,0,0);const data=ctx.getImageData(0,0,c.width,c.height),w=Math.floor(c.width/2),h=Math.floor(c.height/2),cells=[0,1,2,3].map(i=>bounds(data,(i%2)*w,Math.floor(i/2)*h,w,h));setSource({image:img,cells});onReady();};
  img.src=config.atlas.src;return()=>{cancelled=true;};
 },[config.atlas.src]);
 if(!source)return null;
 return <div className="panorama-actors">
  {"head" in config&&<Sprite source={source} cell={0} box={config.head} kind="head" moving={moving} blink={id!=="about"} trim={id==="about"?.2:.12}/>}
  {"lampSrc" in config?<RegisteredLamp src={config.lampSrc} box={config.lamp} origin={config.lampOrigin}/>:<Sprite source={source} cell={2} box={config.lamp} kind="lamp" moving={moving} origin={config.lampOrigin}/>}
  {id==="about"&&<Sprite source={source} cell={3} box={[.934,.716,.058,.058]} kind="book" moving={false}/>}
  {id==="services"&&<Sprite source={source} cell={3} box={[.647,.45,.031,.14]} kind="spindle" moving={moving}/>}
 </div>;
}

function RegisteredLamp({src,box,origin}:{src:string;box:Box;origin:string}){
 const [source,setSource]=useState<Source|null>(null);
 useEffect(()=>{let done=false;const img=new Image();img.onload=()=>{if(done)return;const c=document.createElement("canvas");c.width=img.naturalWidth;c.height=img.naturalHeight;const ctx=c.getContext("2d",{willReadFrequently:true});if(!ctx)return;ctx.drawImage(img,0,0);const b=bounds(ctx.getImageData(0,0,c.width,c.height),0,0,c.width,c.height);setSource({image:img,cells:[b]});};img.src=src;return()=>{done=true;};},[src]);
 return source?<Sprite source={source} cell={0} box={box} kind="lamp" moving={true} origin={origin}/>:null;
}
