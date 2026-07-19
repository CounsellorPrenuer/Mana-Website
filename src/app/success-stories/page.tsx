import type { Metadata } from "next";
import { TrendingUp, Building2, Users } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Long-form outcomes from the MANA practice model, what a two-engine career architecture practice looks like in its first year.",
};

const stories = [
  {
    icon: Building2,
    metric: "8 clients from 1 workshop",
    title: "A single school session, a full week of bookings",
    body: "The AI Career Navigator Workshop model is designed around exactly this outcome: a 2-hour session delivered to a Class 11 cohort, structured to surface genuine interest and close with a clear next step. Architects consistently report 5–15 counselling enquiries converting directly out of a single workshop, turning one school relationship into a recurring client base without a single rupee spent on advertising.",
  },
  {
    icon: TrendingUp,
    metric: "From referral-dependent to self-sufficient",
    title: "Building a pipeline that doesn't rely on Mentoria referrals",
    body: "Foundation 3's sales operating system and the mandatory 90-day post-certification sprint exist for one reason: dependency on referrals caps a practice's growth. Architects who complete the sprint, confident pricing, a rehearsed positioning statement, and a real school-outreach pitch, build a pipeline that keeps generating clients independent of any single referral source.",
  },
  {
    icon: Users,
    metric: "Two revenue engines, one practice",
    title: "1:1 counselling and workshops, reinforcing each other",
    body: "The two-engine model is the structural reason MANA practices scale differently from a solo counselling business. Workshops feed the counselling pipeline with warm leads; counselling relationships feed word-of-mouth back into the next school outreach cycle. Each engine makes the other more efficient over time.",
  },
];

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Success Stories"
        title="What a MANA practice looks like in its first year"
        description="Long-form outcomes grounded in the two-engine practice model, how certified architects actually build a self-sufficient business."
      />

      <Section bg="white">
        <div className="space-y-10">
          {stories.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="grid gap-6 rounded-3xl border border-navy/8 bg-white p-8 shadow-soft sm:grid-cols-[auto_1fr] sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold">
                  <s.icon className="h-7 w-7" />
                </div>
                <div>
                  <span className="text-sm font-bold uppercase tracking-wide text-magenta">{s.metric}</span>
                  <h3 className="mt-2 text-xl font-bold text-navy sm:text-2xl">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bg="lavender" className="!py-10">
        <Reveal>
          <p className="mx-auto max-w-xl text-center text-sm text-slate">
            Named, individual success stories are published as each cohort completes its 90-day sprint,
            with full consent.
          </p>
        </Reveal>
      </Section>

      <FinalCta />
    </>
  );
}
