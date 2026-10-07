import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
  tag?: "h1" | "h2" | "h3";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  theme = "light",
  className = "",
  tag = "h2",
}) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  const HeadingTag = tag;

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-[12px] font-bold uppercase tracking-[0.18em] text-brand-orange mb-3">
          {eyebrow}
        </span>
      )}
      
      <HeadingTag
        className={`text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.18] tracking-tight ${
          theme === "dark" ? "text-white" : "text-ink-950"
        }`}
      >
        {title}
      </HeadingTag>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            theme === "dark" ? "text-neutral-300" : "text-ink-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
