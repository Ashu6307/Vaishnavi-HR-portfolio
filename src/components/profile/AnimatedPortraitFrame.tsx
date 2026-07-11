"use client";

import * as m from "motion/react-m";
import { useId } from "react";

export function AnimatedPortraitFrame() {
  const gradientId = useId().replace(/:/g, "");

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 h-full w-full"
      preserveAspectRatio="none"
      viewBox="0 0 100 125"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="rgb(var(--color-accent-strong))" stopOpacity="0.45" />
          <stop offset="42%" stopColor="rgb(var(--color-accent))" stopOpacity="0.9" />
          <stop offset="100%" stopColor="rgb(var(--color-sage))" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <m.rect
        fill="none"
        initial={{ opacity: 0, pathLength: 0 }}
        rx="7"
        ry="7"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.6"
        vectorEffect="non-scaling-stroke"
        viewport={{ once: true, amount: 0.45 }}
        whileInView={{ opacity: 0.9, pathLength: 1 }}
        x="1"
        y="1"
        width="98"
        height="123"
        transition={{ duration: 0.9 }}
      />
    </svg>
  );
}
