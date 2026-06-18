"use client";

import { CountUpNumber } from "@/components/ui/CountUpNumber";
import { CARD_HOVER } from "@/lib/card-classes";
import { textSmall, textStat, textStatCompact } from "@/lib/typography";
import type { SurgicalStat } from "@/types";

const SURGICAL_THEMES = [
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
] as const;

interface SurgicalStatsDisplayProps {
  stats: SurgicalStat[];
  variant?: "compact" | "featured";
}

export function SurgicalStatsDisplay({
  stats,
  variant = "compact",
}: SurgicalStatsDisplayProps) {
  const isFeatured = variant === "featured";
  const columnClass = stats.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3";

  if (isFeatured) {
    return (
      <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-accent/[0.05] via-white to-indigo-50/50 p-5 sm:p-7 lg:p-9">
        <dl className={`mx-auto grid max-w-4xl gap-5 ${columnClass} sm:gap-6`}>
          {stats.map((stat, index) => {
            const theme = SURGICAL_THEMES[index % SURGICAL_THEMES.length];

            return (
              <div
                key={stat.label}
                className={`stat-card relative overflow-hidden rounded-2xl border p-7 text-center sm:p-8 lg:p-10 ${theme.card} ${theme.glow} ${CARD_HOVER}`}
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
    );
  }

  return (
    <dl
      className={`mx-auto grid max-w-3xl gap-6 grid-cols-1 ${columnClass} sm:gap-0 sm:divide-x sm:divide-border/60`}
    >
      {stats.map((stat, index) => {
        const theme = SURGICAL_THEMES[index % SURGICAL_THEMES.length];

        return (
          <div key={stat.label} className="px-4 text-center sm:px-8">
            <dt className={`${textStatCompact} ${theme.number}`}>
              <CountUpNumber value={stat.value} delay={index * 200} />
            </dt>
            <dd className={`mt-2 ${textSmall} text-primary`}>
              {stat.label}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
