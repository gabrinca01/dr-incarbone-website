import { CheckIcon } from "@/components/ui/Icons";
import { EXCELLENCE_ITEMS } from "@/lib/site-data";

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
            <p className="eyebrow-rule text-[10px] font-light uppercase tracking-[0.24em] text-accent">
              Profilo chirurgico
            </p>
            <h2
              id="eccellenza-heading"
              className="font-display mt-4 text-3xl font-semibold leading-[1.12] text-primary sm:text-4xl"
            >
              Aree di eccellenza
            </h2>
            <p className="prose-tight mt-4 text-base leading-[1.75] text-muted">
              Neurochirurgia cranica, spinale, funzionale, vascolare e
              neuromodulazione avanzata — un profilo clinico completo e
              strutturato.
            </p>
          </div>

          <ul className="grid flex-1 gap-3 sm:grid-cols-2 lg:max-w-3xl lg:gap-4">
            {EXCELLENCE_ITEMS.map((item) => (
              <li
                key={item.label}
                className={`flex items-center gap-4 rounded-xl border px-5 py-4 sm:px-6 sm:py-5 ${
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
                <span className="text-sm font-medium leading-snug text-primary sm:text-[15px]">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
