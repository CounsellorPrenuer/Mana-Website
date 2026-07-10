import Link from "next/link";
import { Mail, Phone, MessageCircle, ExternalLink } from "lucide-react";
import Logo from "./Logo";
import { CONTACTS, FOOTER_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy bg-speedlines text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Logo dark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {SITE.tagline} MANA is the Training &amp; Certification vertical of {SITE.parentBrand}, India&apos;s
              holistic career discovery ecosystem.
            </p>
            <a
              href={SITE.parentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline"
            >
              Visit mentoria.com <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/40">Programme</h4>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.programme.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/40">Engage</h4>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.engage.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/40">Contact</h4>
            <ul className="mt-4 space-y-4">
              {CONTACTS.map((c) => (
                <li key={c.email} className="text-sm text-white/70">
                  <div className="font-semibold text-white">{c.name}</div>
                  <a href={`mailto:${c.email}`} className="mt-1 flex items-center gap-1.5 hover:text-white">
                    <Mail className="h-3.5 w-3.5" /> {c.email}
                  </a>
                  <a href={`tel:${c.phoneHref}`} className="mt-1 flex items-center gap-1.5 hover:text-white">
                    <Phone className="h-3.5 w-3.5" /> {c.phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline"
                >
                  <MessageCircle className="h-3.5 w-3.5" /> Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Mentoria. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {FOOTER_LINKS.legal.map((l) => (
              <Link key={l.href} href={l.href} className="text-xs text-white/50 hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
