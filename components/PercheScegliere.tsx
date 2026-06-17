import { CheckIcon } from "@/components/ui/Icons";
import { WHY_CHOOSE_ITEMS } from "@/lib/site-data";

export function PercheScegliere() {
  return (
    <section
      className="section-padding bg-card"
      aria-labelledby="perche-scegliere-heading"
    >
      <div className="editorial-container">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow-rule text-[10px] font-bold uppercase tracking-[0.24em] text-accent">
            Il valore della cura
          </p>
          <h2
            id="perche-scegliere-heading"
            className="font-display mt-4 text-3xl font-bold text-primary sm:text-4xl"
          >
            Perché scegliere il Dr. Incarbone
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <article
              key={item.title}
              className={`p-6 sm:p-7 ${index === 0 ? "card-featured rounded-2xl" : "premium-card"}`}
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/[0.08] text-accent">
                <CheckIcon className="h-4 w-4" />
              </div>
              <h3 className="font-display text-xl font-medium text-primary">
                {item.title}
              </h3>
              <p className="prose-tight mt-3 text-sm leading-[1.7] text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
