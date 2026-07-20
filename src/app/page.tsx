import {
  Users,
  Award,
  Sparkles,
  GraduationCap,
  Building2,
  ShieldCheck,
  Rocket,
  HeartHandshake,
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
import Section, { SectionHeading } from "@/components/ui/Section";
import Accordion from "@/components/ui/Accordion";
import FinalCta from "@/components/sections/FinalCta";
import FounderOfferBand from "@/components/sections/FounderOfferBand";
import HomeHero from "@/components/home/HomeHero";
import HomeReveal from "@/components/home/HomeReveal";
import HomeStagger from "@/components/home/HomeStagger";
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
      <HomeHero />

      {/* The shift */}
      <Section bg="white">
        <SectionHeading
          eyebrow="Why Now"
          title="Career guidance built for a world that changed faster than the curriculum"
          description="India's students are choosing careers in an economy being reshaped by AI in real time, and most guidance in the market hasn't caught up."
        />
        <HomeStagger className="mt-12 grid gap-6 sm:grid-cols-3">
          {shiftStats.map((s) => (
            <Card key={s.label} className="h-full">
              <s.icon className="h-8 w-8 text-royal" />
              <div className="mt-5 text-3xl font-bold text-navy">{s.value}</div>
              <p className="mt-2 text-sm leading-relaxed text-slate">{s.label}</p>
            </Card>
          ))}
        </HomeStagger>
      </Section>

      {/* Value proposition */}
      <Section bg="navy" className="bg-dotgrid">
        <HomeReveal>
          <p className="mx-auto max-w-4xl text-balance text-center text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
            MANA is building{" "}
            <span className="text-gold">India&apos;s first generation of AI-era career facilitators</span>:
            counsellors who combine psychometric rigour with practical AI fluency, and who can build a
            business, not just earn a badge.
          </p>
        </HomeReveal>
      </Section>

      {/* Programme highlights */}
      <Section bg="white">
        <SectionHeading eyebrow="At A Glance" title="The MANA programme, in four numbers" />
        <HomeStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <Card key={h.title} className="h-full">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal/10 text-royal">
                <h.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{h.description}</p>
            </Card>
          ))}
        </HomeStagger>
      </Section>

      {/* Why AI coaching matters */}
      <Section bg="lavender">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <HomeReveal>
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
          </HomeReveal>
          <HomeReveal delay={0.1}>
            <div className="grid gap-4">
              {[
                { icon: Ban, text: "No fear-mongering about AI replacing careers wholesale" },
                { icon: ShieldCheck, text: "Every factual AI claim verified before it reaches a client" },
                { icon: Sparkles, text: "Working fluency in 5+ AI tools mapped to real counselling tasks" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-soft">
                  <item.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-magenta" />
                  <span className="text-sm font-medium text-navy">{item.text}</span>
                </div>
              ))}
            </div>
          </HomeReveal>
        </div>
      </Section>

      {/* Who should join teaser */}
      <Section bg="white">
        <SectionHeading
          eyebrow="Who Should Join"
          title="Built for people who already guide others"
          description="Counsellors, educators, HR professionals, Army veterans, and second-career professionals. No AI background required."
        />
        <HomeStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PERSONAS.map((p) => (
            <Card key={p.title} className="h-full">
              <GraduationCap className="h-7 w-7 text-magenta" />
              <h3 className="mt-4 font-bold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{p.description}</p>
            </Card>
          ))}
        </HomeStagger>
        <div className="mt-10 text-center">
          <Button href="/who-should-join" variant="secondary">
            Check if MANA is right for you
          </Button>
        </div>
      </Section>

      {/* Outcomes */}
      <Section bg="lavender">
        <SectionHeading eyebrow="Practice Outcomes" title="What you're building toward" />
        <HomeStagger className="mt-12 grid gap-6 sm:grid-cols-3">
          {outcomes.map((o) => (
            <Card key={o.title} className="h-full bg-white">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                <o.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{o.description}</p>
            </Card>
          ))}
        </HomeStagger>
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
        <HomeStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.slice(0, 8).map((m) => (
            <Card key={m.id} className="h-full" hover>
              <span className="text-xs font-bold uppercase tracking-wider text-magenta">{m.tag}</span>
              <h3 className="mt-2 text-sm font-bold leading-snug text-navy">{m.title}</h3>
              {m.hours && (
                <span className="mt-3 inline-block rounded-full bg-lavender px-2.5 py-1 text-xs font-semibold text-royal">
                  {m.hours} hrs
                </span>
              )}
            </Card>
          ))}
        </HomeStagger>
      </Section>

      {/* Certification & credibility */}
      <Section bg="navy" className="bg-dotgrid">
        <SectionHeading
          eyebrow="Certification"
          title="Assessed through live practice. Never a written exam."
          description="The Capstone is non-waivable: 4 human-evaluated TMS 2.0 counselling cases, plus one video-recorded AI Career Navigator Workshop. Every case is double-scored by senior Career Architects."
          dark
        />
        <HomeStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATION_BADGES.map((b) => (
            <div key={b.title} className="h-full rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm">
              <Award className="h-7 w-7 text-gold" />
              <h3 className="mt-4 font-bold text-white">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{b.description}</p>
            </div>
          ))}
        </HomeStagger>
        <div className="mt-10 text-center">
          <Button href="/certification" variant="ghost" className="border-white/25 text-white hover:bg-white/10">
            How certification works
          </Button>
        </div>
      </Section>

      {/* Faculty preview */}
      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <HomeReveal>
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
          </HomeReveal>
          <HomeReveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Lead Faculty", "Guest Faculty", "Practice Mentors", "Evaluation Panel"].map((tier) => (
                <div key={tier} className="rounded-2xl bg-lavender p-6">
                  <Users className="h-6 w-6 text-royal" />
                  <div className="mt-4 font-bold text-navy">{tier}</div>
                  <p className="mt-1 text-xs text-slate">Profiles published closer to cohort launch.</p>
                </div>
              ))}
            </div>
          </HomeReveal>
        </div>
      </Section>

      {/* Testimonials */}
      <Section bg="lavender">
        <SectionHeading eyebrow="Testimonials" title="From counsellors already building their practice" />
        <HomeStagger className="mt-12 grid gap-6 lg:grid-cols-3">
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
            <Card key={t.name + i} className="h-full">
              <Quote className="h-7 w-7 text-magenta/40" />
              <p className="mt-4 text-sm leading-relaxed text-navy">{t.quote}</p>
              <div className="mt-6 border-t border-navy/8 pt-4">
                <div className="text-sm font-bold text-navy">{t.name}</div>
                <div className="text-xs text-slate">{t.role}</div>
              </div>
            </Card>
          ))}
        </HomeStagger>
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
        <HomeReveal>
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
        </HomeReveal>
      </Section>

      {/* FAQ condensed */}
      <Section bg="lavender">
        <SectionHeading eyebrow="FAQs" title="Quick answers before you apply" align="center" />
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
