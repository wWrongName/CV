"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ServicesPositionMotion } from "./services-position-motion";
import { ResearchPositionMotion } from "./research-position-motion";
import { ContactsPositionMotion } from "./contacts-position-motion";
import { ResumePositionMotion } from "./resume-position-motion";
import { ProcessPositionMotion } from "./process-position-motion";
import { BlogPositionMotion } from "./blog-position-motion";
import { AboutPositionMotion } from "./about-position-motion";
import { ProjectsPositionMotion } from "./projects-position-motion";
import frames from "@/lib/workshop/reactions.json";
import type { ObjectId } from "@/lib/workshop/sections";

export type ReactionFrame = {
  x: number; y: number; width: number; replaceObject: boolean;
  asset: { width: number; height: number; files: { src: string; width: number; height: number; bytes: number }[] };
};
export const reactionFrames = frames as Record<ObjectId, ReactionFrame>;

/** The pose changes only after its real image has decoded. No timed reveal. */
export function WorkshopReaction({ target, visible, onReady, onError }: {
  target: ObjectId; visible: boolean;
  onReady: (id: ObjectId) => void; onError: (id: ObjectId) => void;
}) {
  const frame = reactionFrames[target];
  const ref = useRef<HTMLImageElement>(null);
  const foregroundHand = useRef<HTMLCanvasElement>(null);
  const [baseSrc, setBaseSrc] = useState("");
  const [small, large] = frame.asset.files;
  useEffect(() => {
    let cancelled = false;
    const img = ref.current;
    if (img?.complete && img.naturalWidth) img.decode().then(() => { if (!cancelled) { setBaseSrc(img.currentSrc || img.src); onReady(target); } }).catch(() => { if (!cancelled) onError(target); });
    return () => { cancelled = true; };
  }, [target, onReady, onError]);
  const behindCounter = target === "about" || target === "blog" || target === "projects";
  const bottomCrop = behindCounter ? Math.max(0, (frame.y - 62.3) / frames[target].height * 100) : 0;
  const position = { clipPath: behindCounter ? `inset(0 0 ${bottomCrop}% 0)` : undefined, left: `${frame.x}%`, top: `${frame.y}%`, width: `${frame.width}%` } as CSSProperties;
  return <><span className="workshop-reaction" style={position} data-pose={target} data-ready={visible} aria-hidden="true">
    {target === "experience" && <svg className="workshop-resume-floor-shadow" viewBox="0 0 1371 1100" aria-hidden="true" focusable="false">
      <defs><radialGradient id="resume-sole-shadow"><stop stopColor="#09070b" stopOpacity=".4"/><stop offset="1" stopColor="#09070b" stopOpacity="0"/></radialGradient></defs>
      <ellipse cx="741" cy="1020" rx="137" ry="13" fill="url(#resume-sole-shadow)"/>
      <ellipse cx="1113" cy="1085" rx="103" ry="12" fill="url(#resume-sole-shadow)"/>
    </svg>}
    <picture><source media="(max-width: 899px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
      <img ref={ref} src={small.src} srcSet={`${small.src} ${small.width}w, ${large.src} ${large.width}w`} sizes={`${frame.width}vw`}
        width={frame.asset.width} height={frame.asset.height} alt="" draggable={false} decoding="async" fetchPriority="high"
        onLoad={event => { const image = event.currentTarget; image.decode().then(() => { setBaseSrc(image.currentSrc || image.src); onReady(target); }).catch(() => onError(target)); }}
        onError={() => onError(target)} />
    </picture>
    {target === "services" && <ServicesPositionMotion baseSrc={baseSrc} active={visible} />}
    {target === "research" && <ResearchPositionMotion baseSrc={baseSrc} active={visible} foregroundHand={foregroundHand} />}
    {target === "contact" && <ContactsPositionMotion baseSrc={baseSrc} active={visible} />}
    {target === "experience" && <ResumePositionMotion baseSrc={baseSrc} active={visible} />}
    {target === "process" && <ProcessPositionMotion baseSrc={baseSrc} active={visible} />}
    {target === "blog" && <BlogPositionMotion baseSrc={baseSrc} active={visible} />}
    {target === "about" && <AboutPositionMotion baseSrc={baseSrc} active={visible} />}
    {target === "projects" && <ProjectsPositionMotion baseSrc={baseSrc} active={visible} />}
  </span>
  {target === "research" && <span className="workshop-reaction-hand" style={position} data-ready={visible} aria-hidden="true"><canvas ref={foregroundHand} /></span>}
  </>;
}
