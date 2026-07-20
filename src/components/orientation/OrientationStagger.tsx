"use client";

import { Children, isValidElement } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type OrientationStaggerProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
};

/** Viewport-triggered staggered reveal for sibling groups (card grids, chip rows, lists). */
export default function OrientationStagger({
  children,
  className,
  stagger = 0.08,
  y = 20,
}: OrientationStaggerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: 0.04 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y, scale: 0.97 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 24 },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
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
