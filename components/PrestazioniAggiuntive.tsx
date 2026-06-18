import { CheckIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CARD_HOVER, CARD_TEXT_HOVER, CARD_TITLE_HOVER } from "@/lib/card-classes";
import { ADDITIONAL_SERVICES } from "@/lib/site-data";
import { textBody, textCardTitle } from "@/lib/typography";

export function PrestazioniAggiuntive() {
  return (
    <section
      id="prestazioni-aggiuntive"
      className="section-padding bg-background"
      aria-labelledby="prestazioni-aggiuntive-heading"
    >
      <div className="editorial-container">
        <SectionHeading
          id="prestazioni-aggiuntive-heading"
          eyebrow="Servizi offerti"
          title="Prestazioni aggiuntive"
          subtitle="Servizi complementari alle aree chirurgiche principali, per un supporto clinico mirato e personalizzato."
          align="center"
          className="section-heading-gap mx-auto"
        />

        <div className="mx-auto grid max-w-4xl gap-5 overflow-visible p-1 sm:grid-cols-2 sm:gap-6">
          {ADDITIONAL_SERVICES.map((service, index) => (
            <article
              key={service.title}
              className={`p-6 sm:p-7 lg:p-8 ${CARD_HOVER} ${
                index === 0 ? "card-featured rounded-2xl" : "premium-card"
              }`}
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/[0.08] text-accent">
                <CheckIcon className="h-4 w-4" />
              </div>
              <h3
                className={`${textCardTitle} text-primary ${CARD_TITLE_HOVER}`}
              >
                {service.title}
              </h3>
              <p
                className={`prose-tight mt-3 ${textBody} text-muted ${CARD_TEXT_HOVER}`}
              >                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
