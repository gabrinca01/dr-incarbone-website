function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function getResendApiKey(): string {
  return requireEnv("RESEND_API_KEY");
}

export function getContactEmail(): string {
  return process.env.CONTACT_EMAIL?.trim() || "giorgio.incarbone@giorgioincarbone.com";
}

export function getFromEmail(): string {
  return process.env.FROM_EMAIL?.trim() || "noreply@giorgioincarbone.com";
}

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://giorgioincarbone.com";
