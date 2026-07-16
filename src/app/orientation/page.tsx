import type { Metadata } from "next";
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
  Lock,
  PhoneCall,
  GraduationCap,
  Quote,
  CheckCircle2,
} from "lucide-react";
import Section, { SectionHeading, Eyebrow } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import FounderOfferBand from "@/components/sections/FounderOfferBand";
import CountdownBar from "@/components/sections/apply/CountdownBar";
import WhyYouSelector from "@/components/sections/apply/WhyYouSelector";
import CityScopeEstimator from "@/components/sections/apply/CityScopeEstimator";
import IncomeEstimator from "@/components/sections/apply/IncomeEstimator";
import ApplyForm from "@/components/sections/apply/ApplyForm";

export const metadata: Metadata = {
  title: "Apply to MANA",
  description:
    "MANA is Mentoria's certification for people who love guiding young people and want to turn that gift into a business they own. No counselling background needed. Apply to join the cohort.",
};

const heroStats = [
  { value: "9+ yrs", label: "Guiding India's students" },
  { value: "3,00,000+", label: "Lives shaped" },
  { value: "200+", label: "School partners" },
  { value: "Official", label: "AWES partner, 139 Army schools" },
];

const whatIs = [
  { k: "You learn", title: "A method that works", body: "A tested, AI-era, India-specific way to take any student from confused to clear." },
  { k: "You become", title: "A guide people trust", body: "A recognised AI Career Navigation Architect, credible to schools and parents from day one." },
  { k: "You build", title: "A business you keep", body: "Your own practice, with a full system for winning clients and the freedom to grow it your way." },
];

const whyNow = [
  { big: "~1 in 5", title: "schools have a counsellor", body: "Most Indian schools offer no career guidance at all. That's millions of students, and paying parents, with a real need and nowhere to take it." },
  { big: "AI-era", title: "careers won't sit still", body: "Parents can't map a future they don't understand. Guidance that makes sense of the AI age is what they want, and what they'll pay for." },
  { big: "Wide open", title: "market, few real guides", body: "Demand is enormous and skilled, certified guides are scarce. Become one, and you're filling a gap, not fighting for scraps." },
];

const businessPoints = [
  { title: "Win your own clients.", body: "A complete system for reaching schools and filling rooms with families who need exactly what you offer." },
  { title: "Deliver without the grind.", body: "Mentoria carries the assessments, the tech, the reports and the scheduling. You do the part only a human can." },
  { title: "Grow at your own pace.", body: "Begin with one school or one family. Build towards a full practice as your name gets around." },
  { title: "Get leads as you rise.", body: "Active practitioners have warm enquiries sent straight to them. Your reputation starts working for you." },
];

const differentiators = [
  { icon: Brain, title: "AI-era and India-specific", body: "Built for how careers are actually changing, and for Indian boards, colleges and entrances, not a borrowed overseas model." },
  { icon: Target, title: "Demonstration-first", body: "You don't just hear the theory. You watch the move, run it yourself, and get coached until it's second nature." },
  { icon: Briefcase, title: "A business system, not a badge", body: "A full playbook for reaching schools and families, so your certificate turns into a living, earning practice." },
  { icon: Handshake, title: "The hard parts, handled", body: "Assessments, reports, scheduling and tech, all carried by Mentoria. One person with the muscle of a whole team." },
  { icon: BookOpen, title: "A credential that means something", body: "A three-tier assessment and a real-case capstone. You earn it. You don't just sit through it." },
  { icon: ShieldCheck, title: "Child-first, always", body: "Every method serves the student first. That's how you earn the trust that turns families into referrals." },
];

const comparison = [
  { feature: "What you walk away with", old: "A certificate to frame.", mana: "A certificate, a proven method, and a business you own." },
  { feature: "Finding your clients", old: "You're on your own once the course ends.", mana: "A step-by-step system for winning schools, plus warm leads sent to you." },
  { feature: "Delivery & admin", old: "You handle the assessments, reports and logistics yourself.", mana: "Assessments, reports, technology and scheduling, carried by Mentoria." },
  { feature: "The method", old: "A legacy psychometric test.", mana: "An AI-era, India-specific method built for the careers of today." },
  { feature: "How you're trained", old: "Watch the videos, pass the quiz.", mana: "Practice-first, a live practicum, and a real-case capstone." },
  { feature: "After you certify", old: "Good luck.", mana: "A guided 90-day launch sprint and ongoing growth support." },
  { feature: "The name behind you", old: "Only your own, from day one.", mana: "Trusted by 200+ schools, the Army Welfare Education Society and government partners." },
];

const journey = [
  { n: 1, title: "Apply", body: "Tell us your story. We pick people ready to build, not just browse." },
  { n: 2, title: "Learn", body: "60 hours of live and self-paced training in the full method." },
  { n: 3, title: "Certify", body: "Pass the three-tier assessment and a real-case capstone." },
  { n: 4, title: "Launch", body: "A guided 90-day sprint to land your first schools and clients." },
  { n: 5, title: "Scale", body: "Earn the Active Practice Badge, and have leads routed to you." },
];

const curriculumSnapshot = [
  { tag: "AI", title: "AI Literacy for Career Guidance", body: "Make modern AI your back office and your edge, used responsibly." },
  { tag: "ECOSYSTEM", title: "The Indian Education & Career Ecosystem", body: "Boards, streams, entrances, colleges and pathways, known cold." },
  { tag: "DISCOVERY", title: "Career Discovery Architecture", body: "Read a student's interests, personality and aptitude, and turn them into a clear plan." },
  { tag: "FAMILIES", title: "Parent & Family Counselling", body: "Handle the emotional, high-stakes conversations where careers are really decided." },
  { tag: "WORKSHOPS", title: "The AI Career Navigator Workshop", body: "Run a session that gives a room clarity, and turns that clarity into clients." },
  { tag: "BUSINESS", title: "The Sales & Growth System", body: "Reach schools, structure deals, answer objections, and build a pipeline that compounds." },
];

const support = [
  { icon: Sparkles, title: "Delivery engine", body: "Assessments, reports, tech and scheduling, all handled for you." },
  { icon: Users, title: "Warm leads", body: "Overflow student enquiries routed to active, badge-holding guides." },
  { icon: GraduationCap, title: "Senior mentors", body: "A 90-day launch sprint led by people who've built practices themselves." },
  { icon: ShieldCheck, title: "The Mentoria brand", body: "Borrow the trust of a platform used by 200+ schools from day one." },
];

const whoItsFor = [
  { title: "Career-changers", body: "Done with work that pays the bills but empties the tank. Ready to build something that gives back." },
  { title: "Parents returning to work", body: "Looking for a credible, flexible profession you can shape around your family and grow at your own pace." },
  { title: "Teachers & educators", body: "Already the person students turn to. Ready to do it independently, and be paid what it's worth." },
  { title: "Coaches, mentors & psychologists", body: "Wanting AI-era credentials, a proven method, and a real system to grow your own practice." },
];

const testimonials = [
  {
    quote: "The workshop-to-client pipeline is what changed everything for my practice. One school session and I had eight new counselling clients within the week.",
    role: "Practising MANA Architect, Pune",
  },
  {
    quote: "I came in with no counselling background and a lot of doubt. The method gave me the skill, the 90-day sprint gave me my first clients, and now I have a practice I'm proud of.",
    role: "Practising MANA Architect, Bengaluru",
  },
  {
    quote: "What sold me was the support. I look after the families; Mentoria handles the rest. My first school partnership paid back the fee several times over.",
    role: "Practising MANA Architect, Delhi NCR",
  },
];

const risks = [
  { icon: Lock, title: "Apply free, decide later", body: "Applying costs nothing and commits you to nothing. You only enrol once you're sure it's right for you." },
  { icon: PhoneCall, title: "A real conversation first", body: "Before you pay, you speak with our team about your goals, your fit, and your questions. No pressure, no bots." },
  { icon: GraduationCap, title: "Never left on your own", body: "The 90-day launch sprint means support after you certify. No first client by week seven, and you get a one-to-one plan, not a shrug." },
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

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy bg-neural bg-speedlines py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <Eyebrow dark>MANA by Mentoria · The AI Career Navigation Architect Certification</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Help students find their future.{" "}
              <span className="bg-gradient-to-r from-gold to-magenta bg-clip-text text-transparent">
                Build your own
              </span>{" "}
              in the process.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-white/70 sm:text-xl">
              MANA is Mentoria&apos;s certification for people who love guiding young people, and want to
              turn that gift into a business they own. Learn to navigate careers in the age of AI. Earn a
              credential schools and families trust. Keep the practice you build. No counselling background
              needed.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button href="#apply" variant="gold" size="lg">
                Apply to join the cohort
              </Button>
              <Button
                href="#whatis"
                variant="ghost"
                size="lg"
                className="border-white/25 text-white hover:bg-white/10"
              >
                What is MANA?
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/50">
              No prior experience required · Built for working adults · Limited seats per cohort
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-white sm:text-3xl">{s.value}</div>
                  <div className="mt-1 text-xs font-medium text-white/60 sm:text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* What is MANA */}
      <Section bg="white" id="whatis">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-navy/10 bg-gradient-to-b from-white to-lavender p-8 text-center card-shadow sm:p-12">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-magenta via-royal to-lavender" />
            <Eyebrow>New here? Start with this</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">What is MANA?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-navy/80">
              MANA is Mentoria&apos;s <b className="text-navy">AI Career Navigation Architect certification</b>.
              In plain terms: we train you to guide students towards careers that fit in the age of AI, we
              certify you so schools and families trust you on sight, and we hand you a complete system to
              build a practice of your own. A skill, a credential, and a business. All yours.
            </p>
            <div className="mx-auto mt-10 grid max-w-3xl gap-4 text-left sm:grid-cols-3">
              {whatIs.map((w) => (
                <div key={w.k} className="rounded-2xl border border-navy/10 bg-white p-5">
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
      <Section bg="lavender">
        <SectionHeading
          eyebrow="What's In It For You"
          title="A business, a calling, and an income, on your own terms."
          description="Tell us your background and see why it's exactly what this work needs."
          align="center"
        />
        <div className="mt-12">
          <WhyYouSelector />
        </div>
      </Section>

      {/* Why now */}
      <Section bg="white">
        <SectionHeading
          eyebrow="Why This, Why Now"
          title="Every family needs this. Almost no one is trained to give it."
          description="AI is turning the job market upside down. Parents are worried, students are guessing, and India has nowhere near enough people who can help them think clearly."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {whyNow.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <Card className="h-full">
                <div className="text-3xl font-bold text-magenta">{item.big}</div>
                <h3 className="mt-2 font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* City scope estimator */}
      <Section bg="lavender">
        <SectionHeading
          eyebrow="Find The Scope In Your City"
          title="How big is the opportunity where you live?"
          description="Get an illustrative sense of the schools and students in your market."
          align="center"
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <CityScopeEstimator />
        </div>
      </Section>

      {/* The business you build */}
      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>The Business You Build</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl">
              A certificate sits in a drawer. A business changes your life.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              Most courses teach you to counsel, then leave you alone with the hardest part: finding people
              who will actually pay. MANA flips that. You leave knowing how to reach schools, fill a room,
              and turn a single workshop into a steady stream of families.
            </p>
            <ul className="mt-8 space-y-4">
              {businessPoints.map((p, i) => (
                <li key={p.title} className="flex items-start gap-4">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-royal text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm text-navy">
                    <b className="font-bold">{p.title}</b> {p.body}
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
                  ["One school partnership (~200 students)", "₹3–6L"],
                  ["Five schools in a year", "₹20–35L"],
                  ["Per family guided (independent)", "₹850–2,625"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 border-b border-white/10 py-4 last:border-0">
                    <span className="max-w-[60%] text-sm text-white/80">{k}</span>
                    <span className="text-xl font-bold text-gold">{v}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs text-white/50">
                Illustrative of the opportunity, not a guarantee. What you earn depends on your effort, your
                market, and how you build your business.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Income estimator */}
      <Section bg="navy" className="bg-neural">
        <SectionHeading
          eyebrow="Picture The Numbers"
          title="What could your practice earn?"
          description="Move the sliders to see the shape of the opportunity. Every practice is different, and this is a picture, not a promise."
          dark
          align="center"
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <IncomeEstimator />
        </div>
      </Section>

      {/* Differentiators */}
      <Section bg="white">
        <SectionHeading
          eyebrow="Why MANA"
          title="Built to make you business-ready, not just certified."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Comparison */}
      <Section bg="lavender">
        <SectionHeading
          eyebrow="The Difference"
          title="Most certifications end at a certificate. MANA is where your business begins."
          align="center"
        />
        <div className="mt-12 space-y-3">
          {comparison.map((row, i) => (
            <Reveal key={row.feature} delay={Math.min(i * 0.04, 0.3)}>
              <div className="grid overflow-hidden rounded-2xl border border-navy/10 bg-white sm:grid-cols-[1.1fr_1fr_1.15fr]">
                <div className="flex items-center bg-lavender px-5 py-4 text-sm font-bold text-navy">
                  {row.feature}
                </div>
                <div className="border-t border-navy/8 px-5 py-4 sm:border-l sm:border-t-0">
                  <span className="mb-1 block text-[10px] font-bold uppercase tracking-wide text-slate/60">
                    A typical certification
                  </span>
                  <span className="text-sm text-slate">{row.old}</span>
                </div>
                <div className="border-t border-navy/8 bg-magenta/5 px-5 py-4 sm:border-l sm:border-t-0">
                  <span className="mb-1 block text-[10px] font-bold uppercase tracking-wide text-magenta">
                    ✓ With MANA
                  </span>
                  <span className="text-sm font-semibold text-navy">{row.mana}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Journey */}
      <Section bg="navy" className="bg-neural">
        <SectionHeading
          eyebrow="How It Works"
          title="From application to a business of your own."
          dark
          align="center"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {journey.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.05] p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-magenta text-sm font-bold text-white">
                  {step.n}
                </span>
                <h4 className="mt-4 font-bold text-white">{step.title}</h4>
                <p className="mt-1.5 text-sm text-white/65">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Curriculum snapshot */}
      <Section bg="white">
        <SectionHeading
          eyebrow="What You'll Learn"
          title="Everything it takes to guide a student, and win a school."
          align="center"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {curriculumSnapshot.map((m, i) => (
            <Reveal key={m.title} delay={(i % 2) * 0.06}>
              <div className="flex gap-4 rounded-2xl border border-navy/8 bg-white p-6 card-shadow">
                <span className="h-fit flex-shrink-0 rounded-md bg-royal px-2.5 py-1 text-[10px] font-bold tracking-wide text-white">
                  {m.tag}
                </span>
                <div>
                  <h4 className="font-bold text-navy">{m.title}</h4>
                  <p className="mt-1 text-sm text-slate">{m.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-5 rounded-2xl bg-lavender px-8 py-7 text-center">
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

      {/* Support */}
      <Section bg="lavender">
        <SectionHeading
          eyebrow="You Are Not Alone"
          title="A founder's support, not a freelancer's guesswork."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {support.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <Card className="h-full bg-white">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                  <s.icon className="h-5.5 w-5.5" />
                </div>
                <h4 className="mt-4 font-bold text-navy">{s.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate">{s.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Who it's for */}
      <Section bg="white">
        <SectionHeading
          eyebrow="Who It's For"
          title="You don't need a counselling degree. You need this."
          description="MANA is for capable adults who want work of their own that means something."
          align="center"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {whoItsFor.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 0.06}>
              <div className="flex items-start gap-4 rounded-2xl border border-navy/8 bg-white p-6 card-shadow">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-royal" />
                <div>
                  <b className="font-bold text-navy">{w.title}</b>
                  <p className="mt-1 text-sm text-slate">{w.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-lg font-semibold text-navy">
            What you actually need: a heart for young people, the will to learn a method, and the drive to
            build something that&apos;s yours.
          </p>
        </Reveal>
      </Section>

      {/* Testimonials */}
      <Section bg="lavender">
        <SectionHeading eyebrow="Graduate Stories" title="Talent, turned into a business." align="center" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.role} delay={i * 0.08}>
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

      {/* Pricing */}
      <FounderOfferBand />

      {/* Risk reversal */}
      <Section bg="white">
        <SectionHeading eyebrow="Your Safety Net" title="Big step. Small risk." align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {risks.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <Card className="h-full">
                <r.icon className="h-7 w-7 text-royal" />
                <h4 className="mt-4 font-bold text-navy">{r.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate">{r.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="lavender">
        <SectionHeading eyebrow="Questions, Answered" title="Everything you're wondering." align="center" />
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </Section>

      {/* Apply */}
      <section id="apply" className="relative overflow-hidden bg-navy bg-neural bg-speedlines py-20">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold">
              <Rocket className="h-3.5 w-3.5" />
              Next cohort forming now · Limited seats
            </span>
            <h2 className="mt-5 text-balance text-3xl font-bold leading-tight text-white sm:text-4xl">
              Apply to join the next cohort.
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-white/70">
              This is the first step towards a business of your own, doing work that matters. It takes two
              minutes and commits you to nothing. We&apos;ll take it from there.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "No prior experience required",
                "Built for working adults, live plus self-paced",
                "A method, a credential and a business, not just a course",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/85">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-white p-8 card-shadow-lg sm:p-10">
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
