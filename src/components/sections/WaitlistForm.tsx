"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { CONTACTS } from "@/lib/constants";

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("MANA — Second Programme Waitlist");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nWhatsApp: ${whatsapp}\n\nPlease notify me when the second MANA certification programme opens.`
    );
    window.location.href = `mailto:${CONTACTS[0].email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-lavender p-8 text-center">
        <CheckCircle2 className="h-8 w-8 text-royal" />
        <p className="font-semibold text-navy">Your email client should now be open</p>
        <p className="text-sm text-slate">Send the pre-filled email and we&apos;ll add you to the waitlist.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
        Join the Waitlist
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
