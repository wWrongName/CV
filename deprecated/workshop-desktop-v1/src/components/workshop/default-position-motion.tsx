"use client";

import { useEffect, useId, useRef, useState } from "react";
import motion from "@/lib/workshop/default-motion.json";
import { boundedGaze, sampleBlink, sampleBreath, sampleHair } from "@/lib/workshop/motion-timing";
import { useWorkshopInteraction } from "./interaction-provider";

/** Clips within the default position: chest, hair tips, bounded gaze and eyelids. */
export function DefaultPositionMotion({ baseSrc, active }: { baseSrc: string; active: boolean }) {
  const id = `default-motion-${useId().replace(/:/g, "")}`;
  const { pointer } = useWorkshopInteraction();
  const displacement = useRef<SVGFEDisplacementMapElement>(null);
  const hair = useRef<SVGFEDisplacementMapElement>(null);
  const irises = useRef<SVGGElement>(null);
  const eyelids = useRef<SVGImageElement>(null);
  const svg = useRef<SVGSVGElement>(null);
  const [allowed, setAllowed] = useState(false);
  const [ready, setReady] = useState(false);
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
    const images = [baseSrc, motion.blink.src, motion.breath.field, motion.hair.field, motion.gaze.whites, motion.gaze.irises].map(src => {
      const image = new window.Image(); image.src = src; return image;
    });
    Promise.all(images.map(image => image.decode())).then(() => {
      if (!cancelled) setReady(true);
    }).catch(() => { /* Original artwork remains visible if a clip cannot load. */ });
    return () => { cancelled = true; };
  }, [allowed, baseSrc]);
  useEffect(() => {
    if (!active || !allowed || !ready) return;
    let request = 0;
    let elapsed = 0;
    let previous: number | null = null;
    let gaze = { x: 0, y: 0 };
    let desired = gaze;
    let lastPointer: typeof pointer.current | undefined;
    const draw = (now: number) => {
      if (document.hidden) { previous = null; return; }
      const delta = previous === null ? 0 : Math.min(now - previous, 100);
      elapsed += delta; previous = now;
      const current = pointer.current;
      if (lastPointer !== current) {
        lastPointer = current;
        const bounds = svg.current?.getBoundingClientRect();
        const stage = svg.current?.closest(".workshop-stage")?.getBoundingClientRect();
        desired = current && bounds && stage ? boundedGaze(
          (stage.left + current.x * stage.width - bounds.left - motion.gaze.center.x / motion.canvas.width * bounds.width) / (stage.width * .3),
          (stage.top + current.y * stage.height - bounds.top - motion.gaze.center.y / motion.canvas.height * bounds.height) / (stage.height * .3),
          motion.gaze.maxX, motion.gaze.maxY,
        ) : { x: 0, y: 0 };
      }
      const follow = 1 - Math.exp(-delta / motion.gaze.responseMs);
      gaze = { x: gaze.x + (desired.x - gaze.x) * follow, y: gaze.y + (desired.y - gaze.y) * follow };
      const breath = sampleBreath(elapsed, motion.breath.durationsMs);
      const blink = sampleBlink(elapsed, motion.blink.intervalsMs, motion.blink.durationMs);
      displacement.current?.setAttribute("scale", (breath * motion.breath.scale).toFixed(3));
      hair.current?.setAttribute("scale", (sampleHair(elapsed) * motion.hair.scale).toFixed(3));
      irises.current?.setAttribute("transform", `translate(${gaze.x.toFixed(3)} ${gaze.y.toFixed(3)})`);
      eyelids.current?.setAttribute("opacity", blink.toFixed(3));
      svg.current?.setAttribute("data-blink", blink > .99 ? "closed" : "open");
      svg.current?.setAttribute("data-breath", breath > .75 ? "expanded" : breath < .08 ? "rest" : "moving");
      request = requestAnimationFrame(draw);
    };
    const visibility = () => {
      cancelAnimationFrame(request); previous = null;
      if (!document.hidden) request = requestAnimationFrame(draw);
    };
    request = requestAnimationFrame(draw);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      cancelAnimationFrame(request);
      document.removeEventListener("visibilitychange", visibility);
      displacement.current?.setAttribute("scale", "0");
      hair.current?.setAttribute("scale", "0");
      irises.current?.setAttribute("transform", "translate(0 0)");
      eyelids.current?.setAttribute("opacity", "0");
    };
  }, [active, allowed, ready, pointer]);
  if (!allowed || !baseSrc) return null;
  const padding = motion.hair.padding;
  const mapBounds = { x: -padding, y: -padding, width: motion.canvas.width + padding * 2, height: motion.canvas.height + padding * 2 };
  return <svg ref={svg} className="workshop-idle-motion" viewBox={`0 0 ${motion.canvas.width} ${motion.canvas.height}`}
    data-position="default" data-ready={ready} data-playing={active && ready} aria-hidden="true" focusable="false">
    <defs>
      <clipPath id={`${id}-eyes`}>{motion.gaze.openings.map((points, index) => <polygon key={index} points={points} />)}</clipPath>
      <filter id={id} filterUnits="userSpaceOnUse" {...mapBounds} colorInterpolationFilters="sRGB">
        <feImage href={motion.breath.field} {...mapBounds} preserveAspectRatio="none" result="breathing-map" />
        <feComponentTransfer in="breathing-map" result="neutral-breath-map">
          <feFuncR type="linear" intercept={.5 - 128 / 255} /><feFuncG type="linear" intercept={.5 - 128 / 255} />
        </feComponentTransfer>
        <feDisplacementMap ref={displacement} in="SourceGraphic" in2="neutral-breath-map" scale="0" xChannelSelector="R" yChannelSelector="G" result="breathing-character" />
        <feImage href={motion.hair.field} {...mapBounds} preserveAspectRatio="none" result="hair-map" />
        <feComponentTransfer in="hair-map" result="neutral-hair-map">
          <feFuncR type="linear" intercept={.5 - 128 / 255} /><feFuncG type="linear" intercept={.5 - 128 / 255} />
        </feComponentTransfer>
        <feDisplacementMap ref={hair} in="breathing-character" in2="neutral-hair-map" scale="0" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
    <image href={baseSrc} width={motion.canvas.width} height={motion.canvas.height} filter={`url(#${id})`} />
    <image href={motion.gaze.whites} x={motion.gaze.x} y={motion.gaze.y} width={motion.gaze.width} height={motion.gaze.height} />
    <g clipPath={`url(#${id}-eyes)`}><g ref={irises} data-part="irises"><image href={motion.gaze.irises} x={motion.gaze.x} y={motion.gaze.y} width={motion.gaze.width} height={motion.gaze.height} /></g></g>
    <image ref={eyelids} href={motion.blink.src} x={motion.blink.x} y={motion.blink.y} width={motion.blink.width} height={motion.blink.height} opacity="0" />
  </svg>;
}
