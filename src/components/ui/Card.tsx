import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-navy/8 bg-white p-6 sm:p-7 shadow-soft",
        hover && "transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
