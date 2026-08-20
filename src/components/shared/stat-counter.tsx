"use client";

import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  value: number;
  suffix?: string;
  className?: string;
};

const DURATION_MS = 1600;
const EASE_OUT_EXPO = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export function StatCounter({ value, suffix = "", className }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const runCountUp = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      const startTime = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / DURATION_MS);
        setDisplay(Math.round(value * EASE_OUT_EXPO(progress)));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          runCountUp();
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}
