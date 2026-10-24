type MugLayer = { x: number; y: number; width: number };

/** Steam shares the mug rim's scene coordinates in both default and attended positions. */
export function MugSteam({ layer }: { layer: MugLayer }) {
  return <svg className="workshop-mug-steam" viewBox="0 0 60 110" fill="none" aria-hidden="true" focusable="false"
    style={{ left: `${layer.x + .15}%`, top: `${layer.y - 5.3}%`, width: `${layer.width * .72}%`, height: "5.6%" }}>
    <path pathLength="100" d="M17 106C6 93 29 82 20 67S10 44 23 28S20 12 18 2" />
    <path pathLength="100" d="M32 106C45 91 20 78 32 62S43 42 31 28S34 13 37 2" />
    <path pathLength="100" d="M43 106C32 92 50 79 43 64S33 45 46 30S43 13 42 2" />
  </svg>;
}
