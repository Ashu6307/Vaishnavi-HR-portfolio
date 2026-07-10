import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section className={cn("section-shell", className)} id={id}>
      <div className="container-shell">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  level = "h2"
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  level?: "h1" | "h2";
}) {
  const HeadingTag = level;
  return (
    <div className={cn("mb-10 max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="label-text mb-3">{eyebrow}</p> : null}
      <HeadingTag className="text-balance font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
        {title}
      </HeadingTag>
      {intro ? <p className="mt-4 text-lg leading-8 text-muted">{intro}</p> : null}
    </div>
  );
}
