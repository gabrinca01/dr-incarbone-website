"use client";

import { useEffect, useRef, useState } from "react";

function parseStatValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  return match
    ? { target: Number(match[1]), suffix: match[2] }
    : { target: 0, suffix: value };
}

function easeOutCubic(progress: number) {
  return 1 - (1 - progress) ** 3;
}

interface CountUpNumberProps {
  value: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export function CountUpNumber({
  value,
  duration = 2200,
  delay = 0,
  className,
}: CountUpNumberProps) {
  const { target, suffix } = parseStatValue(value);
  const [display, setDisplay] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setDisplay(0);
      return;
    }

    let frame = 0;
    let startTime: number | null = null;
    let cancelled = false;

    const timeout = window.setTimeout(() => {
      const animate = (timestamp: number) => {
        if (cancelled) return;

        if (startTime === null) startTime = timestamp;

        const progress = Math.min((timestamp - startTime) / duration, 1);
        setDisplay(Math.round(easeOutCubic(progress) * target));

        if (progress < 1) {
          frame = requestAnimationFrame(animate);
        } else {
          setDisplay(target);
        }
      };

      frame = requestAnimationFrame(animate);
    }, delay);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [isVisible, target, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
