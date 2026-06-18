import { textBodyLarge, textLabel, textSectionTitle } from "@/lib/typography";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
  eyebrow?: string;
  variant?: "light" | "dark";
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  className = "",
  id,
  eyebrow,
  variant = "light",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const isDark = variant === "dark";
  const eyebrowRule =
    align === "center" ? "eyebrow-rule eyebrow-rule-center" : "eyebrow-rule";

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p
          className={`${eyebrowRule} ${textLabel} ${
            isDark ? "text-accent-light" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`${textSectionTitle} ${isDark ? "text-white" : "text-primary"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-xl ${textBodyLarge} ${
            align === "center" ? "mx-auto" : ""
          } ${isDark ? "text-white/65" : "text-muted"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
