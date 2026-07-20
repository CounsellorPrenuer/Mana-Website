"use client";

import { School } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const TOTAL = 5;
const FILLED = 1;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const iconPop: Variants = {
  hidden: { opacity: 0, scale: 0.4, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

/** Makes "~1 in 5 schools have a counsellor" a picture, not a sentence: one lit icon among five. */
export default function SchoolRatioViz() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="flex items-center justify-center gap-3 sm:gap-4"
    >
      {Array.from({ length: TOTAL }).map((_, i) => {
        const filled = i < FILLED;
        return (
          <motion.div key={i} variants={iconPop} className="relative">
            {filled && !shouldReduceMotion && (
              <motion.span
                aria-hidden="true"
                animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-2xl bg-royal/25"
              />
            )}
            <div
              className={`relative flex h-14 w-14 items-center justify-center rounded-2xl sm:h-16 sm:w-16 ${
                filled ? "bg-royal text-white shadow-soft" : "bg-lavender text-mist"
              }`}
            >
              <School className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
