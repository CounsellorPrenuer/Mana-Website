import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-3", className)}>
      <Image
        src={dark ? "/mentoria-logo.svg" : "/mentoria-logo-header.svg"}
        alt="Mentoria"
        width={dark ? 140 : 120}
        height={dark ? 42 : 32}
        priority
        className={cn(
          "h-8 w-auto shrink-0 sm:h-9",
          dark && "brightness-0 invert"
        )}
      />
      <span className={cn("h-6 w-px shrink-0", dark ? "bg-white/25" : "bg-navy/15")} />
      <span className="flex shrink-0 flex-col leading-none">
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
