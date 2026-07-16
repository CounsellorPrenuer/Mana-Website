import { Clock } from "lucide-react";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";
import { FEES } from "@/lib/constants";

export default function FounderOfferBand() {
  return (
    <Section>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy to-royal-light/20 px-6 py-12 text-center sm:px-16 sm:py-16">
          <div className="absolute inset-0 bg-neural" />
          <div className="relative">
            <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold">
              <Clock className="h-3.5 w-3.5" />
              Founder&apos;s Offer · Limited Time
            </div>
            <div className="flex items-baseline justify-center gap-4">
              <span className="text-2xl font-semibold text-white/40 line-through">
                {FEES.currency}{FEES.standard.toLocaleString("en-IN")}
              </span>
              <span className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                {FEES.currency}{FEES.founder.toLocaleString("en-IN")}
              </span>
            </div>
            <p className="mx-auto mt-4 max-w-md text-balance text-white/70">
              Save {FEES.currency}{FEES.discount.toLocaleString("en-IN")} on the full MANA certification.
              The fee and offer are explained in full once you apply.
            </p>
            <div className="mt-8">
              <Button href="/orientation" variant="gold" size="lg">
                Claim the Founder&apos;s Offer
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
