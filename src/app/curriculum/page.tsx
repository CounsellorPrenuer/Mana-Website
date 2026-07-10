import type { Metadata } from "next";
import { Info, Rocket, Lock, Download } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import FinalCta from "@/components/sections/FinalCta";
import { MODULES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Curriculum",
  description:
    "The full MANA module roadmap, 60 hours across 8 modules, the mandatory 90-day sprint, and the non-waivable Capstone gate.",
};

export default function CurriculumPage() {
  return (
    <>
      <PageHero
        eyebrow="Curriculum"
        title="60 hours. 8 modules. One roadmap."
        description="A high-level overview of the MANA architecture, the complete session-by-session curriculum, facilitator notes, and assessment rubrics are shared only after enrolment."
      />

      <Section bg="lavender" className="!py-8">
        <Reveal>
          <div className="flex items-start gap-4 rounded-2xl border border-royal/20 bg-white p-5 sm:items-center">
            <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-royal sm:mt-0" />
            <p className="text-sm text-navy">
              This is a high-level overview. The complete session-by-session curriculum, including
              facilitator materials and assessment rubrics, is shared with enrolled participants only.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section bg="white">
        <SectionHeading eyebrow="Module Roadmap" title="30 live hours + 30 async hours, module by module" />
        <div className="relative mt-14">
          <div className="absolute left-4 top-2 bottom-2 hidden w-px bg-navy/10 sm:block lg:left-1/2" />
          <div className="space-y-6">
            {MODULES.map((m, i) => (
              <Reveal key={m.id} delay={(i % 4) * 0.05}>
                <div className={`relative sm:pl-12 lg:w-1/2 lg:pl-0 ${i % 2 === 0 ? "lg:pr-12" : "lg:ml-auto lg:pl-12"}`}>
                  <div
                    className={`absolute left-2.5 top-6 hidden h-3 w-3 rounded-full bg-royal ring-4 ring-lavender sm:block ${
                      i % 2 === 0 ? "lg:left-auto lg:-right-1.5" : "lg:-left-1.5"
                    }`}
                  />
                  <div className="rounded-2xl border border-navy/8 bg-white p-6 card-shadow">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-magenta">{m.tag}</span>
                      {m.hours && (
                        <span className="rounded-full bg-lavender px-3 py-1 text-xs font-semibold text-royal">
                          {m.hours} hrs · {m.live} live + {m.async} async
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-navy">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{m.outcome}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="navy" className="bg-neural">
        <div className="grid gap-8 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.05] p-8">
              <Rocket className="h-8 w-8 text-gold" />
              <h3 className="mt-4 text-xl font-bold text-white">The 90-Day Sprint</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Foundation 3&apos;s school-outreach training extends into a mandatory 90-day
                practice-building sprint after certification. No sprint completion means no Active Practice
                Badge, MANA certifies practitioners who actually launch.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.05] p-8">
              <Lock className="h-8 w-8 text-gold" />
              <h3 className="mt-4 text-xl font-bold text-white">The Capstone Gate</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Non-waivable. 4 human-evaluated TMS 2.0 counselling cases plus 1 video-recorded workshop,
                every case double-scored by senior Career Architects.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section bg="white">
        <Reveal>
          <div className="mx-auto max-w-2xl rounded-3xl border border-navy/10 bg-lavender p-10 text-center">
            <Download className="mx-auto h-8 w-8 text-royal" />
            <h3 className="mt-4 text-xl font-bold text-navy">Want the full breakdown?</h3>
            <p className="mt-2 text-slate">
              Download the Curriculum Overview for a detailed, module-by-module summary.
            </p>
            <div className="mt-6">
              <Button href="/downloads">Download Curriculum Overview</Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <FinalCta />
    </>
  );
}
