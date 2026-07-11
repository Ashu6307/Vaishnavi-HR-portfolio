"use client";

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import * as m from "motion/react-m";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-accent text-[rgb(var(--color-button-text))] shadow-soft hover:bg-[rgb(var(--color-accent-strong))] focus-visible:ring-accent",
  secondary:
    "border border-strong bg-surface text-ink hover:border-accent hover:text-accent focus-visible:ring-accent",
  ghost: "text-ink hover:bg-elevated focus-visible:ring-accent",
  text: "text-accent underline-offset-4 hover:underline focus-visible:ring-accent"
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60";

type SafeButtonAttributes = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onAnimationStart" | "onDrag" | "onDragEnd" | "onDragStart"
>;

type SafeAnchorAttributes = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "onAnimationStart" | "onDrag" | "onDragEnd" | "onDragStart"
>;

type ButtonProps = SafeButtonAttributes & {
  variant?: keyof typeof variants;
};

type LinkButtonProps = SafeAnchorAttributes & {
  href: string;
  variant?: keyof typeof variants;
  children: ReactNode;
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <m.button
      className={cn(base, variants[variant], className)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    />
  );
}

export function LinkButton({
  className,
  variant = "primary",
  href,
  children,
  ...props
}: LinkButtonProps) {
  const classNames = cn(base, variants[variant], className);
  const external = href.startsWith("http");

  if (external) {
    return (
      <m.a
        className={classNames}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </m.a>
    );
  }

  return (
    <m.a className={classNames} href={href} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} {...props}>
      {children}
    </m.a>
  );
}
