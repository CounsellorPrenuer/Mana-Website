"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-navy/10 rounded-2xl border border-navy/10 bg-white shadow-soft">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-navy">{item.q}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 flex-shrink-0 text-royal transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-slate leading-relaxed sm:px-7">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
