"use client";

import { useEffect, useRef, useState } from "react";
import motion from "@/lib/workshop/process-motion.json";
import { sampleBlink, sampleBreath, sampleHair, sampleHeadTilt } from "@/lib/workshop/motion-timing";
import { createCharacterMesh, meshRegionWeight } from "./services-mesh";

const clamp = (value: number) => Math.max(0, Math.min(1, value));

/** Map and gripping hands stay together; lower legs swing gently from fixed knees. */
export function ProcessPositionMotion({ baseSrc, active }: { baseSrc: string; active: boolean }) {
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
        ...motion.canvas, pivot: motion.map.pivot, amplitudes: [7, 4, .7],
        head: { pivot: motion.head.pivot, weight: (x, y) => meshRegionWeight(x, y, motion.head.outline, 30) },
        legs: { ...motion.legs, weights: (x, y) => {
          const lower = clamp((y - 1000) / 170);
          return [lower * clamp((480 - x) / 90), lower * clamp((x - 490) / 90)];
        } },
        weights(x, y) {
          const map = meshRegionWeight(x, y, motion.map.outline, 35);
          const breath = Math.exp(-(((x - 580) / 260) ** 2) - ((y - 470) / 125) ** 2) * clamp((y - 380) / 70) * clamp((620 - y) / 90) * (1 - map);
          const hair = Math.max(0, 1 - ((x - 510) / 240) ** 4) * clamp((240 - y) / 180) ** 2;
          return [map, breath, hair];
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
      const angle = Math.sin((phase - 1400) / 1500) * envelope * motion.map.angleDegrees * Math.PI / 180;
      const tiltDegrees = sampleHeadTilt(elapsed) * motion.head.angleDegrees;
      const legAmplitude = motion.legs.angleDegrees * Math.PI / 180 * Math.min(1, elapsed / 1200);
      const legs: readonly [number, number] = [Math.sin(elapsed / 1100) * legAmplitude, Math.sin(elapsed / 1250 + .65) * legAmplitude * .8];
      renderer.current?.draw(angle, sampleBreath(elapsed, motion.breath.durationsMs), sampleHair(elapsed), tiltDegrees * Math.PI / 180, legs);
      headEyes.current?.setAttribute("transform", `rotate(${tiltDegrees.toFixed(3)} ${motion.head.pivot.x} ${motion.head.pivot.y})`);
      blink.current?.setAttribute("opacity", sampleBlink(elapsed + 800, motion.blink.intervalsMs, motion.blink.durationMs).toFixed(3));
      request = requestAnimationFrame(draw);
    };
    const visibility = () => { cancelAnimationFrame(request); previous = null; if (!document.hidden) request = requestAnimationFrame(draw); };
    request = requestAnimationFrame(draw); document.addEventListener("visibilitychange", visibility);
    return () => { cancelAnimationFrame(request); document.removeEventListener("visibilitychange", visibility); };
  }, [active, allowed, ready]);
  if (!allowed || !baseSrc) return null;
  return <span className="workshop-process-motion" data-position="process" data-ready={ready} data-playing={active && ready} aria-hidden="true">
    <canvas ref={canvas} />
    <svg viewBox={`0 0 ${motion.canvas.width} ${motion.canvas.height}`} focusable="false"><g ref={headEyes}><image ref={blink} href={motion.blink.src} x={motion.blink.x} y={motion.blink.y} width={motion.blink.width} height={motion.blink.height} opacity="0" /></g></svg>
  </span>;
}
