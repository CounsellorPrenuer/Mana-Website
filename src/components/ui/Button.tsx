"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { prefersReducedMotion } from "@/lib/motion";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "gold";
  size?: "md" | "lg";
  className?: string;
  showArrow?: boolean;
  external?: boolean;
  onClick?: () => void;
};

const variants = {
  primary: "bg-navy text-white hover:bg-royal shadow-soft",
  secondary: "bg-white text-navy border border-border hover:border-navy/25 hover:bg-lavender",
  ghost: "bg-transparent text-navy border border-transparent hover:bg-navy/5",
  // Used as the primary CTA on dark sections — solid white, high contrast, no gold fill.
  gold: "bg-white text-navy shadow-soft hover:bg-lavender",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const MAX_PULL = 7;

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  showArrow = true,
  external = false,
  onClick,
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-colors duration-200 ease-out active:scale-[0.97]",
    variants[variant],
    sizes[size],
    className
  );

  // Next.js's <Link> can no-op on same-page hash hrefs in the static-export production
  // build (no route change, so its hash-scroll effect doesn't reliably fire). Handle
  // same-page anchors ourselves so "Apply now" always actually scrolls.
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (href.startsWith("#")) {
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
        if (history.pushState) history.pushState(null, "", href);
      }
    }
    onClick?.();
  }

  // Direct DOM writes, not React state — a magnetic hover shouldn't cost a re-render per pixel of mouse movement.
  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `translate(${relX * MAX_PULL * 2}px, ${relY * MAX_PULL * 2}px)`;
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  }

  const style = { transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1)" };

  if (external) {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
      >
        {children}
        {showArrow && (
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        )}
      </a>
    );
  }

  return (
    <Link
      ref={ref}
      href={href}
      className={classes}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      {children}
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}
