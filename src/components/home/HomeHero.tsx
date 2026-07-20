"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
  useScroll,
  type Variants,
} from "framer-motion";
import { Brain, BadgeCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";
import StatStrip from "@/components/ui/StatStrip";
import { EASE_OUT, SPRING_SOFT, SPRING_GLIDE } from "@/lib/motionConfig";

const HEADLINE = "Become India's next AI-era career architect";

const capstoneRows = [
  { label: "TMS 2.0 Cases Cleared", value: "4 / 4" },
  { label: "Workshop Delivered", value: "Recorded ✓" },
  { label: "Double-Scored By", value: "Senior Architects" },
];

const heroContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

const headlineWords: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03, delayChildren: 0.05 } },
};

const wordUp: Variants = {
  hidden: { y: "115%" },
  show: { y: "0%", transition: { duration: 0.8, ease: EASE_OUT } },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, x: 28, scale: 0.96, rotate: -2 },
  show: { opacity: 1, x: 0, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 180, damping: 20, delay: 0.3 } },
};

export default function HomeHero() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const recedeOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const recedeScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const recedeY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);
  const springSpotlightX = useSpring(spotlightX, SPRING_GLIDE);
  const springSpotlightY = useSpring(spotlightY, SPRING_GLIDE);
  const spotlightBackground = useMotionTemplate`radial-gradient(560px circle at ${springSpotlightX}px ${springSpotlightY}px, rgba(255,255,255,0.06), transparent 60%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  }

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, SPRING_SOFT);
  const springTiltY = useSpring(tiltY, SPRING_SOFT);
  const rotateX = useTransform(springTiltY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(springTiltX, [-0.5, 0.5], [-7, 7]);

  function handleCardMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    tiltX.set((e.clientX - rect.left) / rect.width - 0.5);
    tiltY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleCardMouseLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  return (
    <motion.section
      ref={sectionRef}
      variants={heroContainer}
      initial={shouldReduceMotion ? undefined : "hidden"}
      animate={shouldReduceMotion ? undefined : "show"}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-navy bg-dotgrid pb-20 pt-12 sm:pb-28 sm:pt-14 lg:pt-16"
    >
      {!shouldReduceMotion && (
        <motion.div className="pointer-events-none absolute inset-0 hidden lg:block" style={{ background: spotlightBackground }} />
      )}

      <motion.div
        style={shouldReduceMotion ? undefined : { opacity: recedeOpacity, scale: recedeScale, y: recedeY }}
        className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10 lg:px-10"
      >
        <div>
          <motion.div variants={fadeUp}>
            <Eyebrow dark compact>
              Mentoria Training &amp; Certification
            </Eyebrow>
          </motion.div>
          <motion.h1
            variants={headlineWords}
            className="mt-6 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {HEADLINE.split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
                <motion.span
                  variants={wordUp}
                  className={`inline-block ${word === "architect" ? "text-royal-light" : ""}`}
                >
                  {word}&nbsp;
                </motion.span>
              </span>
            ))}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/70 sm:text-xl">
            MANA trains counsellors and educators to build a self-sufficient, AI-era career guidance
            practice through 1:1 TMS 2.0 counselling and school workshops, assessed entirely through
            live practice, never a written exam.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/orientation" variant="gold" size="lg">
              Apply to Join the Cohort
            </Button>
            <Button href="/downloads" variant="ghost" size="lg" className="border-white/25 text-white hover:bg-white/10">
              Download Brochure
            </Button>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-14 border-t border-white/10 pt-8">
            <StatStrip dark />
          </motion.div>
        </div>

        <motion.div variants={cardReveal} className="relative mx-auto w-full max-w-sm lg:max-w-none" style={{ perspective: "900px" }}>
          <motion.div
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            style={{ rotateX, rotateY, transformPerspective: 900 }}
            className="relative mx-auto aspect-[4/5] max-w-sm rounded-[2rem] border border-white/10 bg-white/[0.04] p-2 shadow-soft-lg backdrop-blur-sm"
          >
            <div className="flex h-full flex-col justify-between rounded-[1.6rem] bg-navy-light p-7">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                  Capstone: Case 4
                </span>
                <Brain className="h-5 w-5 text-gold" />
              </div>
              <div className="space-y-4">
                {capstoneRows.map((row) => (
                  <div key={row.label} className="rounded-xl bg-white/[0.06] p-4">
                    <div className="text-xs font-medium uppercase tracking-wide text-white/50">{row.label}</div>
                    <div className="mt-1 text-lg font-bold text-white">{row.value}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-gold/15 p-4">
                <BadgeCheck className="h-6 w-6 flex-shrink-0 text-gold" />
                <span className="text-sm font-semibold text-white">Active Practice Badge Earned</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
