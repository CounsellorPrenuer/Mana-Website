import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "lavender" | "navy";
};

const backgrounds = {
  white: "bg-white",
  lavender: "bg-lavender",
  navy: "bg-navy text-white",
};

export default function Section({ children, className, id, bg = "white" }: SectionProps) {
  return (
    <section id={id} className={cn(backgrounds[bg], "py-16 sm:py-20 lg:py-28", className)}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em]",
        dark ? "bg-white/10 text-gold" : "bg-royal/10 text-royal"
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", dark ? "bg-gold" : "bg-magenta")} />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <div className="mb-4">
          <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={cn(
          "text-balance text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-lg leading-relaxed", dark ? "text-white/70" : "text-slate")}>
          {description}
        </p>
      )}
    </div>
  );
}
