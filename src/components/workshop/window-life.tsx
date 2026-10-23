import environment from "@/lib/workshop/environment.json";

// Coordinates share the existing room master's quarter-resolution plane.
const panes = [
  "1085,299 1172,266 1172,305 1085,340", "1085,347 1172,312 1172,452 1085,460", "1085,468 1172,460 1172,512 1085,508",
  "1182,263 1235,242 1235,281 1182,302", "1182,310 1235,288 1235,450 1182,456", "1182,464 1235,458 1235,519 1182,514",
  "1327,172 1426,131 1426,183 1327,226", "1327,234 1426,191 1426,440 1327,448", "1327,455 1426,448 1426,530 1327,523",
  "1441,182 1536,143 1536,435 1441,442", "1441,450 1536,444 1536,545 1441,535",
];
const lights = [[1128,388],[1139.5,391],[1128,393.5],[1110.5,402.5],[1129,407],[1112,408.5],[1142,414.5],[1129.5,415],[1156.5,437.5],[1192,366],[1215,385.5],[1213.5,399],[1223,405],[1212.5,413],[1213.5,422],[1217,433],[1366,360],[1377,392],[1460,470]];

/** Small CSS-only accents over the original city: no video, canvas, timers or new image requests. */
export function WindowLife() {
  const [a,b,c,d] = environment.matrix;
  const transform = `matrix(${a} ${b} ${c} ${d} ${environment.xPercent * 15.36} ${environment.yPercent * 10.24})`;
  return <svg className="workshop-window-life" viewBox="0 0 1536 1024" aria-hidden="true" focusable="false">
    <defs>
      <clipPath id="workshop-window-panes">{panes.map((points, i) => <polygon key={i} points={points} />)}</clipPath>
      <clipPath id="workshop-window-sky"><path d="M1050 80H1580V290H1260V350H1050Z" /></clipPath>
    </defs>
    <g transform={transform}><g clipPath="url(#workshop-window-panes)">
      <g clipPath="url(#workshop-window-sky)" fill="#edaa99">
        <path className="workshop-window-cloud cloud-one" d="M1080 333h13v-4h8v-5h12v2h10v5h17v4h19v3h-79z M1165 316h15v-4h8v-5h11v3h9v5h20v4h-63z" />
        <path className="workshop-window-cloud cloud-two" d="M1300 258h18v-3h10v-4h16v3h12v3h24v4h-80z M1410 236h14v-3h13v-3h10v2h14v4h17v3h-68z" />
        <path className="workshop-window-cloud cloud-three" d="M1438 282h15v-3h11v-4h15v2h12v3h24v3h-77z" />
        <g className="workshop-distant-aircraft" transform="translate(1088 345)">
          <path d="M-9 1H-2" stroke="#d5c1b6" strokeWidth=".4" opacity=".25" />
          <path d="M0 1l3.4-.7L4.7-2h.7L5 0l2.4.6-.1.8-2.7.2-1.5 2.2h-.7l.5-2.2-2.9.1z" fill="#e2d3c5" />
        </g>
      </g>
      <g className="workshop-city-traffic"><rect width="1.3" height=".8" fill="#ffe6ad"/><rect x="2.3" width="1.1" height=".8" fill="#f4bc78"/></g>
      <g className="workshop-city-traffic traffic-return"><rect width="1.2" height=".8" fill="#df7c62"/><rect x="2.2" width="1" height=".8" fill="#f7bd85"/></g>
      <g fill="#ffc67b">{lights.map(([x,y], i) => <rect key={i} className="workshop-city-window" x={x} y={y} width={i % 3 === 0 ? 1.8 : 1.4} height={2.2} style={{ animationDelay: `${-i * 2.7}s`, animationDuration: `${5.8 + i % 5 * 1.3}s` }} />)}</g>
    </g></g>
  </svg>;
}
