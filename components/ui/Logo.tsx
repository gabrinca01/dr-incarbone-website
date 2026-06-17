import Image from "next/image";

interface LogoProps {
  variant?: "navbar" | "footer" | "subtle";
  className?: string;
}

const LOGO_TEXT = {
  name: "GIORGIO INCARBONE",
  profession: "NEUROCHIRURGO",
} as const;

const VARIANTS = {
  navbar: {
    icon: "h-16 w-auto sm:h-[4.5rem] md:h-[4.75rem] lg:h-[4.5rem] xl:h-[4.1rem] 2xl:h-[5.125rem]",
    gap: "gap-2 sm:gap-2.5 md:gap-3 xl:gap-2.5 2xl:gap-3.5",
    name: "text-[0.7rem] font-bold uppercase tracking-[0.16em] sm:text-[0.78rem] md:text-[0.84rem] lg:text-[0.82rem] xl:text-[0.78rem] 2xl:text-[0.95rem]",
    profession:
      "mt-0.5 text-[0.56rem] font-light uppercase tracking-[0.42em] sm:mt-1 sm:text-[0.62rem] md:text-[0.68rem] lg:text-[0.66rem] xl:text-[0.62rem] 2xl:text-[0.78rem]",
  },
  footer: {
    icon: "h-20 w-auto sm:h-24 md:h-28 lg:h-32",
    gap: "gap-3 sm:gap-3.5 md:gap-4",
    name: "text-[0.72rem] font-bold uppercase tracking-[0.2em] sm:text-[0.82rem] md:text-[0.9rem] lg:text-[1rem]",
    profession:
      "mt-1 text-[0.58rem] font-light uppercase tracking-[0.52em] sm:text-[0.66rem] md:text-[0.72rem] lg:text-[0.8rem]",
  },
  subtle: {
    icon: "h-16 w-auto sm:h-20 md:h-24",
    gap: "gap-2.5 sm:gap-3 md:gap-3.5",
    name: "text-[0.74rem] font-bold uppercase tracking-[0.2em] sm:text-[0.85rem] md:text-[0.95rem]",
    profession:
      "mt-1 text-[0.6rem] font-light uppercase tracking-[0.52em] sm:text-[0.7rem] md:text-[0.78rem]",
  },
} as const;

export function Logo({ variant = "navbar", className = "" }: LogoProps) {
  const styles = VARIANTS[variant];

  const lockup = (
    <div
      className={`inline-flex max-w-full min-w-0 items-center ${styles.gap} ${className}`}
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
        className={`shrink-0 object-contain object-left ${styles.icon}`}
      />
      <div className="flex min-w-0 flex-col justify-center leading-none">
        <span className={`whitespace-nowrap text-primary ${styles.name}`}>
          {LOGO_TEXT.name}
        </span>
        <span className={`whitespace-nowrap text-primary ${styles.profession}`}>
          {LOGO_TEXT.profession}
        </span>
      </div>
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
