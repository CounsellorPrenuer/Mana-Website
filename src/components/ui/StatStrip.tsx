import { TRUST_STATS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function StatStrip({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <div className={cn("grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8", className)}>
      {TRUST_STATS.map((stat) => (
        <div key={stat.label} className="text-center sm:text-left">
          <div className={cn("text-2xl font-bold tracking-tight sm:text-3xl", dark ? "text-white" : "text-navy")}>
            {stat.value}
          </div>
          <div className={cn("mt-1 text-xs font-medium sm:text-sm", dark ? "text-white/60" : "text-slate")}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
