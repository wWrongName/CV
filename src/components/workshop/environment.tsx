"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { desktopImageSizes, imageSrcSet } from "@/lib/workshop/image-sizes";
import environment from "@/lib/workshop/environment.json";
import tiles from "@/lib/workshop/environment-tiles.json";

const mobileSource = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
type Tile = typeof tiles[number] & { files?: { src: string; width: number; height: number; bytes: number }[] };

function tileLayout(tile: Tile) {
  const [a,b,c,d] = environment.matrix;
  const tx = environment.xPercent / 100 * 1536;
  const ty = environment.yPercent / 100 * 1024;
  const project = (x: number, y: number) => ({ x: a*x+c*y+tx, y: b*x+d*y+ty });
  const slotX = tile.x, slotY = tile.y;
  const slotW = tile.worldWidth, slotH = tile.worldHeight;
  const corners = [project(slotX,slotY), project(slotX+slotW,slotY), project(slotX+slotW,slotY+slotH), project(slotX,slotY+slotH)];
  const x = Math.min(...corners.map(p=>p.x)), y = Math.min(...corners.map(p=>p.y));
  const w = Math.max(...corners.map(p=>p.x))-x, h = Math.max(...corners.map(p=>p.y))-y;
  const origin = project(slotX,slotY);
  const ga = a/4, gb = b/4;
  const scale = Math.hypot(ga,gb), angle = Math.atan2(gb,ga)*180/Math.PI;
  return {
    slot: {
      left:`${x/1536*100}%`,top:`${y/1024*100}%`,width:`${w/1536*100}%`,height:`${h/1024*100}%`,
      clipPath:`polygon(${corners.map(p=>`${(p.x-x)/w*100}% ${(p.y-y)/h*100}%`).join(",")})`,
    } satisfies CSSProperties,
    image: {
      left:`${(origin.x-x)/w*100}%`,top:`${(origin.y-y)/h*100}%`,
      width:`${tile.width*scale/w*100}%`,height:`${tile.height*scale/h*100}%`,
      transform:`rotate(${angle}deg)`,
    } satisfies CSSProperties,
  };
}

function EnvironmentTile({ tile }: { tile: Tile }) {
  const [failed, setFailed] = useState(false);
  const [requested, setRequested] = useState(tile.id === "center");
  const ref = useRef<HTMLDivElement>(null);
  const full = tile.file;
  const sources = tile.files || [full];
  const imageWidthPercent = tile.width * Math.hypot(environment.matrix[0], environment.matrix[1]) / 4 / 1536 * 100;
  const layout = tileLayout(tile);
  useEffect(() => {
    if (tile.id === "center") return;
    const element = ref.current;
    if (!element) return;
    if (!("IntersectionObserver" in window)) { setRequested(true); return; }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setRequested(true);
        observer.disconnect();
      }
    }, { rootMargin: "0px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, [tile.id]);
  const imageStyle: CSSProperties = {
    ...layout.image,
    visibility: failed ? "hidden" : undefined,
  };
  return <div ref={ref} className="workshop-environment-tile" aria-hidden="true" data-tile={tile.id} data-requested={requested} style={layout.slot}>
    {requested && <picture><source media="(max-width: 899px)" srcSet={mobileSource} />
      <img src={sources[0].src} srcSet={imageSrcSet(sources)} sizes={desktopImageSizes(imageWidthPercent)} width={tile.width} height={tile.height}
        style={imageStyle} alt="" decoding="async" loading="eager" fetchPriority={tile.id === "center" ? "high" : "low"}
        draggable={false} onError={() => setFailed(true)} />
    </picture>}
    <noscript><img src={full.src} width={tile.width} height={tile.height} style={imageStyle} alt="" loading="lazy" /></noscript>
  </div>;
}

/** Every detail crop comes from the same lossless 6144×4096 master. */
export function WorkshopEnvironment() {
  return <><picture className="workshop-world" aria-hidden="true" style={{
    left: `${environment.xPercent}%`, top: `${environment.yPercent}%`,
    width: `${environment.widthPercent}%`, height: `${environment.heightPercent}%`,
    transform: `matrix(${environment.matrix.join(",")})`,
  }}><source media="(max-width: 899px)" srcSet={mobileSource} /><img src={environment.files[0].src} alt="" width={environment.files[0].width} height={environment.files[0].height} style={{width:"100%",height:"100%",display:"block"}} decoding="async" /></picture>{tiles.map(tile => <EnvironmentTile key={tile.id} tile={tile} />)}</>;
}
