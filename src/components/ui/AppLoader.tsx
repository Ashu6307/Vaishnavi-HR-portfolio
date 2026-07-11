"use client";

import * as m from "motion/react-m";
import { useLayoutEffect, useState } from "react";
import { motionEase } from "@/lib/motion";

const MIN_DURATION = 800;
const MAX_DURATION = 1300;
const EXIT_DURATION = 220;
const SESSION_KEY = "vj-loader-has-shown";

export function AppLoader() {
  const [phase, setPhase] = useState<"visible" | "exiting" | "hidden">("visible");

  useLayoutEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    const navigationEntry = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    const navigationType = navigationEntry?.type;
    const forceLoader = new URLSearchParams(window.location.search).get("showLoader") === "1";
    const sameOriginReferrer = document.referrer ? new URL(document.referrer).origin === window.location.origin : false;
    const internalDocumentNavigation =
      !forceLoader &&
      navigationType === "navigate" &&
      sameOriginReferrer &&
      sessionStorage.getItem(SESSION_KEY) === "true";

    if (internalDocumentNavigation) {
      body.classList.remove("app-loading");
      body.classList.add("app-ready");
      html.classList.add("app-ready");
      const skipFrame = window.requestAnimationFrame(() => setPhase("hidden"));
      return () => window.cancelAnimationFrame(skipFrame);
    }

    const recordedStart = Number(document.documentElement.dataset.loaderStart);
    const loaderStart = Number.isFinite(recordedStart) && recordedStart > 0 ? recordedStart : performance.now();
    const elapsedSinceStart = () => performance.now() - loaderStart;
    let ready = document.readyState === "interactive" || document.readyState === "complete";
    let minElapsed = false;
    let settled = false;
    let minTimer: ReturnType<typeof setTimeout> | null = null;
    let maxTimer: ReturnType<typeof setTimeout> | null = null;
    let exitTimer: ReturnType<typeof setTimeout> | null = null;

    const hide = () => {
      if (settled) return;
      settled = true;
      body.classList.remove("app-loading");
      body.classList.add("app-ready");
      html.classList.add("app-ready");
      sessionStorage.setItem(SESSION_KEY, "true");
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
    body.classList.remove("app-ready");

    if (!ready) {
      window.addEventListener("load", onReady, { once: true });
    }

    minTimer = setTimeout(() => {
      minElapsed = true;
      maybeHide();
    }, Math.max(MIN_DURATION - elapsedSinceStart(), 0));

    maxTimer = setTimeout(() => {
      ready = true;
      minElapsed = true;
      hide();
    }, Math.max(MAX_DURATION - elapsedSinceStart(), 0));

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
      animate={phase === "exiting" ? { opacity: 0 } : { opacity: 1 }}
      aria-live="polite"
      className="app-loader"
      initial={{ opacity: 1 }}
      role="status"
      transition={{ duration: phase === "exiting" ? EXIT_DURATION / 1000 : 0.18, ease: motionEase }}
    >
      <div className="app-loader__panel">
        <div className="app-loader__mark" aria-hidden="true">
          <span className="app-loader__monogram">VJ</span>
        </div>
        <p className="app-loader__label">Human Resources</p>
        <div aria-hidden="true" className="app-loader__line" />
      </div>
      <span className="sr-only">Loading portfolio</span>
    </m.div>
  );
}
