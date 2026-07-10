"use client";

import { BriefcaseBusiness, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LinkButton } from "@/components/ui/Button";
import { navigationItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/navigation/ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/88 backdrop-blur-xl">
      <div className="container-shell flex min-h-20 items-center justify-between gap-5">
        <a className="flex items-center gap-3 focus-visible:outline-none" href="/">
          <span className="grid size-11 place-items-center rounded-full border border-strong bg-surface text-accent">
            <BriefcaseBusiness className="size-5" aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-serif text-xl font-semibold leading-tight text-ink">
              {profile.fullName}
            </span>
            <span className="block truncate text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              Human Resources
            </span>
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 xl:flex">
          {navigationItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <a
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-semibold text-muted transition hover:bg-elevated hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  active && "bg-elevated text-accent"
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <ThemeToggle />
          <LinkButton href="/contact" variant="primary">
            Let&apos;s Connect
          </LinkButton>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={open}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-surface text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent xl:hidden"
          onClick={() => setOpen((value) => !value)}
          ref={menuButtonRef}
          type="button"
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>

      <div
        aria-hidden={!open}
        className={cn(
          "fixed inset-x-0 top-20 z-40 grid bg-background/96 shadow-soft backdrop-blur-xl transition-[grid-template-rows] xl:hidden",
          open ? "pointer-events-auto grid-rows-[1fr]" : "pointer-events-none grid-rows-[0fr]"
        )}
        id="mobile-navigation"
        inert={!open}
      >
        <div className="overflow-hidden">
          <nav aria-label="Mobile navigation" className="container-shell py-5">
            <div className="grid gap-2">
              {navigationItems.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <a
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-2xl border border-border bg-surface px-4 py-3 font-semibold text-muted",
                      active && "border-strong text-accent"
                    )}
                    href={item.href}
                    key={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
            <div className="mt-5 grid gap-3">
              <ThemeToggle compact />
              <LinkButton className="w-full" href="/contact">
                Let&apos;s Connect
              </LinkButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
