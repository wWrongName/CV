"use client";

import { useEffect, useRef, useState } from "react";
import motion from "@/lib/workshop/projects-motion.json";
import { sampleBlink, sampleBreath, sampleHair, sampleHeadTilt } from "@/lib/workshop/motion-timing";
import { createCharacterMesh, meshRegionWeight } from "./services-mesh";

const clamp = (value: number) => Math.max(0, Math.min(1, value));

/** The folder and both gripping hands share one influence, without splitting the wrists. */
export function ProjectsPositionMotion({ baseSrc, active }: { baseSrc: string; active: boolean }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const renderer = useRef<ReturnType<typeof createCharacterMesh> | null>(null);
  const blink = useRef<SVGImageElement>(null);
  const headEyes = useRef<SVGGElement>(null);
  const [ready, setReady] = useState(false);
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 900px) and (prefers-reduced-motion: no-preference)");
    const update = () => setAllowed(media.matches);
    update(); media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    setReady(false);
    if (!allowed || !baseSrc || !canvas.current) return;
    let cancelled = false;
    const node = canvas.current, image = new window.Image(), eyes = new window.Image();
    image.src = baseSrc; eyes.src = motion.blink.src;
    Promise.all([image.decode(), eyes.decode()]).then(() => {
      if (cancelled) return;
      renderer.current = createCharacterMesh(node, image, {
        ...motion.canvas, pivot: motion.folder.pivot, amplitudes: [7, 4, .7],
        head: { pivot: motion.head.pivot, weight: (_x, y) => clamp((motion.head.blendBottom - y) / (motion.head.blendBottom - motion.head.blendTop)) },
        weights(x, y) {
          const folder = meshRegionWeight(x, y, motion.folder.outline, 45);
          const breath = Math.exp(-(((x - 335) / 210) ** 2) - ((y - 365) / 125) ** 2) * clamp((y - 300) / 50) * clamp((560 - y) / 90) * (1 - folder);
          const hair = Math.max(0, 1 - ((x - 300) / 210) ** 4) * clamp((195 - y) / 145) ** 2;
          return [folder, breath, hair];
        },
      });
      renderer.current.draw(0, 0, 0); setReady(true);
    }).catch(() => { /* Keep the approved static picture as the fallback. */ });
    const lost = () => { renderer.current = null; setReady(false); }; node.addEventListener("webglcontextlost", lost);
    return () => { cancelled = true; renderer.current?.dispose(); renderer.current = null; node.removeEventListener("webglcontextlost", lost); };
  }, [allowed, baseSrc]);
  useEffect(() => {
    if (!active || !allowed || !ready) return;
    let request = 0, elapsed = 0;
    let previous: number | null = null;
    const draw = (now: number) => {
      if (document.hidden) { previous = null; return; }
      elapsed += previous === null ? 0 : Math.min(now - previous, 100); previous = now;
      const phase = elapsed % 11000;
      const envelope = Math.max(0, Math.min(1, (phase - 1400) / 800, (7800 - phase) / 1000));
      const angle = Math.sin((phase - 1400) / 1500) * envelope * motion.folder.angleDegrees * Math.PI / 180;
      const tiltDegrees = sampleHeadTilt(elapsed) * motion.head.angleDegrees;
      renderer.current?.draw(angle, sampleBreath(elapsed, motion.breath.durationsMs), sampleHair(elapsed), tiltDegrees * Math.PI / 180);
      headEyes.current?.setAttribute("transform", `rotate(${tiltDegrees.toFixed(3)} ${motion.head.pivot.x} ${motion.head.pivot.y})`);
      blink.current?.setAttribute("opacity", sampleBlink(elapsed + 800, motion.blink.intervalsMs, motion.blink.durationMs).toFixed(3));
      request = requestAnimationFrame(draw);
    };
    const visibility = () => { cancelAnimationFrame(request); previous = null; if (!document.hidden) request = requestAnimationFrame(draw); };
    request = requestAnimationFrame(draw); document.addEventListener("visibilitychange", visibility);
    return () => { cancelAnimationFrame(request); document.removeEventListener("visibilitychange", visibility); };
  }, [active, allowed, ready]);
  if (!allowed || !baseSrc) return null;
  return <span className="workshop-projects-motion" data-position="projects" data-ready={ready} data-playing={active && ready} aria-hidden="true">
    <canvas ref={canvas} />
    <svg viewBox={`0 0 ${motion.canvas.width} ${motion.canvas.height}`} focusable="false"><g ref={headEyes}><image ref={blink} href={motion.blink.src} x={motion.blink.x} y={motion.blink.y} width={motion.blink.width} height={motion.blink.height} opacity="0" /></g></svg>
  </span>;
}
