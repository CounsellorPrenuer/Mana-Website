"use client";

import { Children, isValidElement } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { EASE_OUT } from "@/lib/motionConfig";

type MotionStaggerProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
};

/** Viewport-triggered staggered reveal for sibling groups (card grids, lists) — Framer Motion answer to StaggerReveal. */
export default function MotionStagger({ children, className, stagger = 0.08, y = 22 }: MotionStaggerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: 0.04 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
  };

  return (
    <motion.div className={className} variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
      {Children.map(children, (child) =>
        isValidElement(child) ? (
          <motion.div className="h-full" variants={item}>
            {child}
          </motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  );
}
