import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-accent text-white shadow-soft hover:bg-[rgb(var(--color-accent-strong))] focus-visible:ring-accent",
  secondary:
    "border border-strong bg-surface text-ink hover:border-accent hover:text-accent focus-visible:ring-accent",
  ghost: "text-ink hover:bg-elevated focus-visible:ring-accent",
  text: "text-accent underline-offset-4 hover:underline focus-visible:ring-accent"
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
};

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: keyof typeof variants;
  children: ReactNode;
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return <button className={cn(base, variants[variant], className)} {...props} />;
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
      <a className={classNames} href={href} rel="noopener noreferrer" target="_blank" {...props}>
        {children}
      </a>
    );
  }

  return (
    <a className={classNames} href={href} {...props}>
      {children}
    </a>
  );
}
