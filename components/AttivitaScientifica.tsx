import { ScientificIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SCIENTIFIC_ACTIVITIES } from "@/lib/site-data";

export function AttivitaScientifica() {
  return (
    <section
      id="attivita-scientifica"
      className="section-padding bg-card"
      aria-labelledby="scientifica-heading"
    >
      <div className="editorial-container">
        <SectionHeading
          id="scientifica-heading"
          eyebrow="Ricerca e formazione"
          title="Attività scientifica"
          subtitle="Un impegno costante nella ricerca, nella divulgazione scientifica e nell'aggiornamento professionale continuo."
          align="center"
          className="section-heading-gap"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {SCIENTIFIC_ACTIVITIES.map((activity) => (
            <article key={activity.title} className="premium-card group p-7 sm:p-8">
              <div className="mb-5 inline-flex rounded-xl bg-accent/[0.06] p-3">
                <ScientificIcon icon={activity.icon} />
              </div>
              <h3 className="font-display text-xl font-medium text-primary">
                {activity.title}
              </h3>
              <p className="prose-tight mt-3 text-sm leading-[1.7] text-muted sm:text-[15px]">
                {activity.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
