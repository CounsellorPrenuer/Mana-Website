"use client";

import { Children, isValidElement } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { EASE_OUT } from "@/lib/motionConfig";

type HomeStaggerProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
};

/** Home page's Framer Motion answer to StaggerReveal — scoped to this page. */
export default function HomeStagger({ children, className, stagger = 0.08, y = 22 }: HomeStaggerProps) {
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
