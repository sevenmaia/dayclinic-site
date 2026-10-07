"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { clinicConfig } from "@/config/clinic";
import Button from "@/components/ui/Button";
import { MotionFade } from "@/components/motion/MotionFade";

interface FinalCTAProps {
  title?: string;
  subtitle?: string;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  title = "Seu tratamento começa com uma boa avaliação.",
  subtitle = "Converse com nossa equipe e agende sua consulta.",
}) => {
  return (
    <section className="relative py-24 sm:py-32 bg-ink-950 text-white overflow-hidden">
      {/* Background estável com overlay sutil */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D98900_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Luz ambiente angular sutil em laranja */}
      <div className="absolute -top-32 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <MotionFade variant="fadeUp">
          <div className="inline-block px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-brand-orange border border-brand-orange/30 rounded-full bg-brand-orange/10 mb-6">
            Atendimento Personalizado
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
            {title}
          </h2>
        </MotionFade>

        <MotionFade variant="fadeUp" delay={0.12}>
          <p className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </MotionFade>

        <MotionFade variant="fadeUp" delay={0.24}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={clinicConfig.whatsappUrl}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto px-8 py-4 text-base shadow-lg shadow-brand-orange/20 transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
              icon={<FaWhatsapp className="w-5 h-5" />}
            >
              Agendar pelo WhatsApp
            </Button>

            <Button
              href="/contato"
              variant="outline-white"
              size="lg"
              className="w-full sm:w-auto px-8 py-4 text-base transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Outros canais de contato
            </Button>
          </div>

          <p className="mt-8 text-xs text-neutral-400">
            Equipe médica disponível para triagem e esclarecimento de dúvidas sobre procedimentos.
          </p>
        </MotionFade>
      </div>
    </section>
  );
};

export default FinalCTA;
