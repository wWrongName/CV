"use client";
import { desktopImageSizes, imageSrcSet } from "@/lib/workshop/image-sizes";

import { useEffect, useRef, useState } from "react";
import { createCharacterMesh } from "./services-mesh";

type VineLayer = {
  id: string; x: number; y: number; width: number; height: number;
  nativeWidth: number; nativeHeight: number;
  files: { src: string; width: number; height: number }[];
};

/** Anchored pot and upper stems; wind influence increases towards the hanging tips. */
export function FoliageMotion({ layer }: { layer: VineLayer }) {
  const image = useRef<HTMLImageElement>(null), canvas = useRef<HTMLCanvasElement>(null);
  const mesh = useRef<ReturnType<typeof createCharacterMesh> | null>(null);
  const [source, setSource] = useState("");
  const [allowed, setAllowed] = useState(false), [ready, setReady] = useState(false), [visible, setVisible] = useState(true);
  const small = layer.files[0];
  useEffect(() => {
    const media = matchMedia("(min-width: 900px) and (prefers-reduced-motion: no-preference)");
    const update = () => setAllowed(media.matches), visibility = () => setVisible(!document.hidden);
    update(); visibility(); media.addEventListener("change", update); document.addEventListener("visibilitychange", visibility);
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
      const start = layer.nativeHeight * (layer.id === "window-plant" ? .43 : .33);
      mesh.current = createCharacterMesh(canvas.current, art, {
        width: layer.nativeWidth, height: layer.nativeHeight, pivot: { x: 0, y: 0 },
        amplitudes: [0, layer.nativeWidth * (layer.id === "window-plant" ? .034 : .052), 0],
        weights(x, y): readonly [number, number, number] {
          const tip = Math.max(0, Math.min(1, (y - start) / (layer.nativeHeight - start)));
          return [0, 0, tip * tip * (3 - 2 * tip) * (.8 + .2 * x / layer.nativeWidth)];
        },
      });
      mesh.current.draw(0, 0, 0); setReady(true);
    }).catch(() => { /* Retain the original vine when motion cannot start. */ });
    return () => { cancelled = true; mesh.current?.dispose(); mesh.current = null; };
  }, [source, allowed, layer]);
  useEffect(() => {
    if (!ready || !visible) return;
    let frame = 0;
    const start = performance.now(), phase = layer.id === "vine-sign" ? 1.6 : layer.id === "window-plant" ? 3.1 : 0;
    const draw = (now: number) => {
      const t = (now - start) / 1000;
      const wind = (Math.sin(t / 2.3 + phase) * .72 + Math.sin(t / 4.7 + phase) * .28) * Math.min(1, t / 1.5);
      mesh.current?.draw(0, 0, wind); frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw); return () => cancelAnimationFrame(frame);
  }, [ready, visible, layer.id]);
  return <span className="workshop-furniture-piece workshop-foliage-motion" data-layer={layer.id} data-ready={ready}
    style={{ left: `${layer.x}%`, top: `${layer.y}%`, width: `${layer.width}%`, height: `${layer.height}%` }}>
    <picture><source media="(max-width: 899px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
      <img ref={image} src={small.src} srcSet={imageSrcSet(layer.files)} sizes={desktopImageSizes(layer.width)} width={layer.nativeWidth} height={layer.nativeHeight} alt="" decoding="async" draggable={false}
        onLoad={event => { const art = event.currentTarget; art.decode().then(() => setSource(art.currentSrc || art.src)).catch(() => {}); }} />
    </picture><canvas ref={canvas} aria-hidden="true" />
  </span>;
}
