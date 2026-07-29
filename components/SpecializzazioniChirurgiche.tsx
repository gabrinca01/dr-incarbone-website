import { ClinicalAreaIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SURGICAL_SPECIALIZATIONS } from "@/lib/site-data";
import { textBody, textSubsection } from "@/lib/typography";

function spansFullWidth(condition: string) {
  return condition.length >= 24;
}

export function SpecializzazioniChirurgiche() {
  return (
    <section
      id="specializzazioni-chirurgiche"
      className="section-padding bg-background"
      aria-labelledby="specializzazioni-heading"
    >
      <div className="editorial-container">
        <div data-scroll-target className="section-heading-gap mx-auto max-w-2xl text-center">
          <SectionHeading
            id="specializzazioni-heading"
            eyebrow="Competenze operatorie"
            title="Aree di competenza"
            subtitle="Quattro aree di intervento che riflettono l'ampiezza e la profondità dell'esperienza clinica del Dr. Incarbone."
            align="center"
          />
        </div>

        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8">
          {SURGICAL_SPECIALIZATIONS.map((area) => (
            <article
              key={area.title}
              className="premium-card min-w-0 p-5 sm:p-8 md:p-9 lg:p-10"
            >
              <div className="mb-6 inline-flex rounded-xl bg-accent/[0.06] p-3.5">
                <ClinicalAreaIcon icon={area.icon} />
              </div>
              <h3 className={`${textSubsection} text-primary`}>
                {area.title}
              </h3>
              <ul className="mt-6 grid min-w-0 gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                {area.conditions.map((condition) => (
                  <li
                    key={condition}
                    className={`flex min-w-0 items-start gap-2.5 ${textBody} text-primary ${
                      spansFullWidth(condition) ? "sm:col-span-2" : ""
                    }`}
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span className="min-w-0 flex-1 [overflow-wrap:anywhere]">
                      {condition}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
