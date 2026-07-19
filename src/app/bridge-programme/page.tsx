import type { Metadata } from "next";
import { ArrowRightLeft, CheckCircle2 } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import FinalCta from "@/components/sections/FinalCta";
import { FEES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bridge Programme",
  description:
    "An 18-hour condensed pathway for existing Mentoria counsellors migrating to the full MANA certification.",
};

const modules = [
  {
    title: "Bridge Module 1: TMS 2.0 Platform Mastery",
    hours: "6 hrs",
    description:
      "Full platform walkthrough for counsellors who understand assessment interpretation but haven't used TMS 2.0, not a condensed overview.",
  },
  {
    title: "Bridge Module 2: AI Literacy & Career Impact",
    hours: "4 hrs",
    description:
      "A condensed version of Foundation 1, focused specifically on what's changed since previous training, the AI-Occupational Index, the 10-year skill shelf-life framework, and updated scripts.",
  },
  {
    title: "Bridge Module 3: Workshop Certification",
    hours: "6 hrs",
    description:
      "The AI Career Navigator Workshop is entirely new content, no prior credit given. The most important module for building a self-sufficient practice.",
  },
  {
    title: "Practicum Case + Workshop Delivery",
    hours: "2 hrs",
    description: "Final certification gate, assessed to the exact same standard as the full MANA programme.",
  },
];

export default function BridgeProgrammePage() {
  return (
    <>
      <PageHero
        eyebrow="Bridge Programme"
        title="For existing Mentoria counsellors"
        description="If you already hold an active Mentoria certification under the previous model, you don't need to redo everything. Skip what you know, complete only what's genuinely new."
      />

      <Section bg="white">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            ["18 hours", "Across 4 condensed modules"],
            [`${FEES.currency}${FEES.bridgeMin.toLocaleString("en-IN")}–${FEES.currency}${FEES.bridgeMax.toLocaleString("en-IN")}`, "Reduced fee, not free"],
            ["Full MANA credential", "Awarded on passing both gate components"],
          ].map(([value, label]) => (
            <Reveal key={value}>
              <Card className="h-full text-center">
                <div className="text-2xl font-bold text-navy">{value}</div>
                <div className="mt-1 text-sm text-slate">{label}</div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bg="lavender">
        <SectionHeading eyebrow="Eligibility" title="Who this is for" />
        <Reveal delay={0.05}>
          <div className="mt-8 flex items-start gap-4 rounded-2xl bg-white p-6 shadow-soft">
            <ArrowRightLeft className="mt-0.5 h-6 w-6 flex-shrink-0 text-royal" />
            <p className="text-navy">
              Counsellors holding an active Mentoria certification under the previous model. Certification
              gate: 1 TMS 2.0 practicum case (assessed to the same standard as full MANA) plus 1 workshop
              delivery.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section bg="white">
        <SectionHeading eyebrow="The Modules" title="What's covered and what isn't" />
        <div className="mt-10 space-y-4">
          {modules.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.06}>
              <div className="rounded-2xl border border-navy/8 bg-white p-6 shadow-soft">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-bold text-navy">{m.title}</h3>
                  <span className="rounded-full bg-lavender px-3 py-1 text-xs font-semibold text-royal">
                    {m.hours}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate">{m.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-lavender p-5">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-royal" />
            <p className="text-sm text-navy">
              Basic AI literacy content already covered in your prior training is not repeated. Counsellors
              entirely new to AI should complete the full Foundation 1 module instead of the Bridge route.
            </p>
          </div>
        </Reveal>
      </Section>

      <FinalCta
        title="Ready to bridge to MANA?"
        description="Tell us about your background when you apply and we'll confirm which route, full programme or Bridge, fits you."
      />
    </>
  );
}
