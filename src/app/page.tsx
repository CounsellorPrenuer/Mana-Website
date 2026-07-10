import {
  Brain,
  Users,
  Award,
  Sparkles,
  GraduationCap,
  Building2,
  ShieldCheck,
  Rocket,
  HeartHandshake,
  BadgeCheck,
  Quote,
  Layers,
  Target,
  Briefcase,
  Clock3,
  Video,
  AlertTriangle,
  TrendingDown,
  Ban,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeading, Eyebrow } from "@/components/ui/Section";
import StatStrip from "@/components/ui/StatStrip";
import Accordion from "@/components/ui/Accordion";
import FinalCta from "@/components/sections/FinalCta";
import FounderOfferBand from "@/components/sections/FounderOfferBand";
import { MODULES, PERSONAS, CERTIFICATION_BADGES, FAQ_CATEGORIES } from "@/lib/constants";

const highlights = [
  { icon: Clock3, title: "60 Hours", description: "30 live facilitator-led hours + 30 structured async hours." },
  { icon: Layers, title: "2 Revenue Engines", description: "1:1 TMS 2.0 counselling sessions + AI Career Navigator Workshops." },
  { icon: Video, title: "Live-Practice Assessed", description: "No written exam. Every case is human-evaluated and double-scored." },
  { icon: Rocket, title: "90-Day Sprint", description: "A mandatory post-certification practice-building sprint to launch you." },
];

const shiftStats = [
  { icon: Users, value: "199M+", label: "Students across India navigating career decisions right now." },
  { icon: AlertTriangle, value: "72%", label: "Lack structured awareness of the careers actually available to them." },
  { icon: TrendingDown, value: "80%", label: "Of 2030's jobs don't exist yet. Guidance built for 2015 no longer works." },
];

const outcomes = [
  { icon: Briefcase, title: "A Self-Sufficient Practice", description: "Run 1:1 TMS 2.0 counselling sessions independently, backed by Mentoria's assessment ecosystem." },
  { icon: Building2, title: "School Workshop Delivery", description: "Get certified to design and deliver AI Career Navigator Workshops directly in schools." },
  { icon: Target, title: "5–15 Clients Per Workshop", description: "A single 2-hour school workshop typically converts 5–15 paying counselling clients." },
];

const condensedFaqs = FAQ_CATEGORIES.flatMap((c) => c.items).slice(0, 6);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy bg-neural bg-speedlines pb-20 pt-16 sm:pb-28 sm:pt-20 lg:pt-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10 lg:px-10">
          <div>
            <Reveal>
              <Eyebrow dark>Mentoria Training &amp; Certification</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Become India&apos;s next AI-era{" "}
                <span className="text-gold">career</span>{" "}
                <span className="bg-gradient-to-r from-magenta to-royal bg-clip-text text-transparent">
                  architect
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/70 sm:text-xl">
                MANA trains counsellors and educators to build a self-sufficient, AI-era career guidance
                practice through 1:1 TMS 2.0 counselling and school workshops, assessed entirely through
                live practice, never a written exam.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button href="/orientation" variant="gold" size="lg">
                  Register for a Free Orientation
                </Button>
                <Button
                  href="/downloads"
                  variant="ghost"
                  size="lg"
                  className="border-white/25 text-white hover:bg-white/10"
                >
                  Download Brochure
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-14 border-t border-white/10 pt-8">
                <StatStrip dark />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative mx-auto aspect-[4/5] max-w-sm rounded-[2rem] border border-white/10 bg-white/[0.04] p-2 card-shadow-lg backdrop-blur-sm">
              <div className="flex h-full flex-col justify-between rounded-[1.6rem] bg-gradient-to-br from-royal/25 via-navy to-magenta/10 p-7">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                    Capstone: Case 4
                  </span>
                  <Brain className="h-5 w-5 text-gold" />
                </div>
                <div className="space-y-4">
                  {[
                    { label: "TMS 2.0 Cases Cleared", value: "4 / 4" },
                    { label: "Workshop Delivered", value: "Recorded ✓" },
                    { label: "Double-Scored By", value: "Senior Architects" },
                  ].map((row) => (
                    <div key={row.label} className="rounded-xl bg-white/[0.06] p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-white/50">
                        {row.label}
                      </div>
                      <div className="mt-1 text-lg font-bold text-white">{row.value}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-gold/15 p-4">
                  <BadgeCheck className="h-6 w-6 flex-shrink-0 text-gold" />
                  <span className="text-sm font-semibold text-white">Active Practice Badge Earned</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The shift */}
      <Section bg="white">
        <SectionHeading
          eyebrow="Why Now"
          title="Career guidance built for a world that changed faster than the curriculum"
          description="India's students are choosing careers in an economy being reshaped by AI in real time, and most guidance in the market hasn't caught up."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {shiftStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <Card className="h-full">
                <s.icon className="h-8 w-8 text-royal" />
                <div className="mt-5 text-3xl font-bold text-navy">{s.value}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate">{s.label}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Value proposition */}
      <Section bg="navy" className="bg-neural">
        <Reveal>
          <p className="mx-auto max-w-4xl text-balance text-center text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
            MANA is building{" "}
            <span className="text-gold">India&apos;s first generation of AI-era career facilitators</span>:
            counsellors who combine psychometric rigour with practical AI fluency, and who can build a
            business, not just earn a badge.
          </p>
        </Reveal>
      </Section>

      {/* Programme highlights */}
      <Section bg="white">
        <SectionHeading eyebrow="At A Glance" title="The MANA programme, in four numbers" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.07}>
              <Card className="h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal/10 text-royal">
                  <h.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{h.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Why AI coaching matters */}
      <Section bg="lavender">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Why AI Coaching Matters"
              title="Guidance plus practical AI literacy, not one or the other"
              description="Every MANA architect learns to explain AI's real career impact honestly: what it replaces, what it augments, and what it cannot touch. That calibration, never alarmist and never dismissive, is the differentiator generic counselling courses don't teach."
            />
            <div className="mt-8">
              <Button href="/why-mana" variant="secondary">
                See what makes MANA different
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4">
              {[
                { icon: Ban, text: "No fear-mongering about AI replacing careers wholesale" },
                { icon: ShieldCheck, text: "Every factual AI claim verified before it reaches a client" },
                { icon: Sparkles, text: "Working fluency in 5+ AI tools mapped to real counselling tasks" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-4 rounded-2xl bg-white p-5 card-shadow">
                  <item.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-magenta" />
                  <span className="text-sm font-medium text-navy">{item.text}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Who should join teaser */}
      <Section bg="white">
        <SectionHeading
          eyebrow="Who Should Join"
          title="Built for people who already guide others"
          description="Counsellors, educators, HR professionals, Army veterans, and second-career professionals. No AI background required."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PERSONAS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <Card className="h-full">
                <GraduationCap className="h-7 w-7 text-magenta" />
                <h3 className="mt-4 font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{p.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/who-should-join" variant="secondary">
            Check if MANA is right for you
          </Button>
        </div>
      </Section>

      {/* Outcomes */}
      <Section bg="lavender">
        <SectionHeading eyebrow="Practice Outcomes" title="What you're building toward" />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {outcomes.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.08}>
              <Card className="h-full bg-white">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                  <o.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{o.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Curriculum snapshot */}
      <Section bg="white">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Curriculum"
            title="8 modules. 60 hours. One certification."
            description="A high-level overview. The complete session-by-session curriculum is shared after enrolment."
          />
          <Button href="/curriculum" variant="secondary" className="flex-shrink-0">
            View full curriculum
          </Button>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.slice(0, 8).map((m, i) => (
            <Reveal key={m.id} delay={(i % 4) * 0.06}>
              <Card className="h-full" hover>
                <span className="text-xs font-bold uppercase tracking-wider text-magenta">{m.tag}</span>
                <h3 className="mt-2 text-sm font-bold leading-snug text-navy">{m.title}</h3>
                {m.hours && (
                  <span className="mt-3 inline-block rounded-full bg-lavender px-2.5 py-1 text-xs font-semibold text-royal">
                    {m.hours} hrs
                  </span>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Certification & credibility */}
      <Section bg="navy" className="bg-neural">
        <SectionHeading
          eyebrow="Certification"
          title="Assessed through live practice. Never a written exam."
          description="The Capstone is non-waivable: 4 human-evaluated TMS 2.0 counselling cases, plus one video-recorded AI Career Navigator Workshop. Every case is double-scored by senior Career Architects."
          dark
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATION_BADGES.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm">
                <Award className="h-7 w-7 text-gold" />
                <h3 className="mt-4 font-bold text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{b.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/certification" variant="ghost" className="border-white/25 text-white hover:bg-white/10">
            How certification works
          </Button>
        </div>
      </Section>

      {/* Faculty preview */}
      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Faculty"
              title="Every case, double-scored by senior Career Architects"
              description="MANA is taught and evaluated by Mentoria's own senior practitioners. The standard of a Mentoria Career Architect is set by the people who built the practice."
            />
            <div className="mt-8">
              <Button href="/faculty" variant="secondary">
                Meet the faculty
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Lead Faculty", "Guest Faculty", "Practice Mentors", "Evaluation Panel"].map((tier) => (
                <div key={tier} className="rounded-2xl bg-lavender p-6">
                  <Users className="h-6 w-6 text-royal" />
                  <div className="mt-4 font-bold text-navy">{tier}</div>
                  <p className="mt-1 text-xs text-slate">Profiles published closer to cohort launch.</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Testimonials */}
      <Section bg="lavender">
        <SectionHeading eyebrow="Testimonials" title="From counsellors already building their practice" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              quote:
                "The workshop-to-client pipeline is what changed everything for my practice. One school session and I had eight new counselling clients within the week.",
              name: "Practising MANA Architect",
              role: "Independent Counsellor, Pune",
            },
            {
              quote:
                "I came in with zero AI experience. Foundation 1 alone was worth the fee. I can now explain AI's career impact to a room of anxious parents without flinching.",
              name: "Practising MANA Architect",
              role: "School Counsellor, Bengaluru",
            },
            {
              quote:
                "The Capstone is genuinely hard, and that's exactly why the certificate means something when I show it to a school principal.",
              name: "Practising MANA Architect",
              role: "Career Coach, Delhi NCR",
            },
          ].map((t, i) => (
            <Reveal key={t.name + i} delay={i * 0.08}>
              <Card className="h-full">
                <Quote className="h-7 w-7 text-magenta/40" />
                <p className="mt-4 text-sm leading-relaxed text-navy">{t.quote}</p>
                <div className="mt-6 border-t border-navy/8 pt-4">
                  <div className="text-sm font-bold text-navy">{t.name}</div>
                  <div className="text-xs text-slate">{t.role}</div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/testimonials" variant="secondary">
            Read more success stories
          </Button>
        </div>
      </Section>

      {/* Founder's offer */}
      <FounderOfferBand />

      {/* Coming soon */}
      <Section bg="white">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-navy/10 bg-lavender px-6 py-14 text-center sm:px-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-royal/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-royal">
              <HeartHandshake className="h-3.5 w-3.5" />
              Coming Soon
            </span>
            <h2 className="mt-5 text-balance text-2xl font-bold text-navy sm:text-3xl">
              A second certification programme is on the way
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-balance text-slate">
              Be the first to know when it opens. Join the waitlist and we&apos;ll notify you directly.
            </p>
            <div className="mt-7">
              <Link
                href="/coming-soon"
                className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-royal"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* FAQ condensed */}
      <Section bg="lavender">
        <SectionHeading eyebrow="FAQs" title="Quick answers before you register" align="center" />
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion items={condensedFaqs} />
          <div className="mt-8 text-center">
            <Button href="/faqs" variant="secondary">
              View all FAQs
            </Button>
          </div>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
