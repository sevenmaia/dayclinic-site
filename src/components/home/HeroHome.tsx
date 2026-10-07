"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { ShieldCheck, Building2, Cpu, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { clinicConfig } from "@/config/clinic";
import {
  fadeLeft,
  fadeUp,
  staggerContainer,
  staggerItem,
  EASE_PREMIUM,
} from "@/components/motion/MotionVariants";

export const HeroHome: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[680px] lg:min-h-[820px] flex flex-col justify-between pt-28 sm:pt-36 pb-12 bg-ink-950 text-white overflow-hidden">
      {/* Background com a foto REAL da fachada Day Clinic com escala suave */}
      <motion.div
        initial={shouldReduceMotion ? {} : { scale: 1.04, opacity: 0.9 }}
        animate={shouldReduceMotion ? {} : { scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: EASE_PREMIUM }}
        className="absolute inset-0 z-0"
      >
        <ImagePlaceholder
          name="hero-home"
          src={clinicConfig.images.heroFachada}
          alt="Fachada moderna da Day Clinic Tirapelle & Vieira em Manaus"
          label="Fachada da Day Clinic Tirapelle & Vieira"
          priorityLabel="Fachada Oficial"
          className="w-full h-full object-cover border-none"
        />
        {/* Overlay editorial escuro à esquerda e suave à direita */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/35" />
        <div className="absolute inset-0 bg-black/25" />
      </motion.div>

      {/* Conteúdo Principal do Hero com fadeLeft */}
      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <motion.div
          variants={shouldReduceMotion ? {} : fadeLeft}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Eyebrow em Laranja */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: -15 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE_PREMIUM }}
            className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-[0.20em] text-brand-orange bg-brand-orange/20 rounded-md border border-brand-orange/40 mb-6 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            REFERÊNCIA EM MANAUS
          </motion.div>

          {/* Título Principal H1 */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] drop-shadow-sm">
            Especialistas em{" "}
            <span className="text-brand-orange">transplante capilar</span>,
            dermatologia e cirurgia plástica.
          </h1>

          {/* Texto de Apoio */}
          <p className="mt-6 text-base sm:text-xl text-neutral-200 leading-relaxed max-w-2xl drop-shadow-sm">
            Tecnologia de ponta, experiência médica e acompanhamento individual em cada etapa do seu tratamento na Day Clinic Tirapelle & Vieira.
          </p>

          {/* CTAs Principais com fadeUp + delay */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25, ease: EASE_PREMIUM }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Button
              href={clinicConfig.whatsappUrl}
              variant="primary"
              size="lg"
              icon={<FaWhatsapp className="w-5 h-5" />}
              className="shadow-xl shadow-brand-orange/30 font-bold transition-transform duration-200 hover:-translate-y-0.5"
            >
              Agendar avaliação
            </Button>

            <Button
              href="/quem-somos"
              variant="outline-white"
              size="lg"
              withArrow
              className="backdrop-blur-md transition-transform duration-200 hover:-translate-y-0.5"
            >
              Conheça a clínica
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Faixa Inferior de Diferenciais Médicos com stagger fadeUp */}
      <motion.div
        variants={shouldReduceMotion ? {} : staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 border-t border-white/15 mt-12 pt-8 backdrop-blur-sm bg-ink-950/40"
      >
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: <ShieldCheck className="w-5 h-5" />,
                text: "Equipe médica especializada",
              },
              {
                icon: <Building2 className="w-5 h-5" />,
                text: "Estrutura cirúrgica própria",
              },
              {
                icon: <Cpu className="w-5 h-5" />,
                text: "Tecnologia avançada",
              },
              {
                icon: <MapPin className="w-5 h-5" />,
                text: "Adrianópolis • Manaus/AM",
              },
            ].map((diff, index) => (
              <motion.div
                key={index}
                variants={shouldReduceMotion ? {} : staggerItem}
                className="flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-brand-orange shrink-0 border border-white/10">
                  {diff.icon}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-neutral-200">
                  {diff.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroHome;
