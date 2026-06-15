"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { EmailIcon, LocationIcon, PhoneIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hasValidationErrors, validateContactForm } from "@/lib/contact-validation";
import { SITE } from "@/lib/site-data";
import type { ContactFormData, ContactFormErrors } from "@/types";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const inputClass =
  "mt-2.5 w-full rounded-xl border border-border/80 bg-surface px-4 py-3.5 text-base text-primary transition-all duration-300 placeholder:text-muted/50 focus:border-accent/40 focus:bg-card focus:outline-none focus:ring-4 focus:ring-accent/[0.08]";

export function Contatti() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(false);

    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);

    if (hasValidationErrors(validationErrors)) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData(initialFormData);
  };

  return (
    <section
      id="contatti"
      className="section-padding bg-card"
      aria-labelledby="contatti-heading"
    >
      <div className="editorial-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div data-scroll-target>
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
                      className="text-xl text-muted transition-colors duration-300 hover:text-accent"
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
                      className="text-xl text-muted transition-colors duration-300 hover:text-accent"
                    >
                      {SITE.email}
                    </a>
                  ),
                },
                {
                  icon: <LocationIcon />,
                  label: "Sedi",
                  content: (
                    <p className="text-xl text-muted">
                      {SITE.locations.join(" • ")}
                    </p>
                  ),
                },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/[0.06] text-accent">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                      {item.label}
                    </p>
                    <div className="mt-2">{item.content}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="premium-card p-7 sm:p-8">
            {isSubmitted && (
              <div
                role="status"
                aria-live="polite"
                className="mb-8 rounded-2xl border border-accent/20 bg-accent/[0.04] px-6 py-5 text-base text-primary"
              >
                Grazie per la richiesta. Abbiamo ricevuto il tuo messaggio e ti
                contatteremo a breve per organizzare la consulenza.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate aria-labelledby="contatti-heading">
              <div className="space-y-7">
                {(
                  [
                    { id: "name", label: "Nome", type: "text", autoComplete: "name" },
                    { id: "email", label: "Email", type: "email", autoComplete: "email" },
                    { id: "phone", label: "Telefono", type: "tel", autoComplete: "tel" },
                  ] as const
                ).map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary"
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
                      <p id={`${field.id}-error`} className="mt-2 text-sm text-red-600" role="alert">
                        {errors[field.id]}
                      </p>
                    )}
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary"
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
                    <p id="message-error" className="mt-2 text-sm text-red-600" role="alert">
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
