import environment from "@/lib/workshop/environment.json";
import lights from "@/lib/workshop/city-lights.json";

// Coordinates share the existing room master's quarter-resolution plane.
const panes = [
  "1085,299 1172,266 1172,305 1085,340", "1085,347 1172,312 1172,452 1085,460", "1085,468 1172,460 1172,512 1085,508",
  "1182,263 1235,242 1235,281 1182,302", "1182,310 1235,288 1235,450 1182,456", "1182,464 1235,458 1235,519 1182,514",
  "1327,172 1426,131 1426,183 1327,226", "1327,234 1426,191 1426,440 1327,448", "1327,455 1426,448 1426,530 1327,523",
  "1441,182 1536,143 1536,435 1441,442", "1441,450 1536,444 1536,545 1441,535",
];

/** Small CSS-only accents over registered city windows: no video, canvas, timers or new image requests. */
export function WindowLife() {
  const [a,b,c,d] = environment.matrix;
  const transform = `matrix(${a} ${b} ${c} ${d} ${environment.xPercent * 15.36} ${environment.yPercent * 10.24})`;
  return <svg className="workshop-window-life" viewBox="0 0 1536 1024" aria-hidden="true" focusable="false">
    <defs>
      <clipPath id="workshop-window-panes">{panes.map((points, i) => <polygon key={i} points={points} />)}</clipPath>
    </defs>
    <g transform={transform}><g clipPath="url(#workshop-window-panes)">
      <g>{lights.map(({ depth, ...window }, i) => <g key={i} className="workshop-city-window" data-depth={depth}>
        <rect {...window} className="workshop-city-window-dim" fill="#192442" style={{ animationDelay: `${-i * 2.7}s`, animationDuration: `${12 + i % 7 * 1.6}s` }} />
        <rect {...window} className="workshop-city-window-light" fill={i % 3 ? "#ffd595" : "#f9e4b6"} style={{ animationDelay: `${-i * 2.7}s`, animationDuration: `${12 + i % 7 * 1.6}s` }} />
      </g>)}</g>
    </g></g>
  </svg>;
}
