"use client";

import * as m from "motion/react-m";
import { useEffect, useState } from "react";
import { loaderContainer, loaderItem } from "@/lib/motion";

const SESSION_KEY = "vj-loader-shown";
const MIN_DURATION = 600;
const MAX_DURATION = 1100;
const EXIT_DURATION = 120;

export function AppLoader() {
  const [phase, setPhase] = useState<"visible" | "exiting" | "hidden">("visible");

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    const navigationEntry = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    const navigationType = navigationEntry?.type;
    const alreadyShown = sessionStorage.getItem(SESSION_KEY) === "true";

    if (alreadyShown && navigationType !== "reload") {
      body.classList.remove("app-loading");
      body.classList.add("app-ready");
      html.classList.add("app-ready");
      const skipFrame = window.requestAnimationFrame(() => setPhase("hidden"));
      return () => window.cancelAnimationFrame(skipFrame);
    }

    const loaderStart = performance.now();
    let ready = document.readyState === "interactive" || document.readyState === "complete";
    let minElapsed = false;
    let settled = false;
    let minTimer: ReturnType<typeof setTimeout> | null = null;
    let maxTimer: ReturnType<typeof setTimeout> | null = null;
    let exitTimer: ReturnType<typeof setTimeout> | null = null;

    const hide = () => {
      if (settled) return;
      settled = true;
      sessionStorage.setItem(SESSION_KEY, "true");
      body.classList.remove("app-loading");
      body.classList.add("app-ready");
      html.classList.add("app-ready");
      setPhase("exiting");
      exitTimer = setTimeout(() => setPhase("hidden"), EXIT_DURATION);
    };

    const maybeHide = () => {
      if (ready && minElapsed) hide();
    };

    const onReady = () => {
      ready = true;
      maybeHide();
    };

    body.classList.add("app-loading");

    if (!ready) {
      window.addEventListener("load", onReady, { once: true });
    }

    minTimer = setTimeout(() => {
      minElapsed = true;
      maybeHide();
    }, Math.max(MIN_DURATION - (performance.now() - loaderStart), 0));

    maxTimer = setTimeout(() => {
      ready = true;
      minElapsed = true;
      hide();
    }, MAX_DURATION);

    return () => {
      if (minTimer) clearTimeout(minTimer);
      if (maxTimer) clearTimeout(maxTimer);
      if (exitTimer) clearTimeout(exitTimer);
      window.removeEventListener("load", onReady);
      body.classList.remove("app-loading");
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <m.div
      animate={phase === "exiting" ? "exit" : "visible"}
      aria-live="polite"
      className="app-loader"
      initial="hidden"
      role="status"
      transition={{ duration: 0.22 }}
      variants={loaderContainer}
    >
      <m.div className="app-loader__mark" transition={{ duration: 0.42 }} variants={loaderItem} aria-hidden="true">
        VJ
      </m.div>
      <m.p className="app-loader__label" transition={{ delay: 0.08, duration: 0.32 }} variants={loaderContainer}>
        Human Resources
      </m.p>
      <m.div
        aria-hidden="true"
        className="app-loader__line"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.18, duration: 0.5 }}
      />
      <span className="sr-only">Loading portfolio</span>
    </m.div>
  );
}
