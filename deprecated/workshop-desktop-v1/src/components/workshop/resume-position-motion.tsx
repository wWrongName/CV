"use client";

import { motionImage } from "@/lib/workshop/motion-images";

import { useEffect, useRef, useState } from "react";
import motion from "@/lib/workshop/resume-motion.json";
import { sampleBlink, sampleBreath, sampleHair, sampleHeadTilt } from "@/lib/workshop/motion-timing";
import { createCharacterMesh, meshRegionWeight } from "./services-mesh";

const clamp = (value: number) => Math.max(0, Math.min(1, value));

/** Local body motion leaves the crouched legs fixed and moves the reaching hand from the elbow. */
export function ResumePositionMotion({ baseSrc, active }: { baseSrc: string; active: boolean }) {
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
    const node = canvas.current, image = motionImage(baseSrc), eyes = motionImage(motion.blink.src);
    Promise.all([image.decode(), eyes.decode()]).then(() => {
      if (cancelled) return;
      renderer.current = createCharacterMesh(node, image, {
        ...motion.canvas, pivot: motion.hand.pivot, amplitudes: [10, 5, .8],
        head: { pivot: motion.head.pivot, weight: (x, y) => meshRegionWeight(x, y, motion.head.outline, 35) },
        weights(x, y) {
          const head = meshRegionWeight(x, y, motion.head.outline, 35);
          const breath = Math.exp(-(((x - 1030) / 210) ** 2) - ((y - 490) / 130) ** 2) * clamp((y - 390) / 85) * clamp((680 - y) / 130) * (1 - head);
          const hair = Math.max(0, 1 - ((x - 810) / 270) ** 4) * clamp((250 - y) / 200) ** 2;
          const forearm = clamp((610 - x) / 220) * clamp((620 - y) / 80);
          return [forearm, breath, hair];
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
      const tiltDegrees = sampleHeadTilt(elapsed) * motion.head.angleDegrees;
      const handAngle = Math.sin(elapsed / motion.hand.periodMs * Math.PI * 2) * Math.min(1, elapsed / 1000) * motion.hand.angleDegrees * Math.PI / 180;
      renderer.current?.draw(handAngle, sampleBreath(elapsed, motion.breath.durationsMs), sampleHair(elapsed), tiltDegrees * Math.PI / 180);
      headEyes.current?.setAttribute("transform", `rotate(${tiltDegrees.toFixed(3)} ${motion.head.pivot.x} ${motion.head.pivot.y})`);
      blink.current?.setAttribute("opacity", sampleBlink(elapsed + 800, motion.blink.intervalsMs, motion.blink.durationMs).toFixed(3));
      request = requestAnimationFrame(draw);
    };
    const visibility = () => { cancelAnimationFrame(request); previous = null; if (!document.hidden) request = requestAnimationFrame(draw); };
    request = requestAnimationFrame(draw); document.addEventListener("visibilitychange", visibility);
    return () => { cancelAnimationFrame(request); document.removeEventListener("visibilitychange", visibility); };
  }, [active, allowed, ready]);
  if (!allowed || !baseSrc) return null;
  return <span className="workshop-resume-motion" data-position="experience" data-ready={ready} data-playing={active && ready} aria-hidden="true">
    <canvas ref={canvas} />
    <svg viewBox={`0 0 ${motion.canvas.width} ${motion.canvas.height}`} focusable="false"><g ref={headEyes}><image ref={blink} href={motion.blink.src} x={motion.blink.x} y={motion.blink.y} width={motion.blink.width} height={motion.blink.height} opacity="0" /></g></svg>
  </span>;
}
