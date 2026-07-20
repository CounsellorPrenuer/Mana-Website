"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, Check, ChevronDown } from "lucide-react";
import { CONTACTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { EASE_OUT, SPRING_SNAPPY } from "@/lib/motionConfig";

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

type FieldKey = "name" | "email" | "phone" | "background";

type FloatingFieldProps = {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  valid: boolean;
  touched: boolean;
  onBlur: () => void;
};

function FloatingField({ id, label, type = "text", value, onChange, valid, touched, onBlur }: FloatingFieldProps) {
  const [focused, setFocused] = useState(false);
  const floated = focused || value.length > 0;
  const invalid = touched && !valid;

  return (
    <div className="relative">
      <input
        id={id}
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFocused(false);
          onBlur();
        }}
        className={cn(
          "w-full rounded-xl border bg-white px-4 pb-2.5 pt-6 text-sm text-navy outline-none transition-colors duration-200 focus:border-royal",
          invalid ? "border-magenta/50" : "border-navy/15"
        )}
      />
      <motion.label
        htmlFor={id}
        initial={false}
        animate={{ y: floated ? 7 : 17, scale: floated ? 0.72 : 1 }}
        transition={{ duration: 0.2, ease: EASE_OUT }}
        style={{ originX: 0, originY: 0 }}
        className="pointer-events-none absolute left-4 top-0 font-medium text-mist"
      >
        {label}
      </motion.label>
      <AnimatePresence>
        {touched && valid && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-royal"
          >
            <Check className="h-4 w-4" />
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ApplyForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [background, setBackground] = useState("");
  const [touched, setTouched] = useState<Record<FieldKey, boolean>>({
    name: false,
    email: false,
    phone: false,
    background: false,
  });

  const validity = {
    name: name.trim().length > 1,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    phone: phone.trim().length >= 7,
    background: background !== "",
  };
  const isValid = validity.name && validity.email && validity.phone && validity.background;

  function markTouched(key: FieldKey) {
    setTouched((t) => ({ ...t, [key]: true }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    if (!isValid) {
      setTouched({ name: true, email: true, phone: true, background: true });
      return;
    }
    setStatus("submitting");
    const subject = encodeURIComponent(`MANA Application: ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone / WhatsApp: ${phone}\nBackground: ${background}\n\nPlease get in touch about the next MANA cohort.`
    );
    window.location.href = `mailto:${CONTACTS[0].email}?subject=${subject}&body=${body}`;
    window.setTimeout(() => setStatus("submitted"), 550);
  }

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      {status === "submitted" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          className="flex flex-col items-center gap-3 rounded-2xl bg-lavender p-8 text-center"
        >
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ...SPRING_SNAPPY, delay: 0.1 }}>
            <CheckCircle2 className="h-10 w-10 text-royal" />
          </motion.div>
          <p className="font-semibold text-navy">Your email client should now be open</p>
          <p className="text-sm text-slate">Send the pre-filled application and our team will be in touch.</p>
        </motion.div>
      ) : (
        <motion.form key="form" exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-4">
          <FloatingField
            id="apply-name"
            label="Full name"
            value={name}
            onChange={setName}
            valid={validity.name}
            touched={touched.name}
            onBlur={() => markTouched("name")}
          />
          <FloatingField
            id="apply-email"
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
            valid={validity.email}
            touched={touched.email}
            onBlur={() => markTouched("email")}
          />
          <FloatingField
            id="apply-phone"
            label="Phone / WhatsApp"
            type="tel"
            value={phone}
            onChange={setPhone}
            valid={validity.phone}
            touched={touched.phone}
            onBlur={() => markTouched("phone")}
          />
          <div className="relative">
            <select
              id="apply-background"
              required
              value={background}
              onChange={(e) => setBackground(e.target.value)}
              onBlur={() => markTouched("background")}
              className={cn(
                "w-full appearance-none rounded-xl border bg-white px-4 pb-2.5 pt-6 text-sm text-navy outline-none transition-colors duration-200 focus:border-royal",
                touched.background && !validity.background ? "border-magenta/50" : "border-navy/15"
              )}
            >
              <option value="">Select one</option>
              {BACKGROUNDS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
            <label
              htmlFor="apply-background"
              className="pointer-events-none absolute left-4 top-2 text-[0.72rem] font-medium text-mist"
            >
              What best describes you?
            </label>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
          </div>
          <motion.button
            type="submit"
            disabled={status === "submitting"}
            aria-busy={status === "submitting"}
            whileHover={!isValid || status === "submitting" ? undefined : { scale: 1.015 }}
            whileTap={!isValid || status === "submitting" ? undefined : { scale: 0.98 }}
            transition={SPRING_SNAPPY}
            className={cn(
              "flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-colors",
              !isValid || status === "submitting" ? "cursor-not-allowed bg-navy/30" : "bg-magenta hover:bg-navy"
            )}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {status === "submitting" ? (
                <motion.span
                  key="loading"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-2"
                >
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Opening your email…
                </motion.span>
              ) : (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-2"
                >
                  Submit application
                  <Send className="h-4 w-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
