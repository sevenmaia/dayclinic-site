import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export interface DoctorData {
  id: string;
  name: string;
  specialty: string;
  role: string;
  crm: string;
  rqe: string;
  bio: string;
  imageSlot: string;
  photoSrc?: string;
  instagram?: string;
}

interface DoctorCardProps {
  doctor: DoctorData;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  // Ajusta foco da imagem compartilhada para focar na Dra. Janaina (lado esquerdo) ou no Dr. Roberto (lado direito)
  const isJanaina = doctor.id.includes("janaina");
  const objectPositionClass = isJanaina ? "object-[25%_15%]" : "object-[75%_15%]";

  return (
    <div className="flex flex-col bg-white rounded-lg sm:rounded-xl overflow-hidden border border-borderGray hover:shadow-card transition-all duration-300">
      {/* Foto do médico com recorte inteligente da foto oficial */}
      <div className="relative overflow-hidden bg-surface h-80 sm:h-96">
        {doctor.photoSrc ? (
          <img
            src={doctor.photoSrc}
            alt={doctor.name}
            className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${objectPositionClass}`}
          />
        ) : (
          <ImagePlaceholder
            name={doctor.imageSlot}
            ratio="3/4"
            label={`Foto profissional: ${doctor.name}`}
            variant="light"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-sm text-ink-900 rounded-md shadow-sm border border-borderGray-subtle">
            {doctor.role}
          </span>
        </div>
      </div>

      {/* Conteúdo textual */}
      <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
            {doctor.specialty}
          </span>
          <h3 className="mt-1 text-2xl font-bold text-ink-950">
            {doctor.name}
          </h3>

          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-ink-700 font-mono font-semibold">
            <span className="bg-surface px-2 py-0.5 rounded border border-borderGray">
              {doctor.crm}
            </span>
            <span className="bg-surface px-2 py-0.5 rounded border border-borderGray">
              {doctor.rqe}
            </span>
          </div>

          <p className="mt-4 text-sm text-ink-600 leading-relaxed">
            {doctor.bio}
          </p>
        </div>

        <div className="mt-6 pt-5 border-t border-borderGray flex items-center justify-between">
          <Link
            href="/quem-somos#equipe"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-hover transition-colors group"
          >
            <span>Conhecer trajetória</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          {doctor.instagram && (
            <a
              href={doctor.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram de ${doctor.name}`}
              className="text-ink-500 hover:text-brand-orange transition-colors p-1.5 rounded-full hover:bg-surface"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
