import preview from "@/lib/workshop/default-scene-preview.json";

const mobileEmpty = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

/** A captured default room on the same coordinate plane as the living scene. */
export function WorkshopStartupPreview({ ready }: { ready: boolean }) {
  return <><picture className="workshop-startup" data-ready={ready} aria-hidden="true"
    style={{ left: `${preview.x}%`, top: `${preview.y}%`, width: `${preview.width}%`, height: `${preview.height}%` }}>
    <source media="(max-width: 899px)" srcSet={mobileEmpty} />
    <img src={preview.file.src} width={preview.file.width} height={preview.file.height} alt="" decoding="async" fetchPriority="high" draggable={false} />
  </picture>
    <noscript><style>{`.workshop-startup{display:block;opacity:1;visibility:visible}.desktop-workshop[data-scene-ready=false] .workshop-stage :is(.workshop-world,.workshop-environment-tile,.workshop-furniture-piece,.workshop-art,.workshop-window-life,.workshop-reaction,.workshop-reaction-hand,.workshop-mug-steam){opacity:1}`}</style></noscript>
  </>;
}
