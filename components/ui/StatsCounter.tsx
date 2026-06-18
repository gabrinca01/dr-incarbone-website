"use client";

import { CountUpNumber } from "@/components/ui/CountUpNumber";
import { textSmall, textStat } from "@/lib/typography";
import type { StatItem } from "@/types";

const STAT_THEMES = [
  {
    bar: "bg-gradient-to-r from-accent to-accent-light",
    glow: "shadow-[0_10px_44px_-10px_rgba(30,64,175,0.38)]",
    number: "text-accent",
    card: "border-accent/20 bg-gradient-to-br from-accent/[0.09] via-white to-white",
  },
  {
    bar: "bg-gradient-to-r from-indigo-600 to-violet-500",
    glow: "shadow-[0_10px_44px_-10px_rgba(79,70,229,0.34)]",
    number: "text-indigo-600",
    card: "border-indigo-200/70 bg-gradient-to-br from-indigo-50/90 via-white to-white",
  },
  {
    bar: "bg-gradient-to-r from-teal-600 to-cyan-500",
    glow: "shadow-[0_10px_44px_-10px_rgba(13,148,136,0.34)]",
    number: "text-teal-600",
    card: "border-teal-200/70 bg-gradient-to-br from-teal-50/90 via-white to-white",
  },
] as const;

interface StatsCounterProps {
  stats: StatItem[];
}

export function StatsCounter({ stats }: StatsCounterProps) {
  return (
    <div className="mt-16 lg:mt-20">
      <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-accent/[0.05] via-white to-indigo-50/50 p-5 sm:p-7 lg:p-9">
        <dl className="grid gap-5 sm:grid-cols-3 sm:gap-6">
          {stats.map((stat, index) => {
            const theme = STAT_THEMES[index % STAT_THEMES.length];

            return (
              <div
                key={stat.label}
                className={`stat-card relative overflow-hidden rounded-2xl border p-7 text-center sm:p-8 ${theme.card} ${theme.glow}`}
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 ${theme.bar}`} />
                <dt className={`${textStat} ${theme.number}`}>
                  <CountUpNumber value={stat.value} delay={index * 200} />
                </dt>
                <dd className={`mt-3 ${textSmall} text-primary`}>
                  {stat.label}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
