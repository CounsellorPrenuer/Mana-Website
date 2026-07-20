"use client";

import { motion, useReducedMotion } from "framer-motion";

/** A horizontal connecting line drawn once as the 3-step row enters view. Not scroll-linked. */
export default function StepConnector() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 100 4"
      preserveAspectRatio="none"
      className="pointer-events-none absolute left-0 right-0 top-9 hidden h-1 w-full sm:block"
      aria-hidden="true"
    >
      <line x1="17" y1="2" x2="83" y2="2" stroke="var(--color-border)" strokeWidth="1.5" />
      {shouldReduceMotion ? (
        <line x1="17" y1="2" x2="83" y2="2" stroke="var(--color-royal)" strokeWidth="1.5" />
      ) : (
        <motion.line
          x1="17"
          y1="2"
          x2="83"
          y2="2"
          stroke="var(--color-royal)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: "easeInOut", delay: 0.2 }}
        />
      )}
    </svg>
  );
}
