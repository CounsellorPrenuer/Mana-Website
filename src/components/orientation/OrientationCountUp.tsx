"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "@/lib/motionConfig";

type OrientationCountUpProps = {
  value: string;
  duration?: number;
  className?: string;
};

/** Animates a numeric prefix/suffix string ("390+", "3.75L+") once it enters view. Viewport-triggered, one-time. */
export default function OrientationCountUp({ value, duration = 1.1, className }: OrientationCountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    const match = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
    if (!match) return;
    const [, prefix, numRaw, suffix] = match;
    const grouped = numRaw.includes(",");
    const decimals = numRaw.includes(".") ? numRaw.split(".")[1].length : 0;
    const target = parseFloat(numRaw.replace(/,/g, ""));
    if (Number.isNaN(target)) return;

    if (shouldReduceMotion) return;

    const controls = animate(0, target, {
      duration,
      ease: EASE_OUT,
      onUpdate(v) {
        const formatted = grouped ? Math.round(v).toLocaleString("en-IN") : v.toFixed(decimals);
        setDisplay(`${prefix}${formatted}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
