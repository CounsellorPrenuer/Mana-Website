import type { Metadata } from "next";
import { Sparkles, Bell, Layers } from "lucide-react";
import Section, { SectionHeading, Eyebrow } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import WaitlistForm from "@/components/sections/WaitlistForm";

export const metadata: Metadata = {
  title: "Coming Soon: Second Certification Programme",
  description:
    "A second Mentoria Training & Certification programme is on the way. Join the waitlist to be the first to know.",
};

const teasers = [
  { icon: Sparkles, text: "Builds directly on the MANA practice foundation" },
  { icon: Layers, text: "A new specialisation for certified career architects" },
  { icon: Bell, text: "Early waitlist members get first access when it opens" },
];

export default function ComingSoonPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy bg-neural bg-speedlines pb-16 pt-32 text-white sm:pb-20 sm:pt-40">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <Eyebrow dark>Coming Soon</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              A second certification programme is on the way
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-white/70">
              We&apos;re not sharing dates or curriculum yet, but if you want to be first in line, join the
              waitlist below.
            </p>
          </Reveal>
        </div>
      </section>

      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading eyebrow="What We Can Say" title="A few things, without spoiling the reveal" />
            <div className="mt-8 space-y-4">
              {teasers.map((t, i) => (
                <Reveal key={t.text} delay={i * 0.08}>
                  <div className="flex items-start gap-4 rounded-2xl border border-navy/8 bg-white p-5 card-shadow">
                    <t.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-royal" />
                    <span className="text-sm font-medium text-navy">{t.text}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-navy/10 bg-lavender p-8 sm:p-10">
              <h3 className="text-xl font-bold text-navy">Be first to know</h3>
              <p className="mt-2 text-sm text-slate">
                Leave your details and we&apos;ll notify you directly the moment it opens.
              </p>
              <div className="mt-6">
                <WaitlistForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
