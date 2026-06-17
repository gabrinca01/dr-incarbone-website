import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { LocationIcon } from "@/components/ui/Icons";
import { SITE } from "@/lib/site-data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-card"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute -right-48 top-10 h-[520px] w-[520px] rounded-full bg-accent/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/[0.02] blur-3xl" />

      <div className="editorial-container relative grid items-center gap-12 pb-20 pt-10 sm:gap-14 sm:pb-24 sm:pt-14 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,0.68fr)] lg:items-center lg:gap-10 lg:pb-28 lg:pt-16 xl:grid-cols-[minmax(0,1.28fr)_minmax(0,0.62fr)] xl:gap-16">
        <div className="animate-fade-up order-2 lg:order-1 lg:pr-6 xl:pr-12">
          <Badge>Neurochirurgo</Badge>

          <h1
            id="hero-heading"
            className="mt-7 max-w-[14ch] text-[2.59rem] font-medium leading-[1.08] tracking-[-0.02em] text-primary sm:text-[2.9rem] lg:text-[3.45rem] xl:text-[4rem]"
          >
            {SITE.name}
          </h1>

          <p className="prose-narrow mt-5 text-2xl font-medium leading-snug text-secondary sm:text-3xl">
            {SITE.tagline}
          </p>

          <p className="prose-tight mt-6 text-base leading-[1.75] text-muted sm:text-lg">
            {SITE.description}
          </p>

          <ul className="mt-7 flex flex-wrap gap-2.5">
            {SITE.specializations.map((spec) => (
              <li
                key={spec}
                className="rounded-full border border-border/80 bg-surface px-4 py-2 text-xs font-medium tracking-wide text-primary sm:text-[13px]"
              >
                {spec}
              </li>
            ))}
          </ul>

          <div className="prose-tight mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contatti" size="lg">
              Richiedi una consulenza
            </Button>
            <Button href="#specializzazioni-chirurgiche" variant="secondary" size="lg">
              Scopri le aree di competenza
            </Button>
          </div>

          <div className="mt-11">
            <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
              Sedi di consulenza
            </p>
            <a
              href="#sedi-consulenza"
              className="inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-surface px-4 py-2 shadow-card transition-colors duration-300 hover:border-accent/25 hover:text-accent"
            >
              <LocationIcon className="h-3.5 w-3.5 shrink-0 text-accent" />
              <span className="whitespace-nowrap text-sm font-medium text-primary">
                {SITE.locationsLabel}
              </span>
            </a>
          </div>
        </div>

        <div className="animate-fade-up-delay-2 relative order-1 lg:order-2 lg:justify-self-end">
          <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:mx-0 lg:max-w-[360px] xl:max-w-[380px] xl:translate-x-6">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-bl from-accent/[0.07] via-transparent to-primary/[0.04]" />
            <div className="relative overflow-hidden rounded-[1.625rem] bg-secondary shadow-premium ring-1 ring-border/40">
              <Image
                src="/doctor-hero.png"
                alt="Dr. Giorgio Incarbone, neurochirurgo"
                width={380}
                height={475}
                priority
                unoptimized
                className="aspect-[4/5] h-auto w-full object-cover object-[center_15%]"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 380px"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
