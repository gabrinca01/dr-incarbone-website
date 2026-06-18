import { SectionHeading } from "@/components/ui/SectionHeading";
import { NEUROMODULATION_TECHNIQUES } from "@/lib/site-data";
import { textBody, textCardTitle, textSmall, textStat } from "@/lib/typography";

export function Neuromodulazione() {
  return (
    <section
      id="neuromodulazione"
      className="section-padding relative overflow-hidden border-y border-border/50 bg-primary text-white"
      aria-labelledby="neuromodulazione-heading"
    >
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/[0.03] blur-3xl" />

      <div className="editorial-container relative">
        <SectionHeading
          id="neuromodulazione-heading"
          eyebrow="Specializzazione distintiva"
          title="Neuromodulazione"
          subtitle="Tecniche di modulazione del sistema nervoso per il trattamento di patologie neurologiche e del dolore cronico refrattario."
          align="center"
          variant="dark"
          className="section-heading-gap"
        />

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {NEUROMODULATION_TECHNIQUES.map((technique) => (
            <article
              key={technique.acronym}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors duration-500 hover:border-accent/40 hover:bg-white/[0.07] sm:p-8"
            >
              <p className={`${textStat} text-accent-light`}>
                {technique.acronym}
              </p>
              <h3 className={`mt-4 ${textCardTitle} text-white`}>
                {technique.title}
              </h3>
              <p className={`mt-4 ${textBody} text-white/65`}>
                {technique.description}
              </p>
              {technique.applications && technique.applications.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {technique.applications.map((application) => (
                    <li
                      key={application}
                      className={`rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 ${textSmall} text-white/75`}
                    >
                      {application}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
