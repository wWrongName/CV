"use client";

import { useEffect, useRef, useState } from "react";
import { DefaultPositionMotion } from "./default-position-motion";
import { ServicesLight } from "./services-light";
import assets from "@/lib/workshop/assets.json";
import type { ArtId } from "@/lib/workshop/scene";

/** Native image decoding determines appearance. No timers, stagger or opacity gate. */
export function WorkshopArt({ art, eager = false, motionActive = true }: { art: ArtId; eager?: boolean; motionActive?: boolean }) {
  const [failed, setFailed] = useState(false);
  const [baseSrc, setBaseSrc] = useState("");
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (art !== "character" && art !== "services") return;
    let cancelled = false;
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth) image.decode().then(() => {
      if (!cancelled) setBaseSrc(image.currentSrc || image.src);
    }).catch(() => {});
    return () => { cancelled = true; };
  }, [art]);
  const asset = assets[art];
  const [small, large] = asset.files;
  return <span className="workshop-art" data-failed={failed || undefined}>
    {/* Pre-encoded sizes keep alpha sprites cheap and avoid first-request optimization. */}
    <picture><source media="(max-width: 899px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
    <img ref={imageRef} src={small.src} srcSet={`${small.src} ${small.width}w, ${large.src} ${large.width}w`}
      sizes={art === "character" ? "(max-width: 899px) 70vw, 30vw" : "(max-width: 899px) 80px, 16vw"}
      width={asset.width} height={asset.height} alt="" draggable={false}
      loading={eager ? "eager" : "lazy"} decoding="async"
      onLoad={event => { if (art === "character" || art === "services") setBaseSrc(event.currentTarget.currentSrc || event.currentTarget.src); }}
      onError={() => setFailed(true)} /></picture>
  {art === "services" && <ServicesLight src={baseSrc} />}
  {art === "character" && <DefaultPositionMotion baseSrc={baseSrc} active={motionActive} />}
  </span>;
}
