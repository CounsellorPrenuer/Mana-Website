import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group flex shrink-0 items-center gap-4 sm:gap-5", className)}
      aria-label="MANA by Mentoria home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={dark ? "/mentoria-logo.svg" : "/mentoria-logo-header.svg"}
        alt="Mentoria"
        width={dark ? 150 : 158}
        height={dark ? 45 : 36}
        className={cn(
          "h-[34px] w-auto shrink-0 sm:h-[38px]",
          dark && "brightness-0 invert"
        )}
      />
      <span className={cn("h-8 w-px shrink-0", dark ? "bg-white/20" : "bg-navy/10")} aria-hidden />
      <span className="flex shrink-0 flex-col justify-center gap-1 leading-none">
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
            "text-[9px] font-semibold uppercase tracking-[0.16em] sm:text-[10px]",
            dark ? "text-white/50" : "text-slate"
          )}
        >
          Certification
        </span>
      </span>
    </Link>
  );
}
