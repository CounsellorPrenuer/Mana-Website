import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-3", className)}>
      <span
        className={cn(
          "font-heading text-xl font-extrabold tracking-tight sm:text-2xl",
          dark ? "text-white" : "text-navy"
        )}
      >
        Mentor
        <span className="text-magenta">i</span>a
      </span>
      <span className={cn("h-6 w-px", dark ? "bg-white/25" : "bg-navy/15")} />
      <span className="flex flex-col leading-none">
        <span className={cn("font-heading text-lg font-bold tracking-[0.02em]", dark ? "text-gold" : "text-royal")}>
          MANA
        </span>
        <span
          className={cn(
            "hidden text-[10px] font-medium uppercase tracking-[0.12em] sm:block",
            dark ? "text-white/50" : "text-slate"
          )}
        >
          Certification
        </span>
      </span>
    </Link>
  );
}
