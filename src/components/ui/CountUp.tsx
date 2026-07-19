"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: string;
  duration?: number;
  className?: string;
};

/** Animates a numeric prefix/suffix string ("3,00,000+", "9+ yrs", "₹55,000") once it enters view. */
export default function CountUp({ value, duration = 1200, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    const match = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
    const el = ref.current;
    if (!match || !el) return;

    const [, prefix, numRaw, suffix] = match;
    const grouped = numRaw.includes(",");
    const decimals = numRaw.includes(".") ? numRaw.split(".")[1].length : 0;
    const target = parseFloat(numRaw.replace(/,/g, ""));
    if (Number.isNaN(target)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) {
          setDisplay(value);
          return;
        }

        function step(now: number) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = target * eased;
          const formatted = grouped
            ? Math.round(current).toLocaleString("en-IN")
            : current.toFixed(decimals);
          setDisplay(`${prefix}${formatted}${suffix}`);
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
