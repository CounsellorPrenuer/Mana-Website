import type { Metadata } from "next";
import Section, { SectionHeading } from "@/components/ui/Section";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import FinalCta from "@/components/sections/FinalCta";
import { FAQ_CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers on MANA eligibility, duration, certification, AI modules, income, payments, applying, and the Bridge route.",
};

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Every question, answered"
        description="Organised by category, if you can't find what you're looking for, ask us directly when you apply."
      />

      <Section bg="white">
        <div className="mx-auto max-w-3xl space-y-14">
          {FAQ_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.category} delay={Math.min(i * 0.04, 0.3)}>
              <SectionHeading title={cat.category} />
              <div className="mt-6">
                <Accordion items={cat.items} />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
