import type { ContactFormData, ContactFormErrors } from "@/types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+()\d\s.-]{8,20}$/;
const MIN_SUBMIT_DELAY_MS = 3000;
const MAX_SUBMIT_DELAY_MS = 60 * 60 * 1000;

export const CONTACT_FIELD_LIMITS = {
  firstName: 80,
  lastName: 80,
  email: 254,
  phone: 20,
  reason: 200,
  message: 4000,
  website: 0,
} as const;

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const firstName = data.firstName.trim();
  const lastName = data.lastName.trim();
  const email = data.email.trim();
  const phone = data.phone.trim();
  const reason = data.reason.trim();
  const message = data.message.trim();

  if (!firstName) {
    errors.firstName = "Inserisci il tuo nome.";
  } else if (firstName.length < 2) {
    errors.firstName = "Il nome deve contenere almeno 2 caratteri.";
  }

  if (!lastName) {
    errors.lastName = "Inserisci il tuo cognome.";
  } else if (lastName.length < 2) {
    errors.lastName = "Il cognome deve contenere almeno 2 caratteri.";
  }

  if (!email) {
    errors.email = "Inserisci il tuo indirizzo email.";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Inserisci un indirizzo email valido.";
  }

  if (!phone) {
    errors.phone = "Inserisci il tuo numero di telefono.";
  } else if (!PHONE_REGEX.test(phone) || phone.replace(/\D/g, "").length < 8) {
    errors.phone = "Inserisci un numero di telefono valido.";
  }

  if (!reason) {
    errors.reason = "Indica il motivo della richiesta.";
  } else if (reason.length < 3) {
    errors.reason = "Il motivo deve contenere almeno 3 caratteri.";
  }

  if (!message) {
    errors.message = "Inserisci il messaggio della richiesta.";
  } else if (message.length < 10) {
    errors.message = "Il messaggio deve contenere almeno 10 caratteri.";
  }

  return errors;
}

export function hasValidationErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}

export function isHoneypotTriggered(website: string): boolean {
  return website.trim().length > 0;
}

export function isSubmitTooFast(formLoadedAt: number): boolean {
  if (!Number.isFinite(formLoadedAt) || formLoadedAt <= 0) {
    return true;
  }

  const elapsed = Date.now() - formLoadedAt;
  return elapsed < MIN_SUBMIT_DELAY_MS || elapsed > MAX_SUBMIT_DELAY_MS;
}

export function containsSpamPatterns(message: string, reason: string): boolean {
  const combined = `${message} ${reason}`.toLowerCase();
  const spamPatterns = [
    /https?:\/\//i,
    /\b(viagra|cialis|casino|crypto|bitcoin|forex|seo services|guest post)\b/i,
  ];

  return spamPatterns.some((pattern) => pattern.test(combined));
}
