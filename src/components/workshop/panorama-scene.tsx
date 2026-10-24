"use client";
import {useCallback,useEffect,useRef,useState} from "react";
import scenes from "@/lib/workshop/panorama-scenes.json";
import type {SectionId} from "@/lib/workshop/sections";
import {PanoramaItems} from "./panorama-items";
type SceneId=keyof typeof scenes;
function PanoramaLayer({id,active,enabled,onReady}:{id:SceneId;active:boolean;enabled:boolean;onReady:(id:SceneId)=>void}){
 const scene=scenes[id],image=useRef<HTMLImageElement>(null),[ready,setReady]=useState(false),[itemsReady,setItemsReady]=useState(false);
 const loaded=useCallback(()=>{if(image.current && image.current.naturalWidth>1)setReady(true);},[]);
 const itemsLoaded=useCallback(()=>setItemsReady(true),[]);
 useEffect(()=>{if(ready)onReady(id);},[id,onReady,ready]);
 useEffect(()=>{if(image.current?.complete&&image.current.naturalWidth)loaded();},[loaded]);
 return <div className="panorama-layer" data-scene={id} data-active={active} data-loaded={ready&&itemsReady}><div className="panorama-art" style={{aspectRatio:`${scene.width}/${scene.height}`}}>
 <picture><source media="(min-width: 900px)" srcSet={scene.files[0].src}/><img ref={image} src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" fetchPriority={active?"high":"auto"} width={scene.width} height={scene.height} alt="" decoding="async" onLoad={loaded}/></picture>
 {enabled&&ready&&<PanoramaItems id={id} active={active} width={scene.width} height={scene.height} onReady={itemsLoaded}/>}
 </div></div>;
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
  return <aside className="studio-scene" aria-hidden="true">{ids.map(id=><PanoramaLayer key={id} id={id} active={id===displayed} enabled={enabled} onReady={ready}/>)}<div className="panorama-shade"/></aside>;
}
