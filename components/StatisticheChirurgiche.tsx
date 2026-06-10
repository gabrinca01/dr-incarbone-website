import { SurgicalStatsDisplay } from "@/components/ui/SurgicalStatsDisplay";
import { SURGICAL_STATS } from "@/lib/site-data";

export function StatisticheChirurgiche() {
  return (
    <section
      aria-label="Statistiche chirurgiche"
      className="border-y border-border/50 bg-surface py-12 sm:py-14 lg:py-16"
    >
      <div className="editorial-container">
        <SurgicalStatsDisplay stats={SURGICAL_STATS} variant="compact" />
      </div>
    </section>
  );
}
