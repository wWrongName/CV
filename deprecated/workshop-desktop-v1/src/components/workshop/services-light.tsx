"use client";
import { useId } from "react";

/** Registered image patches modulate only the three luminous inner cubes. */
export function ServicesLight({ src }: { src: string }) {
  const id = `cube-light-${useId().replace(/:/g, "")}`;
  if (!src) return null;
  const faces = ["47,103 69,94 86,101 85,123 63,132 47,124", "168,58 204,47 230,55 229,94 192,106 168,95", "316,108 338,98 357,105 356,127 335,136 316,128"];
  return <svg className="workshop-services-light" viewBox="0 0 412 243" aria-hidden="true" focusable="false">
    <defs>{faces.map((points, i) => <clipPath key={i} id={`${id}-${i}`}><polygon points={points} /></clipPath>)}</defs>
    {faces.map((_, i) => <g key={i} clipPath={`url(#${id}-${i})`}><image href={src} width="412" height="243" /></g>)}
  </svg>;
}
