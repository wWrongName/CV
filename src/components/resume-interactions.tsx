"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Progressive enhancement: the full resume stays readable without JavaScript. */
export function ResumeInteractions({ children }: { children: ReactNode }) {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const page = root.current;
    if (!page) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const blocks = page.querySelectorAll<HTMLElement>(".resume-skills, .resume-job-header, .resume-job-content, .resume-education, .resume-languages");
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (preference.matches) continue;
        const animation = entry.target.animate([
          { opacity: .25, transform: "translateY(10px)" },
          { opacity: 1, transform: "translateY(0)" },
        ], { duration: 260, easing: "cubic-bezier(.2,.7,.2,1)" });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      }
    }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });
    blocks.forEach(block => observer.observe(block));
    const stopMotion = () => { if (preference.matches) { animations.forEach(animation => animation.cancel()); animations.clear(); } };
    preference.addEventListener("change", stopMotion);
    const jobs = Array.from(page.querySelectorAll<HTMLElement>(".resume-job"));
    let frame = 0;
    let compact = false;
    const update = () => {
      frame = 0;
      compact = window.scrollY > (compact ? 24 : 96);
      page.classList.toggle("is-scrolled", compact);
      const readingLine = Math.min(window.innerHeight * .3, 240);
      const current = jobs.find(job => { const box = job.getBoundingClientRect(); return box.top <= readingLine && box.bottom > readingLine; });
      jobs.forEach(job => job.classList.toggle("is-reading", job === current));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      preference.removeEventListener("change", stopMotion);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
      page.classList.remove("is-scrolled");
      jobs.forEach(job => job.classList.remove("is-reading"));
    };
  }, []);
  return <main ref={root} className="document resume-page">{children}</main>;
}
