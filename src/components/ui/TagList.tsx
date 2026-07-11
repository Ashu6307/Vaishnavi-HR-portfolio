"use client";

import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { useCallback, useId, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const chipClassName =
  "inline-flex min-h-7 shrink-0 items-center rounded-full border border-border bg-elevated px-3 py-1 text-[0.8125rem] font-semibold leading-snug text-muted";

export function TagList({
  items,
  limit,
  label = "skills"
}: {
  items: string[];
  limit?: number;
  label?: string;
}) {
  const generatedId = useId();
  const controlledRegionId = `${generatedId}-tags`;
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const measureToggleRef = useRef<HTMLButtonElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [measuredVisibleIndices, setMeasuredVisibleIndices] = useState<number[] | null>(null);
  const hasLimit = typeof limit === "number" && limit >= 0;
  const visibleLimit = hasLimit ? limit : items.length;
  const baseHiddenCount = Math.max(items.length - visibleLimit, 0);
  const shouldShowToggle = baseHiddenCount > 0;
  const collapsedVisibleIndices =
    shouldShowToggle && !expanded
      ? (measuredVisibleIndices ?? items.slice(0, visibleLimit).map((_, index) => index))
      : items.map((_, index) => index);
  const visibleItems = collapsedVisibleIndices.map((itemIndex) => ({
    item: items[itemIndex],
    originalIndex: itemIndex
  }));
  const hiddenCount =
    shouldShowToggle && !expanded ? Math.max(items.length - collapsedVisibleIndices.length, 0) : baseHiddenCount;

  const measureCollapsedRow = useCallback(() => {
    if (!shouldShowToggle || expanded) {
      setMeasuredVisibleIndices(null);
      return;
    }

    const container = containerRef.current;
    const measure = measureRef.current;
    const toggle = measureToggleRef.current;
    if (!container || !measure || !toggle) return;

    const containerWidth = container.clientWidth;
    if (containerWidth <= 0) return;

    const styles = window.getComputedStyle(measure);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "8") || 8;
    const chipElements = Array.from(measure.querySelectorAll<HTMLElement>("[data-chip-measure]"));
    const maxVisible = Math.min(visibleLimit, items.length);
    const toggleWidth = toggle.getBoundingClientRect().width;
    let usedWidth = toggleWidth;
    const selectedIndices: number[] = [];
    const measuredChips = chipElements
      .map((chip, index) => ({
        index,
        width: chip.getBoundingClientRect().width
      }))
      .sort((a, b) => a.width - b.width || a.index - b.index);

    for (const chip of measuredChips) {
      if (selectedIndices.length >= maxVisible) break;
      const nextWidth = usedWidth + gap + chip.width;
      if (nextWidth > containerWidth) break;
      usedWidth = nextWidth;
      selectedIndices.push(chip.index);
    }

    setMeasuredVisibleIndices(selectedIndices.sort((a, b) => a - b));
  }, [expanded, items.length, shouldShowToggle, visibleLimit]);

  useLayoutEffect(() => {
    let frame = window.requestAnimationFrame(measureCollapsedRow);
    const scheduleMeasure = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(measureCollapsedRow);
    };

    const container = containerRef.current;
    if (!container || typeof ResizeObserver === "undefined") {
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new ResizeObserver(scheduleMeasure);
    observer.observe(container);

    document.fonts?.ready.then(scheduleMeasure).catch(() => undefined);
    window.addEventListener("resize", scheduleMeasure);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", scheduleMeasure);
    };
  }, [measureCollapsedRow]);

  function renderChip(item: string, index: number, originalIndex: number) {
    const isExtra = shouldShowToggle && originalIndex >= visibleLimit;

    return (
      <m.span
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className={chipClassName}
        exit={{ opacity: 0, scale: 0.98, y: 2 }}
        initial={isExtra ? { opacity: 0, scale: 0.97, y: 5 } : false}
        key={`${item}-${originalIndex}`}
        transition={{ delay: isExtra ? Math.min(Math.max(index - visibleLimit, 0) * 0.035, 0.18) : 0, duration: 0.18 }}
      >
        {item}
      </m.span>
    );
  }

  return (
    <div
      className={cn("tag-list relative flex items-center gap-2", shouldShowToggle && !expanded ? "flex-nowrap overflow-hidden" : "flex-wrap")}
      id={controlledRegionId}
      ref={containerRef}
    >
      <AnimatePresence initial={false}>
        {visibleItems.map(({ item, originalIndex }, index) => renderChip(item, index, originalIndex))}
      </AnimatePresence>
      {shouldShowToggle ? (
        <button
          aria-controls={controlledRegionId}
          aria-expanded={expanded}
          aria-label={expanded ? `Show fewer ${label}` : `Show ${hiddenCount} more ${label}`}
          className="tag-list__toggle shrink-0"
          onClick={() => setExpanded((value) => !value)}
          type="button"
        >
          {expanded ? "Show less" : `+${hiddenCount} more`}
        </button>
      ) : null}
      {shouldShowToggle ? (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed -left-[9999px] top-0 flex max-w-none items-center gap-2 opacity-0"
          ref={measureRef}
        >
          {items.map((item, index) => (
            <span className={chipClassName} data-chip-measure key={`${item}-${index}-measure`}>
              {item}
            </span>
          ))}
          <button className="tag-list__toggle shrink-0" ref={measureToggleRef} tabIndex={-1} type="button">
            +{items.length} more
          </button>
        </div>
      ) : null}
    </div>
  );
}
