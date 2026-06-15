import { SurgicalStatsDisplay } from "@/components/ui/SurgicalStatsDisplay";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SURGICAL_STATS } from "@/lib/site-data";

export function EsperienzaOperatoria() {
  return (
    <section
      id="esperienza-operatoria"
      className="section-padding bg-card"
      aria-labelledby="esperienza-heading"
    >
      <div className="editorial-container">
        <SectionHeading
          id="esperienza-heading"
          eyebrow="Credibilità clinica"
          title="Esperienza chirurgica"
          subtitle="Un volume chirurgico significativo che testimonia l'esperienza maturata nelle principali aree della neurochirurgia."
          align="center"
          className="section-heading-gap"
        />

        <SurgicalStatsDisplay stats={SURGICAL_STATS} variant="featured" />

        <p className="prose-narrow mx-auto mt-10 text-center text-base leading-[1.75] text-muted sm:mt-12 sm:text-lg">
          Il Dr. Incarbone ha partecipato a oltre 1330 interventi neurochirurgici
          complessivi, assumendo il ruolo di primo operatore in più di 630
          procedure. Questa esperienza documentata copre la neurochirurgia
          cranica, spinale, vascolare e funzionale / neuromodulazione,
          confermando un profilo chirurgico ampio e strutturato.
        </p>
      </div>
    </section>
  );
}
