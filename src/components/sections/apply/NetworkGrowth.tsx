"use client";

import { useEffect, useRef } from "react";
import { gsap, scheduleScrollTriggerRefresh } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

const SCHOOLS = [
  { x: 300, y: 78 },
  { x: 342, y: 168 },
  { x: 282, y: 244 },
  { x: 118, y: 244 },
  { x: 58, y: 158 },
];

// Two family dots hand-placed near each school node — fixed offsets, not random, so SSR/CSR match.
const FAMILIES = SCHOOLS.flatMap((s, i) => [
  { x: s.x + (i % 2 === 0 ? 18 : -16), y: s.y - 14 },
  { x: s.x + (i % 2 === 0 ? -14 : 16), y: s.y + 16 },
]);

const CENTER = { x: 200, y: 158 };

/**
 * The flagship "wow" moment: a network that grows from one node (you) into a web of
 * schools and families as the user scrolls, told through the same figures already in
 * the hero (5 schools, 40+ families, ₹18L+) — so the numbers feel continuous with the
 * rest of the page rather than restating them in isolation.
 */
export default function NetworkGrowth() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (prefersReducedMotion()) {
      gsap.set(".ng-path", { strokeDashoffset: 0 });
      gsap.set(".ng-school", { scale: 1, opacity: 1 });
      gsap.set(".ng-family", { scale: 1, opacity: 1 });
      gsap.set(".ng-label-3", { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 75%",
          end: "bottom 45%",
          scrub: 0.7,
        },
      });

      tl.to(".ng-path-0", { strokeDashoffset: 0, duration: 1 })
        .to(".ng-school-0", { scale: 1, opacity: 1, duration: 0.6 }, "<")
        .to(".ng-label-1", { opacity: 1, duration: 0.4 }, "<0.2")
        .to([".ng-path-1", ".ng-path-2", ".ng-path-3", ".ng-path-4"], {
          strokeDashoffset: 0,
          duration: 1,
          stagger: 0.15,
        })
        .to(
          [".ng-school-1", ".ng-school-2", ".ng-school-3", ".ng-school-4"],
          { scale: 1, opacity: 1, duration: 0.5, stagger: 0.15 },
          "<"
        )
        .to(".ng-label-1", { opacity: 0, duration: 0.3 })
        .to(".ng-label-2", { opacity: 1, duration: 0.4 }, "<")
        .to(".ng-family", { scale: 1, opacity: 1, duration: 0.4, stagger: 0.035 })
        .to(".ng-label-2", { opacity: 0, duration: 0.3 })
        .to(".ng-label-3", { opacity: 1, duration: 0.4 }, "<");
    }, root);

    scheduleScrollTriggerRefresh();
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative overflow-hidden rounded-3xl bg-navy p-8 sm:p-10">
      <h3 className="text-lg font-bold text-white">Watch a practice grow</h3>
      <svg viewBox="0 0 400 316" className="mt-4 w-full" aria-hidden="true">
        {SCHOOLS.map((s, i) => (
          <path
            key={i}
            className={`ng-path ng-path-${i}`}
            d={`M${CENTER.x},${CENTER.y} L${s.x},${s.y}`}
            stroke="rgba(255,255,255,0.32)"
            strokeWidth="1.5"
            fill="none"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={1}
          />
        ))}
        {FAMILIES.map((f, i) => (
          <circle
            key={i}
            className="ng-family"
            cx={f.x}
            cy={f.y}
            r="3"
            fill="var(--color-gold)"
            style={{ transformOrigin: `${f.x}px ${f.y}px`, transform: "scale(0)", opacity: 0 }}
          />
        ))}
        {SCHOOLS.map((s, i) => (
          <circle
            key={i}
            className={`ng-school ng-school-${i}`}
            cx={s.x}
            cy={s.y}
            r="9"
            fill="var(--color-royal-light)"
            style={{ transformOrigin: `${s.x}px ${s.y}px`, transform: "scale(0)", opacity: 0 }}
          />
        ))}
        <circle cx={CENTER.x} cy={CENTER.y} r="14" fill="white" />
        <circle cx={CENTER.x} cy={CENTER.y} r="14" fill="none" stroke="var(--color-royal-light)" strokeWidth="2" opacity="0.5" />
      </svg>
      <div className="relative mt-5 h-12">
        <p className="ng-label-1 absolute inset-0 flex items-center justify-center text-center text-sm font-semibold text-white opacity-0">
          One school (~200 students) · ₹3–6L
        </p>
        <p className="ng-label-2 absolute inset-0 flex items-center justify-center text-center text-sm font-semibold text-white opacity-0">
          Five schools in a year · ₹20–35L
        </p>
        <p className="ng-label-3 absolute inset-0 flex items-center justify-center text-center text-sm font-semibold text-white opacity-0">
          40+ families guided · ₹18L+ practice income
        </p>
      </div>
      <p className="mt-4 text-xs text-white/45">Illustrative, not a guarantee. Depends on your effort and market.</p>
    </div>
  );
}
