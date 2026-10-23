"use client";

import { motionImage } from "@/lib/workshop/motion-images";

import { useEffect, useRef, useState, type RefObject } from "react";
import motion from "@/lib/workshop/research-motion.json";
import { sampleBlink, sampleBreath, sampleHair, sampleHeadTilt } from "@/lib/workshop/motion-timing";
import { createCharacterMesh, meshRegionWeight } from "./services-mesh";

const clamp = (value: number) => Math.max(0, Math.min(1, value));

/** The near hand traces the page while the far supporting hand stays fixed. */
export function ResearchPositionMotion({ baseSrc, active, foregroundHand }: { baseSrc: string; active: boolean; foregroundHand: RefObject<HTMLCanvasElement | null> }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const renderer = useRef<ReturnType<typeof createCharacterMesh> | null>(null);
  const handRenderer = useRef<ReturnType<typeof createCharacterMesh> | null>(null);
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
    const node = canvas.current, image = motionImage(baseSrc), eyes = motionImage(motion.blink.src), handImage = motionImage(motion.hand.foregroundSrc);
    Promise.all([image.decode(), eyes.decode(), handImage.decode()]).then(() => {
      if (cancelled) return;
      const settings = {
        ...motion.canvas, pivot: motion.hand.pivot, amplitudes: [10, 5, .8] as const,
        head: { pivot: motion.head.pivot, weight: (x: number, y: number) => meshRegionWeight(x, y, motion.head.outline, 35) },
        weights(x: number, y: number): readonly [number, number, number] {
          const head = meshRegionWeight(x, y, motion.head.outline, 35);
          const forearm = meshRegionWeight(x, y, motion.hand.outline, 45) * clamp((y - 690) / 100);
          const breath = Math.exp(-(((x - 710) / 240) ** 2) - ((y - 550) / 140) ** 2) * clamp((y - 430) / 95) * clamp((760 - y) / 130) * (1 - head) * (1 - forearm);
          const hair = Math.max(0, 1 - ((x - 610) / 280) ** 4) * clamp((270 - y) / 220) ** 2;
          return [forearm, breath, hair];
        },
      };
      renderer.current = createCharacterMesh(node, image, settings);
      if (foregroundHand.current) handRenderer.current = createCharacterMesh(foregroundHand.current, handImage, settings);
      handRenderer.current?.draw(motion.hand.restAngleDegrees * Math.PI / 180, 0, 0);
      renderer.current.draw(motion.hand.restAngleDegrees * Math.PI / 180, 0, 0); setReady(true);
    }).catch(() => { /* Keep the approved static picture as the fallback. */ });
    const lost = () => { renderer.current = null; setReady(false); }; node.addEventListener("webglcontextlost", lost);
    return () => { cancelled = true; renderer.current?.dispose(); handRenderer.current?.dispose(); handRenderer.current = null; renderer.current = null; node.removeEventListener("webglcontextlost", lost); };
  }, [allowed, baseSrc, foregroundHand]);
  useEffect(() => {
    const hand = foregroundHand.current;
    const badge = document.querySelector<HTMLElement>('.desktop-workshop [data-object="research"] .workshop-object-name');
    if (!hand || !badge || !ready) return;
    const update = () => {
      const canvasRect = hand.getBoundingClientRect(), label = badge.getBoundingClientRect();
      const left = label.left - canvasRect.left - 1, top = label.top - canvasRect.top - 1;
      const right = label.right - canvasRect.left + 1, bottom = label.bottom - canvasRect.top + 1;
      hand.style.clipPath = `path(evenodd, "M0 0H${canvasRect.width}V${canvasRect.height}H0Z M${left} ${top}H${right}V${bottom}H${left}Z")`;
    };
    const observer = new ResizeObserver(update); observer.observe(hand); observer.observe(badge); update();
    return () => { observer.disconnect(); hand.style.clipPath = ""; };
  }, [foregroundHand, ready]);
  useEffect(() => {
    if (!active || !allowed || !ready) return;
    let request = 0, elapsed = 0;
    let previous: number | null = null;
    const draw = (now: number) => {
      if (document.hidden) { previous = null; return; }
      elapsed += previous === null ? 0 : Math.min(now - previous, 100); previous = now;
      const tiltDegrees = sampleHeadTilt(elapsed) * motion.head.angleDegrees;
      const handAngle = (motion.hand.restAngleDegrees + Math.sin(elapsed / motion.hand.periodMs * Math.PI * 2) * Math.min(1, elapsed / 1000) * motion.hand.angleDegrees) * Math.PI / 180;
      for (const mesh of [renderer.current, handRenderer.current]) mesh?.draw(handAngle, sampleBreath(elapsed, motion.breath.durationsMs), sampleHair(elapsed), tiltDegrees * Math.PI / 180);
      headEyes.current?.setAttribute("transform", `rotate(${tiltDegrees.toFixed(3)} ${motion.head.pivot.x} ${motion.head.pivot.y})`);
      blink.current?.setAttribute("opacity", sampleBlink(elapsed + 800, motion.blink.intervalsMs, motion.blink.durationMs).toFixed(3));
      request = requestAnimationFrame(draw);
    };
    const visibility = () => { cancelAnimationFrame(request); previous = null; if (!document.hidden) request = requestAnimationFrame(draw); };
    request = requestAnimationFrame(draw); document.addEventListener("visibilitychange", visibility);
    return () => { cancelAnimationFrame(request); document.removeEventListener("visibilitychange", visibility); };
  }, [active, allowed, ready]);
  if (!allowed || !baseSrc) return null;
  return <span className="workshop-research-motion" data-position="research" data-ready={ready} data-playing={active && ready} aria-hidden="true">
    <canvas ref={canvas} />
    <svg viewBox={`0 0 ${motion.canvas.width} ${motion.canvas.height}`} focusable="false"><g ref={headEyes}><image ref={blink} href={motion.blink.src} x={motion.blink.x} y={motion.blink.y} width={motion.blink.width} height={motion.blink.height} opacity="0" /></g></svg>
  </span>;
}
