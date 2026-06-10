import { SectionHeading } from "@/components/ui/SectionHeading";
import { PUBLICATIONS } from "@/lib/site-data";

export function PubblicazioniSelezionate() {
  return (
    <section
      id="pubblicazioni"
      className="section-padding bg-surface"
      aria-labelledby="pubblicazioni-heading"
    >
      <div className="editorial-container">
        <SectionHeading
          id="pubblicazioni-heading"
          eyebrow="Ricerca scientifica"
          title="Pubblicazioni selezionate"
          subtitle="Contributi scientifici rappresentativi dell'attività di ricerca e dell'interesse clinico del Dr. Incarbone."
          className="section-heading-gap"
        />

        <ol className="max-w-3xl space-y-0 divide-y divide-border/70 border-y border-border/70">
          {PUBLICATIONS.map((pub, index) => (
            <li key={pub.title} className="group py-6 sm:py-7">
              <div className="flex gap-5 sm:gap-6">
                <span className="font-display mt-0.5 w-8 shrink-0 text-2xl font-semibold text-accent/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium leading-snug text-primary transition-colors group-hover:text-accent sm:text-xl">
                    {pub.title}
                  </h3>
                  {pub.context && (
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                      {pub.context}
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
