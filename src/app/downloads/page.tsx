import type { Metadata } from "next";
import { FileText, BookOpen, Users, CalendarDays, HelpCircle } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import DownloadRequestForm from "@/components/sections/DownloadRequestForm";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Request the MANA programme brochure, curriculum overview, faculty profile, calendar, and FAQs PDF.",
};

const resources = [
  { icon: FileText, title: "Programme Brochure", description: "The complete MANA overview, practice model, fees, and outcomes." },
  { icon: BookOpen, title: "Curriculum Overview", description: "A module-by-module summary of all 8 modules and the Capstone." },
  { icon: Users, title: "Faculty Profile", description: "Background on Mentoria's senior Career Architects and evaluation panel." },
  { icon: CalendarDays, title: "Programme Calendar", description: "Upcoming cohort dates, application deadlines, and key milestones." },
  { icon: HelpCircle, title: "FAQs PDF", description: "The full FAQ list in a shareable, offline-friendly format." },
];

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Downloads"
        title="Resource hub"
        description="Request any of the resources below, we'll email them across directly."
      />

      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Available Resources" title="What you can request" />
            <div className="mt-8 space-y-4">
              {resources.map((r, i) => (
                <Reveal key={r.title} delay={i * 0.06}>
                  <div className="flex items-start gap-4 rounded-2xl border border-navy/8 bg-white p-5 card-shadow">
                    <r.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-royal" />
                    <div>
                      <h3 className="font-bold text-navy">{r.title}</h3>
                      <p className="mt-1 text-sm text-slate">{r.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-navy/10 bg-lavender p-8 sm:p-10 lg:sticky lg:top-24">
              <h3 className="text-xl font-bold text-navy">Request your resources</h3>
              <p className="mt-2 text-sm text-slate">Select what you need and we&apos;ll send it across by email.</p>
              <div className="mt-6">
                <DownloadRequestForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
