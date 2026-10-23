import { useId } from "react";

/** A plain chevron cutout with a lit lower lip and a recessed upper edge. */
export function CarvedChevron({ direction = "right", tone = "cream", className = "" }: {
  direction?: "left" | "right";
  tone?: "cream" | "dark" | "text";
  className?: string;
}) {
  const id = useId();
  const shape = `${id}-shape`;
  const depth = `${id}-depth`;
  const inset = `${id}-inset`;
  const dark = tone === "dark";
  const text = tone === "text";
  return <svg className={`carved-chevron ${className}`} width="24" height="32" viewBox="0 0 24 32" fill="none" aria-hidden="true" focusable="false">
    <defs>
      <path id={shape} d="M6 5L17 16L6 27L4.6 25.6L14.2 16L4.6 6.4Z"
        transform={direction === "left" ? "translate(24 0) scale(-1 1)" : undefined} />
      <linearGradient id={depth} x1="0" y1="2" x2="0" y2="30" gradientUnits="userSpaceOnUse">
        <stop stopColor={dark ? "#080e12" : "#101923"} /><stop offset="1" stopColor={dark ? "#172124" : "#29333d"} />
      </linearGradient>
      <filter id={inset} x="-25%" y="-25%" width="150%" height="150%" colorInterpolationFilters="sRGB">
        <feOffset in="SourceAlpha" dx=".4" dy=".6" result="shifted" />
        <feComposite in="SourceAlpha" in2="shifted" operator="out" result="innerEdge" />
        <feFlood floodColor="#03070c" floodOpacity=".8" />
        <feComposite in2="innerEdge" operator="in" result="shadow" />
        <feMerge><feMergeNode in="SourceGraphic" /><feMergeNode in="shadow" /></feMerge>
      </filter>
    </defs>
    <use href={`#${shape}`} transform="translate(.4 .6)" fill={text ? "currentColor" : dark ? "#6b7b73" : "#fff9e7"} opacity={text ? .3 : 1} />
    <use href={`#${shape}`} fill={text ? "currentColor" : `url(#${depth})`} stroke={text ? "currentColor" : dark ? "#11191b" : "#9a8467"} strokeWidth=".4" strokeLinejoin="miter" filter={`url(#${inset})`} />
  </svg>;
}
