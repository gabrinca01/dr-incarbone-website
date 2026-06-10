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
          className={`${eyebrowRule} text-[10px] font-light uppercase tracking-[0.24em] ${
            isDark ? "text-accent-light" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`font-display text-3xl font-semibold leading-[1.12] sm:text-4xl lg:text-[2.75rem] ${
          isDark ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-xl text-base leading-[1.75] sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          } ${isDark ? "text-white/65" : "text-muted"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
