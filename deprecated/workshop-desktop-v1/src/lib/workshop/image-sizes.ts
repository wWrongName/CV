/** The stage is clamp(60dvh, 100vw, 150dvh); sprites occupy a percentage of it. */
export function desktopImageSizes(widthPercent: number): string {
  const value = (n: number) => Number(n.toFixed(5));
  return `(max-width: 899px) 1px, clamp(${value(widthPercent * .6)}dvh, ${value(widthPercent)}vw, ${value(widthPercent * 1.5)}dvh)`;
}
export function imageSrcSet(files: readonly { src: string; width: number }[]): string {
  return files.map(file => `${file.src} ${file.width}w`).join(", ");
}
