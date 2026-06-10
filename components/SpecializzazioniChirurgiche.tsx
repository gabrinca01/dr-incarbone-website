import { ClinicalAreaIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SURGICAL_SPECIALIZATIONS } from "@/lib/site-data";

export function SpecializzazioniChirurgiche() {
  return (
    <section
      id="specializzazioni-chirurgiche"
      className="section-padding bg-background"
      aria-labelledby="specializzazioni-heading"
    >
      <div className="editorial-container">
        <SectionHeading
          id="specializzazioni-heading"
          eyebrow="Competenze operatorie"
          title="Specializzazioni chirurgiche"
          subtitle="Quattro aree di intervento che riflettono l'ampiezza e la profondità dell'esperienza clinica del Dr. Incarbone."
          align="center"
          className="section-heading-gap"
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {SURGICAL_SPECIALIZATIONS.map((area) => (
            <article
              key={area.title}
              className="premium-card p-8 sm:p-9 lg:p-10"
            >
              <div className="mb-6 inline-flex rounded-xl bg-accent/[0.06] p-3.5">
                <ClinicalAreaIcon icon={area.icon} />
              </div>
              <h3 className="font-display text-2xl font-medium text-primary sm:text-3xl">
                {area.title}
              </h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {area.conditions.map((condition) => (
                  <li
                    key={condition}
                    className="flex items-center gap-2.5 text-sm text-primary sm:text-[15px]"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {condition}
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
