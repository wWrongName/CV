import type { CSSProperties } from "react";
import type { Locale } from "@/lib/i18n";
import environment from "@/lib/workshop/environment.json";

const mobileEmpty = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

/** Reuse the 9KB room thumbnail while the independent room items decode. */
export function WorkshopStartupPreview({ ready, locale }: { ready: boolean; locale: Locale }) {
  const style: CSSProperties = {
    left: `${environment.xPercent}%`, top: `${environment.yPercent}%`,
    width: `${environment.widthPercent}%`, height: `${environment.heightPercent}%`,
    transform: `matrix(${environment.matrix.join(",")})`,
  };
  const preview = environment.files[0];
  return <div className="workshop-startup" data-ready={ready} role="status"
    aria-label={locale === "ru" ? "Загрузка мастерской" : "Loading workshop"} aria-hidden={ready}>
    <div className="workshop-startup-stage">
      <picture className="workshop-world" style={style}>
        <source media="(max-width: 899px)" srcSet={mobileEmpty} />
        <img src={preview.src} width={preview.width} height={preview.height} alt="" decoding="async" fetchPriority="high" draggable={false} />
      </picture>
    </div>
    <span className="workshop-startup-spinner" aria-hidden="true" />
    <noscript><style>{`.workshop-startup{display:none}`}</style></noscript>
  </div>;
}
