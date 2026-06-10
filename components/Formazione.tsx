import { SectionHeading } from "@/components/ui/SectionHeading";
import { EDUCATION_ITEMS } from "@/lib/site-data";

export function Formazione() {
  return (
    <section
      id="formazione"
      className="section-padding bg-background"
      aria-labelledby="formazione-heading"
    >
      <div className="editorial-container">
        <SectionHeading
          id="formazione-heading"
          eyebrow="Percorso accademico"
          title="Formazione"
          subtitle="Un percorso formativo di eccellenza che costituisce il fondamento della pratica clinica e scientifica."
          align="center"
          className="section-heading-gap"
        />

        <ol className="relative mx-auto max-w-2xl">
          {EDUCATION_ITEMS.map((item, index) => (
            <li
              key={`${item.institution}-${item.title}`}
              className="relative flex gap-5 pb-10 last:pb-0 sm:gap-6 sm:pb-12"
            >
              {index < EDUCATION_ITEMS.length - 1 && (
                <span
                  className="absolute left-5 top-11 h-[calc(100%-2.75rem)] w-px bg-border"
                  aria-hidden="true"
                />
              )}

              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-card">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              </div>

              <div className="premium-card flex-1 p-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {item.institution}
                </p>
                <h3 className="mt-2 font-display text-xl font-medium text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-muted">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
