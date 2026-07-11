"use client";

import { BriefcaseBusiness, Linkedin, Mail, Menu, X } from "lucide-react";
import { AnimatePresence, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { LinkButton } from "@/components/ui/Button";
import { navigationItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/site";
import { overlayFade, slideDrawer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/navigation/ThemeToggle";

const desktopNavigation = navigationItems.filter((item) =>
  ["About", "Experience", "Expertise", "Work", "Contact"].includes(item.label)
);

const menuStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035
    }
  }
};

const menuItem = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0 }
};

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const previousPathRef = useRef(pathname);
  const shouldReduceMotion = useReducedMotion();

  const closeMenu = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    if (!open) return;

    const body = document.body;
    const html = document.documentElement;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPaddingRight = body.style.paddingRight;
    const previousHtmlOverflow = html.style.overflow;
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    body.style.overflow = "hidden";
    html.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      body.style.overflow = previousBodyOverflow;
      body.style.paddingRight = previousBodyPaddingRight;
      html.style.overflow = previousHtmlOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }

      if (event.key === "Tab" && panelRef.current) {
        const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>(focusableSelector));

        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeMenu, open]);

  useEffect(() => {
    if (!open) return;

    const frame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
      if (process.env.NODE_ENV === "development" && !panelRef.current) {
        console.warn("Mobile navigation is open but the drawer panel is not mounted.");
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [open]);

  useEffect(() => {
    if (previousPathRef.current !== pathname) {
      previousPathRef.current = pathname;
      setOpen(false);
    }
  }, [pathname]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1180px)");
    const closeOnDesktop = () => {
      if (media.matches) setOpen(false);
    };

    closeOnDesktop();
    media.addEventListener("change", closeOnDesktop);
    window.addEventListener("popstate", closeOnDesktop);

    return () => {
      media.removeEventListener("change", closeOnDesktop);
      window.removeEventListener("popstate", closeOnDesktop);
    };
  }, []);

  const drawer = (
    <AnimatePresence>
      {open ? (
        <>
          <m.div
            animate="visible"
            aria-hidden="true"
            className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm"
            exit="exit"
            initial="hidden"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeMenu();
            }}
            transition={{ duration: 0.22 }}
            variants={overlayFade}
          />
          <m.div
            animate="visible"
            aria-label="Mobile navigation"
            aria-modal="true"
            className="fixed right-0 top-0 z-[70] flex h-[100dvh] max-h-[100dvh] w-[min(88vw,420px)] flex-col overflow-y-auto border-l border-border bg-surface text-ink shadow-darkSoft"
            exit="exit"
            id="mobile-navigation"
            initial="hidden"
            ref={panelRef}
            role="dialog"
            transition={{ duration: 0.26 }}
            variants={shouldReduceMotion ? overlayFade : slideDrawer}
          >
            <div className="sticky top-0 z-[80] flex min-h-20 items-center justify-between gap-4 border-b border-border bg-surface/96 px-5 backdrop-blur">
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-strong bg-elevated font-serif text-lg font-bold text-accent">
                  {profile.initials}
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-serif text-xl font-semibold leading-tight">
                    {profile.fullName}
                  </span>
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-muted">
                    Human Resources
                  </span>
                </span>
              </div>
              <button
                aria-label="Close navigation menu"
                className="grid size-11 shrink-0 place-items-center rounded-full border border-border bg-elevated text-ink transition hover:border-strong hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                onClick={() => closeMenu()}
                ref={closeButtonRef}
                type="button"
              >
                <X className="size-5" aria-hidden />
              </button>
            </div>

            <nav aria-label="Mobile primary navigation" className="px-5 py-5">
              <m.ul
                animate="visible"
                className="grid gap-1"
                initial="hidden"
                variants={shouldReduceMotion ? undefined : menuStagger}
              >
                {navigationItems.map((item) => {
                  const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                  return (
                    <m.li key={item.href} variants={shouldReduceMotion ? undefined : menuItem}>
                      <a
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "group flex min-h-[52px] items-center justify-between border-b border-border/70 text-[1.06rem] font-semibold text-muted transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                          active && "text-accent"
                        )}
                        href={item.href}
                        onClick={() => closeMenu(false)}
                      >
                        <span>{item.label}</span>
                        <span
                          aria-hidden
                          className={cn(
                            "h-1.5 w-1.5 rounded-full border border-current opacity-0 transition",
                            active && "opacity-100"
                          )}
                        />
                      </a>
                    </m.li>
                  );
                })}
              </m.ul>
            </nav>

            <div className="mt-auto border-t border-border px-5 py-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Direct Contact</p>
              <div className="mt-4 grid gap-3">
                <a
                  className="inline-flex min-h-11 items-center gap-3 rounded-full border border-strong bg-elevated px-4 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  href={`mailto:${siteConfig.contact.email}`}
                  onClick={() => closeMenu(false)}
                >
                  <Mail className="size-4" aria-hidden />
                  Send Email
                </a>
                <a
                  className="inline-flex min-h-11 items-center gap-3 rounded-full border border-strong bg-elevated px-4 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  href={siteConfig.contact.linkedinUrl}
                  onClick={() => closeMenu(false)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Linkedin className="size-4" aria-hidden />
                  Connect on LinkedIn
                </a>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted">{siteConfig.contact.location}</p>
            </div>
          </m.div>
        </>
      ) : null}
    </AnimatePresence>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/88 backdrop-blur-xl">
      <div className="container-shell header-shell flex min-h-20 items-center justify-between gap-3 min-[1180px]:gap-5">
        <a className="header-brand flex min-w-0 items-center gap-2 focus-visible:outline-none sm:gap-3" href="/">
          <span className="header-brand__mark grid size-10 shrink-0 place-items-center rounded-full border border-strong bg-surface text-accent sm:size-11">
            <BriefcaseBusiness className="size-4 sm:size-5" aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="header-brand__name block truncate font-serif text-lg font-semibold leading-tight text-ink sm:text-xl">
              {profile.fullName}
            </span>
            <span className="header-brand__subtitle block truncate text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-muted sm:text-xs sm:tracking-[0.12em]">
              Human Resources
            </span>
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 min-[1180px]:flex">
          {desktopNavigation.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <a
                aria-current={active ? "page" : undefined}
                className={cn(
                  "nav-link relative inline-flex min-h-10 items-center rounded-full px-3.5 text-sm font-semibold text-muted transition hover:bg-elevated hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
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

        <div className="hidden items-center gap-3 min-[1180px]:flex">
          <ThemeToggle />
          <LinkButton href="/contact" variant="primary">
            Let&apos;s Connect
          </LinkButton>
        </div>

        <div className="mobile-header-actions flex shrink-0 items-center gap-1.5 min-[1180px]:hidden sm:gap-2">
          {!open ? <ThemeToggle compact /> : null}
          <button
            aria-controls="mobile-navigation"
            aria-expanded={open}
            aria-label={open ? "Navigation menu open" : "Open navigation menu"}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-ink transition hover:border-strong hover:bg-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:size-11"
            onClick={() => setOpen((value) => !value)}
            ref={menuButtonRef}
            type="button"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>
      {typeof document !== "undefined" ? createPortal(drawer, document.body) : null}
    </header>
  );
}
