import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark" | "outline-white";
  size?: "sm" | "md" | "lg";
  href?: string;
  withArrow?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  isExternal?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  withArrow = false,
  children,
  icon,
  isExternal,
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-md sm:rounded-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-orange/40 active:scale-[0.98]";

  const sizeClasses = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-5 py-3 text-sm gap-2",
    lg: "px-7 py-4 text-base gap-2.5",
  }[size];

  const variantClasses = {
    primary:
      "bg-brand-orange text-white border border-brand-orange hover:bg-brand-hover hover:border-brand-hover shadow-sm hover:shadow",
    secondary:
      "bg-transparent text-ink-900 border border-brand-orange hover:bg-brand-soft text-brand-orange hover:text-brand-hover",
    dark:
      "bg-ink-950 text-white border border-ink-800 hover:bg-ink-900",
    "outline-white":
      "bg-black/20 text-white border border-white/40 hover:bg-white/10 backdrop-blur-sm",
  }[variant];

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  const fullClasses = `group ${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    if (isExternal || href.startsWith("http") || href.startsWith("https://wa.me") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={fullClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={fullClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={fullClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;
