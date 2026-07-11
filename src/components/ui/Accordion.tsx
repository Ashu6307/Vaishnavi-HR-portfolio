"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
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
  const shouldReduceMotion = useReducedMotion();

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
        <m.span animate={{ rotate: open && !shouldReduceMotion ? 180 : 0 }}>
          <ChevronDown className="size-5" aria-hidden />
        </m.span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <m.div
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            id={id}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.24 }}
          >
            <div className="overflow-hidden">
              <div className="border-t border-border px-5 py-4">{children}</div>
            </div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
