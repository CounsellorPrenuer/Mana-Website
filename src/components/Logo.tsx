import Link from "next/link";
import { cn } from "@/lib/utils";

const LOGO_W = 1080;
const LOGO_H = 321.7;
/** Tagline starts at y≈234 — crop above this for header wordmark only */
const WORDMARK_RATIO = 0.58;

type LogoProps = {
  dark?: boolean;
  variant?: "header" | "footer";
  className?: string;
};

export default function Logo({ dark = false, variant = "header", className }: LogoProps) {
  const showFull = variant === "footer";
  const visibleH = showFull ? 56 : 36;
  const ratio = showFull ? 1 : WORDMARK_RATIO;
  const imgH = Math.round(visibleH / ratio);
  const imgW = Math.round((LOGO_W / LOGO_H) * imgH);

  return (
    <Link
      href="/"
      className={cn("group flex shrink-0 items-center gap-5 sm:gap-6", className)}
      aria-label="MANA by Mentoria home"
    >
      <span
        className="relative block shrink-0 overflow-hidden"
        style={{ width: imgW, height: visibleH }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/mentoria-logo.svg"
          alt="Mentoria"
          width={imgW}
          height={imgH}
          draggable={false}
          className={cn(
            "absolute left-0 top-0 max-w-none",
            dark && "brightness-0 invert"
          )}
          style={{ width: imgW, height: imgH }}
        />
      </span>

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
