import type { Metadata } from "next";
import { Sparkles, MapPin, Briefcase, Video, TrendingUp } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Why MANA",
  description:
    "Four differentiators that separate MANA from a generic counselling course, AI fluency, India-specific design, real business building, and proof through live practice.",
};

const differentiators = [
  {
    icon: Sparkles,
    title: "AI Fluency That Actually Counsels",
    description:
      "Most 'AI training' teaches tool usage. MANA teaches calibrated communication, explaining AI's real career impact to a frightened Class 11 student or a hostile parent audience, honestly, without alarmism or false reassurance.",
  },
  {
    icon: MapPin,
    title: "Built for the Indian System, Specifically",
    description:
      "CBSE, ICSE, IB, IGCSE and State Boards. NIOS routes. Entrance exam ecosystems. Foundation 2 is built around the education system your clients are actually navigating, not a generic global framework.",
  },
  {
    icon: Briefcase,
    title: "A Business, Not Just a Badge",
    description:
      "Foundation 3 is a full sales operating system, pricing, school outreach, positioning, followed by a mandatory 90-day sprint. MANA certifies practitioners, not just knowledge.",
  },
  {
    icon: Video,
    title: "Proven Through Live Practice",
    description:
      "No written exam, anywhere in the programme. Every certification claim is backed by 4 human-evaluated counselling cases and one video-recorded workshop, double-scored by senior Career Architects.",
  },
];

export default function WhyManaPage() {
  return (
    <>
      <PageHero
        eyebrow="Why MANA"
        title="Not another counselling course with an AI module bolted on"
        description="Four things MANA does differently, each one designed around what actually makes an independent career-guidance practice succeed in India, today."
      />

      <Section bg="white">
        <div className="grid gap-8 sm:grid-cols-2">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08}>
              <Card className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-gold">
                  <d.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{d.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bg="navy" className="bg-neural">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="The Economics"
              title="The workshop model is the differentiator"
              dark
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-sm">
              <TrendingUp className="h-8 w-8 text-gold" />
              <p className="mt-5 text-lg leading-relaxed text-white/85">
                A single 2-hour AI Career Navigator Workshop, delivered at one school, typically converts{" "}
                <span className="font-bold text-gold">5–15 paying counselling clients</span>. An architect
                who can deliver workshops consistently is self-sufficient. One who cannot is dependent on
                referrals, which is exactly why Navigator Architecture 4 and the Foundation 3 sales
                operating system exist as mandatory, assessed modules.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <FinalCta
        title="See the differentiators explained live"
        description="Orientation walks through exactly how the workshop-to-client pipeline works, with real numbers."
      />
    </>
  );
}
