import { desktopImageSizes, imageSrcSet } from "@/lib/workshop/image-sizes";
type CubeLayer = {
  id: string; x: number; y: number; width: number; height: number; heightScale?: number;
  files: { src: string; width: number; height: number }[];
};

/** Only the blue glass changes brightness; the pedestal stays at its original exposure. */
export function ContactCubeMotion({ layer }: { layer: CubeLayer }) {
  const small = layer.files[0], large = layer.files[layer.files.length - 1];
  return <span className="workshop-furniture-piece workshop-blue-cube" data-layer={layer.id}
    style={{ left: `${layer.x}%`, top: `${layer.y}%`, width: `${layer.width}%`, height: `${layer.height * (layer.heightScale ?? 1)}%` }}>
    <picture><source media="(max-width: 899px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
      <img src={small.src} srcSet={imageSrcSet(layer.files)} sizes={desktopImageSizes(layer.width)} width={large.width} height={large.height} fetchPriority="low" alt="" decoding="async" draggable={false} />
    </picture>
    <picture><source media="(max-width: 899px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /><img className="workshop-blue-cube-emitter" src={small.src} srcSet={imageSrcSet(layer.files)} sizes={desktopImageSizes(layer.width)} width={large.width} height={large.height} fetchPriority="low" alt="" aria-hidden="true" decoding="async" draggable={false} /></picture>
  </span>;
}
