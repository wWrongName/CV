"use client";

import { useEffect, useRef, type RefObject } from "react";
import type { SectionId } from "@/lib/workshop/sections";
import { blogVineAngle, cityWindowLevel, processLampLevel, resumePortraitFrame, mobileLampItems, lampItemAngle, mobileDogItems, dogItemLayout, coverTransform, mobileMotion, motionBudget, patchOffset, type MotionPatch } from "@/lib/workshop/mobile-motion";

type Point = [number, number];
type Texture = { patch: MotionPatch; image: HTMLCanvasElement; weights: number[]; columns: number; rows: number };

function texture(img: HTMLImageElement, patch: MotionPatch): Texture {
  const [x, y, w, h] = patch.box;
  const bitmap = document.createElement("canvas");
  const ratio = 1.5;
  bitmap.width = Math.ceil(w * ratio); bitmap.height = Math.ceil(h * ratio);
  const ctx = bitmap.getContext("2d", { willReadFrequently: patch.kind === "leaves" })!;
  // Draw the full image into a clipped crop: srcset density can change the
  // reported naturalWidth without changing the source pixel coordinate space.
  ctx.drawImage(img, -x * ratio, -y * ratio, 480 * ratio, img.naturalHeight / img.naturalWidth * 480 * ratio);
  const detailed = patch.kind === "leaves" && patch.amplitude >= 10;
  const columns = detailed ? 6 : 4, rows = detailed ? 12 : 5, weights: number[] = [];
  const pixels = patch.kind === "leaves" ? ctx.getImageData(0, 0, bitmap.width, bitmap.height).data : null;
  for (let j = 0; j <= rows; j++) for (let i = 0; i <= columns; i++) {
    let weight = 1;
    if (pixels) {
      // Weight green foliage, leaving the brown beams and shelves still.
      const px = Math.min(bitmap.width - 1, Math.round(i / columns * bitmap.width));
      const py = Math.min(bitmap.height - 1, Math.round(j / rows * bitmap.height));
      const at = (py * bitmap.width + px) * 4;
      weight = Math.max(0, Math.min(1, (pixels[at + 1] - pixels[at] * .64 - pixels[at + 2] * .15) / 24));
    }
    weights.push(weight);
  }
  return { patch, image: bitmap, weights, columns, rows };
}

// Affine mapping of one source triangle. Small cached crops, rather than the
// entire illustration, are uploaded/drawn for each local deformation.
function triangle(ctx: CanvasRenderingContext2D, image: HTMLCanvasElement, a: Point, b: Point, c: Point, A: Point, B: Point, C: Point) {
  const det = a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1]);
  if (!det) return;
  const coeff = (q: number, r: number, s: number) => [
    (q * (b[1] - c[1]) + r * (c[1] - a[1]) + s * (a[1] - b[1])) / det,
    (q * (c[0] - b[0]) + r * (a[0] - c[0]) + s * (b[0] - a[0])) / det,
    (q * (b[0] * c[1] - c[0] * b[1]) + r * (c[0] * a[1] - a[0] * c[1]) + s * (a[0] * b[1] - b[0] * a[1])) / det,
  ];
  const [m11, m21, dx] = coeff(A[0], B[0], C[0]);
  const [m12, m22, dy] = coeff(A[1], B[1], C[1]);
  ctx.save(); ctx.beginPath(); ctx.moveTo(...A); ctx.lineTo(...B); ctx.lineTo(...C); ctx.closePath(); ctx.clip();
  ctx.transform(m11, m12, m21, m22, dx, dy); ctx.drawImage(image, 0, 0); ctx.restore();
}
function warp(ctx: CanvasRenderingContext2D, tex: Texture, seconds: number) {
  const { patch, image, columns, rows, weights } = tex;
  const [x, y, w, h] = patch.box;
  const source: Point[] = [], target: Point[] = [];
  for (let j = 0; j <= rows; j++) for (let i = 0; i <= columns; i++) {
    const u = i / columns, v = j / rows;
    const [dx, dy] = patchOffset(patch, u, v, seconds, weights[j * (columns + 1) + i]);
    source.push([u * image.width, v * image.height]); target.push([x + u * w + dx, y + v * h + dy]);
  }
  for (let j = 0; j < rows; j++) for (let i = 0; i < columns; i++) {
    const a = j * (columns + 1) + i, b = a + 1, c = a + columns + 1, d = c + 1;
    triangle(ctx, image, source[a], source[b], source[d], target[a], target[b], target[d]);
    triangle(ctx, image, source[a], source[d], source[c], target[a], target[d], target[c]);
  }
}
function polygon(ctx: CanvasRenderingContext2D, points: Point[]) {
  ctx.beginPath(); points.forEach((p, i) => i ? ctx.lineTo(...p) : ctx.moveTo(...p)); ctx.closePath();
}
function glow(ctx: CanvasRenderingContext2D, x: number, y: number, rx: number, ry: number, opacity: number, color = "255,189,76") {
  ctx.save(); ctx.translate(x, y); ctx.scale(rx, ry);
  const light = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
  light.addColorStop(0, `rgba(${color},${opacity})`); light.addColorStop(1, `rgba(${color},0)`);
  ctx.fillStyle = light; ctx.fillRect(-1, -1, 2, 2); ctx.restore();
}
function sleep(ctx: CanvasRenderingContext2D, x: number, y: number, seconds: number) {
  ctx.save(); ctx.font = "italic 16px Georgia,serif"; ctx.fillStyle = "#e7dcc2";
  for (let i = 0; i < 3; i++) {
    const progress = ((seconds / 4 + i / 3) % 1);
    ctx.globalAlpha = Math.sin(progress * Math.PI) * .75;
    ctx.fillText("z", x + Math.sin(progress * 3) * 7, y - progress * 39);
  }
  ctx.restore();
}
function accents(ctx: CanvasRenderingContext2D, id: SectionId, t: number, portraits: HTMLCanvasElement[], screenReady = true) {
  const pulse = .5 + .5 * Math.sin(t * .9);
  if (id === "about") {
    ctx.save(); polygon(ctx, [[246, 449], [324, 448], [312, 508], [236, 508]]); ctx.clip();
    ctx.fillStyle = "rgba(116,195,205,.22)";
    for (let i = 0; i < 7; i++) {
      const y = 458 + i * 6; ctx.fillRect(250, y, 11 + ((Math.floor(t / 2) * 7 + i * 13) % 49), 1);
    }
    ctx.fillStyle = "rgba(142,220,228,.13)"; ctx.fillRect(240, 450 + (t * 4 % 58), 85, 2); ctx.restore();
    const windows = [[405, 227], [413, 256], [398, 306], [424, 351], [410, 389], [370, 305], [362, 329], [386, 419], [347, 372], [460, 390], [449, 430], [336, 425]];
    windows.forEach(([x, y], i) => {
      const level = cityWindowLevel(t, i);
      ctx.fillStyle = `rgba(15,27,49,${(1 - level) * .72})`; ctx.fillRect(x - .5, y - .5, 2.7, 3.7);
      glow(ctx, x + .8, y + 1, 4.5, 5.5, level * .45, "255,211,133");
      ctx.fillStyle = `rgba(255,227,163,${level * .95})`; ctx.fillRect(x, y, 1.9, 2.9);
    });
  }
  if (id === "projects") {
    ctx.save(); polygon(ctx, [[130, 289], [469, 252], [469, 475], [129, 475]]); ctx.clip();
    const screen = .5 + .5 * Math.sin(t * 2.1);
    ctx.fillStyle = `rgba(78,235,177,${.025 + .11 * screen * screen})`; ctx.fillRect(128, 250, 343, 230);
    [[188, 351], [230, 389], [307, 352], [354, 368], [412, 335], [405, 419]].forEach(([x, y], i) => {
      const a = .14 + .78 * Math.pow(.5 + .5 * Math.sin(t * 2.2 + i * 2), 3);
      glow(ctx, x, y, 12, 12, a * .8, "88,237,187");
      ctx.fillStyle = `rgba(185,255,221,${a})`; ctx.fillRect(x - 1.5, y - 1.5, 3, 3);
      ctx.strokeStyle = `rgba(132,255,213,${a * .8})`; ctx.lineWidth = .9; ctx.beginPath(); ctx.arc(x, y, 3 + (t * 5 + i * 2) % 15, 0, Math.PI * 2); ctx.stroke();
    });
    ctx.strokeStyle = `rgba(145,255,215,${.2 + .35 * screen})`; ctx.lineWidth = 1;
    ctx.setLineDash([5, 11]); ctx.lineDashOffset = -t * 12;
    polygon(ctx, [[188,351],[230,389],[307,352],[354,368],[412,335]]); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = "rgba(129,255,207,.14)"; ctx.fillRect(128, 280 + (t * 15 % 195), 343, 4); ctx.restore();
  }
  if (id === "process") {
    const power = processLampLevel(t);
    ctx.save(); polygon(ctx, [[113,148],[398,96],[399,109],[113,160]]); ctx.clip();
    ctx.fillStyle = `rgba(255,231,159,${power * .4})`; ctx.fillRect(100,90,310,80);
    ctx.fillStyle = `rgba(28,18,9,${(1-power) * .7})`; ctx.fillRect(100,90,310,80); ctx.restore();
    glow(ctx, 263, 150, 205, 55, power * .22);
    glow(ctx, 241, 574, 310, 190, .025 + power * .23);
  }
  if (id === "blog" || id === "research") {
    const power = processLampLevel(t + (id === "blog" ? .5 : 1.3));
    const [x,y,rx,ry] = id === "blog" ? [399,346,68,27] : [378,387,56,25];
    ctx.save(); ctx.beginPath(); ctx.ellipse(x,y,rx,ry,.24,0,Math.PI*2); ctx.clip();
    ctx.fillStyle = `rgba(255,227,159,${power*.2})`; ctx.fillRect(x-rx,y-ry,rx*2,ry*2);
    ctx.fillStyle = `rgba(35,22,10,${(1-power)*.48})`; ctx.fillRect(x-rx,y-ry,rx*2,ry*2); ctx.restore();
    glow(ctx,x,y,rx*1.4,ry*1.7,power*.16);
    glow(ctx,id === "blog" ? 310 : 300,id === "blog" ? 660 : 580,220,125,.02+power*.17);
  }
  if (id === "experience" && portraits.length === 3) {
    const face = portraits[resumePortraitFrame(t)];
    // Printed photo follows the CV paper plane, not the screen plane.
    triangle(ctx, face, [0,0], [128,0], [128,128], [113,473], [157,475], [170,513]);
    triangle(ctx, face, [0,0], [128,128], [0,128], [113,473], [170,513], [123,513]);
  }
  if (id === "contact" && screenReady) {
    ctx.save(); polygon(ctx, [[142,449],[367,448],[367,574],[141,574]]); ctx.clip();
    const noise = .5 + .5 * Math.sin(t*2.4);
    ctx.fillStyle = `rgba(62,172,231,${.03+.12*noise})`; ctx.fillRect(140,447,230,129);
    ctx.fillStyle = "rgba(144,229,255,.2)"; ctx.fillRect(141,449+(t*23%125),228,3);
    const burst = Math.pow(Math.max(0,Math.sin(t*2.1)),14);
    for (let i=0;i<7;i++) {
      const y=451+((i*19+Math.floor(t*9)*7)%121);
      ctx.fillStyle=`rgba(162,233,255,${burst*(i%2?.36:.2)})`; ctx.fillRect(143,y,221,1+i%2);
    }
    ctx.restore();
    ctx.save(); polygon(ctx, [[199, 513], [293, 476], [272, 556], [247, 536], [234, 549], [233, 529]]);
    ctx.fillStyle = `rgba(152,235,255,${.07+.16*noise})`; ctx.fill(); ctx.restore();
  }
}

function featheredPlate(image: HTMLImageElement) {
  const plate = document.createElement("canvas"); plate.width = image.naturalWidth; plate.height = image.naturalHeight;
  const ctx = plate.getContext("2d")!; ctx.drawImage(image,0,0); ctx.globalCompositeOperation = "destination-in";
  const w = plate.width, h = plate.height, fade = 12;
  for (const [x0,y0,x1,y1] of [[0,0,fade,0],[w,0,w-fade,0],[0,0,0,fade],[0,h,0,h-fade]]) {
    const mask = ctx.createLinearGradient(x0,y0,x1,y1); mask.addColorStop(0,"transparent"); mask.addColorStop(1,"black");
    ctx.fillStyle = mask; ctx.fillRect(0,0,w,h);
  }
  return plate;
}
function drawSleepingDog(ctx: CanvasRenderingContext2D, scene: "about" | "contact", t: number, sprite: HTMLImageElement) {
  const box = dogItemLayout(scene,sprite.naturalWidth,sprite.naturalHeight,t);
  // A separate transparent item, anchored at the paws. No room pixels deform.
  ctx.drawImage(sprite,box.x,box.y,box.width,box.height);
}

/** One active canvas. Existing art is reused; only tiny local sprites are added. */
export function MobileSceneMotion({ image, scene, active }: { image: RefObject<HTMLImageElement | null>; scene: SectionId; active: boolean }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!active) return;
    const el = canvas.current, img = image.current;
    if (!el || !img) return;
    const ctx = el.getContext("2d"); if (!ctx) return;
    const media = window.matchMedia("(max-width: 899px) and (prefers-reduced-motion: no-preference)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    let handle = 0, last = 0, elapsed = 0, frames = 0, cost = 0;
    let fps = motionBudget(1, 1, Boolean(connection?.saveData)).fps;
    let textures: Texture[] = [], disposed = false;
    let portraitImage: HTMLImageElement | null = null;
    const portraits: HTMLCanvasElement[] = [];
    let lamp: HTMLImageElement | null = null, emptyLampImage: HTMLImageElement | null = null, emptyLampPlate: HTMLCanvasElement | null = null;
    function prepareLampPlate() { if (emptyLampImage && !disposed) emptyLampPlate = featheredPlate(emptyLampImage); }
    let vine: HTMLImageElement | null = null, vinePlate: HTMLImageElement | null = null;
    let dog: HTMLImageElement | null = null, emptyDogImage: HTMLImageElement | null = null, emptyDogPlate: HTMLCanvasElement | null = null;
    function prepareDogPlate() { if (emptyDogImage && !disposed) emptyDogPlate = featheredPlate(emptyDogImage); }
    function loadPortraits() {
      if (!portraitImage || disposed) return;
      for (let i = 0; i < 3; i++) {
        const cell = document.createElement("canvas"); cell.width = cell.height = 128;
        cell.getContext("2d")!.drawImage(portraitImage, -i * 128, 0, 384, 128); portraits.push(cell);
      }
    }
    let transform = { scale: 1, x: 0, y: 0 };
    function resize() {
      if (!el || !img || !ctx) return;
      const { width, height } = el.getBoundingClientRect(); if (!width || !height) return;
      const budget = motionBudget(width, window.devicePixelRatio || 1, Boolean(connection?.saveData));
      el.width = budget.width; el.height = Math.ceil(height / width * budget.width);
      transform = coverTransform(el.width, el.height, img.naturalHeight / img.naturalWidth * 480);
    }
    function draw(now: number) {
      if (disposed || !el || !ctx) return;
      if (now - last >= 1000 / fps) {
        const start = performance.now();
        elapsed += Math.min(.15, (now - (last || now)) / 1000); last = now;
        ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, el.width, el.height);
        ctx.setTransform(transform.scale, 0, 0, transform.scale, transform.x, transform.y);
        textures.forEach(tex => warp(ctx, tex, elapsed));
        if (scene === "blog" && vine?.complete && vine.naturalWidth && vinePlate?.complete && vinePlate.naturalWidth) {
          // Replace only the old ivy crop, then move the transparent plant item.
          // Its top stem is fixed; shelf, book and wall pixels never move.
          const width = 300 / 852 * 480, height = 1100 / 852 * 480;
          ctx.drawImage(vinePlate, 0, 0, width, height);
          ctx.save(); ctx.translate(36, 0); ctx.rotate(blogVineAngle(elapsed));
          ctx.drawImage(vine, -36, 0, width, height); ctx.restore();
        }
        if ((scene === "about" || scene === "contact") && dog?.complete && dog.naturalWidth && emptyDogPlate) {
          const clean = mobileDogItems[scene].plate;
          ctx.drawImage(emptyDogPlate,clean[0],clean[1],clean[2],clean[3]);
        }
        const fixture = mobileLampItems[scene];
        if (fixture && lamp?.complete && lamp.naturalWidth && emptyLampPlate) {
          ctx.drawImage(emptyLampPlate,...fixture.plate);
          ctx.save(); ctx.translate(...fixture.pivot); ctx.rotate(lampItemAngle(elapsed,fixture.period,fixture.angle));
          ctx.drawImage(lamp,fixture.box[0]-fixture.pivot[0],fixture.box[1]-fixture.pivot[1],fixture.box[2],fixture.box[3]); ctx.restore();
        }
        accents(ctx, scene, elapsed, portraits, scene !== "contact" || Boolean(dog?.complete && dog.naturalWidth && emptyDogPlate));
        // Screen light/noise is behind the dog. The foreground item is last.
        if ((scene === "about" || scene === "contact") && dog?.complete && dog.naturalWidth && emptyDogPlate) drawSleepingDog(ctx,scene,elapsed,dog);
        if (scene === "about") sleep(ctx,333,486,elapsed);
        if (scene === "contact") sleep(ctx,131,570,elapsed);
        frames++; cost += performance.now() - start;
        if (frames % 32 === 0) {
          el.dataset.motionFrames = String(frames); el.dataset.paintMs = (cost / frames).toFixed(2);
          if (cost / frames > 8) fps = 12;
        }
      }
      handle = requestAnimationFrame(draw);
    }
    function sync() {
      cancelAnimationFrame(handle); handle = 0; last = 0;
      if (!el || !img || !ctx) return;
      const running = media.matches && !document.hidden && img.complete && img.naturalWidth > 1;
      el.dataset.motionRunning = String(running);
      if (!running) { ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, el.width, el.height); return; }
      if (mobileLampItems[scene] && !lamp) {
        lamp = new Image(); lamp.decoding = "async"; lamp.src = `/workshop/mobile-${scene}-lamp-v1.webp`;
        emptyLampImage = new Image(); emptyLampImage.decoding = "async";
        emptyLampImage.addEventListener("load",prepareLampPlate,{ once:true });
        emptyLampImage.src = `/workshop/mobile-${scene}-lamp-plate-v1.webp`;
      }
      if ((scene === "about" || scene === "contact") && !dog) {
        dog = new Image(); dog.decoding = "async"; dog.src = mobileDogItems[scene].src;
        emptyDogImage = new Image(); emptyDogImage.decoding = "async";
        emptyDogImage.addEventListener("load",prepareDogPlate,{ once:true });
        emptyDogImage.src = mobileDogItems[scene].plateSrc;
      }
      if (scene === "blog" && !vine) {
        vine = new Image(); vine.decoding = "async"; vine.src = "/workshop/mobile-blog-vine-v1.webp";
        vinePlate = new Image(); vinePlate.decoding = "async"; vinePlate.src = "/workshop/mobile-blog-vine-plate-v1.webp";
      }
      if (scene === "experience" && !portraitImage) {
        portraitImage = new Image(); portraitImage.decoding = "async";
        portraitImage.addEventListener("load", loadPortraits, { once: true });
        portraitImage.src = "/workshop/mobile-resume-head-v1.webp";
      }
      textures.forEach(tex => { tex.image.width = tex.image.height = 0; });
      textures = mobileMotion[scene].map(patch => texture(img, patch)); resize();
      handle = requestAnimationFrame(draw);
    }
    const observer = new ResizeObserver(resize); observer.observe(el);
    img.addEventListener("load", sync); media.addEventListener("change", sync); document.addEventListener("visibilitychange", sync); sync();
    return () => {
      disposed = true; cancelAnimationFrame(handle); observer.disconnect();
      img.removeEventListener("load", sync); media.removeEventListener("change", sync); document.removeEventListener("visibilitychange", sync);
      textures.forEach(tex => { tex.image.width = tex.image.height = 0; });
      emptyLampImage?.removeEventListener("load",prepareLampPlate);
      if (emptyLampPlate) emptyLampPlate.width = emptyLampPlate.height = 0;
      emptyDogImage?.removeEventListener("load",prepareDogPlate);
      if (emptyDogPlate) emptyDogPlate.width = emptyDogPlate.height = 0;
      portraitImage?.removeEventListener("load", loadPortraits);
      portraits.forEach(cell => { cell.width = cell.height = 0; });
      el.width = el.height = 0;
    };
  }, [active, image, scene]);
  return <canvas ref={canvas} className="mobile-scene-motion" aria-hidden="true" data-motion-scene={scene} />;
}
