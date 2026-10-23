"use client";

import { useId, useLayoutEffect, useRef } from "react";
import { desktopObjects } from "@/lib/workshop/scene";
import type { ObjectId } from "@/lib/workshop/sections";
import { reactionFrames } from "./reactions";

type Silhouette = { x: number; top: number; bottom: number };
const bands = [.035, .11, .19, .27, .36, .45, .54, .63, .72, .81, .9, .97];

function anchor(position: ObjectId | null): Silhouette {
  if (!position) {
    const idle = desktopObjects.find(object => object.id === "contact")!;
    const height = idle.width * 1.5 * 900 / 1365;
    return { x: idle.x - idle.width / 2 + idle.width * 440 / 1365, top: idle.y - height, bottom: idle.y };
  }
  const frame = reactionFrames[position];
  const height = frame.width * 1.5 * frame.asset.height / frame.asset.width;
  const top = frame.y - height;
  const behindCounter = position === "about" || position === "blog" || position === "projects";
  const bottom = behindCounter ? Math.min(frame.y, 62.3) : frame.y;
  return { x: frame.x, top, bottom };
}

/** A brief directional accent after actual pose decoding; it never delays a position or link. */
export function WorkshopSpeedTrail({ position, pending, enabled }: { position: ObjectId | null; pending: boolean; enabled: boolean }) {
  const id = `speed-trail-${useId().replace(/:/g, "")}`;
  const svg = useRef<SVGSVGElement>(null);
  const gradient = useRef<SVGLinearGradientElement>(null);
  const previous = useRef<ObjectId | null | undefined>(undefined);
  const animations = useRef<Animation[]>([]);
  useLayoutEffect(() => {
    if (pending && enabled) return;
    const from = previous.current;
    previous.current = position;
    if (!enabled || from === undefined || from === position || document.hidden) {
      animations.current.forEach(animation => animation.cancel());
      return;
    }
    const node = svg.current;
    if (!node) return;
    animations.current.forEach(animation => animation.cancel());
    animations.current = [];
    const start = anchor(from), end = anchor(position);
    const ax = start.x * 15.36, ay = (start.top + start.bottom) / 2 * 10.24;
    const bx = end.x * 15.36, by = (end.top + end.bottom) / 2 * 10.24;
    const dx = bx - ax, dy = by - ay;
    const distance = Math.hypot(dx, dy);
    if (distance < 10) return;
    const nx = -dy / distance, ny = dx / distance;
    gradient.current?.setAttribute("x1", String(ax)); gradient.current?.setAttribute("y1", String(ay));
    gradient.current?.setAttribute("x2", String(bx)); gradient.current?.setAttribute("y2", String(by));
    node.setAttribute("data-from", from ?? "default"); node.setAttribute("data-to", position ?? "default");
    const lower = (id: ObjectId | null) => id === "contact" || id === "experience" || id === "process";
    node.setAttribute("data-depth", lower(from) || lower(position) ? "foreground" : "room");
    node.querySelectorAll<SVGPathElement>("path").forEach((path, index) => {
      const band = bands[index];
      const startY = (start.top + (start.bottom - start.top) * band) * 10.24;
      const endY = (end.top + (end.bottom - end.top) * band) * 10.24;
      const bandDy = endY - startY;
      const bend = index % 2 ? 5 : -5;
      const begin = .1 + index % 3 * .035;
      const finish = .94 - index % 3 * .02;
      path.setAttribute("d", `M ${ax + dx * begin} ${startY + bandDy * begin} Q ${ax + dx * .58 + nx * bend} ${startY + bandDy * .58 + ny * bend} ${ax + dx * finish} ${startY + bandDy * finish}`);
      const animation = path.animate([
        { strokeDashoffset: "1", opacity: 0, offset: 0 },
        { strokeDashoffset: ".65", opacity: .6, offset: .18 },
        { strokeDashoffset: ".1", opacity: .4, offset: .55 },
        { strokeDashoffset: "-.6", opacity: 0, offset: 1 },
      ], { duration: 250 + index % 4 * 10, easing: "ease-out" });
      animations.current.push(animation);
    });
  }, [position, pending, enabled]);
  useLayoutEffect(() => () => { animations.current.forEach(animation => animation.cancel()); }, []);
  return <svg ref={svg} className="workshop-speed-trail" viewBox="0 0 1536 1024" aria-hidden="true" focusable="false">
    <defs><linearGradient ref={gradient} id={id} gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#b8c3ce" stopOpacity="0" />
      <stop offset=".4" stopColor="#c2ccd4" stopOpacity=".6" />
      <stop offset=".8" stopColor="#e2dfd0" stopOpacity=".85" />
      <stop offset="1" stopColor="#e2dfd0" stopOpacity="0" />
    </linearGradient></defs>
    {bands.map((_, index) => <path key={index} fill="none" stroke={`url(#${id})`} strokeWidth={index % 3 === 0 ? 2.4 : 1.4} strokeLinecap="round" pathLength="1" strokeDasharray=".55 .45" opacity="0" />)}
  </svg>;
}
