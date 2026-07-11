"use client";

import { Moon, Sun } from "lucide-react";
import * as m from "motion/react-m";
import { useEffect, useState } from "react";
import type { ThemeMode } from "@/types/content";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "vj-theme";

function getSystemTheme(): ThemeMode {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getStoredTheme(): ThemeMode | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : null;
}

function applyResolvedTheme(theme: ThemeMode) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const resolveTheme = () => {
      const stored = getStoredTheme();
      const resolved = stored ?? getSystemTheme();
      applyResolvedTheme(resolved);
      setTheme(resolved);
    };

    resolveTheme();

    const onSystemChange = () => {
      if (!getStoredTheme()) {
        resolveTheme();
      }
    };

    media.addEventListener("change", onSystemChange);
    const fallbackPoll = window.setInterval(onSystemChange, 800);
    return () => {
      media.removeEventListener("change", onSystemChange);
      window.clearInterval(fallbackPoll);
    };
  }, []);

  function chooseTheme(nextTheme: ThemeMode) {
    localStorage.setItem(STORAGE_KEY, nextTheme);
    applyResolvedTheme(nextTheme);
    setTheme(nextTheme);
  }

  const options: Array<{
    label: string;
    tooltip: string;
    value: ThemeMode;
    icon: typeof Sun;
  }> = [
    { label: "Use light theme", tooltip: "Light theme", value: "light", icon: Sun },
    { label: "Use dark theme", tooltip: "Dark theme", value: "dark", icon: Moon }
  ];

  return (
    <div
      aria-label="Color theme"
      className={cn(
        "theme-toggle inline-flex items-center rounded-full border border-border bg-surface/90 p-1 shadow-sm",
        compact && "justify-self-start"
      )}
      role="group"
    >
      {options.map((item) => {
        const Icon = item.icon;
        const selected = theme === item.value;

        return (
          <m.button
            aria-pressed={selected}
            className={cn("theme-toggle__button group", selected && "is-selected")}
            data-theme-option={item.value}
            key={item.value}
            onClick={() => chooseTheme(item.value)}
            title={item.tooltip}
            type="button"
            whileTap={{ scale: 0.94 }}
          >
            <m.span animate={{ opacity: selected ? 1 : 0.72, scale: selected ? 1 : 0.9 }}>
              <Icon className="size-4" aria-hidden />
            </m.span>
            <span className="sr-only">{item.label}</span>
            <span className="theme-tooltip" role="tooltip">
              {item.tooltip}
            </span>
          </m.button>
        );
      })}
    </div>
  );
}
