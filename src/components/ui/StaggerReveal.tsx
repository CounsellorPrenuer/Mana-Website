"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion, scheduleScrollTriggerRefresh } from "@/lib/gsap";

type StaggerRevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Selector for the direct items to animate; defaults to all direct children. */
  selector?: string;
  stagger?: number;
  y?: number;
};

/** Scroll-triggered, batched stagger reveal for a group of sibling elements (card grids, lists). */
export default function StaggerReveal({
  children,
  className,
  selector = ":scope > *",
  stagger = 0.08,
  y = 22,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const items = el.querySelectorAll(selector);
    if (!items.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, el);

    scheduleScrollTriggerRefresh();

    return () => ctx.revert();
  }, [selector, stagger, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export { ScrollTrigger };
