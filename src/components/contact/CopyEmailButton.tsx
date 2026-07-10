"use client";

import { Check, Copy } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

type CopyState = "idle" | "copied" | "failed";

export function CopyEmailButton({ email }: { email: string }) {
  const [state, setState] = useState<CopyState>("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function onCopy() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }

      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed");
    }

    timeoutRef.current = setTimeout(() => setState("idle"), 2400);
  }

  return (
    <div>
      <Button onClick={onCopy} type="button" variant="secondary">
        {state === "copied" ? (
          <Check className="size-4" aria-hidden />
        ) : (
          <Copy className="size-4" aria-hidden />
        )}
        {state === "copied" ? "Email Copied" : "Copy Email"}
      </Button>
      <p className="sr-only" role="status" aria-live="polite">
        {state === "copied"
          ? "Email address copied to clipboard."
          : state === "failed"
            ? "Email address could not be copied. Please copy it manually."
            : ""}
      </p>
    </div>
  );
}
