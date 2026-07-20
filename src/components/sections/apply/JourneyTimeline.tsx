"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import MotionStagger from "./MotionStagger";

const journey = [
  { n: 1, title: "Apply", body: "Tell us your story." },
  { n: 2, title: "Learn", body: "60 hours, live + self-paced." },
  { n: 3, title: "Certify", body: "Assessment + real-case capstone." },
  { n: 4, title: "Launch", body: "A guided 90-day sprint." },
  { n: 5, title: "Scale", body: "Leads routed to you." },
];

// A gently undulating road, not a flat line — points sit above each step's circle.
const ROAD_PATH = "M 10 10 C 16 2, 24 2, 30 10 S 44 18, 50 10 S 64 2, 70 10 S 84 18, 90 10";

function StepMarker({
  step,
  progress,
  scrollYProgress,
}: {
  step: (typeof journey)[number];
  progress: number;
  scrollYProgress: MotionValue<number>;
}) {
  const [hovered, setHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const rawArrival = useTransform(scrollYProgress, [progress - 0.05, progress + 0.05], [0, 1]);
  const arrival = useSpring(rawArrival, { stiffness: 220, damping: 26 });
  const scale = useTransform(arrival, [0, 1], [0.55, 1]);

  return (
    <div
      className="relative cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div style={{ scale: shouldReduceMotion ? 1 : scale }} className="relative z-10 h-10 w-10">
        <motion.span
          animate={{ scale: hovered ? 1.14 : 1 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="absolute inset-0 flex items-center justify-center rounded-full bg-navy text-sm font-bold text-white ring-8 ring-white"
        >
          {step.n}
        </motion.span>
        <motion.span
          style={{ opacity: shouldReduceMotion ? 1 : arrival }}
          animate={{ scale: hovered ? 1.14 : 1 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="absolute inset-0 flex items-center justify-center rounded-full bg-royal text-sm font-bold text-white ring-8 ring-white"
        >
          {step.n}
        </motion.span>
      </motion.div>
      <h4 className="mt-4 font-bold text-navy">{step.title}</h4>
      <p className="mt-1.5 text-sm text-slate">{step.body}</p>
    </div>
  );
}

export default function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 60%"],
  });
  const pathLength = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="relative mt-16">
      <svg
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        className="absolute left-0 right-0 top-5 hidden h-6 w-full -translate-y-1/2 overflow-visible lg:block"
      >
        <path d={ROAD_PATH} fill="none" stroke="var(--color-border)" strokeWidth="1.5" strokeLinecap="round" />
        <motion.path
          d={ROAD_PATH}
          fill="none"
          stroke="var(--color-royal)"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ pathLength: shouldReduceMotion ? 1 : pathLength }}
        />
      </svg>
      <MotionStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5" stagger={0.1}>
        {journey.map((step, i) => (
          <StepMarker
            key={step.title}
            step={step}
            progress={0.05 + (i / (journey.length - 1)) * 0.8}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </MotionStagger>
    </div>
  );
}
