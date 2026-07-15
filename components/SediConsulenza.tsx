import { Button } from "@/components/ui/Button";
import { LocationIcon, PhoneIcon } from "@/components/ui/Icons";
import { LocationsMapToggle } from "@/components/ui/LocationsMapToggle";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONSULTATION_BOOKING_INFO, CONSULTATION_LOCATIONS, SITE } from "@/lib/site-data";
import { textBody, textCardTitle, textLabel, textSmall } from "@/lib/typography";

export function SediConsulenza() {
  return (
    <section
      id="sedi-consulenza"
      className="section-padding border-b border-border/50 bg-surface"
      aria-labelledby="sedi-consulenza-heading"
    >
      <div className="editorial-container">
        <SectionHeading
          id="sedi-consulenza-heading"
          eyebrow="Dove trovarmi"
          title="Sedi di consulenza"
          subtitle="Prenota una consulenza neurochirurgica presso le strutture convenzionate, l'ospedale di Novara e i portali ufficiali di prenotazione."
          align="center"
          className="section-heading-gap mx-auto max-w-2xl"
        />

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {CONSULTATION_LOCATIONS.map((location) => {
            const bookingHref =
              location.bookingUrl ??
              location.bookingPhoneHref ??
              SITE.phoneHref;
            const bookingLabel =
              location.bookingButtonLabel ??
              location.bookingPhone ??
              SITE.phone;
            const isExternalBooking = Boolean(location.bookingUrl);

            return (
              <article
                key={location.id}
                className="premium-card flex h-full flex-col p-5 sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/[0.08] text-accent">
                    <LocationIcon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className={`${textCardTitle} text-primary`}>
                      {location.city}
                    </h3>
                    {!location.confirmed && (
                      <p className={`mt-1 ${textLabel} text-accent`}>
                        In aggiornamento
                      </p>
                    )}
                  </div>
                </div>

                <p className={`mt-4 ${textBody} text-muted`}>
                  {location.institutionName ??
                    "Struttura e indirizzo in definizione."}
                </p>

                {location.address && (
                  <p className="mt-2 text-muted">
                    {location.address}
                  </p>
                )}

                <div className="mt-auto border-t border-border/70 pt-4">
                  {location.websiteUrl &&
                    location.websiteUrl !== location.bookingUrl && (
                    <a
                      href={location.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mb-4 inline-flex ${textSmall} text-accent transition-colors hover:text-accent-hover`}
                    >
                      {location.websiteLabel ?? "Sito della struttura"}
                    </a>
                  )}

                  <p className={`${textLabel} text-primary`}>
                    Prenotazione
                  </p>
                  <a
                    href={bookingHref}
                    target={isExternalBooking ? "_blank" : undefined}
                    rel={isExternalBooking ? "noopener noreferrer" : undefined}
                    className={`mt-2 inline-flex items-center gap-2 ${textBody} text-primary transition-colors hover:text-accent`}
                  >
                    {!isExternalBooking && (
                      <PhoneIcon className="h-4 w-4 text-accent" />
                    )}
                    {bookingLabel}
                  </a>

                  {location.bookingNote && (
                    <p className={`mt-2 ${textBody} text-muted`}>
                      {location.bookingNote}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <p className={`mx-auto mt-8 max-w-3xl text-center ${textBody} text-muted`}>
          {CONSULTATION_BOOKING_INFO}
        </p>

        <LocationsMapToggle locations={CONSULTATION_LOCATIONS} />

        <div className="mt-10 text-center">
          <p className={`mx-auto max-w-xl ${textBody} text-muted`}>
            Per una richiesta immediata puoi usare il modulo contatti o scrivere a{" "}
            <a
              href={SITE.emailHref}
              className="text-accent transition-colors hover:text-accent-hover"
            >
              {SITE.email}
            </a>
            .
          </p>
          <div className="mt-5">
            <Button href="#contatti" variant="secondary" size="sm">
              Vai ai contatti
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
