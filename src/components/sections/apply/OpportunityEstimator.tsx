"use client";

import { useState } from "react";
import { MapPin, TrendingUp } from "lucide-react";
import CityScopeEstimator from "./CityScopeEstimator";
import IncomeEstimator from "./IncomeEstimator";

const TABS = [
  { key: "city", label: "Scope in your city", icon: MapPin },
  { key: "income", label: "What you could earn", icon: TrendingUp },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export default function OpportunityEstimator() {
  const [tab, setTab] = useState<TabKey>("city");

  return (
    <div>
      <div className="mx-auto flex w-fit gap-1 rounded-full bg-white/10 p-1">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              tab === t.key ? "bg-white text-navy shadow-sm" : "text-white/70 hover:text-white"
            }`}
          >
            <t.icon className="h-4 w-4" />
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {tab === "city" ? <CityScopeEstimator /> : <IncomeEstimator />}
      </div>
    </div>
  );
}
