import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE, STATS } from "@/lib/site-data";

const credentials = [
  {
    title: "Esperienza operatoria",
    text: "Oltre 946 interventi neurochirurgici, con ruolo di primo operatore in più di 424 procedure e secondo operatore in oltre 522 interventi.",
  },
  {
    title: "Formazione",
    text: "Laurea con lode alla Sapienza di Roma e specializzazione in Neurochirurgia con il massimo dei voti all'Università di Pavia.",
  },
  {
    title: "Ricerca",
    text: "Pubblicazioni scientifiche su aneurismi cerebrali, neuromodulazione, dolore viscerale e patologia spinale.",
  },
  {
    title: "Attività specialistica",
    text: "Consulenze e pianificazione chirurgica nelle aree cranica, spinale, vascolare e funzionale, con particolare competenza in neuromodulazione.",
  },
];

export function ChiSono() {
  return (
    <section
      id="chi-sono"
      className="section-padding bg-card"
      aria-labelledby="chi-sono-heading"
    >
      <div className="editorial-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <SectionHeading
            id="chi-sono-heading"
            eyebrow="Profilo professionale"
            title="Chi è il Dr. Giorgio Incarbone"
            subtitle="Neurochirurgo con un profilo chirurgico ampio e documentato: cranica, spinale, vascolare, funzionale e neuromodulazione, con un approccio che unisce rigore scientifico e attenzione al rapporto con il paziente."
          />

          <div className="prose-narrow space-y-5 text-base leading-[1.75] text-muted sm:text-[17px]">
            <p>
              Il Dr. Giorgio Incarbone è neurochirurgo specializzato
              nell&apos;inquadramento diagnostico e nel trattamento chirurgico
              delle patologie del sistema nervoso centrale e periferico. La sua
              pratica clinica abbraccia la neurochirurgia cranica, spinale,
              vascolare e funzionale, con particolare competenza nelle tecniche
              di neuromodulazione avanzata — DBS, VNS e SCS.
            </p>
            <p>
              Con oltre 946 interventi neurochirurgici alle spalle e consulenze
              disponibili a {SITE.locations.join(" e ")}, offre un ambiente di
              pratica privata in cui il paziente accede direttamente a una
              valutazione specialistica e costruisce insieme al medico il
              percorso terapeutico più appropriato.
            </p>

            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              {credentials.map((item) => (
                <div key={item.title} className="premium-card p-5 sm:p-6">
                  <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.7] text-muted">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <dl className="mt-16 grid gap-8 border-t border-border/60 pt-12 sm:grid-cols-3 sm:gap-10 lg:mt-20 lg:pt-16">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <dt className="font-display text-4xl font-semibold text-primary lg:text-5xl">
                {stat.value}
              </dt>
              <dd className="mt-2 text-sm text-muted sm:text-base">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
