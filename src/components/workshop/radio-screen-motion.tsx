"use client";
import { desktopImageSizes, imageSrcSet } from "@/lib/workshop/image-sizes";
import { useEffect, useId, useRef } from "react";

type RadioLayer = { x: number; y: number; width: number; height: number; files: { src: string; width: number; height: number }[] };

/** The receiver remains a static prop; only its inset LCD signal changes. */
export function RadioScreenMotion({ layer }: { layer: RadioLayer }) {
  const id = `radio-screen-${useId().replace(/:/g, "")}`;
  const wave = useRef<SVGPathElement>(null), interference = useRef<SVGGElement>(null);
  const small = layer.files[0], large = layer.files[layer.files.length - 1];
  useEffect(() => {
    const media = matchMedia("(min-width: 900px) and (prefers-reduced-motion: no-preference)");
    let frame = 0, last = 0;
    const draw = (now: number) => {
      if (!media.matches || document.hidden) return;
      if (now - last > 65) {
        last = now;
        const t = now / 1000, phase = t % 9.7;
        const hiss = (phase > 6.1 && phase < 6.45) || (phase > 7.2 && phase < 7.35);
        const points = Array.from({ length: 64 }, (_, i) => {
          const amplitude = 8 + Math.sin(t * .7) * 3;
          const signal = Math.sin(i * .57 - t * 3.4) * .65 + Math.sin(i * 1.16 - t * 5.1) * .35;
          const noise = hiss ? Math.sin(i * 7.13 + t * 57) * 6 : 0;
          return `${i ? "L" : "M"}${(164 + i * 1.15).toFixed(2)} ${(157 + signal * amplitude + noise).toFixed(2)}`;
        }).join(" ");
        wave.current?.setAttribute("d", points);
        interference.current?.setAttribute("opacity", hiss ? ".45" : "0");
      }
      frame = requestAnimationFrame(draw);
    };
    const update = () => { cancelAnimationFrame(frame); if (media.matches && !document.hidden) frame = requestAnimationFrame(draw); };
    update(); media.addEventListener("change", update); document.addEventListener("visibilitychange", update);
    return () => { cancelAnimationFrame(frame); media.removeEventListener("change", update); document.removeEventListener("visibilitychange", update); };
  }, []);
  return <span className="workshop-furniture-piece workshop-radio" data-layer="receiver"
    style={{ left: `${layer.x}%`, top: `${layer.y}%`, width: `${layer.width}%`, height: `${layer.height}%` }}>
    <picture><source media="(max-width: 899px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
      <img src={small.src} srcSet={imageSrcSet(layer.files)} sizes={desktopImageSizes(layer.width)} width={large.width} height={large.height} alt="" decoding="async" draggable={false} />
    </picture>
    <svg className="workshop-radio-screen" viewBox="0 0 371 268" aria-hidden="true" focusable="false">
      <defs><clipPath id={id}><path d="M164 130L239 131L238 186L163 185Z" /></clipPath>
        <linearGradient id={`${id}-lcd`} x2="0" y2="1"><stop stopColor="#28bed9" /><stop offset=".5" stopColor="#57d4e3" /><stop offset="1" stopColor="#28b2cb" /></linearGradient>
      </defs>
      <g clipPath={`url(#${id})`}>
        <path fill={`url(#${id}-lcd)`} d="M160 127H243V190H160Z" />
        {Array.from({ length: 14 }, (_, i) => <path key={i} d={`M161 ${131 + i * 4}H241`} stroke="#083e56" strokeOpacity=".09" strokeWidth="1" />)}
        <path ref={wave} d="M164 157L175 153L181 164L188 147L196 168L204 145L212 165L221 151L236 157" fill="none" stroke="#063f57" strokeWidth="2.4" strokeLinejoin="round" />
        <g ref={interference} opacity="0"><path d="M162 144H240M162 173H240" stroke="#d0f4ee" strokeWidth="2" /><path d="M167 147H235M165 175H240" stroke="#174e67" strokeWidth="1" /></g>
      </g>
    </svg>
  </span>;
}
