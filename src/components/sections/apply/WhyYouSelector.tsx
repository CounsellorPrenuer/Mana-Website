"use client";

import { useState } from "react";
import { Briefcase, Users, GraduationCap, HeartHandshake, Shield, Sparkles } from "lucide-react";

const BACKGROUNDS = [
  {
    key: "sales",
    label: "Sales & Business Development",
    icon: Briefcase,
    pitch:
      "You already know how to open conversations, handle objections, and close. That's most of what winning schools and families takes. MANA gives you the career-guidance method; you already have the instinct to sell it.",
  },
  {
    key: "hr",
    label: "HR & Talent",
    icon: Users,
    pitch:
      "You've spent your career reading people, structuring conversations, and matching ability to opportunity. Career guidance is the same skill, aimed at students instead of employees, with a psychometric method to back your judgement.",
  },
  {
    key: "education",
    label: "Teaching & Education",
    icon: GraduationCap,
    pitch:
      "You're already the person students turn to. MANA gives you a structured method, a credential parents recognise, and a system to do this independently, and get paid what it's worth, instead of as an unpaid extra to your day job.",
  },
  {
    key: "coaching",
    label: "Coaching, Mentoring & Psychology",
    icon: HeartHandshake,
    pitch:
      "You already understand how to hold a difficult conversation and help someone think clearly. MANA adds the India-specific career framework, the AI-era context, and the business system to turn that skill into a practice.",
  },
  {
    key: "military",
    label: "Armed Forces & Veterans",
    icon: Shield,
    pitch:
      "You've led, mentored, and made high-stakes calls under pressure, exactly the composure a parent in an anxious counselling session needs to see. MANA translates that discipline into a credentialed second career guiding students.",
  },
  {
    key: "other",
    label: "Something Else",
    icon: Sparkles,
    pitch:
      "MANA is built for capable adults from any background who care about young people and are ready to learn a method. Bring your own experience; Foundation 1 and 2 build the career-guidance and AI fluency from zero.",
  },
];

export default function WhyYouSelector() {
  const [active, setActive] = useState(BACKGROUNDS[0].key);
  const selected = BACKGROUNDS.find((b) => b.key === active) ?? BACKGROUNDS[0];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2.5">
        {BACKGROUNDS.map((b) => (
          <button
            key={b.key}
            onClick={() => setActive(b.key)}
            aria-pressed={active === b.key}
            className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${
              active === b.key
                ? "border-navy bg-navy text-white"
                : "border-border bg-white text-slate hover:border-navy/30 hover:text-navy"
            }`}
          >
            <b.icon className="h-4 w-4" />
            {b.label}
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-navy/10 bg-white p-8 text-center shadow-soft sm:p-10">
        <span className="text-xs font-bold uppercase tracking-wider text-magenta">Why you&apos;re a fit</span>
        <p className="mx-auto mt-3 max-w-2xl text-lg leading-relaxed text-navy">{selected.pitch}</p>
      </div>
    </div>
  );
}
