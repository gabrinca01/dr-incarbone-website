import { CheckIcon } from "@/components/ui/Icons";
import { CARD_HOVER, CARD_TEXT_HOVER, CARD_TITLE_HOVER } from "@/lib/card-classes";
import { WHY_CHOOSE_ITEMS } from "@/lib/site-data";
import { textBody, textCardTitle, textLabel, textSectionTitle } from "@/lib/typography";

export function PercheScegliere() {
  return (
    <section
      className="section-padding bg-card"
      aria-labelledby="perche-scegliere-heading"
    >
      <div className="editorial-container">
        <div className="mb-12 max-w-2xl">
          <p className={`eyebrow-rule ${textLabel} text-accent`}>
            Il valore della cura
          </p>
          <h2
            id="perche-scegliere-heading"
            className={`mt-4 ${textSectionTitle} text-primary`}
          >
            Perché scegliere il Dr. Incarbone
          </h2>
        </div>

        <div className="grid gap-5 overflow-visible p-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <article
              key={item.title}
              className={`p-6 sm:p-7 ${CARD_HOVER} ${index === 0 ? "card-featured rounded-2xl" : "premium-card"}`}
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/[0.08] text-accent">
                <CheckIcon className="h-4 w-4" />
              </div>
              <h3
                className={`${textCardTitle} text-primary ${CARD_TITLE_HOVER}`}
              >
                {item.title}
              </h3>
              <p
                className={`prose-tight mt-3 ${textBody} text-muted ${CARD_TEXT_HOVER}`}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
