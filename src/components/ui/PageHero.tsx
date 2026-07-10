import Button from "./Button";
import { Eyebrow } from "./Section";

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <div className="relative overflow-hidden bg-navy bg-neural bg-speedlines pb-16 pt-32 text-white sm:pb-20 sm:pt-40">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <div className="mb-5 flex justify-center">
          <Eyebrow dark>{eyebrow}</Eyebrow>
        </div>
        <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-white/70 sm:text-xl">
            {description}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            {primaryCta && (
              <Button href={primaryCta.href} variant="gold" size="lg">
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                variant="ghost"
                size="lg"
                className="border-white/25 text-white hover:bg-white/10"
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
