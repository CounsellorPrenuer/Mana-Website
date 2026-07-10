import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { SITE } from "@/lib/constants";

export default function FinalCta({
  title = "See the model. Meet the faculty. Ask anything.",
  description = "Every question about MANA — the practice, the fee, the Founder's Offer — gets answered live at a free daily orientation session.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy bg-neural bg-speedlines py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-balance text-lg text-white/70">{description}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="/orientation" variant="gold" size="lg">
              Register for a Free Orientation
            </Button>
            <Button
              href={`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
              variant="ghost"
              size="lg"
              external
              showArrow={false}
              className="border-white/25 text-white hover:bg-white/10"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
