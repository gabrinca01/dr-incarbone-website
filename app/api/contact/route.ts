import { NextRequest, NextResponse } from "next/server";
import {
  CONTACT_FIELD_LIMITS,
  containsSpamPatterns,
  hasValidationErrors,
  isHoneypotTriggered,
  isSubmitTooFast,
  validateContactForm,
} from "@/lib/contact-validation";
import { sanitizeContactPayload } from "@/lib/contact-sanitize";
import { sendContactEmails } from "@/lib/email";
import type { ContactFormData } from "@/types";

interface ContactRequestBody extends ContactFormData {
  website: string;
  formLoadedAt: number;
}

function getClientIp(request: NextRequest): string | undefined {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim();
  }

  return request.headers.get("x-real-ip") ?? undefined;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<ContactRequestBody>;

    if (isHoneypotTriggered(body.website ?? "")) {
      return NextResponse.json({ success: true });
    }

    if (isSubmitTooFast(Number(body.formLoadedAt))) {
      return NextResponse.json(
        { error: "Invio non valido. Attendi qualche secondo e riprova." },
        { status: 429 },
      );
    }

    const sanitized = sanitizeContactPayload(
      {
        firstName: body.firstName ?? "",
        lastName: body.lastName ?? "",
        email: body.email ?? "",
        phone: body.phone ?? "",
        reason: body.reason ?? "",
        message: body.message ?? "",
        website: body.website ?? "",
      },
      CONTACT_FIELD_LIMITS,
    );

    const validationErrors = validateContactForm(sanitized);
    if (hasValidationErrors(validationErrors)) {
      return NextResponse.json(
        { error: "Verifica i dati inseriti e riprova.", details: validationErrors },
        { status: 400 },
      );
    }

    if (containsSpamPatterns(sanitized.message, sanitized.reason)) {
      return NextResponse.json(
        { error: "Impossibile inviare la richiesta. Riprova con un messaggio diverso." },
        { status: 400 },
      );
    }

    const submittedAt = new Intl.DateTimeFormat("it-IT", {
      dateStyle: "full",
      timeStyle: "medium",
      timeZone: "Europe/Rome",
    }).format(new Date());

    await sendContactEmails({
      data: sanitized,
      submittedAt,
      ipAddress: getClientIp(request),
      userAgent: request.headers.get("user-agent") ?? undefined,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json(
      {
        error:
          "Si è verificato un errore durante l'invio. Riprova tra qualche minuto o contattaci direttamente via email.",
      },
      { status: 500 },
    );
  }
}
