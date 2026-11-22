import { drawPortrait, portraitMarks, tracePortrait } from './cover-brand-portraits.js';
import { motionMarks } from './cover-brand-motion.js';

const initials = [
  '10001 10001 10001',
  '10001 10001 11001',
  '10001 10001 11001',
  '10101 10101 10101',
  '10101 10101 10011',
  '11011 11011 10011',
  '01010 01010 10001',
];

const singleW = [[3, 5], [9, 21], [16, 10], [23, 21], [29, 5]];
const profile = [[26, 24], [22, 20], [22, 16], [25, 11], [25, 8], [23, 4], [19, 2.5], [13, 2.5], [8, 5], [7, 9], [3.5, 13], [7, 14], [7, 16], [9, 17], [8, 19], [11, 21], [15, 21], [16, 24]];

function dot(ctx, x, y, radius = 1.1) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function path(ctx, points) {
  ctx.beginPath();
  ctx.moveTo(...points[0]);
  for (const point of points.slice(1)) ctx.lineTo(...point);
  ctx.stroke();
}

function dottedPath(ctx, points) {
  for (let i = 1; i < points.length; i += 1) {
    const [x, y] = points[i - 1];
    const [endX, endY] = points[i];
    const steps = Math.ceil(Math.hypot(endX - x, endY - y) / 3);
    for (let step = 0; step < steps; step += 1) {
      dot(ctx, x + (endX - x) * step / steps, y + (endY - y) * step / steps);
    }
  }
  dot(ctx, ...points.at(-1));
}

function dottedInitials(ctx, square = false) {
  initials.forEach((row, y) => {
    Array.from(row).forEach((cell, x) => {
      if (cell !== '1') return;
      const column = 3 + x * 3.6;
      const line = 2.2 + y * 3.6;
      if (square) ctx.fillRect(column - 1.65, line - 1.65, 3.3, 3.3);
      else dot(ctx, column, line);
    });
  });
}

function fillShape(ctx, points) {
  ctx.beginPath();
  ctx.moveTo(...points[0]);
  for (const point of points.slice(1)) ctx.lineTo(...point);
  ctx.closePath();
  ctx.fill();
}

function geometricWordmark(ctx, pixelEdge = false) {
  const w = [[0, 4], [3.7, 4], [7.8, 16], [11.6, 7.7], [15.4, 16], [19.5, 4], [23.2, 4], [17, 22], [14, 22], [11.6, 16.6], [9.2, 22], [6.2, 22]];
  for (const left of [2, 26.4]) fillShape(ctx, w.map(([x, y]) => [left + x, y]));
  fillShape(ctx, [[52, 22], [52, 4], [55.1, 4], [66.6, 16.3], [66.6, pixelEdge ? 11 : 4], [70.2, pixelEdge ? 11 : 4], [70.2, 22], [67.2, 22], [55.6, 9.7], [55.6, 22]]);
  if (pixelEdge) {
    ctx.fillRect(66.6, 8, 1.6, 1.6);
    ctx.fillRect(69, 6, 1.5, 1.5);
    ctx.fillRect(71.1, 3.6, 1.3, 1.3);
  }
}

function trackedText(ctx, text, x, baseline, spacing) {
  for (const letter of text) {
    ctx.fillText(letter, x, baseline);
    x += ctx.measureText(letter).width + spacing;
  }
}

const original = { id: 'default', width: 64, draw: dottedInitials };
const designs = [
  { id: 'dots', name: 'WWN со следом', width: 68, draw(ctx) {
    ctx.save();
    ctx.translate(2, -.8);
    ctx.globalAlpha = .31;
    dottedInitials(ctx);
    ctx.restore();
    dottedInitials(ctx);
  } },
  { id: 'pixel', name: 'Пиксельный WWN', width: 64, draw: ctx => dottedInitials(ctx, true) },
  { id: 'constellation', name: 'Созвездие W', draw: ctx => dottedPath(ctx, singleW) },
  { id: 'trace', name: 'Проводник', draw(ctx) {
    ctx.lineWidth = 1.6;
    path(ctx, singleW);
    dot(ctx, ...singleW[0], 1.75);
    dot(ctx, ...singleW.at(-1), 1.75);
  } },
  { id: 'brackets', name: 'W в скобках', width: 42, draw(ctx) {
    path(ctx, [[9, 4], [3, 4], [3, 22], [9, 22]]);
    path(ctx, [[33, 4], [39, 4], [39, 22], [33, 22]]);
    ctx.lineWidth = 2;
    path(ctx, [[9, 8], [14, 18], [21, 10], [28, 18], [33, 8]]);
  } },
  { id: 'node', name: 'Узел', draw(ctx) {
    path(ctx, [[16, 12], [8, 4], [3, 4]]);
    path(ctx, [[16, 12], [24, 4], [29, 4]]);
    path(ctx, [[16, 12], [16, 22]]);
    for (const [x, y] of [[3, 4], [29, 4], [16, 22]]) dot(ctx, x, y, 1.45);
    dot(ctx, 16, 12, 2.6);
  } },
  { id: 'signal', name: 'Штриховой знак', draw(ctx) {
    ctx.lineWidth = 1.9;
    ctx.lineCap = 'butt';
    ctx.setLineDash([3, 2.4]);
    path(ctx, singleW);
    path(ctx, [[10.5, 23], [16, 14], [21.5, 23]]);
  } },
  { id: 'profile', name: 'Контур головы', draw(ctx) {
    path(ctx, profile);
    dot(ctx, 10, 11, .95);
    path(ctx, [[6, 24], [16, 24]]);
    path(ctx, [[26, 24], [29, 24]]);
  } },
  { id: 'face-dots', name: 'Точечный профиль', draw(ctx) {
    dottedPath(ctx, profile);
    for (const [x, y, radius] of [[10, 10, .95], [14, 7, .65], [18, 6, .7], [21, 8, .7], [18, 10, .75], [19, 14, .85], [14, 14, .65], [12, 17, .75], [22, 11, .7]]) {
      dot(ctx, x, y, radius);
    }
  } },
  { id: 'scatter', name: 'Распад W', width: 42, draw(ctx) {
    dottedPath(ctx, [[3, 5], [9, 21], [16, 10], [23, 21], [26.5, 11.5]]);
    for (const [x, y, radius] of [[27, 8, 1.1], [28, 4, .8], [30, 6, .65], [32, 3, .75], [33, 8, .55], [35, 12, .85], [31, 13, .65], [30, 18, .9], [33, 21, .65], [38, 5, .6], [39, 9, .45], [38, 16, .65]]) {
      dot(ctx, x, y, radius);
    }
  } },
];

const wordmarks = [
  { id: 'geometric', name: 'Плотный WWN', width: 74, draw: geometricWordmark },
  { id: 'studio-signature', name: 'Подпись студии', width: 118, draw(ctx) {
    ctx.save();
    ctx.translate(0, 2.6);
    ctx.scale(.8, .8);
    geometricWordmark(ctx);
    ctx.restore();
    ctx.fillRect(63, 5, .7, 16);
    ctx.font = '600 7px Arial, sans-serif';
    trackedText(ctx, 'IT', 70, 11.2, .75);
    trackedText(ctx, 'SOLUTIONS', 70, 19.5, .68);
  } },
  { id: 'serif', name: 'WWN с засечками', width: 69, draw(ctx) {
    ctx.font = 'bold 22px Georgia, serif';
    trackedText(ctx, 'WWN', 1.3, 21, -.8);
  } },
  { id: 'pixel-edge', name: 'WWN с пиксельным краем', width: 76, draw: ctx => geometricWordmark(ctx, true) },
];

const symbols = [
  { id: 'disc-fragment', name: 'Диск и частица', draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(13.2, 13, 10.5, 0, Math.PI * 2);
    ctx.clip();
    fillShape(ctx, [[2, 2], [26, 2], [26, 8], [21, 8], [21, 11], [18.2, 11], [18.2, 15], [21, 15], [21, 18], [26, 18], [26, 24], [2, 24]]);
    ctx.restore();
    ctx.fillRect(25, 11.2, 3.6, 3.6);
  } },
  { id: 'facets', name: 'Две плоскости', draw(ctx) {
    fillShape(ctx, [[4, 10.5], [17.5, 2.5], [30, 2.5], [16.5, 10.5]]);
    fillShape(ctx, [[2, 14.5], [16.5, 14.5], [28.5, 7.3], [28.5, 15], [15, 23.5], [2, 23.5]]);
  } },
  { id: 'aperture', name: 'Просвет', draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(16, 1.6);
    ctx.lineTo(30, 13);
    ctx.lineTo(16, 24.4);
    ctx.lineTo(2, 13);
    ctx.closePath();
    ctx.moveTo(10.5, 15.5);
    ctx.lineTo(15.2, 8.2);
    ctx.lineTo(22.5, 10.5);
    ctx.lineTo(17.8, 17.8);
    ctx.closePath();
    ctx.fill('evenodd');
  } },
  { id: 'layers', name: 'Слои', draw(ctx) {
    fillShape(ctx, [[5, 3], [29, 3], [25, 8], [1, 8]]);
    fillShape(ctx, [[8, 10.5], [27, 10.5], [23, 15.5], [4, 15.5]]);
    fillShape(ctx, [[11, 18], [25, 18], [21, 23], [7, 23]]);
  } },
];

const frames = [
  { id: 'frame-open', name: 'Открытая рамка', draw(ctx) {
    ctx.lineWidth = 1.6;
    ctx.lineCap = 'butt';
    path(ctx, [[21, 3], [5, 3], [5, 23], [25, 23], [25, 12]]);
    ctx.fillRect(23.4, 2.2, 3.2, 3.2);
  } },
  { id: 'frame-offset', name: 'Двойной кадр', width: 34, draw(ctx) {
    ctx.lineCap = 'butt';
    path(ctx, [[26, 17], [26, 6], [4, 6], [4, 23], [21, 23]]);
    path(ctx, [[9, 10], [9, 3], [30, 3], [30, 20], [14, 20]]);
  } },
  { id: 'frame-medallion', name: 'Профиль в круге', draw(ctx) {
    dot(ctx, 16, 13, 11.5);
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.translate(4, 2.7);
    ctx.scale(.79, .86);
    tracePortrait(ctx);
    ctx.fill();
    ctx.restore();
  } },
  { id: 'frame-exit', name: 'Выход из кадра', width: 39, draw(ctx) {
    ctx.lineWidth = 1.2;
    path(ctx, [[26, 3], [4, 3], [4, 23], [26, 23]]);
    ctx.save();
    ctx.translate(16.5, 2.25);
    ctx.scale(.87, .92);
    drawPortrait(ctx);
    ctx.restore();
  } },
  { id: 'frame-fold', name: 'Складка', draw(ctx) {
    fillShape(ctx, [[3, 3], [16, 3], [12, 22.6], [3, 18.7]]);
    fillShape(ctx, [[19.2, 3], [28, 7], [28, 23], [15.2, 23]]);
  } },
  { id: 'frame-fragment', name: 'Осколок рамки', draw(ctx) {
    ctx.lineWidth = 1.8;
    ctx.lineCap = 'butt';
    path(ctx, [[19.5, 3.2], [5.1, 3.2], [5.1, 22.8], [24.7, 22.8], [24.7, 9.1]]);
    fillShape(ctx, [[23, 2.1], [28.5, 2.1], [28.5, 7.6]]);
  } },
];

const coverPortraits = [
  { id: 'model-head', name: 'Портрет с обложки', image: './sculpt/header-head-ivory.webp', draw(ctx, image) {
    ctx.drawImage(image, 3, 0, 26, 26);
  } },
  { id: 'model-frame', name: 'Портрет в кадре', image: './sculpt/header-head-cut.webp', draw(ctx, image) {
    ctx.drawImage(image, 4.5, 1.5, 23, 23);
    ctx.lineWidth = .85;
    ctx.lineCap = 'butt';
    path(ctx, [[4.1, 8], [4.1, 2.5], [10.8, 2.5]]);
    path(ctx, [[21.2, 23.5], [27.9, 23.5], [27.9, 18]]);
  } },
  { id: 'model-grains', name: 'Портрет и частицы', width: 38, image: './sculpt/header-head-cut.webp', draw(ctx, image) {
    ctx.save();
    ctx.clip(new Path2D('M0 0H21V6H19.5V12H23V17H19.7V21H22V26H0Z'));
    ctx.drawImage(image, 0, 0, 26, 26);
    ctx.restore();
    for (const [x, y, size] of [[23, 4.5, 1.3], [25.5, 9, 1.8], [28.5, 13.5, 1.6], [23.5, 16, 1.6], [31.5, 11.6, 1.1], [34, 17.5, .9]]) {
      ctx.fillRect(x, y, size, size);
    }
  } },
];

// Geometry of the site's existing favicon, recolored for the cover.
const frontLink = 'M27 38l-5 5a10 10 0 0 1-14-14l12-12a10 10 0 0 1 14 0';
const rearLink = 'M37 26l5-5a10 10 0 0 1 14 14L44 47a10 10 0 0 1-14 0';
const linkBridge = 'M22 42l20-20';
export const linkOutline = frontLink + rearLink + linkBridge;

function drawLink(ctx, dotted = false, x = 1, y = -2.1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(.48, .48);
  ctx.lineWidth = 4;
  if (dotted) ctx.setLineDash([.1, 5.1]);
  ctx.stroke(new Path2D(linkOutline));
  ctx.restore();
}

const siteLinks = [
  { id: 'link-classic', name: 'Исходная форма', draw: drawLink },
  { id: 'link-dots', name: 'Точечный контур', draw: ctx => drawLink(ctx, true) },
  { id: 'link-grains', name: 'Частицы на краю', width: 38, draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, 24.3, 26);
    ctx.clip();
    drawLink(ctx);
    ctx.restore();
    for (const [x, y, size] of [[25.3, 10, 1.7], [28.5, 11.3, 1.55], [26.1, 15, 1.7], [30.8, 15, 1.35], [34.5, 13.1, 1.1], [32.3, 18, .9]]) {
      ctx.fillRect(x, y, size, size);
    }
  } },
  { id: 'link-trail', name: 'След в движении', width: 41, draw(ctx) {
    drawLink(ctx);
    ctx.globalAlpha = .76;
    path(ctx, [[29.7, 9.2], [35, 9.2]]);
    path(ctx, [[31.7, 12.9], [38.6, 12.9]]);
    ctx.globalAlpha = .55;
    dot(ctx, 31.5, 17, .9);
    dot(ctx, 36.4, 17, .65);
    ctx.globalAlpha = 1;
  } },
];

let flatLinkGeometry;

function getFlatLinkGeometry() {
  if (flatLinkGeometry) return flatLinkGeometry;

  const transform = new DOMMatrix([.48, 0, 0, .48, 1, -2.1]);
  const toMark = outline => {
    const result = new Path2D();
    result.addPath(new Path2D(outline), transform);
    return result;
  };
  const shape = toMark(linkOutline);
  const front = toMark(frontLink + linkBridge);
  const rear = toMark(rearLink);
  const mask = document.createElement('canvas').getContext('2d');
  mask.lineWidth = 4.25;
  mask.lineCap = 'round';
  mask.lineJoin = 'round';

  const sample = (outline, step, offset = 0) => {
    const particles = [];
    for (let y = 2.2; y < 25; y += step) {
      for (let x = 2.2 + offset; x < 31; x += step) {
        if (mask.isPointInStroke(outline, x, y)) particles.push({ x, y });
      }
    }
    return particles;
  };
  flatLinkGeometry = { front, dots: sample(shape, 2), rearDots: sample(rear, 1.9, .45) };
  return flatLinkGeometry;
}

const flatLinks = [
  { id: 'link-flat-dot-field', name: 'Сетка точек', draw(ctx) {
    for (const { x, y } of getFlatLinkGeometry().dots) dot(ctx, x, y, .77);
  } },
  { id: 'link-flat-solid-dot', name: 'Цельное звено и растр', draw(ctx) {
    const { front, rearDots } = getFlatLinkGeometry();
    for (const { x, y } of rearDots) dot(ctx, x, y, .71);
    ctx.lineWidth = 3.8;
    ctx.stroke(front);
  } },
  { id: 'link-flat-wave', name: 'Волна по знаку', animate: true, draw(ctx, progress = 0) {
    const envelope = Math.sin(Math.PI * progress);
    for (const { x, y } of getFlatLinkGeometry().dots) {
      const distance = (x / 32 - progress) * 6;
      const wave = envelope * Math.exp(-(distance * distance));
      ctx.fillRect(x - .7 + wave * 1.2, y - .7 - wave * .85, 1.4, 1.4);
    }
  } },
];

let linkModuleCenters;

function getLinkModuleCenters() {
  if (linkModuleCenters) return linkModuleCenters;

  const centers = [];
  const contour = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  for (const [outline, intervals] of [[frontLink, 8], [rearLink, 8], [linkBridge, 4]]) {
    contour.setAttribute('d', outline);
    const length = contour.getTotalLength();
    for (let index = 0; index <= intervals; index += 1) {
      const { x, y } = contour.getPointAtLength(length * index / intervals);
      const center = { x: 1 + x * .48, y: -2.1 + y * .48 };
      if (!centers.some(point => Math.hypot(point.x - center.x, point.y - center.y) < 2.35)) centers.push(center);
    }
  }
  linkModuleCenters = centers;
  return centers;
}

function drawLinkModules(ctx, drawModule) {
  for (const { x, y } of getLinkModuleCenters()) drawModule(ctx, x, y);
}

function drawMiniatureLinks(ctx, progress = 0) {
  const link = new Path2D(linkOutline);
  const movement = Math.sin(Math.PI * progress);
  ctx.lineWidth = 6.8;
  drawLinkModules(ctx, (brush, x, y) => {
    const distance = (x / 32 - progress) * 5;
    const wave = movement * Math.exp(-(distance * distance));
    brush.save();
    brush.translate(x, y);
    brush.rotate(wave * 1.2);
    brush.scale(.058, .058);
    brush.translate(-32, -32);
    brush.stroke(link);
    brush.restore();
  });
}

const modularLinks = [
  { id: 'link-modular-disc', name: 'Круги', draw: ctx => drawLinkModules(ctx, (brush, x, y) => dot(brush, x, y, 1.24)) },
  { id: 'link-modular-ring', name: 'Кольца', draw(ctx) {
    ctx.lineWidth = .55;
    drawLinkModules(ctx, (brush, x, y) => {
      brush.beginPath();
      brush.arc(x, y, 1.03, 0, Math.PI * 2);
      brush.stroke();
    });
  } },
  { id: 'link-modular-square', name: 'Квадраты', draw: ctx => drawLinkModules(ctx, (brush, x, y) => brush.fillRect(x - 1.15, y - 1.15, 2.3, 2.3)) },
  { id: 'link-modular-repeat', name: 'Повторы знака', animate: true, draw: drawMiniatureLinks },
];

const fieldCells = 23;
const fieldStep = 24 / fieldCells;
const fieldSamples = new WeakMap();
let linkField;

function getPortraitField(image) {
  const cached = fieldSamples.get(image);
  if (cached) return cached;
  const canvas = document.createElement('canvas');
  canvas.width = fieldCells;
  canvas.height = fieldCells;
  const ctx = canvas.getContext('2d');
  const padding = 1.25;
  const size = fieldCells - padding * 2;
  ctx.drawImage(image, padding, padding, size, size);
  const pixels = ctx.getImageData(0, 0, fieldCells, fieldCells).data;
  const field = Array.from({ length: fieldCells * fieldCells }, (_, i) => Math.pow(pixels[i * 4 + 3] / 255, .82));
  fieldSamples.set(image, field);
  return field;
}

function getLinkField() {
  if (linkField) return linkField;
  const symbol = new Path2D();
  symbol.addPath(new Path2D(linkOutline), new DOMMatrix([.37, 0, 0, .37, .9, .9]));
  const probe = document.createElement('canvas').getContext('2d');
  probe.lineWidth = 3.4;
  probe.lineCap = 'round';
  probe.lineJoin = 'round';
  linkField = Array.from({ length: fieldCells * fieldCells }, (_, i) => {
    const x = 1 + (i % fieldCells + .5) * fieldStep;
    const y = 1 + (Math.floor(i / fieldCells) + .5) * fieldStep;
    return probe.isPointInStroke(symbol, x, y) ? 1 : 0;
  });
  return linkField;
}

function drawParticleField(ctx, field, progress, ascii = false) {
  const glyphs = ['·', ':', '+', 'x', '*', '#', '@'];
  const pulse = Math.sin(Math.PI * progress);
  if (ascii) {
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
  }
  field.forEach((value, i) => {
    const col = i % fieldCells;
    const row = Math.floor(i / fieldCells);
    const x = 1 + (col + .5) * fieldStep;
    const y = 1 + (row + .5) * fieldStep;
    const distance = (col / fieldCells + row / fieldCells * .28 - progress * 1.28) * 7;
    const wave = pulse * Math.exp(-(distance * distance));
    const strength = Math.min(1, value + wave * .28);
    ctx.globalAlpha = .23 + .77 * strength;
    if (ascii) {
      ctx.font = `600 ${.48 + strength * .78}px monospace`;
      ctx.fillText(glyphs[Math.round(strength * (glyphs.length - 1))], x, y + .06);
    } else {
      dot(ctx, x + wave * value * .28, y, .11 + .34 * strength);
    }
  });
  ctx.globalAlpha = 1;
}

const particleFields = [
  { id: 'model-field-dots', name: 'Портрет из точек', width: 26, image: './sculpt/header-head-cut.webp', animate: true, duration: 920, draw(ctx, image, progress) {
    drawParticleField(ctx, getPortraitField(image), progress);
  } },
  { id: 'model-field-ascii', name: 'Портрет из ASCII', width: 26, image: './sculpt/header-head-cut.webp', animate: true, duration: 920, draw(ctx, image, progress) {
    drawParticleField(ctx, getPortraitField(image), progress, true);
  } },
  { id: 'link-field-dots', name: 'Звенья в квадрате', width: 26, animate: true, duration: 920, draw(ctx, progress) {
    drawParticleField(ctx, getLinkField(), progress);
  } },
];

const blockLink = { id: 'link-block', name: 'Угловатые звенья', width: 34, draw(ctx) {
  const front = [[15.6, 16], [11.1, 20.5], [7.1, 20.5], [3.9, 17.3], [3.9, 13.6], [12.3, 5.2], [16.6, 5.2], [19.1, 7.7]];
  ctx.lineWidth = 4.35;
  ctx.lineCap = 'butt';
  ctx.lineJoin = 'miter';
  path(ctx, front);
  path(ctx, front.map(([x, y]) => [34 - x, 26 - y]));
  fillShape(ctx, [[9.6, 17.8], [21.9, 5.5], [25, 8.6], [12.7, 20.9]]);
} };

const softMarks = [
  { id: 'ribbon', name: 'Лента', width: 42, draw(ctx) {
    const half = new Path2D('M2 14C2 8.9 5.8 5.4 11.2 5.4C17.2 5.4 20.8 8.9 24.1 13.1C26.4 16.1 28.5 18.6 31.6 18.6C34 18.6 35.4 17.3 36.2 15.5L39 18C37.7 20.9 35 22.6 31.6 22.6C26.5 22.6 23.2 19.6 20 15.4C17.4 12.1 14.8 9.3 11.2 9.3C8.2 9.3 6.3 11.2 6.3 14C6.3 16.6 8.1 18.4 10.9 18.4C12.8 18.4 14.4 17.4 15.8 16.2L18.1 19.2C16 21.4 13.7 22.4 10.9 22.4C5.7 22.4 2 18.8 2 14Z');
    ctx.fill(half);
    ctx.translate(42, 26);
    ctx.rotate(Math.PI);
    ctx.fill(half);
  } },
  { id: 'arc-gap', name: 'Просвет', width: 32, draw(ctx) {
    ctx.fill(new Path2D('M4 13C4 6.8 9.1 2.8 15.2 2.8C20.3 2.8 24.3 5.1 26.3 8.4C22.3 7.2 19.3 8 16.6 10.2C13 13 11.3 17.1 5.1 17.5C4.4 16.2 4 14.6 4 13ZM28 13C28 19.2 22.9 23.2 16.8 23.2C11.7 23.2 7.7 20.9 5.7 17.6C9.7 18.8 12.7 18 15.4 15.8C19 13 20.7 8.9 26.9 8.5C27.6 9.8 28 11.4 28 13Z'));
  } },
];

const allDesigns = [...designs, ...wordmarks, ...symbols, ...portraitMarks, ...frames, ...motionMarks, ...coverPortraits, ...siteLinks, ...flatLinks, ...modularLinks, ...particleFields, blockLink, ...softMarks];
const labels = marks => marks.map(({ id, name }) => ({ id, name }));
export const brandMarks = labels(designs);
export const flatBrandGroup = { name: 'Знак-связь', marks: labels(flatLinks) };
export const modularBrandGroup = { name: 'Модули знака-связи', marks: labels(modularLinks) };
export const fieldBrandGroup = { name: 'Поле частиц', marks: labels(particleFields) };
export const siteBrandGroups = [
  { id: 'cover-portraits', name: 'Голова с обложки', marks: labels(coverPortraits) },
  { id: 'site-links', name: 'Знак-связь с сайта', marks: labels(siteLinks) },
];
export const brandGroups = [
  { id: 'portraits', name: 'Портрет', marks: labels(portraitMarks) },
  { id: 'frames', name: 'Рамки', marks: labels(frames) },
  { id: 'motion', name: 'Движение и частицы', marks: labels(motionMarks) },
  { id: 'symbols', name: 'Геометрия', marks: labels(symbols) },
  { id: 'wordmarks', name: 'Подписи WWN', marks: labels(wordmarks) },
];

export function createBrandMark(id, color, resolution = 2, trigger) {
  const design = allDesigns.find(item => item.id === id) ?? original;
  const canvas = document.createElement('canvas');
  canvas.dataset.logo = design.id;
  canvas.setAttribute('aria-hidden', 'true');
  canvas.width = (design.width ?? 32) * resolution;
  canvas.height = 26 * resolution;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  ctx.scale(resolution, resolution);
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.25;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  let loadedImage;
  function render(progress = 0) {
    ctx.clearRect(0, 0, canvas.width / resolution, 26);
    if (loadedImage) design.draw(ctx, loadedImage, progress);
    else design.draw(ctx, progress);
  }
  if (design.image) {
    const image = new Image();
    image.addEventListener('load', () => {
      loadedImage = image;
      render();
      canvas.dataset.rendered = 'true';
    }, { once: true });
    image.addEventListener('error', () => {
      drawPortrait(ctx);
      canvas.dataset.rendered = 'fallback';
    }, { once: true });
    image.src = new URL(design.image, import.meta.url).href;
  } else {
    render();
  }
  if (design.animate && trigger) {
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    let frame;
    function play() {
      if (reducedMotion.matches || (design.image && !loadedImage)) return;
      cancelAnimationFrame(frame);
      const start = performance.now();
      function tick(now) {
        const progress = Math.min(1, (now - start) / (design.duration ?? 620));
        render(progress === 1 ? 0 : progress);
        if (progress < 1) frame = requestAnimationFrame(tick);
      }
      frame = requestAnimationFrame(tick);
    }
    trigger.addEventListener('pointerenter', play);
    trigger.addEventListener('focus', play);
    trigger.addEventListener('brand-preview-replay', play);
  }
  return canvas;
}
