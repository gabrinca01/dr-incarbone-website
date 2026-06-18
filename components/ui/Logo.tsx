import Image from "next/image";

interface LogoProps {
  variant?: "navbar" | "footer" | "subtle";
  className?: string;
}

const LOGO_TEXT = {
  src: "/logo-text.png",
  width: 1109,
  height: 122,
} as const;

const PSD_ICON_HEIGHT = 664;
const PSD_TEXT_WIDTH = LOGO_TEXT.width;
const PSD_TEXT_HEIGHT = LOGO_TEXT.height;

const TEXT_WIDTH_SCALE = 1.48;
const TEXT_HEIGHT_SCALE = 1.24;

const VARIANTS = {
  navbar: {
    iconHeight:
      "[--logo-icon-h:3.25rem] sm:[--logo-icon-h:3.75rem] md:[--logo-icon-h:4.25rem] lg:[--logo-icon-h:4rem] xl:[--logo-icon-h:4.35rem] 2xl:[--logo-icon-h:5.375rem]",
    gap: "gap-2 sm:gap-2.5 md:gap-3 xl:gap-3 2xl:gap-4",
  },
  footer: {
    iconHeight:
      "[--logo-icon-h:5.25rem] sm:[--logo-icon-h:6.25rem] md:[--logo-icon-h:7.25rem] lg:[--logo-icon-h:8.25rem]",
    gap: "gap-3 sm:gap-4 md:gap-4",
  },
  subtle: {
    iconHeight:
      "[--logo-icon-h:4.25rem] sm:[--logo-icon-h:5.25rem] md:[--logo-icon-h:6rem]",
    gap: "gap-2.5 sm:gap-3 md:gap-3.5",
  },
} as const;

export function Logo({ variant = "navbar", className = "" }: LogoProps) {
  const styles = VARIANTS[variant];

  const textWidth = `calc(var(--logo-icon-h) * ${PSD_TEXT_WIDTH} / ${PSD_ICON_HEIGHT} * ${TEXT_WIDTH_SCALE})`;
  const textHeight = `calc(var(--logo-icon-h) * ${PSD_TEXT_HEIGHT} / ${PSD_ICON_HEIGHT} * ${TEXT_HEIGHT_SCALE})`;

  const lockup = (
    <div
      className={`inline-flex max-w-full min-w-0 items-center ${styles.iconHeight} ${styles.gap} ${className}`}
      aria-label="Dr. Giorgio Incarbone — Neurochirurgo"
    >
      <Image
        src="/logo-icon.png"
        alt=""
        aria-hidden
        width={611}
        height={664}
        priority={variant === "navbar"}
        unoptimized
        className="h-[length:var(--logo-icon-h)] w-auto shrink-0 object-contain object-left"
      />
      <Image
        src={LOGO_TEXT.src}
        alt=""
        aria-hidden
        width={LOGO_TEXT.width}
        height={LOGO_TEXT.height}
        unoptimized
        style={{ width: textWidth, height: textHeight }}
        className={
          variant === "navbar"
            ? "max-w-[9.5rem] shrink-0 object-contain object-left sm:max-w-none sm:object-fill"
            : "shrink-0 object-fill object-left"
        }
      />
    </div>
  );

  if (variant === "footer") {
    return (
      <div className="inline-flex max-w-full rounded-xl bg-white px-6 py-5 shadow-editorial sm:px-8 sm:py-6 lg:px-10 lg:py-7">
        {lockup}
      </div>
    );
  }

  return lockup;
}
