import Link from "next/link";
import type { ReactNode } from "react";
import { textButton, textButtonLg } from "@/lib/typography";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  "aria-label"?: string;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  type?: undefined;
  onClick?: () => void;
  disabled?: undefined;
  "aria-label"?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-secondary shadow-[0_4px_20px_-4px_rgba(15,23,42,0.4)] hover:shadow-[0_8px_30px_-4px_rgba(15,23,42,0.5)]",
  secondary:
    "bg-card text-primary border border-border hover:border-primary/20 hover:shadow-card",
  ghost:
    "bg-transparent text-primary border border-border hover:border-primary/30 hover:bg-surface",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: `px-5 py-2.5 ${textButton}`,
  md: `px-7 py-3.5 ${textButton}`,
  lg: `px-6 py-3.5 sm:px-10 sm:py-4 ${textButtonLg}`,
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex max-w-full shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-full transition-all duration-500 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent-light disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, onClick, "aria-label": ariaLabel } = props;
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const { type = "button", onClick, disabled, "aria-label": ariaLabel } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
