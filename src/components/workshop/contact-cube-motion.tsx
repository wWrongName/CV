type CubeLayer = {
  id: string; x: number; y: number; width: number; height: number; heightScale?: number;
  files: { src: string; width: number; height: number }[];
};

/** Only the blue glass changes brightness; the pedestal stays at its original exposure. */
export function ContactCubeMotion({ layer }: { layer: CubeLayer }) {
  const [small, large] = layer.files;
  return <span className="workshop-furniture-piece workshop-blue-cube" data-layer={layer.id}
    style={{ left: `${layer.x}%`, top: `${layer.y}%`, width: `${layer.width}%`, height: `${layer.height * (layer.heightScale ?? 1)}%` }}>
    <picture><source media="(max-width: 899px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
      <img src={small.src} srcSet={`${small.src} ${small.width}w, ${large.src} ${large.width}w`} sizes={`${layer.width}vw`} width={large.width} height={large.height} alt="" decoding="async" draggable={false} />
    </picture>
    <picture><source media="(max-width: 899px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /><img className="workshop-blue-cube-emitter" src={small.src} srcSet={`${small.src} ${small.width}w, ${large.src} ${large.width}w`} sizes={`${layer.width}vw`} width={large.width} height={large.height} alt="" aria-hidden="true" decoding="async" draggable={false} /></picture>
  </span>;
}
