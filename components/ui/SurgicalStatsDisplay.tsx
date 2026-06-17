import type { SurgicalStat } from "@/types";

interface SurgicalStatsDisplayProps {
  stats: SurgicalStat[];
  variant?: "compact" | "featured";
}

export function SurgicalStatsDisplay({
  stats,
  variant = "compact",
}: SurgicalStatsDisplayProps) {
  const isFeatured = variant === "featured";
  const columnClass =
    stats.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3";

  return (
    <dl
      className={`mx-auto grid max-w-3xl gap-6 ${
        isFeatured
          ? `${columnClass} sm:gap-8`
          : `grid-cols-1 ${columnClass} sm:gap-0 sm:divide-x sm:divide-border/60`
      }`}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={
            isFeatured
              ? "card-featured rounded-2xl p-7 text-center sm:p-8"
              : "px-4 text-center sm:px-8"
          }
        >
          <dt
            className={`font-display font-bold text-accent ${
              isFeatured
                ? "text-5xl sm:text-6xl lg:text-7xl"
                : "text-4xl sm:text-5xl lg:text-[3.25rem]"
            }`}
          >
            {stat.value}
          </dt>
          <dd
            className={`mt-2 font-medium text-primary ${
              isFeatured ? "text-sm sm:text-base" : "text-xs sm:text-sm"
            }`}
          >
            {stat.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}
