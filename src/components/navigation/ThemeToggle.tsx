"use client";

import { Laptop, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import type { ThemeMode } from "@/types/content";
import { cn } from "@/lib/utils";

const modes: Array<{ label: string; value: ThemeMode; icon: typeof Sun }> = [
  { label: "Light", value: "light", icon: Sun },
  { label: "Dark", value: "dark", icon: Moon },
  { label: "System", value: "system", icon: Laptop }
];

function applyTheme(mode: ThemeMode) {
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = mode === "system" ? (systemDark ? "dark" : "light") : mode;
  document.documentElement.dataset.theme = resolved;
  localStorage.setItem("vj-theme-mode", mode);
  if (mode === "system") {
    localStorage.removeItem("vj-theme");
  } else {
    localStorage.setItem("vj-theme", mode);
  }
}

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const [mode, setMode] = useState<ThemeMode>("system");

  useEffect(() => {
    const saved = localStorage.getItem("vj-theme-mode") as ThemeMode | null;
    const initial = saved === "light" || saved === "dark" || saved === "system" ? saved : "system";
    applyTheme(initial);
    queueMicrotask(() => setMode(initial));

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => {
      if ((localStorage.getItem("vj-theme-mode") || "system") === "system") applyTheme("system");
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return (
    <div
      aria-label="Theme selection"
      className={cn(
        "inline-flex rounded-full border border-border bg-surface p-1",
        compact && "w-full justify-between"
      )}
      role="group"
    >
      {modes.map((item) => {
        const Icon = item.icon;
        const active = mode === item.value;
        return (
          <button
            aria-pressed={active}
            className={cn(
              "inline-flex min-h-9 min-w-9 items-center justify-center rounded-full px-2 text-muted transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              active && "bg-elevated text-accent shadow-sm",
              compact && "flex-1 gap-2"
            )}
            key={item.value}
            onClick={() => {
              setMode(item.value);
              applyTheme(item.value);
            }}
            title={`${item.label} theme`}
            type="button"
          >
            <Icon className="size-4" aria-hidden />
            {compact ? <span className="text-xs font-semibold">{item.label}</span> : null}
            <span className="sr-only">{item.label} theme</span>
          </button>
        );
      })}
    </div>
  );
}
