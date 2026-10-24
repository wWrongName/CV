"use client";

import { useEffect, useRef, useState } from "react";
import { createCharacterMesh } from "./character-mesh";
import poses from "@/lib/workshop/studio-poses.json";
import { sampleBreath, sampleHair } from "@/lib/workshop/motion-timing";

export type StudioPose = keyof typeof poses;
const clamp = (n: number) => Math.max(0, Math.min(1, n));

/** New seated artwork: desk contact stays pinned while shoulders and hair move. */
export function StudioCharacter({ pose, active, onReady }: { pose: StudioPose; active: boolean; onReady: (pose: StudioPose) => void }) {
  const files = poses[pose].files;
  const image = useRef<HTMLImageElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [ready, setReady] = useState(false);
  const [allowed, setAllowed] = useState(false);
  const [visible, setVisible] = useState(true);
  const mesh = useRef<ReturnType<typeof createCharacterMesh> | null>(null);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: no-preference)");
    const update = () => setAllowed(media.matches);
    const visibility = () => setVisible(!document.hidden);
    update(); visibility(); media.addEventListener("change", update); document.addEventListener("visibilitychange", visibility);
    return () => { media.removeEventListener("change", update); document.removeEventListener("visibilitychange", visibility); };
  }, []);
  useEffect(() => {
    setReady(false);
    if (!loaded || !allowed || !canvas.current || !image.current) return;
    const art = image.current;
    const width = art.naturalWidth, height = art.naturalHeight;
    try {
      mesh.current = createCharacterMesh(canvas.current, art, {
        width, height, pivot: { x: width * .78, y: height * .40 }, amplitudes: [height * .003, width * .0015, height * .0004],
        weights(x, y) {
          const nx = x / width, ny = y / height;
          const deskPin = clamp((.9 - ny) / .2);
          const shoulder = Math.exp(-(((nx - .52) / .4) ** 2) - ((ny - .64) / .24) ** 2) * deskPin;
          const hairY = pose === "board" ? .43 : .29;
          const hair = clamp((hairY - ny) / .13) * clamp((ny - (pose === "board" ? .26 : 0)) / .05) * clamp((nx - .1) / .1) * clamp((.72 - nx) / .12);
          const gesture = pose === "board" ? clamp((nx - .66) / .13) * clamp((.58 - ny) / .18) : 0;
          return [gesture, shoulder, hair];
        },
      });
      mesh.current.draw(0, 0, 0); setReady(true);
    } catch { /* Decoded static artwork remains visible without WebGL. */ }
    const lost = (event: Event) => { event.preventDefault(); setReady(false); };
    const node = canvas.current; node.addEventListener("webglcontextlost", lost);
    return () => { node.removeEventListener("webglcontextlost", lost); mesh.current?.dispose(); mesh.current = null; };
  }, [loaded, allowed, pose]);
  useEffect(() => {
    if (!ready || !active || !visible) return;
    let frame = 0, start = performance.now();
    const draw = (now: number) => {
      const elapsed = now - start;
      mesh.current?.draw(pose === "board" ? Math.sin(elapsed / 1400) * .006 : 0, sampleBreath(elapsed, [4100, 4500, 3900]), sampleHair(elapsed));
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [ready, active, visible, pose]);
  return <div className="studio-character" data-action={pose} data-visible={active} data-ready={ready} aria-hidden="true">
    <img ref={image} style={{ opacity: ready ? 0 : 1 }} src={files[1].src} srcSet={files.map(file => `${file.src} ${file.width}w`).join(", ")} sizes="23vw" width={files[0].width} height={files[0].height} alt="" decoding="async" draggable={false}
      onLoad={event => { const art = event.currentTarget; art.decode().then(() => { setLoaded(true); onReady(pose); }).catch(() => {}); }}/>
    <canvas ref={canvas} style={{ opacity: ready ? 1 : 0 }}/>
  </div>;
}
