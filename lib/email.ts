import { Resend } from "resend";
import { getContactEmail, getFromEmail, getResendApiKey } from "@/lib/env";
import { SITE } from "@/lib/site-data";
import type { ContactFormData } from "@/types";

export interface ContactEmailContext {
  data: ContactFormData;
  submittedAt: string;
  ipAddress?: string;
  userAgent?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildAdminEmailText({ data, submittedAt, ipAddress, userAgent }: ContactEmailContext): string {
  return [
    "Nome",
    data.firstName,
    "",
    "Cognome",
    data.lastName,
    "",
    "Telefono",
    data.phone,
    "",
    "Email",
    data.email,
    "",
    "Motivo della richiesta",
    data.reason,
    "",
    "Messaggio",
    data.message,
    "",
    "Data e ora della richiesta",
    submittedAt,
    "",
    "IP (if available)",
    ipAddress || "Non disponibile",
    "",
    "User Agent (if available)",
    userAgent || "Non disponibile",
  ].join("\n");
}

function buildAdminEmailHtml({ data, submittedAt, ipAddress, userAgent }: ContactEmailContext): string {
  const fields = [
    ["Nome", data.firstName],
    ["Cognome", data.lastName],
    ["Telefono", data.phone],
    ["Email", data.email],
    ["Motivo della richiesta", data.reason],
    ["Messaggio", data.message],
    ["Data e ora della richiesta", submittedAt],
    ["IP", ipAddress || "Non disponibile"],
    ["User Agent", userAgent || "Non disponibile"],
  ] as const;

  const rows = fields
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px 4px;font-weight:600;color:#1a1a1a;vertical-align:top;">${escapeHtml(label)}</td></tr><tr><td style="padding:0 12px 16px;color:#444;white-space:pre-wrap;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `<!DOCTYPE html><html lang="it"><body style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;color:#1a1a1a;"><table style="max-width:640px;width:100%;border-collapse:collapse;">${rows}</table></body></html>`;
}

function buildConfirmationEmailText(data: ContactFormData): string {
  return [
    `Gentile ${data.firstName} ${data.lastName},`,
    "",
    "La ringraziamo per aver contattato il Dr. Giorgio Incarbone.",
    "",
    "Abbiamo ricevuto la sua richiesta di consulenza e la esamineremo con la massima attenzione. Sarà ricontattato/a al più presto per organizzare un appuntamento.",
    "",
    `Per urgenze o chiarimenti può scrivere a ${SITE.email} o chiamare il ${SITE.phone}.`,
    "",
    "Cordiali saluti,",
    "",
    "Dr. Giorgio Incarbone",
    "Neurochirurgo",
    SITE.email,
    "https://giorgioincarbone.com",
  ].join("\n");
}

function buildConfirmationEmailHtml(data: ContactFormData): string {
  return `<!DOCTYPE html>
<html lang="it">
  <body style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#1a1a1a;max-width:640px;">
    <p>Gentile ${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)},</p>
    <p>La ringraziamo per aver contattato il <strong>Dr. Giorgio Incarbone</strong>.</p>
    <p>Abbiamo ricevuto la sua richiesta di consulenza e la esamineremo con la massima attenzione. Sarà ricontattato/a al più presto per organizzare un appuntamento.</p>
    <p>Per urgenze o chiarimenti può scrivere a <a href="${SITE.emailHref}">${escapeHtml(SITE.email)}</a> o chiamare il <a href="${SITE.phoneHref}">${escapeHtml(SITE.phone)}</a>.</p>
    <p>Cordiali saluti,</p>
    <p>
      <strong>Dr. Giorgio Incarbone</strong><br />
      Neurochirurgo<br />
      <a href="mailto:giorgio.incarbone@giorgioincarbone.com">giorgio.incarbone@giorgioincarbone.com</a><br />
      <a href="https://giorgioincarbone.com">giorgioincarbone.com</a>
    </p>
  </body>
</html>`;
}

export async function sendContactEmails(context: ContactEmailContext): Promise<void> {
  const resend = new Resend(getResendApiKey());
  const contactEmail = getContactEmail();
  const fromEmail = getFromEmail();

  const adminResult = await resend.emails.send({
    from: `Sito Web Dr. Incarbone <${fromEmail}>`,
    to: [contactEmail],
    replyTo: context.data.email,
    subject: "Nuova richiesta di consulenza dal sito web",
    text: buildAdminEmailText(context),
    html: buildAdminEmailHtml(context),
  });

  if (adminResult.error) {
    throw new Error(adminResult.error.message);
  }

  const confirmationResult = await resend.emails.send({
    from: `Dr. Giorgio Incarbone <${fromEmail}>`,
    to: [context.data.email],
    replyTo: contactEmail,
    subject: "Abbiamo ricevuto la tua richiesta",
    text: buildConfirmationEmailText(context.data),
    html: buildConfirmationEmailHtml(context.data),
  });

  if (confirmationResult.error) {
    throw new Error(confirmationResult.error.message);
  }
}
