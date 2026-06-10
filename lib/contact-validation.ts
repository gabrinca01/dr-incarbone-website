import type { ContactFormData, ContactFormErrors } from "@/types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const name = data.name.trim();
  const email = data.email.trim();
  const phone = data.phone.trim();
  const message = data.message.trim();

  if (!name) {
    errors.name = "Inserisci il tuo nome e cognome.";
  } else if (name.length < 2) {
    errors.name = "Il nome deve contenere almeno 2 caratteri.";
  }

  if (!email) {
    errors.email = "Inserisci il tuo indirizzo email.";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Inserisci un indirizzo email valido.";
  }

  if (!phone) {
    errors.phone = "Inserisci il tuo numero di telefono.";
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
