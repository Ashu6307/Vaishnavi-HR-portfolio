"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";
import { cn } from "@/lib/utils";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
};

export function MotionReveal({ children, className, delay = 0, amount = 0.01 }: MotionRevealProps) {
  return (
    <m.div
      className={className}
      initial="hidden"
      viewport={{ once: true, amount }}
      variants={fadeUp}
      whileInView="visible"
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </m.div>
  );
}

export function MotionStagger({
  children,
  className,
  amount = 0.15
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  return (
    <m.div
      className={className}
      initial="hidden"
      viewport={{ once: true, amount }}
      variants={staggerContainer}
      whileInView="visible"
    >
      {children}
    </m.div>
  );
}

export function MotionStaggerItem({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <m.div className={cn("min-w-0", className)} variants={staggerItem} transition={{ duration: 0.48 }}>
      {children}
    </m.div>
  );
}

export function MotionArticle({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <m.article
      className={className}
      initial="hidden"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      whileInView="visible"
      transition={{ duration: 0.46 }}
    >
      {children}
    </m.article>
  );
}

export function MotionTimeline({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <m.div
      className={cn("relative", className)}
      initial="hidden"
      viewport={{ once: true, amount: 0.18 }}
      variants={staggerContainer}
      whileInView="visible"
    >
      <m.span
        aria-hidden
        className="absolute bottom-0 left-0 top-0 w-px bg-strong"
        initial={{ scaleY: 0 }}
        style={{ transformOrigin: "top" }}
        transition={{ duration: 0.72 }}
        variants={{ visible: { scaleY: 1 }, hidden: { scaleY: 0 } }}
      />
      {children}
    </m.div>
  );
}
