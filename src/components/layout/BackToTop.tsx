"use client";

import { ArrowUp } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <m.button
          animate={{ opacity: 1, scale: 1, y: 0 }}
          aria-label="Back to top"
          className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-5 z-40 grid size-12 place-items-center rounded-full border border-strong bg-surface text-accent shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          exit={{ opacity: 0, scale: 0.92, y: 8 }}
          initial={{ opacity: 0, scale: 0.9, y: 8 }}
          onClick={() => {
            const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
          }}
          transition={{ duration: 0.18 }}
          type="button"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
        >
          <ArrowUp className="size-5" aria-hidden />
        </m.button>
      ) : null}
    </AnimatePresence>
  );
}
