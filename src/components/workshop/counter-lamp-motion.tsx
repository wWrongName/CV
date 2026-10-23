import { desktopImageSizes, imageSrcSet } from "@/lib/workshop/image-sizes";
type Layer = { x: number; y: number; width: number; height: number; files: { src: string; width: number; height: number }[] };

/** The niche lamp and its existing pool of light change together, underneath shelf contents. */
export function CounterLampMotion({ layer }: { layer: Layer }) {
  const small = layer.files[0], large = layer.files[layer.files.length - 1];
  return <span className="workshop-furniture-piece workshop-counter-light" data-layer="counter"
    style={{ left: `${layer.x}%`, top: `${layer.y}%`, width: `${layer.width}%`, height: `${layer.height}%` }}>
    <picture><source media="(max-width: 899px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
      <img src={small.src} srcSet={imageSrcSet(layer.files)} sizes={desktopImageSizes(layer.width)} width={large.width} height={large.height} alt="" decoding="async" draggable={false} />
    </picture>
    <svg className="workshop-contact-lamp-light" viewBox="0 0 1000 250" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <defs><radialGradient id="workshop-contact-lamp-falloff"><stop stopColor="white" /><stop offset=".45" stopColor="white" /><stop offset="1" stopColor="black" /></radialGradient>
        <mask id="workshop-contact-lamp-mask"><ellipse cx="445" cy="87" rx="116" ry="91" fill="url(#workshop-contact-lamp-falloff)" /></mask></defs>
      <image className="workshop-contact-lamp-pulse" href={large.src} width="1000" height="250" preserveAspectRatio="none" mask="url(#workshop-contact-lamp-mask)" />
    </svg>
  </span>;
}
