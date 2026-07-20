"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Carries the hero's blob-drift atmosphere through into the next section, so the
 * texture doesn't hard-reset the moment you cross the wave divider — the chapter
 * reads as one continuous space instead of two independently-styled blocks.
 */
export default function PageAtmosphere({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  const blobAY = useTransform(scrollYProgress, [0, 1], [-40, 160]);
  const blobBY = useTransform(scrollYProgress, [0, 1], [40, -120]);

  return (
    <div ref={containerRef} className="relative bg-lavender">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={shouldReduceMotion ? undefined : { y: blobAY }}
          className="absolute -left-16 top-0 h-[26rem] w-[26rem] rounded-full bg-royal/[0.06] blur-[110px]"
        />
        <motion.div
          style={shouldReduceMotion ? undefined : { y: blobBY }}
          className="absolute -right-20 top-[40%] h-[22rem] w-[22rem] rounded-full bg-magenta/[0.05] blur-[110px]"
        />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
