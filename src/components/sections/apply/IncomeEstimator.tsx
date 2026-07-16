"use client";

import { useMemo, useState } from "react";

function lakh(v: number) {
  return `₹${(v / 100000).toFixed(1)}L`;
}

export default function IncomeEstimator() {
  const [schools, setSchools] = useState(3);
  const [families, setFamilies] = useState(3);

  const { low, high } = useMemo(() => {
    const low = schools * 300000 + families * 12 * 850;
    const high = schools * 600000 + families * 12 * 2625;
    return { low, high };
  }, [schools, families]);

  return (
    <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.06] p-6 sm:grid-cols-2 sm:p-10">
      <div className="flex flex-col justify-center gap-8">
        <div>
          <div className="mb-3 flex items-baseline justify-between gap-3 text-sm font-semibold text-white">
            <span>School partnerships a year</span>
            <span className="text-lg font-bold text-gold tabular-nums">{schools}</span>
          </div>
          <input
            type="range"
            min={0}
            max={10}
            value={schools}
            onChange={(e) => setSchools(Number(e.target.value))}
            className="w-full accent-magenta"
          />
        </div>
        <div>
          <div className="mb-3 flex items-baseline justify-between gap-3 text-sm font-semibold text-white">
            <span>Families you guide a month</span>
            <span className="text-lg font-bold text-gold tabular-nums">{families}</span>
          </div>
          <input
            type="range"
            min={0}
            max={20}
            value={families}
            onChange={(e) => setFamilies(Number(e.target.value))}
            className="w-full accent-magenta"
          />
        </div>
        <p className="text-xs leading-relaxed text-white/50">
          Assumes an illustrative ₹3–6L per school partnership and ₹850–2,625 per family guided
          independently. Adjust to your own market.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-royal/60 to-magenta/40 p-8 text-center">
        <div className="text-xs font-bold uppercase tracking-wider text-white/85">Illustrative annual range</div>
        <div className="mt-3 text-3xl font-bold tabular-nums text-white sm:text-4xl">
          {lakh(low)} – {lakh(high)}
        </div>
        <div className="mt-2 text-sm text-white/80">per year, as your practice grows</div>
      </div>

      <p className="text-center text-xs text-white/40 sm:col-span-2">
        Illustrative only, not a guarantee of earnings. What you actually earn depends on your effort, your
        market, and how you build your business.
      </p>
    </div>
  );
}
