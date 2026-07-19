"use client";

import { useState } from "react";
import StaggerReveal from "@/components/ui/StaggerReveal";

const journey = [
  { n: 1, title: "Apply", body: "Tell us your story." },
  { n: 2, title: "Learn", body: "60 hours, live + self-paced." },
  { n: 3, title: "Certify", body: "Assessment + real-case capstone." },
  { n: 4, title: "Launch", body: "A guided 90-day sprint." },
  { n: 5, title: "Scale", body: "Leads routed to you." },
];

export default function JourneyTimeline() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="relative mt-16">
      <div className="absolute left-0 right-0 top-5 hidden h-px bg-border lg:block" />
      <StaggerReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5" stagger={0.1}>
        {journey.map((step) => {
          const isActive = active === step.n;
          return (
            <div
              key={step.title}
              className="relative cursor-default"
              onMouseEnter={() => setActive(step.n)}
              onMouseLeave={() => setActive(null)}
            >
              <span
                className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ring-8 ring-white transition-all duration-300 ${
                  isActive ? "scale-110 bg-royal text-white" : "bg-navy text-white"
                }`}
              >
                {step.n}
              </span>
              <h4 className="mt-4 font-bold text-navy">{step.title}</h4>
              <p className="mt-1.5 text-sm text-slate">{step.body}</p>
            </div>
          );
        })}
      </StaggerReveal>
    </div>
  );
}
