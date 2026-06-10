import Image from "next/image";

interface LogoProps {
  variant?: "navbar" | "footer";
  className?: string;
}

export function Logo({ variant = "navbar", className = "" }: LogoProps) {
  const isNavbar = variant === "navbar";

  const image = (
    <Image
      src="/logo-giorgio.png"
      alt="Dr. Giorgio Incarbone — Neurochirurgo"
      width={isNavbar ? 860 : 380}
      height={isNavbar ? 108 : 76}
      priority={isNavbar}
      className={`w-auto object-contain ${
        isNavbar
          ? "h-9 sm:h-10 lg:h-11"
          : "h-[4.1rem] sm:h-[4.4rem] lg:h-[5.25rem]"
      } ${className}`}
    />
  );

  if (variant === "footer") {
    return (
      <div className="inline-flex rounded-xl bg-white px-5 py-3.5 shadow-editorial">
        {image}
      </div>
    );
  }

  return image;
}
