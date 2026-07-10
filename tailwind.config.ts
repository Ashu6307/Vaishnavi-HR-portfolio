import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        elevated: "rgb(var(--color-elevated) / <alpha-value>)",
        ink: "rgb(var(--color-text) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        subtle: "rgb(var(--color-subtle) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        sage: "rgb(var(--color-sage) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        strong: "rgb(var(--color-strong-border) / <alpha-value>)"
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgb(31 28 24 / 0.10)",
        darkSoft: "0 24px 80px rgb(0 0 0 / 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
