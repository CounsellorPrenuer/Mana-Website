import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  dark?: boolean;
  variant?: "header" | "footer";
  className?: string;
};

export default function Logo({ dark = false, variant = "header", className }: LogoProps) {
  const isHeader = variant === "header";

  return (
    <Link
      href="/"
      className={cn(
        "group flex shrink-0 items-center",
        isHeader ? "gap-2 sm:gap-2.5" : "gap-5",
        className
      )}
      aria-label="MANA by Mentoria home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/mentoria-logo.svg"
        alt="Mentoria — Clutter to Clarity"
        width={240}
        height={72}
        draggable={false}
        className={cn(
          "w-auto shrink-0",
          isHeader ? "h-[4.25rem] sm:h-[4.75rem]" : "h-16 sm:h-[4.5rem]",
          dark && "brightness-0 invert"
        )}
      />

      <span
        className={cn(
          "w-px shrink-0 self-stretch",
          isHeader ? "my-0.5" : "my-1",
          dark ? "bg-white/20" : "bg-navy/10"
        )}
        aria-hidden
      />

      <span className="flex shrink-0 flex-col justify-center gap-1 leading-none">
        <span
          className={cn(
            "font-heading font-bold tracking-tight",
            isHeader ? "text-xl sm:text-2xl" : "text-lg sm:text-xl",
            dark ? "text-gold" : "text-royal"
          )}
        >
          MANA
        </span>
        <span
          className={cn(
            "font-semibold uppercase leading-tight",
            isHeader ? "text-[10px] tracking-[0.14em] sm:text-[11px]" : "text-[9px] tracking-[0.16em] sm:text-[10px]",
            dark ? "text-white/50" : "text-slate"
          )}
        >
          Certification
        </span>
      </span>
    </Link>
  );
}
