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
      <div role="tablist" aria-label="Opportunity view" className="mx-auto flex w-fit gap-1 rounded-full border border-border bg-lavender p-1">
        {TABS.map((t) => (
          <button
            key={t.key}
            role="tab"
            aria-selected={tab === t.key}
            aria-controls={`panel-${t.key}`}
            id={`tab-${t.key}`}
            onClick={() => setTab(t.key)}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
              tab === t.key ? "bg-white text-navy shadow-xs" : "text-slate hover:text-navy"
            }`}
          >
            <t.icon className="h-4 w-4" />
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <div role="tabpanel" id="panel-city" aria-labelledby="tab-city" hidden={tab !== "city"}>
          <CityScopeEstimator />
        </div>
        <div role="tabpanel" id="panel-income" aria-labelledby="tab-income" hidden={tab !== "income"}>
          <IncomeEstimator />
        </div>
      </div>
    </div>
  );
}
