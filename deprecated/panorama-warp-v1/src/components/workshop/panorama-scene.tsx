"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import scenes from "@/lib/workshop/panorama-scenes.json";
import type { SectionId } from "@/lib/workshop/sections";
import { createCharacterMesh } from "./character-mesh";

type SceneId = keyof typeof scenes;
type Region = readonly number[];
const regionWeight = (x: number, y: number, r: Region) => {
  const distance = Math.hypot((x-r[0])/r[2], (y-r[1])/r[3]);
  return distance >= 1 ? 0 : Math.pow(1-distance*distance, 2);
};

function PanoramaLayer({ id, active, onReady }: { id: SceneId; active: boolean; onReady: (id: SceneId) => void }) {
  const scene = scenes[id];
  const image = useRef<HTMLImageElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);
  const [animated, setAnimated] = useState(false);
  const finishLoading = useCallback(() => { setReady(true); onReady(id); }, [id, onReady]);
  useEffect(() => {
    const element = image.current;
    if (!element) return;
    let cancelled = false;
    if (element.complete && element.naturalWidth) element.decode().catch(() => {}).then(() => { if (!cancelled) finishLoading(); });
    return () => { cancelled = true; };
  }, [finishLoading]);
  useEffect(() => {
    const element=image.current, surface=canvas.current;
    if (!active || !ready || !element || !surface) return;
    const media=matchMedia("(min-width: 900px) and (prefers-reduced-motion: no-preference)");
    let renderer: ReturnType<typeof createCharacterMesh> | undefined;
    let frame=0, last=0, elapsed=0;
    const draw=(now: number) => {
      if (document.hidden || !media.matches || !renderer) return;
      if (now-last >= 1000/30) {
        elapsed+=Math.min(50,now-last);last=now;
        renderer.draw(0,(1-Math.cos(elapsed/750))/2,Math.sin(elapsed/1700));
      }
      frame=requestAnimationFrame(draw);
    };
    const update=() => {
      cancelAnimationFrame(frame);
      if (document.hidden || !media.matches) { setAnimated(false); return; }
      if (!renderer) {
        try {
          renderer=createCharacterMesh(surface,element,{
            width:scene.width,height:scene.height,pivot:{x:0,y:0},
            weights:(x,y) => [0,regionWeight(x/scene.width,y/scene.height,scene.breath),regionWeight(x/scene.width,y/scene.height,scene.leaves)],
            amplitudes:[3.2,6,1.2],
          });
        } catch { return; /* The decoded image remains the fallback. */ }
      }
      renderer.draw(0,0,0);setAnimated(true);last=performance.now();frame=requestAnimationFrame(draw);
    };
    update();media.addEventListener("change",update);document.addEventListener("visibilitychange",update);
    return () => { cancelAnimationFrame(frame);renderer?.dispose();media.removeEventListener("change",update);document.removeEventListener("visibilitychange",update);setAnimated(false); };
  }, [id,active,ready,scene]);
  const sleep="sleep" in scene ? scene.sleep : undefined;
  const screen="screen" in scene ? scene.screen : undefined;
  const place=(r: Region): CSSProperties => ({left:`${r[0]*100}%`,top:`${r[1]*100}%`,width:`${r[2]*200}%`,height:`${r[3]*200}%`});
  return <div className="panorama-layer" data-scene={id} data-active={active} data-motion={animated}>
    <div className="panorama-art" style={{aspectRatio:`${scene.width}/${scene.height}`}}>
      <picture><img ref={image} src={scene.files[0].src} width={scene.width} height={scene.height} alt="" decoding="async" onLoad={finishLoading}/></picture>
      <canvas ref={canvas} aria-hidden="true" style={{opacity:animated?1:0}}/>
      <span className="panorama-light" style={place(scene.light)}/>
      {screen && <span className="panorama-screen" style={place(screen)}/>}
      {sleep && <span className="panorama-sleep" style={{left:`${sleep[0]*100}%`,top:`${sleep[1]*100}%`}}><i>z</i><i>z</i><i>z</i></span>}
    </div>
  </div>;
}

/** Route changes decode the incoming scene before fading; keep at most two bitmaps mounted. */
export function PanoramaScene({ section }: { section: SectionId | null }) {
  const target: SceneId=section || "about";
  const [enabled,setEnabled]=useState(false);
  const [displayed,setDisplayed]=useState<SceneId>(target);
  const [previous,setPrevious]=useState<SceneId | null>(null);
  useEffect(() => {
    const media=matchMedia("(min-width: 900px)");
    const update=()=>setEnabled(media.matches);update();media.addEventListener("change",update);
    return ()=>media.removeEventListener("change",update);
  },[]);
  const ready=useCallback((id: SceneId)=>{
    if(id!==target || id===displayed) return;
    setPrevious(displayed);setDisplayed(id);
  },[target,displayed]);
  useEffect(()=>{
    if(!previous)return;
    const timer=setTimeout(()=>setPrevious(null),650);
    return ()=>clearTimeout(timer);
  },[previous]);
  const ids=Array.from(new Set([displayed,target,...(target===displayed && previous?[previous]:[])]));
  return <aside className="studio-scene" aria-hidden="true">{enabled && ids.map(id=><PanoramaLayer key={id} id={id} active={id===displayed} onReady={ready}/>)}<div className="panorama-shade"/></aside>;
}
