import React from "react";
import { Image as ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  name: string;
  ratio?: "21/9" | "16/9" | "16/10" | "4/3" | "3/4" | "1/1" | "custom" | string;
  label?: string;
  className?: string;
  variant?: "dark" | "light" | "neutral";
  priorityLabel?: string;
  src?: string;
  alt?: string;
}

const ratioClasses: Record<string, string> = {
  "21/9": "aspect-[21/9]",
  "16/9": "aspect-[16/9]",
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "1/1": "aspect-square",
};

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  name,
  ratio = "16/9",
  label,
  className = "",
  variant = "neutral",
  priorityLabel,
  src,
  alt,
}) => {
  // Se futuramente for fornecido src real, renderiza com fallback estruturado
  if (src) {
    return (
      <div
        data-image-slot={name}
        className={`relative overflow-hidden ${ratioClasses[ratio] || ""} ${className}`}
      >
        <img
          src={src}
          alt={alt || label || name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    );
  }

  const bgStyles = {
    dark: "bg-ink-950/90 text-white/80 border-ink-800",
    light: "bg-surface text-ink-700 border-borderGray",
    neutral: "bg-neutral-900/60 text-white/80 border-neutral-700/50",
  }[variant];

  return (
    <div
      data-image-slot={name}
      role="img"
      aria-label={label || `Slot de imagem: ${name}`}
      className={`relative w-full overflow-hidden flex flex-col items-center justify-center p-6 border border-dashed transition-all duration-300 group ${bgStyles} ${
        ratioClasses[ratio] || ""
      } ${className}`}
    >
      {/* Padrão sutil de grid técnico para referência médica/arquitetural */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(#D98900_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-xs space-y-2">
        <div className="w-10 h-10 rounded-lg bg-brand-orange/15 text-brand-orange flex items-center justify-center border border-brand-orange/30 group-hover:scale-110 transition-transform duration-200">
          <ImageIcon className="w-5 h-5" />
        </div>

        <div className="space-y-1">
          <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono tracking-widest uppercase bg-black/40 text-brand-orange rounded border border-brand-orange/20">
            {name}
          </span>
          {label && (
            <p className="text-xs font-medium text-inherit/90 line-clamp-2">
              {label}
            </p>
          )}
          {ratio && (
            <span className="text-[10px] text-inherit/50 block font-mono">
              Proporção: {ratio}
            </span>
          )}
        </div>
      </div>

      {priorityLabel && (
        <span className="absolute top-3 right-3 text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-brand-orange text-white">
          {priorityLabel}
        </span>
      )}
    </div>
  );
};

export default ImagePlaceholder;
