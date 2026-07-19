"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { CONTACTS } from "@/lib/constants";

const BACKGROUNDS = [
  "Career-changer",
  "Parent returning to work",
  "Teacher / educator",
  "Coach / mentor / psychologist",
  "Sales / business development",
  "HR / talent",
  "Armed forces / veteran",
  "Other",
];

export default function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [background, setBackground] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`MANA Application: ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone / WhatsApp: ${phone}\nBackground: ${background}\n\nPlease get in touch about the next MANA cohort.`
    );
    window.location.href = `mailto:${CONTACTS[0].email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-lavender p-8 text-center">
        <CheckCircle2 className="h-8 w-8 text-royal" />
        <p className="font-semibold text-navy">Your email client should now be open</p>
        <p className="text-sm text-slate">Send the pre-filled application and our team will be in touch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="apply-name" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy/70">
          Full name
        </label>
        <input
          id="apply-name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-royal"
        />
      </div>
      <div>
        <label htmlFor="apply-email" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy/70">
          Email
        </label>
        <input
          id="apply-email"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-royal"
        />
      </div>
      <div>
        <label htmlFor="apply-phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy/70">
          Phone / WhatsApp
        </label>
        <input
          id="apply-phone"
          required
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+91"
          className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-royal"
        />
      </div>
      <div>
        <label htmlFor="apply-background" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy/70">
          What best describes you?
        </label>
        <select
          id="apply-background"
          required
          value={background}
          onChange={(e) => setBackground(e.target.value)}
          className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-royal"
        >
          <option value="">Select one</option>
          {BACKGROUNDS.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-magenta px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-navy"
      >
        Submit application
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
