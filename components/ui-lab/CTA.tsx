import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "filled" | "outline" | "ghost";

export function CTA({
  href,
  children,
  variant = "filled",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const variants: Record<Variant, string> = {
    filled:
      "bg-primary text-primary-foreground shadow-[0_8px_30px_-12px_color-mix(in_oklab,var(--primary)_60%,transparent)] hover:scale-[1.02] hover:bg-[color-mix(in_oklab,var(--primary)_92%,black)]",
    outline:
      "border border-border bg-background/60 text-foreground backdrop-blur-sm hover:border-primary/60 hover:bg-primary/5 hover:text-foreground",
    ghost: "text-foreground hover:text-primary",
  };

  return (
    <a href={href} className={cn(base, variants[variant], className)}>
      {children}
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
        →
      </span>
    </a>
  );
}

export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
      <span className="h-1 w-1 rounded-full bg-primary" />
      {children}
    </div>
  );
}