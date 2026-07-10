import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-elevated px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
