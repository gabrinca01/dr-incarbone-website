import { SectionHeading } from "@/components/ui/SectionHeading";
import { TIMELINE_STEPS } from "@/lib/site-data";

export function PercorsoPaziente() {
  return (
    <section
      id="percorso"
      className="section-padding bg-card"
      aria-labelledby="percorso-heading"
    >
      <div className="editorial-container">
        <SectionHeading
          id="percorso-heading"
          eyebrow="Il tuo percorso"
          title="Percorso del paziente"
          subtitle="Un percorso strutturato e trasparente, dalla prima consulenza al follow-up specialistico."
          align="center"
          className="section-heading-gap"
        />

        <ol className="relative mx-auto max-w-2xl">
          {TIMELINE_STEPS.map((step, index) => (
            <li
              key={step.step}
              className="relative flex gap-5 pb-10 last:pb-0 sm:gap-6 sm:pb-12"
            >
              {index < TIMELINE_STEPS.length - 1 && (
                <span
                  className="absolute left-5 top-11 h-[calc(100%-2.75rem)] w-px bg-border"
                  aria-hidden="true"
                />
              )}

              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-card font-display text-base font-bold text-accent shadow-card">
                {step.step}
              </div>

              <div className="premium-card flex-1 p-5 sm:p-6">
                <h3 className="font-display text-lg font-medium text-primary sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.7] text-muted sm:text-[15px]">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
