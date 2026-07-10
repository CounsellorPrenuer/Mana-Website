import Link from "next/link";
import { cn } from "@/lib/utils";

/** Full logo is 1080×321.7; wordmark ends ~72% down — clip tagline only, never crop sides. */
const LOGO_W = 1080;
const LOGO_H = 321.7;
const WORDMARK_RATIO = 0.72;
const HEADER_H = 42;
const HEADER_IMG_H = Math.round(HEADER_H / WORDMARK_RATIO);
const HEADER_IMG_W = Math.round((LOGO_W / LOGO_H) * HEADER_IMG_H);

export default function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group flex shrink-0 items-center gap-5 sm:gap-7", className)}
      aria-label="MANA by Mentoria home"
    >
      <span
        className="relative block shrink-0 overflow-hidden"
        style={{ width: HEADER_IMG_W, height: HEADER_H }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/mentoria-logo.svg"
          alt="Mentoria"
          width={HEADER_IMG_W}
          height={HEADER_IMG_H}
          draggable={false}
          className={cn(
            "absolute left-0 top-0 max-w-none",
            dark && "brightness-0 invert"
          )}
          style={{ width: HEADER_IMG_W, height: HEADER_IMG_H }}
        />
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
