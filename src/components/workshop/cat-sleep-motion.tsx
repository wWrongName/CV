"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { createCharacterMesh } from "./services-mesh";
import { sampleBreath } from "@/lib/workshop/motion-timing";

type CatLayer = {
  x: number; y: number; width: number; height: number;
  files: { src: string; width: number; height: number }[];
};
const clamp = (n: number) => Math.max(0, Math.min(1, n));

/** Only the curled back rises: the sleeping face, paws and tail keep their support. */
export function CatSleepMotion({ layer }: { layer: CatLayer }) {
  const image = useRef<HTMLImageElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const mesh = useRef<ReturnType<typeof createCharacterMesh> | null>(null);
  const [source, setSource] = useState("");
  const [ready, setReady] = useState(false);
  const [allowed, setAllowed] = useState(false);
  const [visible, setVisible] = useState(true);
  const [small, large] = layer.files;
  useEffect(() => {
    const media = matchMedia("(min-width: 900px) and (prefers-reduced-motion: no-preference)");
    const update = () => setAllowed(media.matches);
    const visibility = () => setVisible(!document.hidden);
    update(); visibility();
    media.addEventListener("change", update); document.addEventListener("visibilitychange", visibility);
    if (image.current?.complete && image.current.naturalWidth) setSource(image.current.currentSrc || image.current.src);
    return () => { media.removeEventListener("change", update); document.removeEventListener("visibilitychange", visibility); };
  }, []);
  useEffect(() => {
    setReady(false);
    if (!allowed || !source || !canvas.current) return;
    let cancelled = false;
    const art = new Image(); art.src = source;
    art.decode().then(() => {
      if (cancelled || !canvas.current) return;
      mesh.current = createCharacterMesh(canvas.current, art, {
        width: 305, height: 177, pivot: { x: 210, y: 150 }, amplitudes: [7, 0, 0],
        weights(x, y): readonly [number, number, number] {
          const back = Math.exp(-(((x - 216) / 93) ** 2)) * clamp((x - 128) / 45) * clamp((153 - y) / 85);
          return [0, back, 0];
        },
      });
      mesh.current.draw(0, 0, 0); setReady(true);
    }).catch(() => { /* The original sleeping cat remains the static fallback. */ });
    return () => { cancelled = true; mesh.current?.dispose(); mesh.current = null; };
  }, [source, allowed]);
  useEffect(() => {
    if (!ready || !visible) return;
    let frame = 0;
    const start = performance.now();
    const draw = (now: number) => {
      mesh.current?.draw(0, sampleBreath(now - start, [3600, 4100, 3800, 4300]), 0);
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [ready, visible]);
  return <span className="workshop-furniture-piece workshop-cat-sleep" data-layer="cat" data-ready={ready} data-loaded={Boolean(source)} data-sleeping={visible}
    style={{ left: `${layer.x}%`, top: `${layer.y}%`, width: `${layer.width}%`, height: `${layer.height}%` } as CSSProperties}>
    <picture><source media="(max-width: 899px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
      <img ref={image} src={small.src} srcSet={`${small.src} ${small.width}w, ${large.src} ${large.width}w`} sizes={`${layer.width}vw`} width={305} height={177} alt="" decoding="async" draggable={false}
        onLoad={event => { const art = event.currentTarget; art.decode().then(() => setSource(art.currentSrc || art.src)).catch(() => {}); }} />
    </picture>
    <canvas ref={canvas} aria-hidden="true" />
    <span className="workshop-cat-dream" aria-hidden="true"><i>z</i><i>z</i><i>z</i></span>
  </span>;
}
