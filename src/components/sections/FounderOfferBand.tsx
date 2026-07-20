import { Tag } from "lucide-react";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";
import { FEES } from "@/lib/constants";

export default function FounderOfferBand() {
  return (
    <Section>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-navy bg-dotgrid px-6 py-12 text-center sm:px-16 sm:py-16">
          <div className="relative">
            <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white/80">
              <Tag className="h-3.5 w-3.5" />
              Certification Fee
            </div>
            <div className="flex items-baseline justify-center">
              <span className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                {FEES.currency}{FEES.founder.toLocaleString("en-IN")}
              </span>
            </div>
            <p className="mx-auto mt-4 max-w-md text-balance text-white/70">
              One-time fee for the complete MANA certification. The fee is explained in full once you
              apply.
            </p>
            <div className="mt-8">
              <Button href="/orientation" variant="gold" size="lg">
                Apply to Join the Cohort
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
