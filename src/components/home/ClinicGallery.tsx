"use client";

import React, { useState } from "react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import SectionHeading from "@/components/ui/SectionHeading";
import { Building2, Sparkles, Shield, Cpu } from "lucide-react";
import { clinicConfig } from "@/config/clinic";
import { MotionFade, MotionStaggerGroup, MotionStaggerChild } from "@/components/motion/MotionFade";

interface GalleryItem {
  id: string;
  name: string;
  title: string;
  description: string;
  ratio: "16/9" | "4/3" | "21/9";
  src: string;
}

const spaces: GalleryItem[] = [
  {
    id: "facade",
    name: "clinic-facade",
    title: "Fachada & Arquitetura",
    description: "Design contemporâneo em Adrianópolis com volumetria moderna e iluminação estratégica.",
    ratio: "16/9",
    src: clinicConfig.images.heroFachada,
  },
  {
    id: "surgical",
    name: "clinic-centro-cirurgico",
    title: "Centro Cirúrgico Próprio",
    description: "Ambientes estéreis com fluxo asséptico rigoroso para transplantes capilares e cirurgias menores.",
    ratio: "16/9",
    src: clinicConfig.images.centroCirurgico,
  },
  {
    id: "consulting",
    name: "clinic-consultorios",
    title: "Consultórios Médicos",
    description: "Espaços acolhedores para diagnóstico aprofundado, dermatoscopia e tricologia.",
    ratio: "4/3",
    src: clinicConfig.images.consultorio,
  },
  {
    id: "reception",
    name: "clinic-recepcao",
    title: "Recepção & Salas de Espera",
    description: "Privacidade, conforto sensorial e atendimento com máxima discrição e sofisticação.",
    ratio: "4/3",
    src: clinicConfig.images.recepcao,
  },
  {
    id: "tech",
    name: "clinic-tecnologia",
    title: "Tecnologia & Equipamentos",
    description: "Aparelhos de última geração para análise capilar digital e terapias avançadas.",
    ratio: "16/9",
    src: clinicConfig.images.tecnologia,
  },
];

export const ClinicGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("surgical");

  const currentSpace = spaces.find((s) => s.id === activeTab) || spaces[1];

  return (
    <section id="estrutura" className="py-20 sm:py-28 bg-surface overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFade variant="fadeLeft" className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <SectionHeading
              eyebrow="ESTRUTURA DA CLÍNICA"
              title="Um espaço completo para o seu cuidado."
              subtitle="Ambientes planejados em Adrianópolis/Manaus para oferecer máxima segurança hospitalar, privacidade e conforto em cada etapa da sua jornada médica."
            />

            {/* Destaques rápidos da infraestrutura */}
            <div className="grid grid-cols-2 gap-4 lg:w-80 shrink-0">
              <div className="p-3.5 bg-white rounded-lg border border-borderGray flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-xs font-semibold text-ink-800">
                  Segurança Cirúrgica
                </span>
              </div>
              <div className="p-3.5 bg-white rounded-lg border border-borderGray flex items-center gap-2.5">
                <Cpu className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-xs font-semibold text-ink-800">
                  Tecnologia FUE
                </span>
              </div>
            </div>
          </div>
        </MotionFade>

        {/* Abas de Navegação dos Espaços */}
        <MotionFade variant="fadeUp" delay={0.1} className="flex flex-wrap gap-2 pb-6 border-b border-borderGray">
          {spaces.map((space) => {
            const isSelected = space.id === activeTab;
            return (
              <button
                key={space.id}
                onClick={() => setActiveTab(space.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 ${
                  isSelected
                    ? "bg-brand-orange text-white shadow-sm"
                    : "bg-white text-ink-700 hover:bg-white/80 hover:text-ink-950 border border-borderGray"
                }`}
              >
                {space.title}
              </button>
            );
          })}
        </MotionFade>

        {/* Área Principal de Destaque com scaleIn suave (0.97 -> 1) */}
        <MotionFade variant="scaleIn" delay={0.15}>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-5 sm:p-7 rounded-lg sm:rounded-xl border border-borderGray shadow-sm">
            <div className="lg:col-span-8 overflow-hidden rounded-md sm:rounded-lg bg-ink-950">
              <ImagePlaceholder
                name={currentSpace.name}
                src={currentSpace.src}
                ratio="16/9"
                label={currentSpace.title}
                variant="dark"
                priorityLabel="Espaço Day Clinic"
                className="w-full h-80 sm:h-[440px] transition-all duration-500"
              />
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-brand-orange font-bold">
                  Ambiente Especializado
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-ink-950 mt-1">
                  {currentSpace.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-ink-600 leading-relaxed">
                  {currentSpace.description}
                </p>
              </div>

              <div className="pt-6 border-t border-borderGray-subtle space-y-3">
                <div className="flex items-center gap-2 text-xs text-ink-700 font-medium">
                  <Sparkles className="w-4 h-4 text-brand-orange" />
                  <span>Padrão sanitário e certificação hospitalar</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-ink-700 font-medium">
                  <Building2 className="w-4 h-4 text-brand-orange" />
                  <span>Arquitetura orientada ao bem-estar do paciente</span>
                </div>
              </div>
            </div>
          </div>
        </MotionFade>

        {/* Grid com Miniaturas em Stagger FadeUp */}
        <MotionStaggerGroup className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {spaces
            .filter((s) => s.id !== activeTab)
            .slice(0, 4)
            .map((s) => (
              <MotionStaggerChild key={s.id}>
                <div
                  onClick={() => setActiveTab(s.id)}
                  className="cursor-pointer group bg-white p-3 rounded-xl border border-borderGray hover:border-brand-orange transition-all"
                >
                  <div className="overflow-hidden rounded-lg bg-surface">
                    <ImagePlaceholder
                      name={s.name}
                      src={s.src}
                      ratio="16/9"
                      label={s.title}
                      variant="light"
                      className="h-28 w-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="mt-2 text-xs font-bold text-ink-900 group-hover:text-brand-orange transition-colors truncate">
                    {s.title}
                  </p>
                </div>
              </MotionStaggerChild>
            ))}
        </MotionStaggerGroup>
      </div>
    </section>
  );
};

export default ClinicGallery;
