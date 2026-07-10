"use client";

import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export function Accordion({
  title,
  children,
  defaultOpen = false,
  className
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className={cn("rounded-2xl border border-border bg-surface", className)}>
      <button
        aria-controls={id}
        aria-expanded={open}
        className="flex min-h-12 w-full items-center justify-between gap-4 px-5 py-3 text-left font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <span>{title}</span>
        <ChevronDown className={cn("size-5 transition", open && "rotate-180")} aria-hidden />
      </button>
      <div className={cn("grid transition-all", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden">
          <div className="border-t border-border px-5 py-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
