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
        isHeader ? "gap-1.5 sm:gap-2" : "gap-5",
        className
      )}
      aria-label="MANA by Mentoria home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={isHeader ? "/mentoria-logo-header.svg" : "/mentoria-logo.svg"}
        alt="Mentoria: Clutter to Clarity"
        width={isHeader ? 178 : 210}
        height={isHeader ? 56 : 63}
        draggable={false}
        className={cn(
          "w-auto shrink-0",
          isHeader ? "block h-[3.5rem] sm:h-[3.75rem]" : "h-16 sm:h-[4.5rem]",
          dark && "brightness-0 invert"
        )}
      />

      <span
        className={cn(
          "w-px shrink-0",
          isHeader ? "h-14" : "h-16 self-stretch",
          dark ? "bg-white/20" : "bg-navy/10"
        )}
        aria-hidden
      />

      <span className="flex shrink-0 flex-col justify-center gap-0.5 leading-none">
        <span
          className={cn(
            "font-heading font-bold tracking-tight",
            isHeader ? "text-lg sm:text-xl" : "text-lg sm:text-xl",
            dark ? "text-gold" : "text-royal"
          )}
        >
          MANA
        </span>
        <span
          className={cn(
            "font-semibold uppercase leading-tight",
            isHeader ? "text-[9px] tracking-[0.12em] sm:text-[10px]" : "text-[9px] tracking-[0.16em] sm:text-[10px]",
            dark ? "text-white/50" : "text-slate"
          )}
        >
          Certification
        </span>
      </span>
    </Link>
  );
}
