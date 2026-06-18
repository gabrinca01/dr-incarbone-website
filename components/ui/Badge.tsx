import type { ReactNode } from "react";
import { textLabel } from "@/lib/typography";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-accent/15 bg-accent/[0.04] px-5 py-2 ${textLabel} text-accent ${className}`}
    >
      {children}
    </span>
  );
}
