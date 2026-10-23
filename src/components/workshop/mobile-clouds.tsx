"use client";

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { coverTransform } from "@/lib/workshop/mobile-motion";

const desktopEmpty = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

/** Two identical strips trade places outside the viewport at every loop boundary. */
export function MobileClouds({ active }: { active: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  const [artboard, setArtboard] = useState<CSSProperties>();
  const [allowed, setAllowed] = useState(false);
  const [ready, setReady] = useState(false);
  useLayoutEffect(() => {
    const node = root.current;
    if (!node) return;
    const resize = () => {
      const { width, height } = node.getBoundingClientRect();
      if (!width || !height) return;
      const { scale, x, y } = coverTransform(width, height, 1844 / 853 * 480);
      setArtboard({ width: 480 * scale, height: 1844 / 853 * 480 * scale, left: x, top: y });
    };
    const observer = new ResizeObserver(resize); observer.observe(node); resize();
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 899px) and (prefers-reduced-motion: no-preference)");
    const update = () => setAllowed(media.matches && !document.hidden);
    media.addEventListener("change", update); document.addEventListener("visibilitychange", update); update();
    return () => { media.removeEventListener("change", update); document.removeEventListener("visibilitychange", update); };
  }, []);
  return <div ref={root} className="mobile-cloud-sky" data-playing={active && allowed && ready} aria-hidden="true">
    <div className="mobile-cloud-artboard" style={artboard}>
      <div className="mobile-cloud-track">
        {[0, 1].map(copy => <picture key={copy}>
          <source media="(min-width: 900px)" srcSet={desktopEmpty} />
          <img src="/workshop/mobile-about-clouds-v1.webp" width="768" height="256" alt="" draggable={false} decoding="async" fetchPriority="low"
            onLoad={event => setReady(event.currentTarget.naturalWidth > 1)} />
        </picture>)}
      </div>
    </div>
  </div>;
}
