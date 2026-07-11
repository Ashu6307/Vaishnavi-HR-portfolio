"use client";

import { domAnimation, LazyMotion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";
import { motionEase } from "@/lib/motion";

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig
        reducedMotion="user"
        transition={{
          duration: 0.42,
          ease: motionEase
        }}
      >
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
