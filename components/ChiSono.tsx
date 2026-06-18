import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatsCounter } from "@/components/ui/StatsCounter";
import { SITE, STATS } from "@/lib/site-data";
import { textBody, textBodyLight, textLabel } from "@/lib/typography";

const credentials = [
  {
    title: "Esperienza operatoria",
    text: "Oltre 1330 interventi neurochirurgici complessivi e oltre 630 interventi da primo operatore.",
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
    text: "Consulenze e pianificazione chirurgica nelle aree cranica, spinale, vascolare e funzionale / neuromodulazione.",
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
          <div data-scroll-target>
            <SectionHeading
              id="chi-sono-heading"
              eyebrow="Profilo professionale"
              title="Chi è il Dr. Giorgio Incarbone"
              subtitle="Neurochirurgo con un profilo chirurgico ampio e documentato: cranica, spinale, vascolare, funzionale / neuromodulazione, con un approccio che unisce rigore scientifico e attenzione al rapporto con il paziente."
            />
          </div>

          <div className={`prose-narrow space-y-5 ${textBodyLight} text-muted`}>
            <p>
              Il Dr. Giorgio Incarbone è neurochirurgo specializzato
              nell&apos;inquadramento diagnostico e nel trattamento chirurgico
              delle patologie del sistema nervoso centrale e della colonna
              vertebrale. La sua attività clinica abbraccia la neurochirurgia
              cranica, spinale, vascolare e funzionale / neuromodulazione, con
              ulteriore esperienza nelle tecniche di neuromodulazione — VNS,
              SCS e infusore intratecale.
            </p>
            <p>
              Con oltre 1330 interventi neurochirurgici complessivi e oltre 630
              interventi da primo operatore, offre consulenze specialistiche a{" "}
              {SITE.locations.join(", ")}. Il paziente accede a una valutazione
              dedicata e costruisce insieme al medico il percorso terapeutico
              più appropriato.
            </p>

            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              {credentials.map((item) => (
                <div key={item.title} className="premium-card p-5 sm:p-6">
                  <h3 className={`${textLabel} text-accent`}>
                    {item.title}
                  </h3>
                  <p className={`mt-2 ${textBody} text-muted`}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <StatsCounter stats={STATS} />
      </div>
    </section>
  );
}
