import { ScientificIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CARD_HOVER, CARD_TEXT_HOVER, CARD_TITLE_HOVER } from "@/lib/card-classes";
import { SCIENTIFIC_ACTIVITIES } from "@/lib/site-data";
import { textBody, textCardTitle } from "@/lib/typography";

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

        <div className="grid gap-5 overflow-visible p-1 sm:grid-cols-2 lg:gap-6">
          {SCIENTIFIC_ACTIVITIES.map((activity) => (
            <article key={activity.title} className={`premium-card p-7 sm:p-8 ${CARD_HOVER}`}>
              <div className="mb-5 inline-flex rounded-xl bg-accent/[0.06] p-3">
                <ScientificIcon icon={activity.icon} />
              </div>
              <h3
                className={`${textCardTitle} text-primary ${CARD_TITLE_HOVER}`}
              >
                {activity.title}
              </h3>
              <p
                className={`prose-tight mt-3 ${textBody} text-muted ${CARD_TEXT_HOVER}`}
              >
                {activity.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
