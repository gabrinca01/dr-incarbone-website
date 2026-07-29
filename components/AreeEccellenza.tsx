import { CheckIcon } from "@/components/ui/Icons";
import { CARD_HOVER } from "@/lib/card-classes";
import { EXCELLENCE_ITEMS } from "@/lib/site-data";
import { textBody, textBodyLarge, textLabel, textSectionTitle } from "@/lib/typography";
export function AreeEccellenza() {
  return (
    <section
      id="eccellenza"
      className="border-b border-border/50 bg-surface py-16 sm:py-20 lg:py-24"
      aria-labelledby="eccellenza-heading"
    >
      <div className="editorial-container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-md shrink-0">
            <p className={`eyebrow-rule ${textLabel} text-accent`}>
              Profilo chirurgico
            </p>
            <h2
              id="eccellenza-heading"
              className={`mt-4 ${textSectionTitle} text-primary`}
            >
              Aree di interesse
            </h2>
            <p className={`prose-tight mt-4 ${textBodyLarge} text-muted`}>              Neurochirurgia cranica, spinale, funzionale / neuromodulatoria e
              vascolare — un profilo clinico completo e strutturato.
            </p>
          </div>

          <ul className="grid flex-1 gap-3 overflow-visible p-1 sm:grid-cols-2 lg:max-w-3xl lg:gap-4">
            {EXCELLENCE_ITEMS.map((item) => (
              <li
                key={item.label}
                className={`flex items-center gap-4 rounded-xl border px-5 py-4 sm:px-6 sm:py-5 ${CARD_HOVER} ${
                  item.featured
                    ? "card-featured border-accent/20"
                    : "premium-card border-border/80"
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                    item.featured
                      ? "bg-accent text-white shadow-card"
                      : "bg-accent/[0.08] text-accent"
                  }`}
                >
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className={`${textBody} text-primary`}>                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
