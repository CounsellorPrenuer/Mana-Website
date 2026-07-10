import type { Metadata } from "next";
import { Users2, Building2, Layers3, ArrowRight } from "lucide-react";
import Link from "next/link";
import Section, { SectionHeading } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import FinalCta from "@/components/sections/FinalCta";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About MANA",
  description:
    "MANA is Mentoria's AI Navigation Architect Certification, training counsellors and educators to build a self-sufficient, AI-era career architecture practice.",
};

const linkCards = [
  {
    href: "/why-mana",
    icon: Layers3,
    title: "Why MANA",
    description: "What separates this from a generic counselling course.",
  },
  {
    href: "/who-should-join",
    icon: Users2,
    title: "Who Should Join",
    description: "Persona fit, eligibility, and the Bridge route for existing counsellors.",
  },
  {
    href: "/certification",
    icon: Building2,
    title: "Certification",
    description: "How the credential is earned, and what you walk away with.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About MANA"
        title="Repositioning career counselling for the AI era"
        description="MANA, the Mentoria AI Navigation Architect Certification, trains counsellors and educators to build a self-sufficient, AI-era career architecture practice serving Class 8–12 and undergraduate students across India."
      />

      <Section bg="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Why Mentoria Built This"
              title="Guidance built for 2015 doesn't work in an economy AI is actively reshaping"
              description="Mentoria has spent years building India's holistic career discovery ecosystem, psychometric assessment, counsellor networks, and a track record with 390+ schools. MANA is the next layer: training a new generation of practitioners who are as fluent in AI as they are in counselling psychology, so the guidance itself keeps pace with the world students are entering."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Card>
              <h3 className="font-bold text-navy">Programme at a glance</h3>
              <dl className="mt-5 space-y-4">
                {[
                  ["Full name", "Mentoria AI Navigation Architect Certification (MANA)"],
                  ["Total hours", "60 hours (30 live + 30 async)"],
                  ["Format", "Blended, live facilitator-led sessions + structured async work"],
                  ["Assessment", "Live practice only, 4 counselling cases + 1 workshop, never a written exam"],
                  ["Target learner", "Counsellors and educators serving Class 8–12 and UG students in India"],
                ].map(([k, v]) => (
                  <div key={k} className="border-t border-navy/8 pt-4 first:border-t-0 first:pt-0">
                    <dt className="text-xs font-bold uppercase tracking-wide text-royal">{k}</dt>
                    <dd className="mt-1 text-sm text-navy">{v}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section bg="lavender">
        <SectionHeading
          eyebrow="The Two-Engine Practice Model"
          title="A practice built on two interlocking channels"
          description="Every MANA architect operates through both engines, they reinforce each other."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <Card className="h-full bg-white">
              <span className="text-xs font-bold uppercase tracking-wider text-magenta">Engine 1</span>
              <h3 className="mt-2 text-xl font-bold text-navy">1:1 TMS 2.0 Counselling Sessions</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                Individual psychometric counselling sessions run on Mentoria&apos;s TMS 2.0 assessment
                platform, the primary, ongoing revenue channel of an independent practice.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="h-full bg-white">
              <span className="text-xs font-bold uppercase tracking-wider text-magenta">Engine 2</span>
              <h3 className="mt-2 text-xl font-bold text-navy">AI Career Navigator Workshops</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                Two-hour workshops delivered directly at schools, the client-acquisition engine. A single
                session typically converts 5–15 paying counselling clients.
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section bg="white">
        <SectionHeading eyebrow="Go Deeper" title="Explore the rest of the programme" align="center" />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {linkCards.map((c, i) => (
            <Reveal key={c.href} delay={i * 0.08}>
              <Link href={c.href} className="group block h-full">
                <Card className="h-full">
                  <c.icon className="h-7 w-7 text-royal" />
                  <h3 className="mt-4 font-bold text-navy">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{c.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-royal">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/downloads" variant="secondary">
            Download the Brochure
          </Button>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
