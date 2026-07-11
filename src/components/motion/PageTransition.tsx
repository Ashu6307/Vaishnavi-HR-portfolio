"use client";

import { usePathname } from "next/navigation";
import * as m from "motion/react-m";
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <m.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 8 }}
      key={pathname}
      transition={{ duration: 0.36 }}
    >
      {children}
    </m.div>
  );
}
