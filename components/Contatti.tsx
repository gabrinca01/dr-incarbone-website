"use client";

import { FormEvent, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { EmailIcon, LocationIcon, PhoneIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hasValidationErrors, validateContactForm } from "@/lib/contact-validation";
import { SITE } from "@/lib/site-data";
import { textBody, textBodyLarge, textLabel, textSmall } from "@/lib/typography";
import type { ContactFormData, ContactFormErrors } from "@/types";

const initialFormData: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  reason: "",
  message: "",
};

const inputClass =
  `mt-2.5 w-full rounded-xl border border-border/80 bg-surface px-4 py-3.5 ${textBody} text-primary transition-all duration-300 placeholder:text-muted/50 focus:border-accent/40 focus:bg-card focus:outline-none focus:ring-4 focus:ring-accent/[0.08]`;

export function Contatti() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formLoadedAtRef = useRef(0);
  const [honeypot, setHoneypot] = useState("");

  const setFormRef = (node: HTMLFormElement | null) => {
    if (node && formLoadedAtRef.current === 0) {
      formLoadedAtRef.current = Date.now();
    }
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(false);
    setSubmitError(null);

    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);

    if (hasValidationErrors(validationErrors)) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          website: honeypot,
          formLoadedAt: formLoadedAtRef.current,
        }),
      });

      const result = (await response.json()) as { error?: string; details?: ContactFormErrors };

      if (!response.ok) {
        if (result.details) {
          setErrors(result.details);
        }
        setSubmitError(
          result.error ||
            "Si è verificato un errore durante l'invio. Riprova tra qualche minuto.",
        );
        return;
      }

      setIsSubmitted(true);
      setFormData(initialFormData);
      formLoadedAtRef.current = Date.now();
    } catch {
      setSubmitError(
        "Impossibile inviare la richiesta. Verifica la connessione e riprova.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contatti"
      className="section-padding bg-card"
      aria-labelledby="contatti-heading"
    >
      <div className="editorial-container">
        <div className="grid gap-12 xl:grid-cols-[minmax(0,1.07fr)_minmax(0,0.93fr)] xl:items-start xl:gap-16 2xl:gap-20">
          <div data-scroll-target className="min-w-0">
            <SectionHeading
              id="contatti-heading"
              eyebrow="Contatti"
              title="Richiedi una Consulenza Specialistica"
              subtitle="Compila il modulo o contattaci direttamente. Risponderemo al più presto per organizzare il tuo appuntamento."
            />

            <ul className="mt-10 space-y-6">
              {[
                {
                  icon: <PhoneIcon />,
                  label: "Telefono",
                  content: (
                    <a
                      href={SITE.phoneHref}
                      className={`${textBodyLarge} text-muted transition-colors duration-300 hover:text-accent`}
                    >
                      {SITE.phone}
                    </a>
                  ),
                },
                {
                  icon: <EmailIcon />,
                  label: "Email",
                  content: (
                    <a
                      href={SITE.emailHref}
                      className={`${textBodyLarge} pr-[5px] text-muted transition-colors duration-300 hover:text-accent xl:whitespace-nowrap`}
                    >
                      {SITE.email}
                    </a>
                  ),
                },
                {
                  icon: <LocationIcon />,
                  label: "Sedi",
                  content: (
                    <div>
                      <p className={`${textBodyLarge} text-muted`}>{SITE.locationsLabel}</p>
                      <a
                        href="#sedi-consulenza"
                        className={`mt-2 inline-flex ${textSmall} text-accent transition-colors duration-300 hover:text-accent-hover`}
                      >
                        Vedi mappa e recapiti per la prenotazione
                      </a>
                    </div>
                  ),
                },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/[0.06] text-accent">
                    {item.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className={`${textLabel} text-primary`}>
                      {item.label}
                    </p>
                    <div className="mt-2">{item.content}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="premium-card min-w-0 p-7 sm:p-8">
            {isSubmitted && (
              <div
                role="status"
                aria-live="polite"
                className={`mb-8 rounded-2xl border border-accent/20 bg-accent/[0.04] px-6 py-5 ${textBody} text-primary`}
              >
                Grazie per la richiesta. Abbiamo ricevuto il tuo messaggio e ti
                contatteremo a breve per organizzare la consulenza. Riceverai
                anche un&apos;email di conferma.
              </div>
            )}

            {submitError && (
              <div
                role="alert"
                aria-live="assertive"
                className={`mb-8 rounded-2xl border border-red-200 bg-red-50 px-6 py-5 ${textBody} text-red-700`}
              >
                {submitError}
              </div>
            )}

            <form ref={setFormRef} onSubmit={handleSubmit} noValidate aria-labelledby="contatti-heading">
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div className="space-y-7">
                {(
                  [
                    { id: "firstName", label: "Nome", type: "text", autoComplete: "given-name" },
                    { id: "lastName", label: "Cognome", type: "text", autoComplete: "family-name" },
                    { id: "email", label: "Email", type: "email", autoComplete: "email" },
                    { id: "phone", label: "Telefono", type: "tel", autoComplete: "tel" },
                    { id: "reason", label: "Motivo della richiesta", type: "text", autoComplete: "off" },
                  ] as const
                ).map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className={`${textLabel} text-primary`}
                    >
                      {field.label} <span className="text-muted">*</span>
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      autoComplete={field.autoComplete}
                      required
                      value={formData[field.id]}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      aria-invalid={Boolean(errors[field.id])}
                      aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
                      className={inputClass}
                    />
                    {errors[field.id] && (
                      <p id={`${field.id}-error`} className={`mt-2 ${textSmall} text-red-600`} role="alert">
                        {errors[field.id]}
                      </p>
                    )}
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className={`${textLabel} text-primary`}
                  >
                    Messaggio <span className="text-muted">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    placeholder="Descrivi brevemente la tua richiesta di consulenza."
                    className={`${inputClass} resize-y`}
                  />
                  {errors.message && (
                    <p id="message-error" className={`mt-2 ${textSmall} text-red-600`} role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-10">
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? "Invio in corso..." : "Richiedi consulenza"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
