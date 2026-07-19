"use client";

import { useEffect, useRef, useState } from "react";
import StaggerReveal from "@/components/ui/StaggerReveal";
import { gsap, scheduleScrollTriggerRefresh } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

const journey = [
  { n: 1, title: "Apply", body: "Tell us your story." },
  { n: 2, title: "Learn", body: "60 hours, live + self-paced." },
  { n: 3, title: "Certify", body: "Assessment + real-case capstone." },
  { n: 4, title: "Launch", body: "A guided 90-day sprint." },
  { n: 5, title: "Scale", body: "Leads routed to you." },
];

export default function JourneyTimeline() {
  const [active, setActive] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const fill = fillRef.current;
    if (!container || !fill) return;

    if (prefersReducedMotion()) {
      gsap.set(fill, { scaleX: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        fill,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );
    }, container);

    scheduleScrollTriggerRefresh();
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative mt-16">
      <div className="absolute left-0 right-0 top-5 hidden h-px bg-border lg:block" />
      <div
        ref={fillRef}
        className="absolute left-0 right-0 top-5 hidden h-px origin-left scale-x-0 bg-royal lg:block"
      />
      <StaggerReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5" stagger={0.1}>
        {journey.map((step) => {
          const isActive = active === step.n;
          return (
            <div
              key={step.title}
              className="relative cursor-default"
              onMouseEnter={() => setActive(step.n)}
              onMouseLeave={() => setActive(null)}
            >
              <span
                className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ring-8 ring-white transition-all duration-300 ${
                  isActive ? "scale-110 bg-royal text-white" : "bg-navy text-white"
                }`}
              >
                {step.n}
              </span>
              <h4 className="mt-4 font-bold text-navy">{step.title}</h4>
              <p className="mt-1.5 text-sm text-slate">{step.body}</p>
            </div>
          );
        })}
      </StaggerReveal>
    </div>
  );
}
