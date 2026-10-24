import { desktopImageSizes, imageSrcSet } from "@/lib/workshop/image-sizes";
import { DogSleepMotion } from "./dog-sleep-motion";
import { MugSteam } from "./mug-steam";
import { FoliageMotion } from "./foliage-motion";
import { RadioScreenMotion } from "./radio-screen-motion";
import { ContactCubeMotion } from "./contact-cube-motion";
import layers from "@/lib/workshop/furniture.json";

type Layer = {
  id: string; x: number; y: number; width: number; height: number;
  /** Explicit art-direction adjustment; default keeps native proportions. */
  heightScale?: number;
  nativeWidth: number; nativeHeight: number;
  files: { src: string; width: number; height: number; bytes: number }[];
};

/** Furniture has its own native-resolution files and shares the prop coordinate plane. */
export function WorkshopFurniture({ active }: { active: string | null }) {
  return <div className="workshop-furniture" aria-hidden="true">{(layers as Layer[]).map(layer => {
    if (layer.id === "telegram-cube" || layer.id === "email-cube") return <ContactCubeMotion key={layer.id} layer={layer} />;
    if (layer.id === "receiver") return <RadioScreenMotion key={layer.id} layer={layer} />;
    if (["vine-left", "vine-sign", "window-plant"].includes(layer.id)) return <FoliageMotion key={layer.id} layer={layer} />;
    if (layer.id === "dog") return <DogSleepMotion key={layer.id} layer={layer} />;
    const small = layer.files[0], large = layer.files[layer.files.length - 1];
    const accessories = layer.id.startsWith("desk-accessories");
    return <picture key={layer.id} className={`workshop-furniture-piece${accessories ? " workshop-desk-accessories" : ""}`}
      data-layer={layer.id} style={{ left: `${layer.x}%`, top: `${layer.y}%`, width: `${layer.width}%`, height: `${layer.height * (layer.heightScale ?? 1)}%`, visibility: (accessories && !active) ? "hidden" : undefined }}>
      <source media="(max-width: 899px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
      <img src={small.src} srcSet={imageSrcSet(layer.files)} sizes={desktopImageSizes(layer.width)}
        width={large.width} height={large.height} fetchPriority="low" alt="" loading="eager" decoding="async" draggable={false} />
    </picture>;
  })}<MugSteam layer={(layers as Layer[]).find(layer => layer.id === "desk-accessories-mug")!} /></div>;
}
