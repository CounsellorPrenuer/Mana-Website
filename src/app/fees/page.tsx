import type { Metadata } from "next";
import { Check, Clock, Info, RefreshCw } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import FinalCta from "@/components/sections/FinalCta";
import { FEES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Fees & Founder's Offer",
  description: `MANA certification is priced at ₹${FEES.standard.toLocaleString(
    "en-IN"
  )}, with a limited-time Founder's Offer bringing it to ₹${FEES.founder.toLocaleString("en-IN")}.`,
};

const included = [
  "All 8 modules: 60 hours of live + async training",
  "TMS 2.0 platform onboarding and assessment suite access during training",
  "The full Capstone evaluation, 4 counselling cases + 1 workshop, double-scored",
  "MANA Certificate, Workshop Facilitation Badge, TMS 2.0 Practitioner Endorsement",
  "90-day post-certification sprint support toward the Active Practice Badge",
  "Listing in Mentoria's verifiable practitioner directory on completion",
];

export default function FeesPage() {
  return (
    <>
      <PageHero
        eyebrow="Fees & Founder's Offer"
        title="Transparent pricing, explained in full"
        description="No hidden costs, no surprise add-ons, here's exactly what's included and what it costs."
      />

      <Section bg="white">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-navy p-10 text-center sm:p-14">
              <div className="absolute inset-0 bg-dotgrid" />
              <div className="relative">
                <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white/80">
                  <Clock className="h-3.5 w-3.5" />
                  Founder&apos;s Offer · Limited Time
                </div>
                <div className="flex items-baseline justify-center gap-4">
                  <span className="text-2xl font-semibold text-white/40 line-through">
                    {FEES.currency}
                    {FEES.standard.toLocaleString("en-IN")}
                  </span>
                  <span className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                    {FEES.currency}
                    {FEES.founder.toLocaleString("en-IN")}
                  </span>
                </div>
                <p className="mt-4 text-white/70">One-time fee for the complete MANA certification.</p>
                <div className="mt-8">
                  <Button href="/orientation" variant="gold" size="lg">
                    Claim the Founder&apos;s Offer
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section bg="lavender">
        <SectionHeading eyebrow="What's Included" title="Everything covered in the certification fee" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {included.map((item, i) => (
            <Reveal key={item} delay={(i % 2) * 0.06}>
              <div className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-soft">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-royal" />
                <span className="text-sm font-medium text-navy">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <div className="grid gap-6 sm:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <Info className="h-6 w-6 text-royal" />
              <h3 className="mt-4 font-bold text-navy">TMS 2.0 Subscription (Ongoing)</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                An active TMS 2.0 subscription, {FEES.tms2Monthly}/month, is required to practise under
                the Mentoria brand after certification. This is a separate, ongoing platform cost, not part
                of the one-time certification fee.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="h-full">
              <RefreshCw className="h-6 w-6 text-royal" />
              <h3 className="mt-4 font-bold text-navy">Already Mentoria-Certified?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                The Bridge Programme is available at a reduced fee of {FEES.currency}
                {FEES.bridgeMin.toLocaleString("en-IN")}–{FEES.currency}
                {FEES.bridgeMax.toLocaleString("en-IN")} for existing Mentoria counsellors migrating to
                MANA. See the Bridge Programme page for details.
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section bg="lavender">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold text-navy">Payment options and EMI</h3>
            <p className="mt-3 text-slate">
              Flexible payment options are discussed and confirmed once you apply, along with the
              current Founder&apos;s Offer deadline for your cohort.
            </p>
          </div>
        </Reveal>
      </Section>

      <FinalCta
        title="The fee and offer, explained in full"
        description="Nothing is finalised without a real conversation with our team. Apply and we'll walk you through it."
      />
    </>
  );
}
