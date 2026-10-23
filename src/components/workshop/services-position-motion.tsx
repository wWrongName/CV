"use client";

import { useEffect, useRef, useState } from "react";
import motion from "@/lib/workshop/services-motion.json";
import { sampleBlink, sampleBreath, sampleHair } from "@/lib/workshop/motion-timing";
import { createServicesMesh } from "./services-mesh";

/** One continuous texture: rigid forearm, blended elbow and pinned supporting palm. */
export function ServicesPositionMotion({ baseSrc, active }: { baseSrc: string; active: boolean }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const renderer = useRef<ReturnType<typeof createServicesMesh> | null>(null);
  const blink = useRef<SVGImageElement>(null);
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
    if (!allowed || !baseSrc) return;
    let cancelled = false;
    const node = canvas.current;
    if (!node) return;
    const files = motion.gesture.image.files;
    const file = files[node.getBoundingClientRect().width * devicePixelRatio > files[0].width ? 1 : 0];
    const image = new window.Image(), eyelid = new window.Image(); image.src = file.src; eyelid.src = motion.blink.src;
    Promise.all([image.decode(), eyelid.decode()]).then(() => {
      if (cancelled) return;
      renderer.current = createServicesMesh(node, image, { ...motion.canvas, pivot: motion.gesture.pivot, armOutline: motion.gesture.armOutline });
      renderer.current.draw(0, 0, 0); setReady(true);
    }).catch(() => { /* Keep the approved static pose if decoding or GPU setup fails. */ });
    const lost = () => { renderer.current = null; setReady(false); };
    node.addEventListener("webglcontextlost", lost);
    return () => {
      cancelled = true; renderer.current?.dispose(); renderer.current = null;
      node.removeEventListener("webglcontextlost", lost);
    };
  }, [allowed, baseSrc]);
  useEffect(() => {
    if (!active || !allowed || !ready) return;
    let request = 0, elapsed = 0;
    let previous: number | null = null;
    const draw = (now: number) => {
      if (document.hidden) { previous = null; return; }
      elapsed += previous === null ? 0 : Math.min(now - previous, 100); previous = now;
      const angle = Math.sin(elapsed / motion.gesture.periodMs * Math.PI * 2) * Math.min(1, elapsed / 500) * motion.gesture.angleDegrees * Math.PI / 180;
      renderer.current?.draw(angle, sampleBreath(elapsed, motion.breath.durationsMs), sampleHair(elapsed));
      blink.current?.setAttribute("opacity", sampleBlink(elapsed + 1300, motion.blink.intervalsMs, motion.blink.durationMs).toFixed(3));
      request = requestAnimationFrame(draw);
    };
    const visibility = () => { cancelAnimationFrame(request); previous = null; if (!document.hidden) request = requestAnimationFrame(draw); };
    request = requestAnimationFrame(draw); document.addEventListener("visibilitychange", visibility);
    return () => { cancelAnimationFrame(request); document.removeEventListener("visibilitychange", visibility); };
  }, [active, allowed, ready]);
  if (!allowed || !baseSrc) return null;
  return <span className="workshop-services-motion" style={{ width: `${motion.canvas.width / motion.baseWidth * 100}%` }}
    data-position="services" data-ready={ready} data-playing={active && ready} data-gesture="wipe-glass-mesh" aria-hidden="true">
    <canvas ref={canvas} />
    <svg className="workshop-services-eyelid" viewBox={`0 0 ${motion.canvas.width} ${motion.canvas.height}`} focusable="false">
      <image ref={blink} href={motion.blink.src} x={motion.blink.x} y={motion.blink.y} width={motion.blink.width} height={motion.blink.height} opacity="0" />
    </svg>
  </span>;
}
