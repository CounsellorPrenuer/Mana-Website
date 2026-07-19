"use client";

import { useEffect, useRef } from "react";
import { Rocket, CheckCircle2, School, Users, Wallet, Award } from "lucide-react";
import Button from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";
import CountUp from "@/components/ui/CountUp";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

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

const MAX_TILT = 7;

export default function ApplyHero() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const cardWrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  // Cursor-follow spotlight — direct style write, no React state, no re-render per pixel.
  function handleHeroMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = spotlightRef.current;
    if (!el || prefersReducedMotion()) return;
    const rect = e.currentTarget.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  // Subtle 3D tilt on the practice-snapshot card.
  function handleCardMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el || prefersReducedMotion()) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-relY * MAX_TILT}deg) rotateY(${relX * MAX_TILT}deg)`;
  }

  function handleCardMouseLeave() {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  }

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".hero-eyebrow", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo(
          ".hero-word",
          { yPercent: 115 },
          { yPercent: 0, duration: 0.85, stagger: 0.028, ease: "power4.out" },
          "-=0.2"
        )
        .fromTo(".hero-sub", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.5")
        .fromTo(".hero-cta", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(".hero-stats", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.35")
        .fromTo(
          cardWrapRef.current,
          { opacity: 0, x: 24, scale: 0.97 },
          { opacity: 1, x: 0, scale: 1, duration: 0.8 },
          "-=0.7"
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      onMouseMove={handleHeroMouseMove}
      className="relative overflow-hidden bg-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-[0.4] [mask-image:radial-gradient(ellipse_60%_60%_at_70%_20%,black,transparent)]" />
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={
          {
            "--x": "50%",
            "--y": "30%",
            background: "radial-gradient(500px circle at var(--x) var(--y), rgba(51,85,224,0.06), transparent 60%)",
          } as React.CSSProperties
        }
      />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-10 lg:py-32">
        <div>
          <div className="hero-eyebrow">
            <Eyebrow>MANA by Mentoria</Eyebrow>
          </div>
          <h1 className="mt-7 text-balance text-[2.75rem] font-bold leading-[1.06] tracking-tight text-navy sm:text-6xl lg:text-[4rem]">
            {HEADLINE.split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
                <span className="hero-word inline-block">{word}&nbsp;</span>
              </span>
            ))}
          </h1>
          <p className="hero-sub mt-7 max-w-lg text-balance text-lg leading-relaxed text-slate sm:text-xl">
            Turn your gift for guiding young people into a business you own. No counselling background
            needed.
          </p>
          <div className="hero-cta mt-10">
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
          </div>
          <div className="hero-stats mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {heroStats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold tabular-nums text-navy sm:text-3xl">
                  <CountUp value={s.value} />
                  {s.suffix}
                </div>
                <div className="mt-1 text-xs font-medium text-slate sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div ref={cardWrapRef} className="relative hidden lg:block" style={{ perspective: "900px" }}>
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -top-5 -left-5 z-10 flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-soft">
              <CheckCircle2 className="h-4 w-4 text-royal" />
              <span className="text-xs font-semibold text-navy">Application takes 2 min</span>
            </div>
            <div
              ref={cardRef}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="rounded-[2rem] border border-border bg-white p-2 shadow-soft-lg transition-transform duration-300 ease-out"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
