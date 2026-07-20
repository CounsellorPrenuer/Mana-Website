"use client";

import { motion, useReducedMotion } from "framer-motion";

type SectionWaveProps = {
  /** Background of the section this wave sits at the bottom of. */
  fromBg: string;
  /** Fill of the wave shape — matches the section being entered, so it reads as a cut into it. */
  toFill: string;
  light?: "royal" | "gold";
};

/** A signature transition moment: a hand-drawn wave cut between two sections, with a light sweep that travels across it once. */
export default function SectionWave({ fromBg, toFill, light = "royal" }: SectionWaveProps) {
  const shouldReduceMotion = useReducedMotion();
  const sweepColor = light === "gold" ? "var(--color-gold)" : "var(--color-royal)";

  return (
    <div className="relative h-14 overflow-hidden sm:h-20" style={{ background: fromBg }} aria-hidden="true">
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M0,45 C220,85 460,10 720,35 C980,60 1220,15 1440,50 L1440,100 L0,100 Z"
          fill={toFill}
        />
      </svg>
      {!shouldReduceMotion && (
        <motion.div
          initial={{ x: "-40%", opacity: 0 }}
          whileInView={{ x: "140%", opacity: [0, 1, 1, 0] }}
          viewport={{ once: true, margin: "-30% 0px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute top-1/2 h-px w-1/3 -translate-y-1/2"
          style={{
            background: `linear-gradient(90deg, transparent, ${sweepColor}, transparent)`,
            filter: "blur(0.5px)",
          }}
        />
      )}
    </div>
  );
}
