import type { Metadata } from "next";
import { ShieldCheck, Users, Award, GraduationCap, Bell, ExternalLink, BrainCircuit } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import FinalCta from "@/components/sections/FinalCta";

const featuredFaculty = [
  {
    name: "Dr. Anupama Sharma Avasthi",
    title: "Master Counsellor & Corporate Workshop Facilitator, Mentoria",
    credentials: "Ph.D. Biotechnology · Senior AI Evaluator · 20+ Years in Academia & AI",
    bio: "Dr. Avasthi combines two decades of academic leadership, most recently at Amity University, with frontier AI evaluation work across ScaleAI, Mercor, and DataAnnotation, writing and auditing the evaluation rubrics that shape frontier model behaviour. As a Certified Career Coach and Master Counsellor at Mentoria, she has led wellness and career workshops for leadership teams at Ernst & Young, Mercedes-Benz, Britannia, and Dr. Reddy's Laboratories. That rare pairing, career-guidance depth and hands-on AI-alignment expertise, is exactly the calibration MANA's AI-literacy modules are built on.",
    linkedin: "https://www.linkedin.com/in/dr-anupama-avasthi-67014237/",
    initials: "AA",
  },
];

export const metadata: Metadata = {
  title: "Faculty & Mentors",
  description:
    "MANA is taught and evaluated by Mentoria's senior Career Architects, every live case double-scored, every workshop assessed to the same evaluator standard.",
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
      "Subject-matter specialists brought in for focused sessions, AI tooling, entrance-exam ecosystems, and school-outreach practice, supplementing the core teaching team.",
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
        description="Every live case in the MANA Capstone is double-scored by the same senior architects who built the curriculum, the standard of a Mentoria Career Architect is set by the people who defined it."
      />

      <Section bg="white">
        <SectionHeading eyebrow="Featured Faculty" title="Meet a MANA Career Architect" align="center" />
        <div className="mx-auto mt-12 max-w-4xl">
          {featuredFaculty.map((f) => (
            <Reveal key={f.name}>
              <Card className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-start" hover={false}>
                <div className="mx-auto flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl bg-navy text-2xl font-bold text-white sm:mx-0">
                  {f.initials}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-xl font-bold text-navy">{f.name}</h3>
                    <a
                      href={f.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-royal hover:text-navy"
                    >
                      LinkedIn
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <p className="mt-1 font-semibold text-royal">{f.title}</p>
                  <div className="mt-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-mist">
                    <BrainCircuit className="h-3.5 w-3.5 flex-shrink-0" />
                    {f.credentials}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate">{f.bio}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bg="lavender">
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

      <Section bg="navy" className="bg-dotgrid">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <ShieldCheck className="mx-auto h-9 w-9 text-gold" />
            <p className="mt-6 text-balance text-2xl font-semibold leading-snug text-white sm:text-3xl">
              &ldquo;Every live case is double-scored by calibrated senior Career Architects, the same
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
          <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 text-center shadow-soft">
            <Bell className="mx-auto h-8 w-8 text-royal" />
            <h3 className="mt-4 text-xl font-bold text-navy">More faculty profiles publish per cohort</h3>
            <p className="mt-2 text-slate">
              The full teaching and evaluation team is confirmed as each cohort is finalised. Apply and you
              can ask any question about who&apos;s teaching directly.
            </p>
            <div className="mt-6">
              <Button href="/orientation">Apply to Meet the Faculty</Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <FinalCta />
    </>
  );
}
