"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/**
 * A single scroll-drawn line tracing across the top of a card grid, so the cards read
 * as one connected system instead of independent, isolated tiles.
 */
export default function ConnectorLine({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "start 30%"],
  });
  const pathLength = useSpring(scrollYProgress, { stiffness: 220, damping: 40, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="relative">
      <svg
        viewBox="0 0 100 6"
        preserveAspectRatio="none"
        className="absolute left-0 right-0 top-0 hidden h-3 w-full lg:block"
      >
        <line x1="2" y1="3" x2="98" y2="3" stroke="var(--color-border)" strokeWidth="1" />
        <motion.line
          x1="2"
          y1="3"
          x2="98"
          y2="3"
          stroke="var(--color-royal)"
          strokeWidth="1"
          style={{ pathLength: shouldReduceMotion ? 1 : pathLength }}
        />
        {[0.16, 0.5, 0.84].map((x) => (
          <circle key={x} cx={x * 100} cy="3" r="1.4" fill="var(--color-royal)" />
        ))}
      </svg>
      {children}
    </div>
  );
}
