"use client";

import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { SPRING_SOFT } from "@/lib/motionConfig";

const MAX_TILT = 6;

/** Wraps children in a subtle 3D-tilt-and-lift-on-hover card, spring-eased via Framer Motion. */
export default function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springX = useSpring(tiltX, SPRING_SOFT);
  const springY = useSpring(tiltY, SPRING_SOFT);
  const rotateX = useTransform(springY, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    tiltX.set((e.clientX - rect.left) / rect.width - 0.5);
    tiltY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={
        shouldReduceMotion
          ? undefined
          : { y: -4, boxShadow: "0 24px 56px -20px rgba(51,85,224,0.22)" }
      }
      transition={SPRING_SOFT}
      style={shouldReduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 700 }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
