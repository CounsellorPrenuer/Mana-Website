"use client";

import { useState } from "react";
import { School, GraduationCap, Users2 } from "lucide-react";

const TIERS = {
  metro: {
    label: "Metro / Tier-1",
    examples: "e.g. Mumbai, Delhi NCR, Bengaluru, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad",
    schools: "800–1,400",
    cbse: "450–700",
    students: "3L–5L",
  },
  tier2: {
    label: "Tier-2 City",
    examples: "e.g. Jaipur, Lucknow, Indore, Nagpur, Coimbatore, Bhopal, Surat",
    schools: "300–550",
    cbse: "150–280",
    students: "80K–1.5L",
  },
  tier3: {
    label: "Tier-3 Town",
    examples: "smaller district towns and surrounding areas",
    schools: "80–180",
    cbse: "35–70",
    students: "20K–45K",
  },
} as const;

type TierKey = keyof typeof TIERS;

export default function CityScopeEstimator() {
  const [city, setCity] = useState("");
  const [tier, setTier] = useState<TierKey>("tier2");
  const data = TIERS[tier];

  return (
    <div className="rounded-3xl border border-navy/10 bg-white p-6 card-shadow sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy/70">
            Your city (optional)
          </label>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g. Nashik"
            className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-royal"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy/70">City tier</label>
          <select
            value={tier}
            onChange={(e) => setTier(e.target.value as TierKey)}
            className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-royal"
          >
            {Object.entries(TIERS).map(([key, t]) => (
              <option key={key} value={key}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <p className="mt-2 text-xs text-slate">{data.examples}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-lavender p-5 text-center">
          <School className="mx-auto h-6 w-6 text-royal" />
          <div className="mt-2 text-2xl font-bold text-navy">{data.schools}</div>
          <div className="mt-1 text-xs font-medium text-slate">
            Schools {city ? `in ${city}` : "in a city like this"}
          </div>
        </div>
        <div className="rounded-2xl bg-lavender p-5 text-center">
          <GraduationCap className="mx-auto h-6 w-6 text-royal" />
          <div className="mt-2 text-2xl font-bold text-navy">{data.cbse}</div>
          <div className="mt-1 text-xs font-medium text-slate">CBSE / board-affiliated schools</div>
        </div>
        <div className="rounded-2xl bg-lavender p-5 text-center">
          <Users2 className="mx-auto h-6 w-6 text-royal" />
          <div className="mt-2 text-2xl font-bold text-navy">{data.students}</div>
          <div className="mt-1 text-xs font-medium text-slate">Class 8–12 students in scope</div>
        </div>
      </div>
      <p className="mt-5 text-center text-xs text-slate">
        Illustrative estimates based on typical city-tier sizing, not a verified count for your specific
        city. Your actual local market is confirmed with our team once you apply.
      </p>
    </div>
  );
}
