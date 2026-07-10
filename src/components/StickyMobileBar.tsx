import Link from "next/link";
import { MessageCircle, CalendarCheck } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-navy/10 bg-white/95 backdrop-blur-lg sm:hidden">
      <Link
        href="/orientation"
        className="flex flex-1 items-center justify-center gap-2 bg-royal py-3.5 text-sm font-bold text-white"
      >
        <CalendarCheck className="h-4 w-4" />
        {SITE.orientationCta}
      </Link>
      <a
        href={`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-16 flex-shrink-0 items-center justify-center bg-[#25D366] text-white"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" fill="white" strokeWidth={0} />
      </a>
    </div>
  );
}
