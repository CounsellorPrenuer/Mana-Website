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
  School,
  Wallet,
  Award,
  ArrowRight,
} from "lucide-react";
import Section, { SectionHeading, Eyebrow } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import CountUp from "@/components/ui/CountUp";
import FounderOfferBand from "@/components/sections/FounderOfferBand";
import CountdownBar from "@/components/sections/apply/CountdownBar";
import WhyYouSelector from "@/components/sections/apply/WhyYouSelector";
import OpportunityEstimator from "@/components/sections/apply/OpportunityEstimator";
import ApplyForm from "@/components/sections/apply/ApplyForm";

export const metadata: Metadata = {
  title: "Apply to MANA",
  description:
    "MANA is Mentoria's certification for people who love guiding young people and want to turn that gift into a business they own. No counselling background needed. Apply to join the cohort.",
};

const heroStats = [
  { value: "9+", suffix: " yrs", label: "Guiding students" },
  { value: "3,00,000+", suffix: "", label: "Lives shaped" },
  { value: "200+", suffix: "", label: "School partners" },
];

const whatIs = [
  { k: "Learn", title: "A method that works", body: "AI-era, India-specific, field-tested." },
  { k: "Become", title: "A guide people trust", body: "Credible to schools and parents from day one." },
  { k: "Build", title: "A business you keep", body: "Your practice, your clients, your pace." },
];

const whyNowStats = [
  { value: "~1 in 5", label: "Indian schools have a counsellor" },
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

const journey = [
  { n: 1, title: "Apply", body: "Tell us your story." },
  { n: 2, title: "Learn", body: "60 hours, live + self-paced." },
  { n: 3, title: "Certify", body: "Assessment + real-case capstone." },
  { n: 4, title: "Launch", body: "A guided 90-day sprint." },
  { n: 5, title: "Scale", body: "Leads routed to you." },
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

      {/* Hero — light, confident, one clean visual */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-[0.4] [mask-image:radial-gradient(ellipse_60%_60%_at_70%_20%,black,transparent)]" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-10 lg:py-32">
          <div>
            <Reveal>
              <Eyebrow>MANA by Mentoria</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-7 text-balance text-[2.75rem] font-bold leading-[1.06] tracking-tight text-navy sm:text-6xl lg:text-[4rem]">
                Help students find their future. Build your own in the process.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-lg text-balance text-lg leading-relaxed text-slate sm:text-xl">
                Turn your gift for guiding young people into a business you own. No counselling background
                needed.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="#apply" variant="primary" size="lg">
                  Apply to join the cohort
                </Button>
                <Button href="#whatis" variant="secondary" size="lg" showArrow={false}>
                  What is MANA?
                </Button>
              </div>
              <p className="mt-5 text-sm text-mist">
                No prior experience · Built for working adults · Limited seats
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8">
                {heroStats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-bold tabular-nums text-navy sm:text-3xl">
                      <CountUp value={s.value} />
                      {s.suffix}
                    </div>
                    <div className="mt-1 text-xs font-medium text-slate sm:text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative hidden lg:block">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -top-5 -left-5 z-10 flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-soft">
                <CheckCircle2 className="h-4 w-4 text-royal" />
                <span className="text-xs font-semibold text-navy">Application takes 2 min</span>
              </div>
              <div className="rounded-[2rem] border border-border bg-white p-2 shadow-soft-lg">
                <div className="flex flex-col justify-between gap-6 rounded-[1.6rem] bg-lavender p-7">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate shadow-xs">
                      Year One, One Architect
                    </span>
                    <Rocket className="h-5 w-5 text-royal" />
                  </div>
                  <div className="space-y-3">
                    {[
                      { icon: School, label: "Workshops Delivered", value: "5 schools" },
                      { icon: Users, label: "Families Guided", value: "40+" },
                      { icon: Wallet, label: "Practice Income", value: "₹18L+" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-xs">
                        <row.icon className="h-5 w-5 flex-shrink-0 text-royal" />
                        <div>
                          <div className="text-xs font-medium uppercase tracking-wide text-mist">
                            {row.label}
                          </div>
                          <div className="text-lg font-bold text-navy">{row.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-navy p-4">
                    <Award className="h-6 w-6 flex-shrink-0 text-white" />
                    <span className="text-sm font-semibold text-white">Independent Practice, Built</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What is MANA */}
      <Section bg="lavender" id="whatis">
        <Reveal>
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
        </Reveal>
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

      {/* Why now — condensed stat band */}
      <Section bg="lavender" className="!py-16">
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <p className="text-center text-lg font-semibold text-navy sm:text-xl">
              Every family needs this. Almost no one is trained to give it.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {whyNowStats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-white px-6 py-5 text-center">
                  <div className="text-2xl font-bold text-royal">{s.value}</div>
                  <div className="mt-1 text-sm text-slate">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
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
          <Reveal>
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
          </Reveal>
          <Reveal delay={0.1}>
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
          </Reveal>
        </div>
      </Section>

      {/* Differentiators */}
      <Section bg="white">
        <SectionHeading
          eyebrow="Why MANA"
          title="Built to make you business-ready, not just certified."
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 0.08}>
              <Card className="h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lavender text-royal">
                  <d.icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="mt-4 font-bold text-navy">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{d.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Comparison — scannable, not prose */}
      <Section bg="lavender">
        <SectionHeading
          eyebrow="The Difference"
          title="Most certifications end at a certificate. MANA is where your business begins."
          align="center"
        />
        <Reveal delay={0.1}>
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
        </Reveal>
      </Section>

      {/* Journey — light timeline */}
      <Section bg="white">
        <SectionHeading
          eyebrow="How It Works"
          title="From application to a business of your own."
          align="center"
        />
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-border lg:block" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {journey.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <div className="relative">
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-white ring-8 ring-white">
                    {step.n}
                  </span>
                  <h4 className="mt-4 font-bold text-navy">{step.title}</h4>
                  <p className="mt-1.5 text-sm text-slate">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Curriculum snapshot */}
      <Section bg="lavender">
        <SectionHeading
          eyebrow="What You'll Learn"
          title="Everything it takes to guide a student, and win a school."
          align="center"
        />
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {curriculumSnapshot.map((m, i) => (
            <Reveal key={m.title} delay={(i % 3) * 0.05}>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-white px-5 py-4 shadow-xs">
                <span className="h-fit flex-shrink-0 rounded-md bg-navy px-2.5 py-1 text-[10px] font-bold tracking-wide text-white">
                  {m.tag}
                </span>
                <h4 className="text-sm font-bold text-navy">{m.title}</h4>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
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
        </Reveal>
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
        <div className="mx-auto mt-14 grid max-w-5xl divide-y divide-border overflow-hidden rounded-3xl border border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {support.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="flex h-full flex-col items-center gap-3 p-8 text-center">
                <s.icon className="h-6 w-6 text-royal" />
                <h4 className="font-bold text-navy">{s.title}</h4>
                <p className="text-sm leading-relaxed text-slate">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Who it's for — spacious editorial list, distinct treatment */}
      <Section bg="lavender">
        <SectionHeading
          eyebrow="Who It's For"
          title="You don't need a counselling degree. You need this."
          align="center"
        />
        <div className="mx-auto mt-14 grid max-w-4xl gap-x-12 gap-y-8 sm:grid-cols-2">
          {whoItsFor.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 0.06}>
              <div className="flex items-start gap-4 border-b border-border pb-8">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white text-royal shadow-xs">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <b className="font-bold text-navy">{w.title}</b>
                  <p className="mt-1 text-sm text-slate">{w.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-lg font-semibold text-navy">
            What you need: a heart for young people, and the drive to build something that&apos;s yours.
          </p>
        </Reveal>
      </Section>

      {/* Testimonials */}
      <Section bg="white">
        <SectionHeading eyebrow="Graduate Stories" title="Talent, turned into a business." align="center" />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.role} delay={i * 0.08}>
              <Card className="h-full">
                <Quote className="h-6 w-6 text-royal/40" />
                <p className="mt-4 text-sm leading-relaxed text-navy">{t.quote}</p>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="text-xs font-semibold text-slate">{t.role}</div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <FounderOfferBand />

      {/* Risk reversal — checklist strip, distinct from earlier grids */}
      <Section bg="white">
        <SectionHeading eyebrow="Your Safety Net" title="Big step. Small risk." align="center" />
        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {risks.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <div className="flex items-center gap-5 rounded-2xl border border-border bg-lavender px-6 py-5">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <b className="font-bold text-navy">{r.title}</b>
                  <span className="ml-2 text-sm text-slate">{r.body}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="lavender">
        <SectionHeading eyebrow="Questions, Answered" title="Everything you're wondering." align="center" />
        <div className="mx-auto mt-14 max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </Section>

      {/* Apply — the one deliberate dark closing moment */}
      <section id="apply" className="relative overflow-hidden bg-navy bg-dotgrid py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal>
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
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-white p-8 shadow-soft-lg sm:p-10">
              <h3 className="text-xl font-bold text-navy">Start your application</h3>
              <p className="mt-1 text-sm text-slate">We&apos;ll be in touch within a few working days.</p>
              <div className="mt-6">
                <ApplyForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
