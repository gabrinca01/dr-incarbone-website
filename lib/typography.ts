/**
 * Centralized semantic typography tokens for Mirano Extended.
 * Use these instead of ad-hoc Tailwind font/size utilities.
 */

/** Hero name — Mirano Black */
export const textDisplay = "text-display";

/** Section h2 — Mirano Bold */
export const textSectionTitle = "text-section-title";

/** Subsection / specialty area h3 — Mirano SemiBold */
export const textSubsection = "text-subsection";

/** Editorial uppercase labels — Mirano Medium */
export const textLabel = "text-label";

/** Card headings — Mirano SemiBold */
export const textCardTitle = "text-card-title";

/** Primary body copy — Mirano Regular */
export const textBody = "text-body";

/** Long-form / biography — Mirano Light */
export const textBodyLight = "text-body-light";

/** Lead paragraphs, subtitles — Mirano Regular, larger */
export const textBodyLarge = "text-body-large";

/** Navbar links — Mirano Medium */
export const textNav = "text-nav";

/** Primary & secondary CTAs — Mirano SemiBold */
export const textButton = "text-button";

/** Large CTA — Mirano SemiBold */
export const textButtonLg = "text-button-lg";

/** Mobile nav links */
export const textNavMobile = "text-nav-mobile";

/** Supporting UI copy */
export const textSmall = "text-small";

/** Caption / meta */
export const textCaption = "text-caption";

/** Hero tagline under name */
export const textHeroTagline = "text-hero-tagline";

/** Large numeric stats */
export const textStat = "text-stat";

/** Compact stat display */
export const textStatCompact = "text-stat-compact";

/** Step indicator in timelines */
export const textStepBadge = "text-step-badge";

/** Editorial list index */
export const textEditorialIndex = "text-editorial-index";

/** Logo wordmark weight hint (PNG logo; for any live text fallback) */
export const textLogo = "text-logo";

/** Combined presets for common patterns */
export const typography = {
  display: textDisplay,
  sectionTitle: textSectionTitle,
  subsection: textSubsection,
  label: textLabel,
  cardTitle: textCardTitle,
  body: textBody,
  bodyLight: textBodyLight,
  bodyLarge: textBodyLarge,
  nav: textNav,
  navMobile: textNavMobile,
  button: textButton,
  buttonLg: textButtonLg,
  small: textSmall,
  caption: textCaption,
  heroTagline: textHeroTagline,
  stat: textStat,
  statCompact: textStatCompact,
  stepBadge: textStepBadge,
  editorialIndex: textEditorialIndex,
  logo: textLogo,
} as const;
