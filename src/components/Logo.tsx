import Link from "next/link";
import { cn } from "@/lib/utils";
import MentoriaWordmark from "./MentoriaWordmark";

export default function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group flex shrink-0 items-center gap-5 sm:gap-6", className)}
      aria-label="MANA by Mentoria home"
    >
      <span
        className={cn(
          "relative block h-9 w-[148px] shrink-0 sm:h-10 sm:w-[162px]",
          dark && "h-10 w-[158px] sm:h-11 sm:w-[172px]"
        )}
      >
        <MentoriaWordmark dark={dark} className="h-full w-full" />
      </span>

      <span className={cn("h-9 w-px shrink-0", dark ? "bg-white/20" : "bg-navy/10")} aria-hidden />

      <span className="flex shrink-0 flex-col justify-center gap-1.5 leading-none">
        <span
          className={cn(
            "font-heading text-base font-bold tracking-tight sm:text-lg",
            dark ? "text-gold" : "text-royal"
          )}
        >
          MANA
        </span>
        <span
          className={cn(
            "text-[9px] font-semibold uppercase tracking-[0.18em] sm:text-[10px]",
            dark ? "text-white/50" : "text-slate"
          )}
        >
          Certification
        </span>
      </span>
    </Link>
  );
}
