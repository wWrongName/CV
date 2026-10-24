"use client";

import { useEffect, useRef, useState } from "react";
import { createCharacterMesh } from "./character-mesh";
import { sampleBreath } from "@/lib/workshop/motion-timing";

/** Animate the dog in its actual painted position; the room and paws stay still. */
export function StudioRoom() {
  const image = useRef<HTMLImageElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [source, setSource] = useState("");
  const [allowed, setAllowed] = useState(false);
  const [visible, setVisible] = useState(true);
  const [ready, setReady] = useState(false);
  const mesh = useRef<ReturnType<typeof createCharacterMesh> | null>(null);
  useEffect(() => {
    const media = matchMedia("(min-width:900px) and (prefers-reduced-motion:no-preference)");
    const update = () => setAllowed(media.matches);
    const visibility = () => setVisible(!document.hidden);
    // The high-priority SSR image can finish loading before React hydrates.
    const art = image.current;
    if (art?.complete && art.naturalWidth > 1) art.decode().then(() => setSource(art.currentSrc || art.src)).catch(() => {});
    update(); visibility(); media.addEventListener("change", update); document.addEventListener("visibilitychange", visibility);
    return () => { media.removeEventListener("change", update); document.removeEventListener("visibilitychange", visibility); };
  }, []);
  useEffect(() => {
    setReady(false);
    if (!allowed || !source || !image.current || !canvas.current) return;
    const art = image.current;
    try {
      const width = art.naturalWidth, height = art.naturalHeight;
      mesh.current = createCharacterMesh(canvas.current, art, {
        width, height, pivot: { x: width * .8, y: height * .66 }, amplitudes: [height * .0019, 0, 0],
        weights(x, y) {
          const nx = x / width, ny = y / height;
          const topPin = Math.max(0, Math.min(1, (ny - .592) / .025));
          const back = topPin * Math.exp(-(((nx - .81) / .085) ** 2)) * Math.max(0, Math.min(1, (.676 - ny) / .055)) * Math.max(0, Math.min(1, (nx - .69) / .045));
          return [0, back, 0];
        },
      });
      mesh.current.draw(0, 0, 0); setReady(true);
    } catch { /* The unchanged painted room remains the fallback. */ }
    const node = canvas.current;
    const lost = () => setReady(false);
    node.addEventListener("webglcontextlost", lost);
    return () => { node.removeEventListener("webglcontextlost", lost); mesh.current?.dispose(); mesh.current = null; };
  }, [allowed, source]);
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
  return <div className="studio-room" data-dog-motion={ready}>
    <picture><source media="(max-width:899px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"/>
      <img ref={image} src="/workshop/cozy-room-v2-960.webp" srcSet="/workshop/cozy-room-v2-640.webp 640w, /workshop/cozy-room-v2-960.webp 960w" sizes="43vw" width="1086" height="1448" alt="" fetchPriority="high" onLoad={event => { const art = event.currentTarget; art.decode().then(() => setSource(art.currentSrc || art.src)).catch(() => {}); }}/>
    </picture><canvas ref={canvas} style={{ opacity: ready ? 1 : 0 }} aria-hidden="true"/>
  </div>;
}
