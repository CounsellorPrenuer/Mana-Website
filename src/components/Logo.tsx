import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  dark?: boolean;
  variant?: "header" | "footer";
  className?: string;
};

export default function Logo({ dark = false, variant = "header", className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex shrink-0 items-center",
        variant === "header" ? "gap-3 sm:gap-4" : "gap-6",
        className
      )}
      aria-label="MANA by Mentoria home"
    >
      {/* Full Mentoria lockup — wordmark + Clutter to Clarity tagline, natural aspect ratio */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/mentoria-logo.svg"
        alt="Mentoria — Clutter to Clarity"
        width={200}
        height={60}
        draggable={false}
        className={cn(
          "w-auto shrink-0",
          variant === "header" ? "h-14 sm:h-[3.75rem]" : "h-16 sm:h-[4.25rem]",
          dark && "brightness-0 invert"
        )}
      />

      <span
        className={cn(
          "w-px shrink-0 self-stretch",
          variant === "header" ? "my-1" : "my-0.5",
          dark ? "bg-white/20" : "bg-navy/10"
        )}
        aria-hidden
      />

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
