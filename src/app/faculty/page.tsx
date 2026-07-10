import type { Metadata } from "next";
import { ShieldCheck, Users, Award, GraduationCap, Bell } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Faculty & Mentors",
  description:
    "MANA is taught and evaluated by Mentoria's senior Career Architects — every live case double-scored, every workshop assessed to the same evaluator standard.",
};

const tiers = [
  {
    icon: Award,
    tier: "Lead Faculty",
    description:
      "Senior Career Architects who designed the MANA curriculum and personally lead Foundation and Navigator Architecture modules. They set the evaluator standard used across every Capstone case.",
  },
  {
    icon: Users,
    tier: "Guest Faculty",
    description:
      "Subject-matter specialists brought in for focused sessions — AI tooling, entrance-exam ecosystems, and school-outreach practice — supplementing the core teaching team.",
  },
  {
    icon: GraduationCap,
    tier: "Practice Mentors",
    description:
      "Practising Mentoria counsellors who support cohort learners through async work, case preparation, and the 90-day post-certification sprint.",
  },
];

export default function FacultyPage() {
  return (
    <>
      <PageHero
        eyebrow="Faculty & Mentors"
        title="Taught and evaluated by Mentoria's senior Career Architects"
        description="Every live case in the MANA Capstone is double-scored by the same senior architects who built the curriculum — the standard of a Mentoria Career Architect is set by the people who defined it."
      />

      <Section bg="white">
        <SectionHeading eyebrow="Faculty Structure" title="Three tiers, one evaluator standard" />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.tier} delay={i * 0.08}>
              <Card className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-gold">
                  <t.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{t.tier}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{t.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bg="navy" className="bg-neural">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <ShieldCheck className="mx-auto h-9 w-9 text-gold" />
            <p className="mt-6 text-balance text-2xl font-semibold leading-snug text-white sm:text-3xl">
              &ldquo;Every live case is double-scored by calibrated senior Career Architects — the same
              evaluators who built the programme, evaluating it.&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-white/50">
              The MANA Evaluation Standard
            </p>
          </Reveal>
        </div>
      </Section>

      <Section bg="lavender">
        <Reveal>
          <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 text-center card-shadow">
            <Bell className="mx-auto h-8 w-8 text-royal" />
            <h3 className="mt-4 text-xl font-bold text-navy">Individual faculty profiles publish per cohort</h3>
            <p className="mt-2 text-slate">
              Named faculty, photos, and full bios are shared as each cohort is finalised. Meet the team
              directly — and ask any question about who&apos;s teaching — at a free Orientation session.
            </p>
            <div className="mt-6">
              <Button href="/orientation">Meet Faculty at Orientation</Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <FinalCta />
    </>
  );
}
