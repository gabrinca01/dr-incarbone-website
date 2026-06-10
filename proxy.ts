/**
 * PREVIEW PROTECTION — HTTP Basic Authentication
 *
 * Protects preview/review deployments while keeping production public.
 *
 * HOW IT WORKS
 * - Vercel Preview deployments (VERCEL_ENV=preview): protected automatically
 * - Local dev: set BASIC_AUTH_ENABLED=true in .env.local
 * - Vercel Production (VERCEL_ENV=production): public by default
 *
 * REMOVE AUTH WHEN GOING PUBLIC
 * 1. Delete this file (proxy.ts)
 * 2. Delete lib/basic-auth.ts and types/basic-auth.ts
 * 3. Remove BASIC_AUTH_* variables from Vercel and .env.local
 * 4. Redeploy — the site will be fully public with no UI changes
 *
 * Alternatively, set BASIC_AUTH_ENABLED=false on Preview to disable without
 * deleting files.
 */

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  areCredentialsValid,
  createUnauthorizedResponse,
  getBasicAuthConfig,
  parseAuthorizationHeader,
} from "@/lib/basic-auth";

export function proxy(request: NextRequest) {
  const { enabled, credentials, realm } = getBasicAuthConfig();

  if (!enabled) {
    return NextResponse.next();
  }

  if (!credentials) {
    return createUnauthorizedResponse(realm);
  }

  const provided = parseAuthorizationHeader(
    request.headers.get("authorization"),
  );

  if (!provided || !areCredentialsValid(provided, credentials)) {
    return createUnauthorizedResponse(realm);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Protect every page route, including future routes such as:
     * /, /chi-sono, /competenze, /contatti, etc.
     *
     * Excludes only Next.js internals and static assets required to render
     * the app after authentication.
     */
    "/((?!_next/static|_next/image|favicon.ico|sw.js|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|css|js)$).*)",
  ],
};
