"use client";

import {
  motion,
  useReducedMotion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { Rocket, CheckCircle2, School, Users, Wallet, Award } from "lucide-react";
import Button from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";
import CountUp from "@/components/ui/CountUp";
import HeroBackdrop from "./HeroBackdrop";
import { EASE_OUT, SPRING_SOFT, SPRING_GLIDE } from "@/lib/motionConfig";

const HEADLINE = "Help students find their future. Build your own in the process.";

const heroStats = [
  { value: "9+", suffix: " yrs", label: "Guiding students" },
  { value: "3,00,000+", suffix: "", label: "Lives shaped" },
  { value: "200+", suffix: "", label: "School partners" },
];

const practiceRows = [
  { icon: School, label: "Workshops Delivered", value: "5 schools" },
  { icon: Users, label: "Families Guided", value: "40+" },
  { icon: Wallet, label: "Practice Income", value: "₹18L+" },
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
  hidden: { opacity: 0, x: 28, scale: 0.96 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: EASE_OUT } },
};

export default function ApplyHero() {
  const shouldReduceMotion = useReducedMotion();

  // Cursor spotlight — motion values updated on mousemove, spring-smoothed, never trigger a React re-render.
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);
  const springSpotlightX = useSpring(spotlightX, SPRING_GLIDE);
  const springSpotlightY = useSpring(spotlightY, SPRING_GLIDE);
  const spotlightBackground = useMotionTemplate`radial-gradient(520px circle at ${springSpotlightX}px ${springSpotlightY}px, rgba(51,85,224,0.07), transparent 60%)`;

  function handleHeroMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  }

  // Practice-snapshot card tilt — same motion-value pattern, spring-eased for a handcrafted feel.
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, SPRING_SOFT);
  const springTiltY = useSpring(tiltY, SPRING_SOFT);
  const rotateX = useTransform(springTiltY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springTiltX, [-0.5, 0.5], [-8, 8]);

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
      variants={heroContainer}
      initial={shouldReduceMotion ? undefined : "hidden"}
      animate={shouldReduceMotion ? undefined : "show"}
      onMouseMove={handleHeroMouseMove}
      className="relative overflow-hidden bg-white"
    >
      <HeroBackdrop />
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-[0.4] [mask-image:radial-gradient(ellipse_60%_60%_at_70%_20%,black,transparent)]" />
      {!shouldReduceMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={{ background: spotlightBackground }}
        />
      )}

      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-10 lg:py-32">
        <div>
          <motion.div variants={fadeUp}>
            <Eyebrow>MANA by Mentoria</Eyebrow>
          </motion.div>
          <motion.h1
            variants={headlineWords}
            className="mt-7 text-balance text-[2.75rem] font-bold leading-[1.06] tracking-tight text-navy sm:text-6xl lg:text-[4rem]"
          >
            {HEADLINE.split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
                <motion.span variants={wordUp} className="inline-block">
                  {word}&nbsp;
                </motion.span>
              </span>
            ))}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-lg text-balance text-lg leading-relaxed text-slate sm:text-xl">
            Turn your gift for guiding young people into a business you own. No counselling background
            needed.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10">
            <div className="flex flex-wrap items-center gap-4">
              <Button href="#apply" variant="primary" size="lg">
                Apply to join the cohort
              </Button>
              <Button href="#whatis" variant="secondary" size="lg" showArrow={false}>
                What is MANA?
              </Button>
            </div>
            <p className="mt-5 text-sm text-mist">
              No prior experience · Built for working adults · Limited seats
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {heroStats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold tabular-nums text-navy sm:text-3xl">
                  <CountUp value={s.value} />
                  {s.suffix}
                </div>
                <div className="mt-1 text-xs font-medium text-slate sm:text-sm">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={cardReveal} className="relative hidden lg:block" style={{ perspective: "900px" }}>
          <div className="relative mx-auto max-w-sm">
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -left-5 z-10 flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-soft"
            >
              <CheckCircle2 className="h-4 w-4 text-royal" />
              <span className="text-xs font-semibold text-navy">Application takes 2 min</span>
            </motion.div>
            <motion.div
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{ rotateX, rotateY, transformPerspective: 900 }}
              className="rounded-[2rem] border border-border bg-white p-2 shadow-soft-lg"
            >
              <div className="flex flex-col justify-between gap-6 rounded-[1.6rem] bg-lavender p-7">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate shadow-xs">
                    Year One, One Architect
                  </span>
                  <Rocket className="h-5 w-5 text-royal" />
                </div>
                <div className="space-y-3">
                  {practiceRows.map((row) => (
                    <div key={row.label} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-xs">
                      <row.icon className="h-5 w-5 flex-shrink-0 text-royal" />
                      <div>
                        <div className="text-xs font-medium uppercase tracking-wide text-mist">{row.label}</div>
                        <div className="text-lg font-bold text-navy">{row.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-navy p-4">
                  <Award className="h-6 w-6 flex-shrink-0 text-white" />
                  <span className="text-sm font-semibold text-white">Independent Practice, Built</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
