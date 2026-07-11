import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  style
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center rounded-full border border-border bg-elevated px-3 py-1 text-[0.8125rem] font-semibold leading-snug text-muted",
        className
      )}
      style={style}
    >
      {children}
    </span>
  );
}
