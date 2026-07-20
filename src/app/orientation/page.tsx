import type { Metadata } from "next";
import {
  MessageCircle,
  Users,
  ShieldCheck,
  Check,
  Quote,
  HelpCircle,
  Laptop,
  Ticket,
  UserCheck,
  Compass,
  MessagesSquare,
  CalendarDays,
  ExternalLink,
} from "lucide-react";
import Section, { SectionHeading, Eyebrow } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import FinalCta from "@/components/sections/FinalCta";
import OrientationHero from "@/components/orientation/OrientationHero";
import OrientationReveal from "@/components/orientation/OrientationReveal";
import OrientationStagger from "@/components/orientation/OrientationStagger";
import OrientationCountUp from "@/components/orientation/OrientationCountUp";
import StepConnector from "@/components/orientation/StepConnector";
import { SITE, TRUST_STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free Orientation",
  description:
    "A free, live 90-minute orientation for professionals exploring the MANA certification. Get your questions answered live, hosted by Mentoria's CEO. No pressure, no obligation.",
};

const whyAttend = [
  {
    icon: MessagesSquare,
    title: "Get real answers, live",
    body: "Ask anything: eligibility, time commitment, income potential, fees. Get a straight answer on the spot.",
  },
  {
    icon: Compass,
    title: "See how it actually works",
    body: "Understand the two-engine practice model and how graduates build something of their own.",
  },
  {
    icon: Users,
    title: "Meet the team",
    body: "Get a feel for the people who'll train and mentor you before you commit a rupee.",
  },
  {
    icon: UserCheck,
    title: "Decide with clarity",
    body: "Leave knowing whether MANA is right for you. That's a win either way.",
  },
];

const takeaways = [
  "A clear picture of what MANA is, and who it's really for",
  "How the certification translates into an actual practice and income",
  "The fees, the Founder's offer, and what's included, explained transparently",
  "Answers to your specific questions, live",
  "A clear view of your next steps, if you choose to take them",
];

const afterSteps = [
  {
    n: 1,
    title: "Attend",
    body: "Join the live 90-minute session on Zoom and get every question answered. You'll receive a WhatsApp confirmation with your joining link as soon as you register.",
  },
  {
    n: 2,
    title: "Reflect",
    body: "Take your time. We'll share a brochure and stay available on WhatsApp for anything else.",
  },
  {
    n: 3,
    title: "Decide",
    body: "If MANA feels right, we'll guide you through enrolment. If not, no hard feelings.",
  },
];

const scheduleChips = [
  { icon: CalendarDays, label: "Mon · Wed · Thu · Fri" },
  { icon: Laptop, label: "Live on Zoom" },
  { icon: ShieldCheck, label: "90 minutes" },
  { icon: Ticket, label: "Free" },
  { icon: MessageCircle, label: "WhatsApp confirmation" },
];

const testimonials = [
  {
    quote:
      "I walked in with a lot of doubt and a long list of questions. I left with a clear next step and none of the sales-pitch feeling I expected.",
    role: "Attendee, then school teacher, now a practising Career Architect",
  },
  {
    quote:
      "Ninety minutes, direct answers, no pressure to decide on the call. That's exactly what made me trust the programme enough to apply.",
    role: "Attendee, then HR professional, now building an independent practice",
  },
];

const faqs = [
  { q: "Is the orientation really free?", a: "Yes, completely free, with no obligation to enrol." },
  { q: "How long is it?", a: "90 minutes, including live Q&A." },
  {
    q: "Where is it held?",
    a: "Live on Zoom. You'll receive the joining link by WhatsApp as soon as you register.",
  },
  { q: "When are sessions held?", a: "Every day except Tuesday, Saturday and Sunday." },
  { q: "Do I need to prepare anything?", a: "No, just bring your questions." },
  {
    q: "Will I be pressured to enrol?",
    a: "No. The orientation is to help you decide. Enrolment is entirely your choice, in your own time.",
  },
  {
    q: "Can I ask about fees and payment?",
    a: "Absolutely. We explain the fee, the Founder's offer, and what's included, transparently.",
  },
  {
    q: "Will I get a confirmation?",
    a: "Yes, a WhatsApp confirmation with your Zoom link lands right after you register, plus a reminder before the session.",
  },
  {
    q: "What if I can't attend after registering?",
    a: "Let us know on WhatsApp and we'll help you pick another day.",
  },
  {
    q: "I still have questions about the programme itself.",
    a: "Explore the Curriculum, Certification, and FAQ pages, or ask us live at the orientation.",
  },
];

const whatsappHref = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

export default function OrientationPage() {
  return (
    <>
      <OrientationHero />

      {/* Why Attend */}
      <Section bg="white" id="why-attend">
        <OrientationReveal>
          <SectionHeading
            eyebrow="Why Attend"
            title="A certification is a big decision. Start with a conversation."
            description="You've read about MANA. The orientation is where it becomes real: where you meet the people behind it, see how it works, and get the honest answers that a webpage can't give you."
            align="center"
          />
        </OrientationReveal>
        <OrientationStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyAttend.map((w) => (
            <Card key={w.title} className="h-full">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lavender text-royal">
                <w.icon className="h-5.5 w-5.5" />
              </div>
              <h3 className="mt-4 font-bold text-navy">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{w.body}</p>
            </Card>
          ))}
        </OrientationStagger>
      </Section>

      {/* What You'll Take Away */}
      <Section bg="lavender">
        <div className="mx-auto max-w-2xl">
          <OrientationReveal>
            <SectionHeading
              eyebrow="What You'll Take Away"
              title="Walk away with clarity, not a sales pitch."
              description="In under an hour and a half, you'll have everything you need to make an informed decision."
              align="center"
            />
          </OrientationReveal>
          <OrientationStagger className="mx-auto mt-10 max-w-xl space-y-3 text-left" stagger={0.06} y={12}>
            {takeaways.map((t) => (
              <div key={t} className="flex items-start gap-3 rounded-xl bg-white px-4 py-3 shadow-xs">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-royal" />
                <span className="text-navy">{t}</span>
              </div>
            ))}
          </OrientationStagger>
        </div>
      </Section>

      {/* 90 Minutes */}
      <Section bg="white">
        <div className="mx-auto max-w-2xl text-center">
          <OrientationReveal>
            <Eyebrow>The Time Commitment</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-navy sm:text-4xl">
              90 minutes to complete clarity.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate">
              No 40-page brochure. No drawn-out sales calls. One focused, live session, with real depth
              and time for every question, gives you the full picture: the model, the outcomes, the
              investment, and the people behind it. Come with questions. Leave with answers, and a
              decision you&apos;re confident in.
            </p>
            <div className="mx-auto mt-8 max-w-md rounded-2xl border border-border bg-lavender px-6 py-5">
              <Quote className="mx-auto h-5 w-5 text-royal/50" />
              <p className="mt-2 text-sm font-medium italic text-navy">
                &ldquo;Most attendees say the orientation answered questions they didn&apos;t know they
                had.&rdquo;
              </p>
            </div>
          </OrientationReveal>
        </div>
      </Section>

      {/* Who Should Attend */}
      <Section bg="lavender">
        <div className="mx-auto max-w-2xl text-center">
          <OrientationReveal>
            <Eyebrow>Who Should Attend</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Come along if you&apos;re exploring a career in guidance or coaching.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate">
              Counsellors, coaches, educators, L&amp;D professionals, psychologists, and second-career
              professionals all attend our orientations, whether you&apos;re seriously considering MANA
              or simply curious.{" "}
              <a href="/who-should-join" className="font-semibold text-royal hover:text-navy">
                Want the detail on fit? See Who Should Join
              </a>
            </p>
            <div className="mt-8">
              <Button href="#register" size="lg">
                Register for a Free Orientation
              </Button>
            </div>
          </OrientationReveal>
        </div>
      </Section>

      {/* What Happens After */}
      <Section bg="white">
        <OrientationReveal>
          <SectionHeading
            eyebrow="What Happens After"
            title="No pressure. No obligation. Your pace."
            align="center"
          />
        </OrientationReveal>
        <div className="relative mt-14">
          <StepConnector />
          <OrientationStagger className="relative grid gap-6 sm:grid-cols-3" stagger={0.12}>
            {afterSteps.map((s) => (
              <div key={s.title} className="h-full rounded-2xl border border-border bg-lavender p-6">
                <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-navy text-sm font-bold text-white ring-4 ring-lavender">
                  {s.n}
                </span>
                <h3 className="mt-4 font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{s.body}</p>
              </div>
            ))}
          </OrientationStagger>
        </div>
        <OrientationReveal delay={0.15}>
          <p className="mx-auto mt-10 max-w-xl text-center text-sm font-medium text-slate">
            There&apos;s no obligation to enrol. Many attendees join simply to learn, and that&apos;s
            completely welcome.
          </p>
        </OrientationReveal>
      </Section>

      {/* Meet Your Host */}
      <Section bg="lavender">
        <div className="mx-auto max-w-2xl text-center">
          <OrientationReveal>
            <Eyebrow>Meet Your Host</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Hosted by someone who&apos;s done the work.
            </h2>
          </OrientationReveal>
          <OrientationReveal delay={0.1} y={28}>
            <Card className="mx-auto mt-8 text-left" hover={false}>
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-navy text-xl font-bold text-white">
                  NA
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-lg font-bold text-navy">Nikhar Arora</h3>
                    <a
                      href="https://www.linkedin.com/in/nikhar-arora-9548b441/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-royal hover:text-navy"
                    >
                      Connect on LinkedIn
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <p className="mt-1 font-semibold text-royal">CEO, Mentoria</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    Your orientation is led personally by Nikhar Arora, CEO of Mentoria, the person
                    driving Mentoria&apos;s mission to take India from career clutter to clarity. You
                    won&apos;t get a scripted sales rep; you&apos;ll get a direct, honest walkthrough and
                    answers straight from the person shaping the programme itself.
                  </p>
                </div>
              </div>
            </Card>
          </OrientationReveal>
          <OrientationReveal delay={0.2}>
            <div className="mt-8">
              <Button href="#register" size="lg">
                Register for a Free Orientation
              </Button>
            </div>
          </OrientationReveal>
        </div>
      </Section>

      {/* Schedule & How It Works */}
      <Section bg="white">
        <div className="mx-auto max-w-2xl text-center">
          <OrientationReveal>
            <Eyebrow>Schedule &amp; How It Works</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Pick a day. Save your seat.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate">
              Orientations run live on Zoom, every day except Tuesday, Saturday and Sunday. Choose a slot
              that suits you and register, you&apos;ll get a WhatsApp confirmation with your Zoom joining
              link right away.
            </p>
          </OrientationReveal>
          <OrientationStagger
            className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-3"
            stagger={0.06}
            y={10}
          >
            {scheduleChips.map((c) => (
              <span
                key={c.label}
                className="flex items-center gap-2 rounded-full border border-border bg-lavender px-4 py-2 text-sm font-semibold text-navy"
              >
                <c.icon className="h-4 w-4 text-royal" />
                {c.label}
              </span>
            ))}
          </OrientationStagger>
          <OrientationReveal delay={0.15}>
            <div className="mt-9">
              <Button href="#register" size="lg">
                Register for a Free Orientation
              </Button>
            </div>
          </OrientationReveal>
        </div>
      </Section>

      {/* Trust band */}
      <Section bg="navy" className="bg-dotgrid">
        <div className="mx-auto max-w-3xl text-center">
          <OrientationReveal>
            <h2 className="text-balance text-2xl font-bold leading-snug text-white sm:text-3xl">
              Backed by India&apos;s leading career discovery ecosystem.
            </h2>
          </OrientationReveal>
          <OrientationStagger className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4" stagger={0.08} y={14}>
            {TRUST_STATS.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-gold sm:text-3xl">
                  <OrientationCountUp value={s.value} />
                </div>
                <div className="mt-1 text-xs font-medium text-white/60 sm:text-sm">{s.label}</div>
              </div>
            ))}
          </OrientationStagger>
          <OrientationReveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-lg text-sm text-white/60">
              When you train with Mentoria, you&apos;re backed by a name schools, students, and parents
              already trust.
            </p>
          </OrientationReveal>
        </div>
      </Section>

      {/* Testimonials */}
      <Section bg="lavender">
        <OrientationReveal>
          <SectionHeading
            eyebrow="Hear From Attendees"
            title="Hear from people who started exactly where you are."
            description="Professionals who attended an orientation, enrolled, and built a practice."
            align="center"
          />
        </OrientationReveal>
        <OrientationStagger className="mt-14 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <Card key={t.role} className="h-full">
              <Quote className="h-7 w-7 text-magenta/40" />
              <p className="mt-4 text-sm leading-relaxed text-navy">{t.quote}</p>
              <div className="mt-6 border-t border-navy/8 pt-4">
                <div className="text-xs font-semibold text-slate">{t.role}</div>
              </div>
            </Card>
          ))}
        </OrientationStagger>
        <OrientationReveal delay={0.15}>
          <div className="mt-10 text-center">
            <Button href="#register" variant="secondary">
              Register for a Free Orientation
            </Button>
          </div>
        </OrientationReveal>
      </Section>

      {/* FAQ */}
      <Section bg="white">
        <OrientationReveal>
          <SectionHeading eyebrow="Orientation FAQs" title="Everything about the session, answered." align="center" />
        </OrientationReveal>
        <OrientationReveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-3xl">
            <Accordion items={faqs} />
          </div>
        </OrientationReveal>
      </Section>

      {/* Registration */}
      <section id="register" className="relative overflow-hidden bg-navy bg-dotgrid py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
          <OrientationReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white/80">
              <HelpCircle className="h-3.5 w-3.5" />
              Takes less than a minute
            </span>
            <h2 className="mt-5 text-balance text-3xl font-bold leading-tight text-white sm:text-4xl">
              Register for your free orientation.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Pick a day that works for you. You&apos;ll get a WhatsApp confirmation with your Zoom link
              right away. Sessions run live on Zoom every day except Tuesday, Saturday &amp; Sunday.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button href="https://forms.gle/jE8fytyuam4viMpL7" variant="gold" size="lg" external>
                Save My Seat
              </Button>
              <Button
                href={whatsappHref}
                variant="ghost"
                size="lg"
                external
                showArrow={false}
                className="border-white/25 text-white hover:bg-white/10"
              >
                Prefer to chat first? WhatsApp us
              </Button>
            </div>
          </OrientationReveal>
          <OrientationReveal delay={0.15} y={32}>
            <div className="mx-auto mt-10 overflow-hidden rounded-3xl bg-white shadow-soft-lg">
              <iframe
                src="https://forms.gle/jE8fytyuam4viMpL7"
                title="MANA Free Orientation registration form"
                className="h-[720px] w-full"
                loading="lazy"
              >
                Loading registration form&hellip;
              </iframe>
            </div>
          </OrientationReveal>
        </div>
      </section>

      <FinalCta
        title="One free session could change your career direction."
        description="No cost. No pressure. Just clarity."
        primaryLabel="Register for a Free Orientation"
        primaryHref="#register"
      />
    </>
  );
}
