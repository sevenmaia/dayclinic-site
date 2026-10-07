import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export interface ServiceData {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSlot: string;
  imageSrc?: string;
  href: string;
}

interface ServiceCardProps {
  service: ServiceData;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Link
      href={service.href}
      className="group relative flex flex-col rounded-lg sm:rounded-xl overflow-hidden bg-white border border-borderGray hover:border-brand-orange/50 hover:shadow-card transition-all duration-300"
    >
      {/* Imagem / Foto do Serviço */}
      <div className="relative overflow-hidden bg-ink-950">
        <ImagePlaceholder
          name={service.imageSlot}
          src={service.imageSrc}
          alt={service.title}
          ratio="4/3"
          label={service.title}
          variant="dark"
          className="transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradiente / Overlay escuro inferior para contraste do título */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/35 to-transparent pointer-events-none" />

        {/* Categoria sobre a imagem */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-brand-orange text-white rounded shadow-sm">
            {service.category}
          </span>
        </div>

        {/* Título sobre a imagem */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors drop-shadow-sm">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Conteúdo inferior */}
      <div className="p-5 flex flex-col justify-between flex-1 bg-white">
        <p className="text-sm text-ink-600 line-clamp-3 leading-relaxed">
          {service.description}
        </p>

        <div className="mt-4 pt-4 border-t border-borderGray-subtle flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brand-orange">
          <span>Saiba mais</span>
          <div className="w-8 h-8 rounded-full bg-brand-soft flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors duration-200">
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
