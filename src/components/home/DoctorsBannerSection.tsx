"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { clinicConfig } from "@/config/clinic";
import { MotionFade } from "@/components/motion/MotionFade";

export const DoctorsBannerSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-borderGray overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFade variant="scaleIn" viewportAmount={0.2}>
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-card border border-borderGray bg-surface">
            
            {/* ========================================================================= */}
            {/* VERSÃO DESKTOP (md:block): Alinhamento Preciso nas Áreas Laranja e Branca */}
            {/* ========================================================================= */}
            <div className="hidden md:block relative w-full aspect-[1916/821] min-h-[460px] lg:min-h-[520px] xl:min-h-[560px]">
              {/* Imagem de Fundo (Médicos perfeitamente centrados entre 38% e 62%) */}
              <img
                src={clinicConfig.images.bannerPc}
                alt="Dra. Janaina Tirapelle e Dr. Roberto Vieira — Diretores Médicos da Day Clinic"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
              />

              {/* LADO ESQUERDO: Posicionado de 4% a 35% (área 100% laranja) */}
              <div className="absolute left-[3.5%] lg:left-[4.5%] xl:left-[5%] top-[8%] bottom-[8%] w-[30%] lg:w-[31%] xl:w-[32%] flex flex-col justify-center text-white z-10">
                <MotionFade variant="fadeLeft" delay={0.1}>
                  <span className="inline-block text-[11px] lg:text-xs font-bold uppercase tracking-[0.20em] text-white/90 mb-2">
                    NOSSOS MÉDICOS
                  </span>
                  
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white leading-[1.18] tracking-tight drop-shadow-sm">
                    Experiência e dedicação em cada detalhe.
                  </h2>

                  <p className="mt-2.5 lg:mt-3 text-[11px] lg:text-xs xl:text-sm text-white/90 leading-relaxed font-normal">
                    Profissionais especialistas em suas respectivas áreas, com formação sólida e atuação focada em resultados seguros e naturais.
                  </p>

                  <div className="mt-4 lg:mt-6">
                    <Button
                      href="/quem-somos"
                      variant="primary"
                      size="sm"
                      withArrow
                      className="bg-brand-orange hover:bg-brand-hover border border-white/25 text-white shadow-md text-xs lg:text-sm py-2 px-4 lg:py-2.5 lg:px-5"
                    >
                      Conheça nossa equipe
                    </Button>
                  </div>
                </MotionFade>
              </div>

              {/* LADO DIREITO: Posicionado a partir de 66% (área 100% branca, sem encostar no Dr. Roberto) */}
              <div className="absolute right-[3%] lg:right-[4%] xl:right-[4.5%] top-[8%] bottom-[8%] w-[29%] lg:w-[30%] xl:w-[30%] flex flex-col justify-center space-y-4 lg:space-y-6 text-left z-10">
                <MotionFade variant="fadeRight" delay={0.15}>
                  
                  {/* Bloco 1: Dra. Janaina Tirapelle */}
                  <div className="group">
                    <h3 className="text-base lg:text-lg xl:text-xl font-bold text-brand-orange">
                      Dra. Janaina Tirapelle
                    </h3>
                    <p className="text-[10px] lg:text-xs font-mono font-semibold text-ink-500 mt-0.5">
                      CRM 5934 • RQE 4200
                    </p>
                    <p className="text-xs lg:text-sm font-bold text-ink-900 mt-0.5">
                      Dermatologista
                    </p>
                    <p className="text-[11px] lg:text-xs text-ink-600 leading-relaxed mt-1">
                      Especialista em dermatologia clínica, estética e tratamentos capilares.
                    </p>
                    <Link
                      href="/quem-somos#equipe"
                      className="inline-flex items-center gap-1 text-[11px] lg:text-xs font-bold text-brand-orange hover:text-brand-hover mt-1.5 group-hover:underline transition-colors"
                    >
                      <span>Conhecer trajetória</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Divisor Sutil */}
                  <div className="h-px bg-borderGray/70 w-full" />

                  {/* Bloco 2: Dr. Roberto Vieira */}
                  <div className="group">
                    <h3 className="text-base lg:text-lg xl:text-xl font-bold text-brand-orange">
                      Dr. Roberto Vieira
                    </h3>
                    <p className="text-[10px] lg:text-xs font-mono font-semibold text-ink-500 mt-0.5">
                      CRM 4331 • RQE 2579
                    </p>
                    <p className="text-xs lg:text-sm font-bold text-ink-900 mt-0.5">
                      Cirurgião Plástico
                    </p>
                    <p className="text-[11px] lg:text-xs text-ink-600 leading-relaxed mt-1">
                      Especialista em cirurgia plástica e transplante capilar FUE.
                    </p>
                    <Link
                      href="/quem-somos#equipe"
                      className="inline-flex items-center gap-1 text-[11px] lg:text-xs font-bold text-brand-orange hover:text-brand-hover mt-1.5 group-hover:underline transition-colors"
                    >
                      <span>Conhecer trajetória</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                </MotionFade>
              </div>

            </div>

            {/* ======================================================== */}
            {/* VERSÃO MOBILE (md:hidden): Mantida Exatamente Como Estava */}
            {/* ======================================================== */}
            <div className="block md:hidden relative w-full">
              <img
                src={clinicConfig.images.bannerMobile}
                alt="Dra. Janaina Tirapelle e Dr. Roberto Vieira — Diretores Médicos da Day Clinic"
                className="w-full h-auto object-cover max-h-[620px]"
              />

              {/* Tarja Informativa Inferior sobre o Banner */}
              <div className="p-6 bg-gradient-to-t from-ink-950/95 via-ink-950/80 to-transparent text-white flex flex-col items-start justify-between gap-6">
                <MotionFade variant="fadeLeft" delay={0.1} className="max-w-xl">
                  <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/20 rounded border border-brand-orange/30 mb-2">
                    Corpo Clínico & Direção Técnica
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Dra. Janaina Tirapelle & Dr. Roberto Vieira
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1">
                    Dermatologia Clínica e Estética (CRM/AM 5934 • RQE 4200) e Cirurgia Plástica & Transplante Capilar FUE (CRM/AM 4331 • RQE 2579).
                  </p>
                </MotionFade>

                <MotionFade variant="fadeRight" delay={0.15} className="flex flex-wrap items-center gap-3 shrink-0 w-full">
                  <Button
                    href={clinicConfig.whatsappUrl}
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    icon={<FaWhatsapp className="w-4 h-4" />}
                  >
                    Agendar com os especialistas
                  </Button>

                  <Button
                    href="/quem-somos"
                    variant="outline-white"
                    size="md"
                    withArrow
                    className="w-full justify-center"
                  >
                    Conhecer trajetória
                  </Button>
                </MotionFade>
              </div>
            </div>

          </div>
        </MotionFade>
      </div>
    </section>
  );
};

export default DoctorsBannerSection;
