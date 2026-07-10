import type { Metadata } from "next";
import { Award, Video, ShieldCheck, RotateCcw, ListChecks } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import FinalCta from "@/components/sections/FinalCta";
import { CERTIFICATION_BADGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Certification",
  description:
    "How the MANA credential is earned — a non-waivable Capstone of 4 human-evaluated counselling cases and 1 video-recorded workshop, double-scored by senior Career Architects.",
};

const tiers = [
  {
    tier: "Tier 1",
    title: "Module Assessments",
    description: "Each of the 8 modules carries its own scenario-based assessment — role-plays, case studies, and structured exercises, not written tests.",
  },
  {
    tier: "Tier 2",
    title: "Take-Home Evidence",
    description: "Documented practicum work — toolkits, pathway maps, session plans — submitted as evidence of applied learning between live sessions.",
  },
  {
    tier: "Tier 3",
    title: "The Capstone Gate",
    description: "The non-waivable certification gate: 4 live counselling cases plus 1 workshop, human-evaluated and double-scored by senior Career Architects.",
  },
];

const caseRequirements = [
  "Case 1 — Class 9 or 10 student: interest interpretation and stream/subject selection (60 min minimum).",
  "Case 2 — Class 11 or 12 student: full psychometric session covering interest, personality and ability, with entrance exam planning (75–90 min).",
  "Case 3 — UG or gap-year student: career discovery session with industry and pathway recommendations (90 min minimum).",
  "Case 4 — Free choice: any client profile presenting a genuine challenge — contradictory scores, career fixation, or a three-way parent session.",
];

export default function CertificationPage() {
  return (
    <>
      <PageHero
        eyebrow="Certification"
        title="Assessed through live practice. Never a written exam."
        description="The standard of a Mentoria Career Architect is set at the Capstone — and no amount of strong coursework overrides a failed one."
      />

      <Section bg="white">
        <SectionHeading eyebrow="Three-Tier Assessment" title="How you're evaluated, module by module" />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.tier} delay={i * 0.08}>
              <Card className="h-full">
                <span className="text-xs font-bold uppercase tracking-wider text-magenta">{t.tier}</span>
                <h3 className="mt-2 text-lg font-bold text-navy">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{t.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bg="navy" className="bg-neural">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="The Capstone"
              title="4 counselling cases. 1 workshop. Zero shortcuts."
              dark
              description="Non-waivable — the certificate is not issued until every component passes."
            />
            <div className="mt-8 space-y-3">
              {caseRequirements.map((req) => (
                <div key={req} className="flex items-start gap-3 rounded-xl bg-white/[0.05] p-4">
                  <ListChecks className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                  <span className="text-sm text-white/80">{req}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
                <Video className="h-6 w-6 text-gold" />
                <h3 className="mt-3 font-bold text-white">Workshop Component</h3>
                <p className="mt-2 text-sm text-white/70">
                  A full AI Career Navigator Workshop delivered to a live or simulated audience of minimum
                  10 students, video-recorded, with post-workshop follow-up submitted within 48 hours.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
                <ShieldCheck className="h-6 w-6 text-gold" />
                <h3 className="mt-3 font-bold text-white">Human-Evaluated, Double-Scored</h3>
                <p className="mt-2 text-sm text-white/70">
                  Every case is evaluated by calibrated senior Career Architects and independently
                  double-scored — no single-evaluator subjectivity.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
                <RotateCcw className="h-6 w-6 text-gold" />
                <h3 className="mt-3 font-bold text-white">Resit Policy</h3>
                <p className="mt-2 text-sm text-white/70">
                  Any Tier 3 dimension below 3/5 (non-ethics) is resit-eligible after a 4-week development
                  period. A 1/5 on the ethics or child-first dimension on any case is an automatic fail,
                  with no resit for 6 months.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section bg="white">
        <SectionHeading eyebrow="What You Earn" title="Four credentials on successful completion" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATION_BADGES.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <Card className="h-full">
                <Award className="h-7 w-7 text-royal" />
                <h3 className="mt-4 font-bold text-navy">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{b.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate">
            Certified architects also receive a listing in Mentoria&apos;s verifiable practitioner
            directory — a public, checkable credential for schools and clients.
          </p>
        </Reveal>
      </Section>

      <FinalCta />
    </>
  );
}
