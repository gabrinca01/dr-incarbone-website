import type { BasicAuthConfig, BasicAuthCredentials } from "@/types/basic-auth";

const AUTH_REALM = "Dr. Incarbone — Preview";
let hasWarnedMissingEnv = false;

/**
 * Preview protection is active when:
 * - BASIC_AUTH_ENABLED=true (local dev or explicit override), or
 * - VERCEL_ENV=preview (Vercel preview deployments)
 *
 * Production stays public when BASIC_AUTH_ENABLED is unset/false and
 * VERCEL_ENV=production.
 */
export function isBasicAuthEnabled(): boolean {
  if (process.env.BASIC_AUTH_ENABLED === "false") {
    return false;
  }

  if (process.env.BASIC_AUTH_ENABLED === "true") {
    return true;
  }

  return process.env.VERCEL_ENV === "preview";
}

export function getBasicAuthConfig(): BasicAuthConfig {
  const enabled = isBasicAuthEnabled();
  const username = process.env.BASIC_AUTH_USER;
  const password = process.env.BASIC_AUTH_PASSWORD;

  if (enabled) {
    warnMissingCredentials(username, password);
  }

  const credentials =
    username && password ? { username, password } : null;

  return {
    enabled,
    credentials,
    realm: AUTH_REALM,
  };
}

function warnMissingCredentials(
  username: string | undefined,
  password: string | undefined,
): void {
  if (hasWarnedMissingEnv) return;

  if (!username || !password) {
    hasWarnedMissingEnv = true;
    console.warn(
      "[basic-auth] BASIC_AUTH_USER and/or BASIC_AUTH_PASSWORD are missing. " +
        "Preview protection is enabled but credentials are not configured.",
    );
  }
}

export function parseAuthorizationHeader(
  header: string | null,
): BasicAuthCredentials | null {
  if (!header?.startsWith("Basic ")) {
    return null;
  }

  try {
    const encoded = header.slice(6);
    const decoded = atob(encoded);
    const separatorIndex = decoded.indexOf(":");

    if (separatorIndex === -1) {
      return null;
    }

    return {
      username: decoded.slice(0, separatorIndex),
      password: decoded.slice(separatorIndex + 1),
    };
  } catch {
    return null;
  }
}

export function areCredentialsValid(
  provided: BasicAuthCredentials,
  expected: BasicAuthCredentials,
): boolean {
  return (
    timingSafeEqual(provided.username, expected.username) &&
    timingSafeEqual(provided.password, expected.password)
  );
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }

  let mismatch = 0;
  for (let index = 0; index < a.length; index += 1) {
    mismatch |= a.charCodeAt(index) ^ b.charCodeAt(index);
  }

  return mismatch === 0;
}

export function createUnauthorizedResponse(realm: string): Response {
  return new Response("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${realm}", charset="UTF-8"`,
    },
  });
}
