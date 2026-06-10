import { CategoryTabs } from "@/components/ui/CategoryTabs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PATHOLOGY_CATEGORIES } from "@/lib/site-data";

export function PatologieTrattate() {
  return (
    <section
      id="patologie-trattate"
      className="section-padding bg-surface"
      aria-labelledby="patologie-heading"
    >
      <div className="editorial-container">
        <SectionHeading
          id="patologie-heading"
          eyebrow="Ambito clinico"
          title="Patologie trattate"
          subtitle="Un panorama completo delle patologie affrontate, organizzate per area di competenza neurochirurgica."
          align="center"
          className="section-heading-gap"
        />

        <CategoryTabs categories={PATHOLOGY_CATEGORIES} />
      </div>
    </section>
  );
}
