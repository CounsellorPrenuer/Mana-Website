"use client";

import {
  motion,
  useReducedMotion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  type Variants,
} from "framer-motion";
import { Eyebrow } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { EASE_OUT, SPRING_GLIDE } from "@/lib/motionConfig";

const HEADLINE = "See MANA for yourself. Before you decide anything.";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
};

const headlineWords: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.028, delayChildren: 0.05 } },
};

const wordUp: Variants = {
  hidden: { y: "115%" },
  show: { y: "0%", transition: { duration: 0.7, ease: EASE_OUT } },
};

export default function OrientationHero() {
  const shouldReduceMotion = useReducedMotion();

  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);
  const springX = useSpring(spotlightX, SPRING_GLIDE);
  const springY = useSpring(spotlightY, SPRING_GLIDE);
  const spotlightBackground = useMotionTemplate`radial-gradient(560px circle at ${springX}px ${springY}px, rgba(255,255,255,0.07), transparent 60%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  }

  return (
    <motion.section
      variants={container}
      initial={shouldReduceMotion ? undefined : "hidden"}
      animate={shouldReduceMotion ? undefined : "show"}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-navy bg-dotgrid py-20 sm:py-28"
    >
      {!shouldReduceMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={{ background: spotlightBackground }}
        />
      )}
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <motion.div variants={fadeUp}>
          <Eyebrow dark>MANA Certification · Free Orientation</Eyebrow>
        </motion.div>
        <motion.h1
          variants={headlineWords}
          className="mt-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {HEADLINE.split(" ").map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
              <motion.span variants={wordUp} className="inline-block">
                {word}&nbsp;
              </motion.span>
            </span>
          ))}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-white/70 sm:text-xl"
        >
          A free, live orientation for professionals exploring the MANA Professional Coaching
          Certification. Get your questions answered, see how the programme actually works, and decide
          if it&apos;s right for you. No pressure, no obligation.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="#register" variant="gold" size="lg">
            Register for a Free Orientation
          </Button>
          <Button
            href="#why-attend"
            variant="ghost"
            size="lg"
            showArrow={false}
            className="border-white/25 text-white hover:bg-white/10"
          >
            See what to expect
          </Button>
        </motion.div>
        <motion.p variants={fadeUp} className="mt-7 text-sm font-medium text-white/60">
          Live on Zoom · 90 minutes · Free to attend · Hosted by Mentoria&apos;s CEO
        </motion.p>
      </div>
    </motion.section>
  );
}
