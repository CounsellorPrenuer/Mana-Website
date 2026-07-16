import type { Metadata } from "next";
import { Mail, Phone, MessageCircle } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/sections/ContactForm";
import { CONTACTS, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the MANA team, email, phone, WhatsApp, or send a message directly.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the MANA team"
        description="Questions about eligibility, fees, or the programme itself, reach out directly, or apply for the full walkthrough."
      />

      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Reach Us Directly" title="Programme contacts" />
            <div className="mt-8 space-y-5">
              {CONTACTS.map((c, i) => (
                <Reveal key={c.email} delay={i * 0.08}>
                  <Card>
                    <h3 className="font-bold text-navy">{c.name}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wide text-royal">{c.role}</p>
                    <div className="mt-4 space-y-2">
                      <a href={`mailto:${c.email}`} className="flex items-center gap-2 text-sm text-slate hover:text-navy">
                        <Mail className="h-4 w-4 text-royal" /> {c.email}
                      </a>
                      <a href={`tel:${c.phoneHref}`} className="flex items-center gap-2 text-sm text-slate hover:text-navy">
                        <Phone className="h-4 w-4 text-royal" /> {c.phone}
                      </a>
                    </div>
                  </Card>
                </Reveal>
              ))}
              <Reveal delay={0.16}>
                <Button
                  href={`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
                  external
                  variant="secondary"
                  size="lg"
                  showArrow={false}
                  className="w-full justify-center"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </Button>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.1}>
            <Card>
              <h3 className="font-bold text-navy">Send us a message</h3>
              <p className="mt-1 text-sm text-slate">We typically respond within one business day.</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
