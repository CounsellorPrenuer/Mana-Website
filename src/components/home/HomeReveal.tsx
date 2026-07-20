"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "@/lib/motionConfig";

type HomeRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: boolean;
};

/** Home page's Framer Motion answer to Reveal — scoped to this page so no other route's bundle grows. */
export default function HomeReveal({ children, className, delay = 0, y = 24, blur = true }: HomeRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: blur ? "blur(8px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
