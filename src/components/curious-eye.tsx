"use client";

import { useEffect, useId, useRef } from "react";

// Bound SVG precision so server and browser math serialize identically.
const coordinate = (value: number) => value.toFixed(3);

export function CuriousEye({ reduced }: { reduced: boolean }) {
  const clipId = useId();
  const eye = useRef<SVGSVGElement>(null);
  const pupil = useRef<SVGGElement>(null);

  useEffect(() => {
    if (reduced) return;
    let frame = 0;
    let heldPointer: number | null = null;
    let trackingMouse = false;
    let targetX = 0, targetY = 0, x = 0, y = 0;
    let restingX = 0, restingY = 0;
    let previous = performance.now();
    let nextGlance = previous + 4500;
    let glanceUntil = 0, glanceX = 0;
    let nextBlink = previous + 1000 + Math.random() * 1000;
    let blinkUntil = 0;
    const aim = (event: PointerEvent) => {
      if (!eye.current) return;
      const bounds = eye.current.getBoundingClientRect();
      const dx = event.clientX - (bounds.left + bounds.width / 2);
      const dy = event.clientY - (bounds.top + bounds.height / 2);
      const distance = Math.hypot(dx, dy);
      const scale = Math.min(distance / 180, 1) / (distance || 1);
      targetX = dx * scale * 10;
      targetY = dy * scale * 5;
    };
    const follow = (event: PointerEvent) => {
      // Touch fixes the gaze at pointerdown, including during a scroll gesture.
      if (heldPointer !== null || event.pointerType !== "mouse") return;
      trackingMouse = true;
      aim(event);
    };
    const hold = (event: PointerEvent) => {
      if (heldPointer !== null) return;
      heldPointer = event.pointerId;
      trackingMouse = event.pointerType === "mouse";
      aim(event);
      restingX = targetX;
      restingY = targetY;
      glanceUntil = 0;
      eye.current?.removeAttribute("data-blinking");
      blinkUntil = 0;
    };
    const release = (event: PointerEvent) => {
      if (event.pointerId !== heldPointer) return;
      heldPointer = null;
      trackingMouse = event.pointerType === "mouse";
      nextGlance = performance.now() + 3500;
      nextBlink = performance.now() + 2000 + Math.random() * 3000;
    };
    const leave = () => { if (heldPointer === null) trackingMouse = false; };
    const reset = () => { heldPointer = null; trackingMouse = false; };
    const animate = (now: number) => {
      const delta = Math.min(now - previous, 50);
      previous = now;
      if (!document.hidden) {
        if (heldPointer === null && !trackingMouse) {
          if (now >= nextGlance) {
            glanceX = (Math.random() < .5 ? -1 : 1) * 7;
            glanceUntil = now + 900;
            nextGlance = now + 6000 + Math.random() * 6000;
          }
          targetX = now < glanceUntil ? glanceX : restingX + Math.sin(now / 1700) * .6;
          targetY = restingY + Math.sin(now / 2300) * .35;
        }
        const ease = 1 - Math.exp(-delta / 150);
        x += (targetX - x) * ease;
        y += (targetY - y) * ease;
        const driftX = heldPointer === null ? Math.sin(now / 730) * .35 + Math.sin(now / 1900) * .25 : 0;
        const driftY = heldPointer === null ? Math.sin(now / 1100) * .25 : 0;
        pupil.current?.setAttribute("transform", `translate(${x + driftX} ${y + driftY})`);
        if (heldPointer === null && now >= nextBlink) {
          eye.current?.setAttribute("data-blinking", "true");
          blinkUntil = now + 130;
          nextBlink = now + 4000 + Math.random() * 5000;
        }
        if (blinkUntil && now >= blinkUntil) {
          eye.current?.removeAttribute("data-blinking");
          blinkUntil = 0;
        }
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    window.addEventListener("pointermove", follow, { passive: true });
    window.addEventListener("pointerdown", hold, { passive: true });
    window.addEventListener("pointerup", release, { passive: true });
    window.addEventListener("pointercancel", release, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    window.addEventListener("blur", reset);
    document.addEventListener("visibilitychange", reset);
    const svg = eye.current;
    const iris = pupil.current;
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", follow);
      window.removeEventListener("pointerdown", hold);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", release);
      document.documentElement.removeEventListener("pointerleave", leave);
      window.removeEventListener("blur", reset);
      document.removeEventListener("visibilitychange", reset);
      svg?.removeAttribute("data-blinking");
      iris?.setAttribute("transform", "translate(0 0)");
    };
  }, [reduced]);

  const outline = "M34 70Q66 43 100 44Q136 43 166 70Q134 96 100 96Q66 96 34 70Z";
  return <svg ref={eye} className="curious-eye" viewBox="0 0 200 140" fill="none" aria-hidden="true">
    <defs><clipPath id={clipId}><path d={outline} /></clipPath></defs>
    <g stroke="currentColor" strokeLinecap="round">
      {/* Uneven rays and doubled cuts echo an engraved print. */}
      {Array.from({ length: 48 }, (_, i) => {
        const angle = i * Math.PI * 2 / 48;
        const inner = 1 + (i % 3) * .035;
        const outer = i % 4 === 0 ? 1.5 : i % 2 === 0 ? 1.35 : 1.22;
        return <path key={i} d={`M${coordinate(100 + Math.cos(angle) * 62 * inner)} ${coordinate(70 + Math.sin(angle) * 36 * inner)}L${coordinate(100 + Math.cos(angle) * 62 * outer)} ${coordinate(70 + Math.sin(angle) * 36 * outer)}`} strokeWidth={i % 4 === 0 ? .85 : .5} opacity={i % 3 === 0 ? .8 : .5} />;
      })}
      <g className="eye-lids">
      <path d="M31 65Q64 35 100 37Q141 35 170 65M37 79Q67 104 101 103Q139 103 163 80" strokeWidth=".8" opacity=".7" />
      <path d="M45 54Q72 33 102 34Q132 34 154 50M51 94Q77 109 102 108Q126 108 149 96" strokeWidth=".5" opacity=".45" />
      <path d={outline} className="engraved-eye-white" strokeWidth="1.5" />
      <g clipPath={`url(#${clipId})`}>
        {Array.from({ length: 19 }, (_, i) => {
          const x = 40 + i * 7;
          return <path key={i} d={`M${x} 43l-5 13M${x} 87l-4 12`} strokeWidth=".55" opacity=".45" />;
        })}
        <g ref={pupil} className="eye-pupil">
          <circle cx="100" cy="70" r="24" strokeWidth="1.1" />
          <circle cx="100" cy="70" r="21" strokeWidth=".6" />
          {Array.from({ length: 40 }, (_, i) => {
            const angle = i * Math.PI * 2 / 40;
            const inner = i % 3 === 0 ? 11 : 13;
            return <path key={i} d={`M${coordinate(100 + Math.cos(angle) * inner)} ${coordinate(70 + Math.sin(angle) * inner)}L${coordinate(100 + Math.cos(angle + .025) * 21)} ${coordinate(70 + Math.sin(angle + .025) * 21)}`} strokeWidth={i % 2 === 0 ? .8 : .45} opacity=".85" />;
          })}
          <circle cx="100" cy="70" r="10" fill="currentColor" strokeWidth=".7" />
          <circle cx="97" cy="66" r="2.2" className="engraved-eye-highlight" stroke="none" />
        </g>
      </g>
      <path d="M34 70Q66 43 100 44Q136 43 166 70" strokeWidth="1.7" />
      <path d="M32 70l-5 2m140-2 5 2" strokeWidth=".8" />
      </g>
    </g>
  </svg>;
}
