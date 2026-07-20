"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "@/lib/motionConfig";

type OrientationRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: boolean;
};

/**
 * Orientation page's reveal primitive. Viewport-triggered via IntersectionObserver
 * (whileInView + once:true), never continuous scroll-linked. That's the difference
 * between "animation" and the scroll-scrubbed listeners that caused real lag before.
 */
export default function OrientationReveal({
  children,
  className,
  delay = 0,
  y = 22,
  blur = true,
}: OrientationRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: blur ? "blur(6px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
