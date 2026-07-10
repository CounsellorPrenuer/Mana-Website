import type { Metadata } from "next";
import { CalendarClock, Users, MessageSquareText, Wallet, CheckCircle2, MessageCircle } from "lucide-react";
import Section, { SectionHeading, Eyebrow } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import StatStrip from "@/components/ui/StatStrip";
import { SITE, ORIENTATION } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Register for a Free Orientation",
  description:
    "Join a free, live MANA orientation session, see the practice model, meet faculty, get your questions answered, and hear the fee and Founder's Offer explained in full.",
};

const expectItems = [
  { icon: Users, text: "See the two-engine practice model explained live, with real numbers" },
  { icon: MessageSquareText, text: "Meet faculty and ask anything, no scripted pitch" },
  { icon: Wallet, text: "Get the fee and Founder's Offer explained in full, no surprises" },
  { icon: CheckCircle2, text: "Leave with a clear next step, no obligation to enrol" },
];

export default function OrientationPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy bg-neural bg-speedlines pb-16 pt-32 text-white sm:pb-20 sm:pt-40">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <Eyebrow dark>{ORIENTATION.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Register for a Free Orientation
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-white/70 sm:text-xl">
              Everything about MANA, the practice model, the faculty, and the fee, explained live before you
              commit to anything.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold">
              <CalendarClock className="h-4 w-4 text-gold" />
              {ORIENTATION.scheduleBadge}
            </div>
          </Reveal>
        </div>
      </section>

      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Reveal>
              <SectionHeading eyebrow="What To Expect" title="A 45-minute session, zero pressure" />
            </Reveal>
            <div className="mt-8 space-y-4">
              {expectItems.map((item, i) => (
                <Reveal key={item.text} delay={i * 0.06}>
                  <div className="flex items-start gap-4 rounded-2xl border border-navy/8 bg-white p-5 card-shadow">
                    <item.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-royal" />
                    <span className="text-sm font-medium text-navy">{item.text}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.3}>
              <div className="mt-10 rounded-2xl bg-lavender p-6">
                <StatStrip />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="lg:sticky lg:top-24">
              <div className="rounded-3xl border border-navy/10 bg-white p-3 card-shadow-lg sm:p-4">
                <div className="rounded-2xl bg-lavender px-5 py-4 text-center">
                  <h3 className="font-bold text-navy">Complete your registration below</h3>
                  <p className="mt-1 text-xs text-slate">Takes under 2 minutes. We&apos;ll confirm your slot over WhatsApp.</p>
                </div>
                <div className="mt-3 overflow-hidden rounded-2xl border border-navy/10">
                  <iframe
                    src={SITE.orientationFormUrl}
                    title="MANA Orientation Registration Form"
                    className="h-[min(720px,80vh)] w-full sm:h-[720px]"
                    loading="lazy"
                  >
                    Loading registration form…
                  </iframe>
                </div>
                <div className="mt-4 space-y-3 px-2 pb-2">
                  <Button href={SITE.orientationFormUrl} external size="lg" className="w-full justify-center">
                    Open Registration Form
                  </Button>
                  <Button
                    href={`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
                    external
                    variant="secondary"
                    size="lg"
                    showArrow={false}
                    className="w-full justify-center"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Prefer WhatsApp? Message Us Instead
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section bg="lavender">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">Still deciding?</h2>
            <p className="mt-3 text-slate">
              Orientation is free and comes with zero obligation to enrol. It&apos;s the fastest way to get
              every question answered directly by the people who run the programme.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Button href={SITE.orientationFormUrl} external size="lg">
                Register Now
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
