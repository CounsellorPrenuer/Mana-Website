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
  primary:
    "bg-royal text-white hover:bg-navy shadow-[0_8px_24px_-8px_rgba(47,79,214,0.55)] hover:shadow-[0_10px_28px_-8px_rgba(27,26,94,0.6)]",
  secondary:
    "bg-white text-navy border border-navy/15 hover:border-navy/30 hover:bg-lavender",
  ghost: "bg-transparent text-navy hover:bg-navy/5 border border-transparent",
  gold: "bg-gold text-navy hover:brightness-95 shadow-[0_8px_24px_-8px_rgba(244,196,14,0.6)]",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

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
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 ease-out active:scale-[0.98]",
    variants[variant],
    sizes[size],
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
        {children}
        {showArrow && (
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        )}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}
