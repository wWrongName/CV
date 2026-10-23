"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent } from "react";
import type { Locale } from "@/lib/i18n";
import { LanguageSwitch } from "@/components/language-switch";
import { getObjectLabel, sectionHref, workshopCopy, type ObjectId } from "@/lib/workshop/sections";
import { mobileScenes } from "@/lib/workshop/mobile-scenes";
import sceneArt from "@/lib/workshop/mobile-scene-art.json";
import { mobileSlideAnchor, mobileSlideFromHash, mobileSlideIds } from "@/lib/workshop/mobile-navigation";
import { MobileSceneMotion } from "./mobile-motion";
import { CarvedChevron } from "./carved-chevron";

const desktopEmpty = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
type File = { src: string; width: number; height: number };

/** Inverse of desktop pictures: no mobile artwork is requested on a desktop. */
function MobileArt({ files, scene, active, className, eager = false, sizes = "(max-width: 899px) 60vw, 1px" }: { files: File[]; scene: ObjectId; active: boolean; className?: string; eager?: boolean; sizes?: string }) {
  const image = useRef<HTMLImageElement>(null);
  const [small, large = small] = files;
  return <><picture className={className}><source media="(min-width: 900px)" srcSet={desktopEmpty} />
    <img ref={image} src={small.src} srcSet={`${small.src} ${small.width}w, ${large.src} ${large.width}w`} sizes={sizes} width={small.width} height={small.height} alt="" draggable={false}
      loading={eager ? "eager" : "lazy"} decoding="async" fetchPriority={eager ? "high" : "auto"} />
  </picture>{active && <MobileSceneMotion image={image} scene={scene} active={active} />}</>;
}

export function MobileWorkshopIndex({ locale, onEnter, paused = false }: { locale: Locale; onEnter: (id: ObjectId) => void; paused?: boolean }) {
  const ui = workshopCopy[locale];
  const ru = locale === "ru";
  const slides = mobileSlideIds;
  const rail = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [prepared, setPrepared] = useState([0, 1]);

  function prepare(index: number) {
    setPrepared(previous => {
      const next = [...previous];
      for (const candidate of [index-1, index, index+1]) {
        if (candidate >= 0 && candidate < slides.length && !next.includes(candidate)) next.push(candidate);
      }
      return next.length === previous.length ? previous : next;
    });
  }

  // The language link carries a stable scene ID, independent of translated copy.
  // Restore before paint so a locale layout remount never flashes slide one.
  useLayoutEffect(() => {
    const root = rail.current;
    if (!root) return;
    const index = mobileSlideFromHash(window.location.hash);
    setActive(index); prepare(index);
    root.scrollTo({ left: root.clientWidth * index, behavior: "instant" });
  }, [locale]);

  useEffect(() => {
    const root = rail.current;
    if (!root) return;
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting && entry.intersectionRatio >= .6) {
        const index = Number((entry.target as HTMLElement).dataset.mobileSlide);
        setActive(index); prepare(index);
      }
    }, { root, threshold: [.6] });
    root.querySelectorAll("[data-mobile-slide]").forEach(slide => observer.observe(slide));
    return () => observer.disconnect();
  }, []);

  function moveTo(index: number) {
    const root = rail.current;
    if (!root || index < 0 || index >= slides.length) return;
    prepare(index);
    root.scrollTo({ left: root.clientWidth * index, behavior: Math.abs(index - active) > 1 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault(); moveTo(active + (event.key === "ArrowRight" ? 1 : -1));
    }
  }

  return <main className="mobile-workshop" aria-label={ui.title}>
    <header className="mobile-workshop-header"><Link className="mobile-workshop-brand" href={`/${locale}`}>WWN<span>IT SOLUTIONS</span></Link><LanguageSwitch locale={locale} anchor={mobileSlideAnchor(active)} /></header>
    <div className="mobile-carousel" ref={rail} onKeyDown={onKeyDown} role="group" aria-roledescription={ru ? "карусель" : "carousel"} aria-label={ru ? "Разделы мастерской" : "Workshop sections"}>
      <section className="mobile-scene mobile-welcome" id="mobile-about" data-mobile-slide="0" aria-labelledby="mobile-about-title">
        <MobileArt files={sceneArt.about.files} scene="about" active={active === 0 && !paused} className="mobile-scene-backdrop" eager sizes="(max-width: 899px) 100vw, 1px" />
        <Link className="mobile-scene-card" data-object="about" href={sectionHref("about",locale)} scroll={false} onNavigate={()=>onEnter("about")}>
          <span className="mobile-card-copy"><h1 id="mobile-about-title">{ui.greeting}</h1><p>{ui.boardIntro}</p></span><CarvedChevron tone="text" className="mobile-card-arrow" />
        </Link>
      </section>
      {mobileScenes.map((scene, index) => <section className="mobile-scene mobile-room" data-room={scene.id} data-mobile-slide={index+1} key={scene.id} id={`mobile-${scene.id}`} aria-labelledby={`mobile-${scene.id}-title`}>
        {prepared.includes(index+1) && <MobileArt files={sceneArt[scene.id].files} scene={scene.id} active={active === index+1 && !paused} className="mobile-scene-backdrop" sizes="(max-width: 899px) 100vw, 1px" />}
        <Link className="mobile-scene-card" data-object={scene.id} href={sectionHref(scene.id,locale)} scroll={false} onNavigate={()=>onEnter(scene.id)}>
          <span className="mobile-card-copy"><h2 id={`mobile-${scene.id}-title`}>{scene.title[locale]}</h2><p>{scene.description[locale]}</p></span><CarvedChevron tone="text" className="mobile-card-arrow" />
        </Link>
      </section>)}
    </div>
    <nav className="mobile-carousel-controls" aria-label={ru ? "Перейти к экрану" : "Go to a slide"}>
      <div className="mobile-carousel-dots">{slides.map((id,index) => <button key={id} type="button" onClick={()=>moveTo(index)} aria-label={`${index+1}. ${getObjectLabel(id,locale).title}`} aria-current={active === index ? "step" : undefined} aria-controls={`mobile-${id}`}><span /></button>)}</div>
      <span className="mobile-carousel-count" aria-live="polite" aria-atomic="true">{active+1} / {slides.length}</span>
    </nav>
  </main>;
}
