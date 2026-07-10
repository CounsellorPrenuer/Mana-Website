import type { Metadata } from "next";
import { GraduationCap, CheckCircle2, MessageCircle } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import FinalCta from "@/components/sections/FinalCta";
import { PERSONAS, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Who Should Join",
  description:
    "MANA is built for counsellors, psychologists, educators, HR professionals, Army veterans, and second-career professionals. Check eligibility and fit.",
};

const eligibility = [
  "Graduate in any stream, minimum qualification",
  "Background in psychology or education is helpful, but not mandatory",
  "No prior AI experience required, Foundation 1 builds this from zero",
  "Genuine interest in guiding Class 8–12 and undergraduate students",
];

export default function WhoShouldJoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Who Should Join"
        title="Is MANA the right fit for you?"
        description="If you already guide, teach, assess, or counsel people, MANA gives you a structured, AI-era practice to build on."
      />

      <Section bg="white">
        <SectionHeading eyebrow="You're a Fit If…" title="MANA is built for people who already guide others" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PERSONAS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <Card className="h-full">
                <GraduationCap className="h-7 w-7 text-magenta" />
                <h3 className="mt-4 font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{p.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bg="lavender">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionHeading eyebrow="Eligibility" title="What you need before you start" />
            <ul className="mt-8 space-y-4">
              {eligibility.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-royal" />
                  <span className="text-navy">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <Card>
              <span className="inline-flex rounded-full bg-royal/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-royal">
                Already Mentoria-Certified?
              </span>
              <h3 className="mt-4 text-xl font-bold text-navy">Take the Bridge route instead</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                If you hold an active Mentoria counsellor certification under the previous model, you don&apos;t
                need to redo the full programme. The Bridge Programme is an 18-hour condensed pathway covering
                only what&apos;s genuinely new, TMS 2.0 mastery, updated AI content, and the entirely new
                Workshop Certification, for a reduced fee.
              </p>
              <div className="mt-6">
                <Button href="/bridge-programme" variant="secondary">
                  Explore the Bridge Programme
                </Button>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section bg="white">
        <Reveal>
          <div className="mx-auto max-w-2xl rounded-3xl border border-navy/10 bg-lavender p-10 text-center">
            <MessageCircle className="mx-auto h-8 w-8 text-royal" />
            <h3 className="mt-4 text-xl font-bold text-navy">Not sure if you&apos;re a fit?</h3>
            <p className="mt-2 text-slate">Talk it through with us directly, no obligation, no pressure.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button
                href={`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
                variant="secondary"
                external
                showArrow={false}
              >
                Chat on WhatsApp
              </Button>
              <Button href="/orientation" variant="primary" showArrow={false}>
                Register for Orientation
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <FinalCta />
    </>
  );
}
