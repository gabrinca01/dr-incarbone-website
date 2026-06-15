import Image from "next/image";

interface LogoProps {
  variant?: "navbar" | "footer" | "subtle";
  className?: string;
}

export function Logo({ variant = "navbar", className = "" }: LogoProps) {
  const sizeClasses = {
    navbar:
      "h-16 max-w-[min(100%,13rem)] sm:h-[4.75rem] sm:max-w-[16rem] md:h-20 md:max-w-none lg:h-24 xl:h-28 2xl:h-32",
    footer: "h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40",
    subtle: "h-16 sm:h-20 md:h-24 lg:h-28",
  };

  const dimensions = {
    navbar: { width: 860, height: 108 },
    footer: { width: 860, height: 108 },
    subtle: { width: 860, height: 108 },
  };

  const image = (
    <Image
      src="/logo-giorgio.png"
      alt="Dr. Giorgio Incarbone — Neurochirurgo"
      width={dimensions[variant].width}
      height={dimensions[variant].height}
      priority={variant === "navbar"}
      unoptimized
      className={`w-auto max-w-full object-contain object-left ${sizeClasses[variant]} ${className}`}
    />
  );

  if (variant === "footer") {
    return (
      <div className="inline-flex max-w-full rounded-xl bg-white px-6 py-5 shadow-editorial sm:px-8 sm:py-6 lg:px-10 lg:py-7">
        {image}
      </div>
    );
  }

  return image;
}
