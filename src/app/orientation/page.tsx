import type { Metadata } from "next";
import Link from "next/link";
import {
  Rocket,
  Brain,
  Sparkles,
  Target,
  Users,
  Briefcase,
  Handshake,
  BookOpen,
  ShieldCheck,
  Check,
  X,
  GraduationCap,
  Quote,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Section, { SectionHeading, Eyebrow } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import MotionReveal from "@/components/sections/apply/MotionReveal";
import MotionStagger from "@/components/sections/apply/MotionStagger";
import TiltCard from "@/components/ui/TiltCard";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import FounderOfferBand from "@/components/sections/FounderOfferBand";
import CountdownBar from "@/components/sections/apply/CountdownBar";
import ApplyHero from "@/components/sections/apply/ApplyHero";
import JourneyTimeline from "@/components/sections/apply/JourneyTimeline";
import WhyYouSelector from "@/components/sections/apply/WhyYouSelector";
import OpportunityEstimator from "@/components/sections/apply/OpportunityEstimator";
import ApplyForm from "@/components/sections/apply/ApplyForm";
import SchoolRatioViz from "@/components/sections/apply/SchoolRatioViz";
import SectionWave from "@/components/sections/apply/SectionWave";

export const metadata: Metadata = {
  title: "Apply to MANA",
  description:
    "MANA is Mentoria's certification for people who love guiding young people and want to turn that gift into a business they own. No counselling background needed. Apply to join the cohort.",
};

const whatIs = [
  { k: "Learn", title: "A method that works", body: "AI-era, India-specific, field-tested." },
  { k: "Become", title: "A guide people trust", body: "Credible to schools and parents from day one." },
  { k: "Build", title: "A business you keep", body: "Your practice, your clients, your pace." },
];

const whyNowStats = [
  { value: "AI-era", label: "careers won't sit still" },
  { value: "Wide open", label: "market, few real guides" },
];

const businessPoints = [
  { title: "Win your own clients", body: "A system for reaching schools and filling rooms." },
  { title: "Deliver without the grind", body: "Mentoria carries the assessments, tech and scheduling." },
  { title: "Grow at your own pace", body: "One school or one family. Then more, as your name spreads." },
  { title: "Get leads as you rise", body: "Active practitioners get warm enquiries sent to them." },
];

const differentiators = [
  { icon: Brain, title: "AI-era, India-specific", body: "Built for how careers change here, not a borrowed model." },
  { icon: Target, title: "Demonstration-first", body: "Watch it, run it, get coached until it's second nature." },
  { icon: Briefcase, title: "A business system", body: "A playbook for reaching schools, not just a certificate." },
  { icon: Handshake, title: "The hard parts, handled", body: "Assessments and admin carried by Mentoria." },
  { icon: BookOpen, title: "A credential you earn", body: "A three-tier assessment and a real-case capstone." },
  { icon: ShieldCheck, title: "Child-first, always", body: "The trust that turns families into referrals." },
];

const comparison = [
  { feature: "What you walk away with", old: "A certificate to frame", mana: "A certificate, a method, and a business" },
  { feature: "Finding clients", old: "You're on your own", mana: "A system, plus warm leads sent to you" },
  { feature: "Delivery & admin", old: "You handle it yourself", mana: "Carried by Mentoria" },
  { feature: "The method", old: "A legacy psychometric test", mana: "AI-era, India-specific" },
  { feature: "How you train", old: "Videos, then a quiz", mana: "Practice, practicum, real-case capstone" },
  { feature: "After you certify", old: "Good luck", mana: "A guided 90-day launch sprint" },
  { feature: "The name behind you", old: "Only your own", mana: "200+ schools, AWES, govt partners" },
];

const curriculumSnapshot = [
  { tag: "AI", title: "AI Literacy for Career Guidance" },
  { tag: "ECOSYSTEM", title: "The Indian Education & Career Ecosystem" },
  { tag: "DISCOVERY", title: "Career Discovery Architecture" },
  { tag: "FAMILIES", title: "Parent & Family Counselling" },
  { tag: "WORKSHOPS", title: "The AI Career Navigator Workshop" },
  { tag: "BUSINESS", title: "The Sales & Growth System" },
];

const support = [
  { icon: Sparkles, title: "Delivery engine", body: "Assessments, reports and scheduling, handled." },
  { icon: Users, title: "Warm leads", body: "Overflow enquiries routed to active guides." },
  { icon: GraduationCap, title: "Senior mentors", body: "A 90-day sprint led by people who've done it." },
  { icon: ShieldCheck, title: "The Mentoria brand", body: "Trust from 200+ schools, from day one." },
];

const whoItsFor = [
  { title: "Career-changers", body: "Ready to build something that gives back." },
  { title: "Parents returning to work", body: "A credible profession that fits around family." },
  { title: "Teachers & educators", body: "Do it independently, paid what it's worth." },
  { title: "Coaches & psychologists", body: "A proven system to grow your own practice." },
];

const testimonials = [
  {
    quote: "One school session and I had eight new counselling clients within the week.",
    role: "Practising MANA Architect, Pune",
  },
  {
    quote: "I came in with no counselling background. The method gave me the skill; the sprint gave me my first clients.",
    role: "Practising MANA Architect, Bengaluru",
  },
  {
    quote: "I look after the families; Mentoria handles the rest. My first partnership paid back the fee several times over.",
    role: "Practising MANA Architect, Delhi NCR",
  },
];

const risks = [
  { title: "Apply free, decide later", body: "Costs nothing, commits you to nothing." },
  { title: "A real conversation first", body: "You talk to our team before you pay. No bots." },
  { title: "Never left on your own", body: "The 90-day sprint means support after you certify." },
];

const faqs = [
  { q: "So what exactly is MANA?", a: "MANA is Mentoria's AI Career Navigation Architect certification. We train you to guide students through career decisions in the age of AI, certify you as a guide schools and families trust, and give you a full system to build your own practice." },
  { q: "Do I need a psychology or counselling background?", a: "No. MANA is built to take capable, motivated adults from any background and make them business-ready. Bring your care for young people and the will to learn. We teach the rest." },
  { q: "Can I really build a business and earn from this?", a: "Career guidance is a real and growing field in India, and MANA is built to make you not just qualified but able to win work. What you earn depends on your effort and your market, so any figures we show are illustrative, not promises." },
  { q: "How much time does it take?", a: "The certification is 60 hours across live sessions and self-paced learning, designed to fit around a working life. After you certify, the 90-day launch sprint is a weekly commitment while you get your practice off the ground." },
  { q: "Do I have to find schools and clients on my own?", a: "No. You get a complete system for reaching schools and families, Mentoria's credibility from day one, and a team that carries delivery, assessments, reports, scheduling and tech." },
  { q: "What happens after I apply?", a: "We review your application and get in touch to talk through your goals, answer your questions, and confirm your fit and cohort. Applying is the first step, not a commitment to pay." },
];

export default function ApplyPage() {
  return (
    <>
      <CountdownBar />

      <ApplyHero />

      <SectionWave fromBg="#ffffff" toFill="var(--color-lavender)" light="royal" />

      {/* What is MANA */}
      <Section bg="lavender" id="whatis">
        <MotionReveal>
          <div className="rounded-3xl border border-border bg-white p-8 text-center shadow-soft sm:p-14">
            <Eyebrow>New here? Start with this</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">What is MANA?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate">
              Mentoria&apos;s <b className="font-semibold text-navy">AI Career Navigation Architect certification</b>:
              a skill, a credential, and a business. All yours.
            </p>
            <div className="mx-auto mt-10 grid max-w-3xl gap-4 text-left sm:grid-cols-3">
              {whatIs.map((w) => (
                <div key={w.k} className="rounded-2xl border border-border bg-lavender p-5">
                  <div className="text-xs font-bold uppercase tracking-wide text-royal">{w.k}</div>
                  <div className="mt-1.5 font-bold text-navy">{w.title}</div>
                  <p className="mt-1.5 text-sm text-slate">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>
      </Section>

      {/* Why You */}
      <Section bg="white">
        <SectionHeading
          eyebrow="What's In It For You"
          title="A business, a calling, an income, on your own terms."
          description="Tell us your background and see why it fits."
          align="center"
        />
        <div className="mt-14">
          <WhyYouSelector />
        </div>
      </Section>

      {/* Why now — a picture, not a stat card grid */}
      <Section bg="lavender" className="!py-16">
        <MotionReveal>
          <div className="mx-auto max-w-4xl">
            <p className="text-center text-lg font-semibold text-navy sm:text-xl">
              Every family needs this. Almost no one is trained to give it.
            </p>
            <div className="mt-8 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
              <div className="rounded-3xl border border-border bg-white px-6 py-8 text-center sm:px-10">
                <SchoolRatioViz />
                <p className="mt-6 text-sm font-semibold text-navy sm:text-base">
                  Only <span className="text-royal">~1 in 5</span> Indian schools has a counsellor
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
                {whyNowStats.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col justify-center rounded-2xl border border-border bg-white px-6 py-5 text-center lg:flex-1"
                  >
                    <div className="text-2xl font-bold text-royal">{s.value}</div>
                    <div className="mt-1 text-sm text-slate">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionReveal>
      </Section>

      {/* Opportunity estimator (tabbed: city scope + income) */}
      <Section bg="white">
        <SectionHeading
          eyebrow="Picture The Opportunity"
          title="What could this look like for you?"
          description="Two quick pictures, not a promise: the market where you live, and the income a practice could build."
          align="center"
        />
        <div className="mx-auto mt-14 max-w-3xl">
          <OpportunityEstimator />
        </div>
      </Section>

      {/* The business you build */}
      <Section bg="lavender">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <MotionReveal>
            <Eyebrow>The Business You Build</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl">
              A certificate sits in a drawer. A business changes your life.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              Most courses teach you to counsel, then leave you to find people who&apos;ll pay. MANA hands
              you the system to actually do that.
            </p>
            <ul className="mt-9 grid gap-5 sm:grid-cols-2">
              {businessPoints.map((p, i) => (
                <li key={p.title} className="flex items-start gap-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-navy text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm text-navy">
                    <b className="block font-bold">{p.title}</b>
                    <span className="text-slate">{p.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl bg-navy p-8 text-white sm:p-10">
              <h3 className="text-lg font-bold">What a practice can build</h3>
              <div className="mt-6 space-y-1">
                {[
                  ["One school (~200 students)", "₹3–6L"],
                  ["Five schools in a year", "₹20–35L"],
                  ["Per family, independent", "₹850–2,625"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 border-b border-white/10 py-4 last:border-0">
                    <span className="max-w-[60%] text-sm text-white/70">{k}</span>
                    <span className="text-xl font-bold text-white">{v}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs text-white/45">Illustrative, not a guarantee. Depends on your effort and market.</p>
            </div>
          </MotionReveal>
        </div>
      </Section>

      {/* Differentiators */}
      <Section bg="white">
        <SectionHeading
          eyebrow="Why MANA"
          title="Built to make you business-ready, not just certified."
          align="center"
        />
        <MotionStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d) => (
            <TiltCard key={d.title}>
              <Card className="h-full" hover={false}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lavender text-royal">
                  <d.icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="mt-4 font-bold text-navy">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{d.body}</p>
              </Card>
            </TiltCard>
          ))}
        </MotionStagger>
      </Section>

      {/* Comparison — scannable, not prose */}
      <Section bg="lavender">
        <SectionHeading
          eyebrow="The Difference"
          title="Most certifications end at a certificate. MANA is where your business begins."
          align="center"
        />
        <MotionReveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-border bg-white shadow-soft">
            <div className="hidden grid-cols-[1.3fr_1fr_1fr] bg-navy px-7 py-3 text-xs font-bold uppercase tracking-wide text-white sm:grid">
              <span></span>
              <span className="text-center text-white/50">Typical Certification</span>
              <span className="text-center text-white">With MANA</span>
            </div>
            {comparison.map((row, i) => (
              <div
                key={row.feature}
                className={`grid gap-2 px-5 py-5 text-sm sm:grid-cols-[1.3fr_1fr_1fr] sm:items-center sm:py-4 sm:px-7 ${
                  i % 2 === 0 ? "bg-white" : "bg-lavender/60"
                } ${i > 0 ? "border-t border-border sm:border-t-0" : ""}`}
              >
                <span className="font-semibold text-navy">{row.feature}</span>
                <span className="mt-2 flex items-start gap-1.5 text-slate sm:mt-0 sm:justify-center sm:text-center">
                  <X className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-mist" />
                  <span>{row.old}</span>
                </span>
                <span className="mt-1.5 flex items-start gap-1.5 font-semibold text-navy sm:mt-0 sm:justify-center sm:text-center">
                  <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-royal" />
                  <span>{row.mana}</span>
                </span>
              </div>
            ))}
          </div>
        </MotionReveal>
      </Section>

      {/* Journey — interactive timeline */}
      <Section bg="white">
        <SectionHeading
          eyebrow="How It Works"
          title="From application to a business of your own."
          align="center"
        />
        <JourneyTimeline />
      </Section>

      {/* Curriculum snapshot */}
      <Section bg="lavender">
        <SectionHeading
          eyebrow="What You'll Learn"
          title="Everything it takes to guide a student, and win a school."
          align="center"
        />
        <MotionStagger className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {curriculumSnapshot.map((m) => (
            <div key={m.title} className="flex items-center gap-3 rounded-xl border border-border bg-white px-5 py-4 shadow-xs">
              <span className="h-fit flex-shrink-0 rounded-md bg-navy px-2.5 py-1 text-[10px] font-bold tracking-wide text-white">
                {m.tag}
              </span>
              <h4 className="text-sm font-bold text-navy">{m.title}</h4>
            </div>
          ))}
        </MotionStagger>
        <MotionReveal delay={0.2}>
          <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-5 rounded-2xl border border-border bg-white px-8 py-7 text-center">
            {[
              ["60", "hours of training"],
              ["30 + 30", "live + self-paced"],
              ["3-tier", "assessment model"],
              ["1", "real-case capstone"],
              ["90-day", "launch sprint"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="text-2xl font-bold text-navy">{v}</div>
                <div className="text-xs text-slate">{l}</div>
              </div>
            ))}
          </div>
        </MotionReveal>
        <div className="mt-8 text-center">
          <Button href="/curriculum" variant="secondary">
            See the full curriculum
          </Button>
        </div>
      </Section>

      {/* Support — editorial strip, distinct from the icon-card grid above */}
      <Section bg="white">
        <SectionHeading
          eyebrow="You Are Not Alone"
          title="A founder's support, not a freelancer's guesswork."
          align="center"
        />
        <MotionStagger className="mx-auto mt-14 grid max-w-5xl divide-y divide-border overflow-hidden rounded-3xl border border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {support.map((s) => (
            <div key={s.title} className="flex h-full flex-col items-center gap-3 p-8 text-center">
              <s.icon className="h-6 w-6 text-royal" />
              <h4 className="font-bold text-navy">{s.title}</h4>
              <p className="text-sm leading-relaxed text-slate">{s.body}</p>
            </div>
          ))}
        </MotionStagger>
      </Section>

      {/* Who it's for — spacious editorial list, distinct treatment */}
      <Section bg="lavender">
        <SectionHeading
          eyebrow="Who It's For"
          title="You don't need a counselling degree. You need this."
          align="center"
        />
        <MotionStagger className="mx-auto mt-14 grid max-w-4xl gap-x-12 gap-y-8 sm:grid-cols-2">
          {whoItsFor.map((w) => (
            <div key={w.title} className="flex items-start gap-4 border-b border-border pb-8">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white text-royal shadow-xs">
                <Check className="h-4 w-4" />
              </span>
              <div>
                <b className="font-bold text-navy">{w.title}</b>
                <p className="mt-1 text-sm text-slate">{w.body}</p>
              </div>
            </div>
          ))}
        </MotionStagger>
        <MotionReveal delay={0.2}>
          <p className="mt-10 text-center text-lg font-semibold text-navy">
            What you need: a heart for young people, and the drive to build something that&apos;s yours.
          </p>
        </MotionReveal>
      </Section>

      {/* Testimonials */}
      <Section bg="white">
        <SectionHeading eyebrow="Graduate Stories" title="Talent, turned into a business." align="center" />
        <MotionStagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TiltCard key={t.role}>
              <Card className="h-full" hover={false}>
                <Quote className="h-6 w-6 text-royal/40" />
                <p className="mt-4 text-sm leading-relaxed text-navy">{t.quote}</p>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="text-xs font-semibold text-slate">{t.role}</div>
                </div>
              </Card>
            </TiltCard>
          ))}
        </MotionStagger>
      </Section>

      {/* Pricing */}
      <FounderOfferBand />

      {/* Risk reversal — checklist strip, distinct from earlier grids */}
      <Section bg="white">
        <SectionHeading eyebrow="Your Safety Net" title="Big step. Small risk." align="center" />
        <MotionStagger className="mx-auto mt-14 max-w-3xl space-y-3" stagger={0.1}>
          {risks.map((r, i) => (
            <div key={r.title} className="flex items-center gap-5 rounded-2xl border border-border bg-lavender px-6 py-5">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                {i + 1}
              </span>
              <div>
                <b className="font-bold text-navy">{r.title}</b>
                <span className="ml-2 text-sm text-slate">{r.body}</span>
              </div>
            </div>
          ))}
        </MotionStagger>
      </Section>

      {/* FAQ */}
      <Section bg="lavender">
        <SectionHeading eyebrow="Questions, Answered" title="Everything you're wondering." align="center" />
        <div className="mx-auto mt-14 max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </Section>

      <SectionWave fromBg="var(--color-lavender)" toFill="var(--color-navy)" light="gold" />

      {/* Apply — the one deliberate dark closing moment */}
      <section id="apply" className="relative overflow-hidden bg-navy bg-dotgrid py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <MotionReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white/80">
              <Rocket className="h-3.5 w-3.5" />
              Next cohort forming now · Limited seats
            </span>
            <h2 className="mt-5 text-balance text-3xl font-bold leading-tight text-white sm:text-4xl">
              Apply to join the next cohort.
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-white/60">
              Two minutes, no commitment. We&apos;ll take it from there.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "No prior experience required",
                "Built for working adults, live plus self-paced",
                "A method, a credential and a business, not just a course",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/85">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-white/70" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9 hidden lg:block">
              <Link
                href="/curriculum"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 hover:text-white"
              >
                Or explore the full curriculum first <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div className="rounded-3xl bg-white p-8 shadow-soft-lg sm:p-10">
              <h3 className="text-xl font-bold text-navy">Start your application</h3>
              <p className="mt-1 text-sm text-slate">We&apos;ll be in touch within a few working days.</p>
              <div className="mt-6">
                <ApplyForm />
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
