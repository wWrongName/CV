"use client";

import { useEffect, useRef, useState } from "react";
import { DefaultPositionMotion } from "./default-position-motion";
import { ServicesLight } from "./services-light";
import assets from "@/lib/workshop/assets.json";
import { desktopImageSizes, imageSrcSet } from "@/lib/workshop/image-sizes";
import type { ArtId } from "@/lib/workshop/scene";

/** Native image decoding determines appearance. No timers, stagger or opacity gate. */
export function WorkshopArt({ art, width, eager = false, motionActive = true }: { art: ArtId; width: number; eager?: boolean; motionActive?: boolean }) {
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
  const small = asset.files[0];
  return <span className="workshop-art" data-failed={failed || undefined}>
    {/* Pre-encoded sizes keep alpha sprites cheap and avoid first-request optimization. */}
    <picture><source media="(max-width: 899px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
    <img ref={imageRef} src={small.src} srcSet={imageSrcSet(asset.files)}
      sizes={desktopImageSizes(width)}
      width={asset.width} height={asset.height} alt="" draggable={false}
      loading={eager ? "eager" : "lazy"} decoding="async"
      onLoad={event => { if (art === "character" || art === "services") setBaseSrc(event.currentTarget.currentSrc || event.currentTarget.src); }}
      onError={() => setFailed(true)} /></picture>
  {art === "services" && <ServicesLight src={baseSrc} />}
  {art === "character" && <DefaultPositionMotion baseSrc={baseSrc} active={motionActive} />}
  </span>;
}
