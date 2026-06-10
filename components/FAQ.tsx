import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ_ITEMS } from "@/lib/site-data";

export function FAQ() {
  return (
    <section
      id="faq"
      className="section-padding bg-surface"
      aria-labelledby="faq-heading"
    >
      <div className="editorial-container">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 xl:gap-20">
          <SectionHeading
            id="faq-heading"
            eyebrow="Domande frequenti"
            title="FAQ"
            subtitle="Risposte alle domande più comuni per aiutarti a preparare la tua consulenza specialistica."
          />
          <Accordion items={FAQ_ITEMS} />
        </div>
      </div>
    </section>
  );
}
