import type { Metadata } from "next";
import { Quote, PlayCircle } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What counsellors say about building their practice through MANA — feedback videos and testimonials from practising architects.",
};

const quotes = [
  {
    quote:
      "The workshop-to-client pipeline is what changed everything for my practice. One school session and I had eight new counselling clients within the week.",
    role: "Independent Counsellor, Pune",
  },
  {
    quote:
      "I came in with zero AI experience. Foundation 1 alone was worth the fee — I can now explain AI's career impact to a room of anxious parents without flinching.",
    role: "School Counsellor, Bengaluru",
  },
  {
    quote:
      "The Capstone is genuinely hard — and that's exactly why the certificate means something when I show it to a school principal.",
    role: "Career Coach, Delhi NCR",
  },
  {
    quote:
      "Parent counselling used to be my weakest area. Navigator Architecture 3 gave me an actual framework, not just theory — the 'our recommendation remains' close works.",
    role: "Practising MANA Architect, Hyderabad",
  },
  {
    quote:
      "Having a structured 90-day sprint after certification meant I wasn't left to figure out school outreach alone. That accountability mattered.",
    role: "Practising MANA Architect, Mumbai",
  },
  {
    quote:
      "TMS 2.0 platform mastery took my report interpretation from 'reading a PDF' to actually building a session around it.",
    role: "Practising MANA Architect, Jaipur",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="From counsellors already building their practice"
        description="Direct feedback from practising MANA architects — on the certification, the workshop model, and what changed in their day-to-day practice."
      />

      <Section bg="white">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-navy/10 bg-lavender p-10 text-center">
            <PlayCircle className="mx-auto h-10 w-10 text-royal" />
            <h3 className="mt-4 text-xl font-bold text-navy">Feedback video wall</h3>
            <p className="mt-2 text-slate">
              Video testimonials from each graduating cohort are added here as they&apos;re recorded and
              consented for publication.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section bg="lavender">
        <SectionHeading eyebrow="In Their Words" title="What practising architects are saying" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((t, i) => (
            <Reveal key={t.role} delay={(i % 3) * 0.08}>
              <Card className="h-full bg-white">
                <Quote className="h-7 w-7 text-magenta/40" />
                <p className="mt-4 text-sm leading-relaxed text-navy">{t.quote}</p>
                <div className="mt-6 border-t border-navy/8 pt-4">
                  <div className="text-xs font-semibold text-slate">{t.role}</div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold text-navy">Want the longer story?</h3>
            <p className="mt-2 text-slate">Read full success stories with real practice outcomes and metrics.</p>
            <div className="mt-6">
              <Button href="/success-stories" variant="secondary">
                Read Success Stories
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <FinalCta />
    </>
  );
}
