"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const [pull, setPull] = useState({ x: 0, y: 0 });

  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-colors duration-200 ease-out active:scale-[0.97]",
    variants[variant],
    sizes[size],
    className
  );

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    setPull({ x: relX * MAX_PULL * 2, y: relY * MAX_PULL * 2 });
  }

  function handleMouseLeave() {
    setPull({ x: 0, y: 0 });
  }

  const style = { transform: `translate(${pull.x}px, ${pull.y}px)`, transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1)" };

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
      onClick={onClick}
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
