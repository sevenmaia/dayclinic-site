"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterNumberProps {
  value: string;
  className?: string;
}

export const CounterNumber: React.FC<CounterNumberProps> = ({ value, className = "" }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [displayValue, setDisplayValue] = useState<string>(value);

  useEffect(() => {
    if (!isInView) return;

    // Detecta números como "+10", "+2.000", "100%"
    const match = value.match(/([+\D]*)([\d.,]+)([\D]*)/);
    if (!match) return;

    const prefix = match[1] || "";
    const rawNumberStr = match[2];
    const suffix = match[3] || "";

    const hasComma = rawNumberStr.includes(",");
    const hasDot = rawNumberStr.includes(".");
    const cleanNum = parseFloat(rawNumberStr.replace(/\./g, "").replace(",", "."));

    if (isNaN(cleanNum)) return;

    let start = 0;
    const duration = 1400; // ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing cubic easeOut
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (cleanNum - start) * easeOut);

      // Formata de volta
      let formatted = current.toString();
      if (hasDot || hasComma) {
        formatted = current.toLocaleString("pt-BR");
      }

      setDisplayValue(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};

export default CounterNumber;
