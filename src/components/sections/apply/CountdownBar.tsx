"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Applications close 21 days from whenever the site was last built.
// Update COHORT_DEADLINE with the confirmed real date before the next cohort launch.
const COHORT_DEADLINE = new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).getTime();

function getTimeLeft() {
  const diff = COHORT_DEADLINE - Date.now();
  if (diff <= 0) return null;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  return { d, h, m };
}

export default function CountdownBar() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft>>(null);

  useEffect(() => {
    // Reads the client's clock, so this can only run after mount (avoids an
    // SSR/client hydration mismatch on a statically exported page).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 bg-gradient-to-r from-magenta to-[#c50a4a] px-4 py-2.5 text-center text-sm font-semibold text-white">
      <span>
        Applications for the next cohort close in{" "}
        <span className="font-extrabold tabular-nums">
          {!mounted ? "..." : timeLeft ? `${timeLeft.d}d ${timeLeft.h}h ${timeLeft.m}m` : "applications are open now"}
        </span>
      </span>
      <Link href="#apply" className="font-extrabold underline underline-offset-2">
        Apply now →
      </Link>
    </div>
  );
}
