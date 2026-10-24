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
import { desktopImageSizes } from "@/lib/workshop/image-sizes";
import { motionImage, rememberMotionImage } from "@/lib/workshop/motion-images";
import { reactionTextureFiles } from "@/lib/workshop/reaction-textures";
import type { ObjectId } from "@/lib/workshop/sections";

export type ReactionFrame = {
  x: number; y: number; width: number; replaceObject: boolean;
  asset: { width: number; height: number; files: { src: string; width: number; height: number; bytes: number }[] };
};
export const reactionFrames = frames as Record<ObjectId, ReactionFrame>;

/** The pose changes only after its real image has decoded. No timed reveal. */
export function WorkshopReaction({ target, visible, priority, onReady, onError }: {
  target: ObjectId; visible: boolean; priority: boolean;
  onReady: (id: ObjectId) => void; onError: (id: ObjectId) => void;
}) {
  const frame = reactionFrames[target];
  const ref = useRef<HTMLImageElement>(null);
  const foregroundHand = useRef<HTMLCanvasElement>(null);
  const [baseSrc, setBaseSrc] = useState("");
  const [texturesReady, setTexturesReady] = useState(false);
  const [visited, setVisited] = useState(false);
  const motionMounted = visible || visited;
  useEffect(() => { if (visible) setVisited(true); }, [visible]);
  useEffect(() => {
    setTexturesReady(false);
    if (!baseSrc || !ref.current || ref.current.naturalWidth <= 1 || !window.matchMedia("(min-width: 900px) and (prefers-reduced-motion: no-preference)").matches) return;
    let cancelled = false;
    const files = reactionTextureFiles(target, ref.current.getBoundingClientRect().width, window.devicePixelRatio);
    const textures = files.map(motionImage);
    Promise.all(textures.map(image => image.decode())).then(() => { if (!cancelled) setTexturesReady(true); }).catch(() => {});
    return () => { cancelled = true; };
  }, [baseSrc, target]);
  const [small, large] = frame.asset.files;
  useEffect(() => {
    let cancelled = false;
    const img = ref.current;
    if (img?.complete && img.naturalWidth) img.decode().then(() => { if (!cancelled) { rememberMotionImage(img); setBaseSrc(img.currentSrc || img.src); onReady(target); } }).catch(() => { if (!cancelled) onError(target); });
    return () => { cancelled = true; };
  }, [target, onReady, onError]);
  const behindCounter = target === "about" || target === "blog" || target === "projects";
  const bottomCrop = behindCounter ? Math.max(0, (frame.y - 62.3) / frames[target].height * 100) : 0;
  const position = { clipPath: behindCounter ? `inset(0 0 ${bottomCrop}% 0)` : undefined, left: `${frame.x}%`, top: `${frame.y}%`, width: `${frame.width}%` } as CSSProperties;
  return <><span className="workshop-reaction" style={position} data-pose={target} data-ready={visible} data-textures-ready={texturesReady} data-motion-mounted={motionMounted} aria-hidden="true">
    {motionMounted && target === "experience" && <svg className="workshop-resume-floor-shadow" viewBox="0 0 1371 1100" aria-hidden="true" focusable="false">
      <defs><radialGradient id="resume-sole-shadow"><stop stopColor="#09070b" stopOpacity=".4"/><stop offset="1" stopColor="#09070b" stopOpacity="0"/></radialGradient></defs>
      <ellipse cx="741" cy="1020" rx="137" ry="13" fill="url(#resume-sole-shadow)"/>
      <ellipse cx="1113" cy="1085" rx="103" ry="12" fill="url(#resume-sole-shadow)"/>
    </svg>}
    <picture><source media="(max-width: 899px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
      <img ref={ref} src={small.src} srcSet={`${small.src} ${small.width}w, ${large.src} ${large.width}w`} sizes={desktopImageSizes(frame.width)}
        width={frame.asset.width} height={frame.asset.height} alt="" draggable={false} decoding="async" fetchPriority={priority ? "high" : "low"}
        onLoad={event => { const image = event.currentTarget; image.decode().then(() => { rememberMotionImage(image); setBaseSrc(image.currentSrc || image.src); onReady(target); }).catch(() => onError(target)); }}
        onError={() => onError(target)} />
    </picture>
    {motionMounted && target === "services" && <ServicesPositionMotion baseSrc={baseSrc} active={visible} />}
    {motionMounted && target === "research" && <ResearchPositionMotion baseSrc={baseSrc} active={visible} foregroundHand={foregroundHand} />}
    {motionMounted && target === "contact" && <ContactsPositionMotion baseSrc={baseSrc} active={visible} />}
    {motionMounted && target === "experience" && <ResumePositionMotion baseSrc={baseSrc} active={visible} />}
    {motionMounted && target === "process" && <ProcessPositionMotion baseSrc={baseSrc} active={visible} />}
    {motionMounted && target === "blog" && <BlogPositionMotion baseSrc={baseSrc} active={visible} />}
    {motionMounted && target === "about" && <AboutPositionMotion baseSrc={baseSrc} active={visible} />}
    {motionMounted && target === "projects" && <ProjectsPositionMotion baseSrc={baseSrc} active={visible} />}
  </span>
  {motionMounted && target === "research" && <span className="workshop-reaction-hand" style={position} data-ready={visible} aria-hidden="true"><canvas ref={foregroundHand} /></span>}
  </>;
}
