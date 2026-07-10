"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { CONTACTS } from "@/lib/constants";

const RESOURCES = [
  "Programme Brochure",
  "Curriculum Overview",
  "Faculty Profile",
  "Programme Calendar",
  "FAQs PDF",
];

export default function DownloadRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [selected, setSelected] = useState<string[]>(["Programme Brochure"]);

  function toggle(resource: string) {
    setSelected((prev) => (prev.includes(resource) ? prev.filter((r) => r !== resource) : [...prev, resource]));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("MANA — Resource Request");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nWhatsApp: ${whatsapp}\n\nRequested resources:\n${selected
        .map((r) => `- ${r}`)
        .join("\n")}`
    );
    window.location.href = `mailto:${CONTACTS[0].email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-lavender p-8 text-center">
        <CheckCircle2 className="h-8 w-8 text-royal" />
        <p className="font-semibold text-navy">Your email client should now be open</p>
        <p className="text-sm text-slate">Send the pre-filled request and we&apos;ll email your resources over.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-navy/70">
          Select resources
        </label>
        <div className="flex flex-wrap gap-2">
          {RESOURCES.map((r) => (
            <button
              type="button"
              key={r}
              onClick={() => toggle(r)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                selected.includes(r)
                  ? "border-royal bg-royal text-white"
                  : "border-navy/15 bg-white text-navy hover:border-royal/40"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy/70">Name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-royal"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy/70">Email</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-royal"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy/70">
          WhatsApp Number
        </label>
        <input
          required
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-royal"
          placeholder="+91 XXXXX XXXXX"
        />
      </div>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-royal px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-navy"
      >
        Request Resources
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
