"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building2,
  Cpu,
  UserCheck,
  ArrowRight,
  HeartPulse,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/home/FinalCTA";
import { clinicConfig } from "@/config/clinic";

type ServiceTab =
  | "todos"
  | "transplante"
  | "dermatologia"
  | "plastica"
  | "capilar"
  | "estetica";

export default function ServicosPage() {
  const [activeFilter, setActiveFilter] = useState<ServiceTab>("todos");

  const tabs: { id: ServiceTab; label: string }[] = [
    { id: "todos", label: "Todos os serviços" },
    { id: "transplante", label: "Transplante Capilar" },
    { id: "dermatologia", label: "Dermatologia" },
    { id: "plastica", label: "Cirurgia Plástica" },
    { id: "capilar", label: "Tratamentos Capilares" },
    { id: "estetica", label: "Estética Médica" },
  ];

  const shouldShow = (category: ServiceTab) => {
    return activeFilter === "todos" || activeFilter === category;
  };

  return (
    <div className="pt-24 sm:pt-28">
      {/* 1. Hero Serviços com os 4 diferenciais */}
      <section className="relative py-16 sm:py-24 bg-ink-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D98900_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.20em] text-brand-orange mb-4">
              NOSSOS SERVIÇOS
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Tratamentos completos para a sua saúde e bem-estar.
            </h1>
            <p className="mt-6 text-base sm:text-xl text-neutral-300 leading-relaxed">
              Atuação integrada em restauração capilar de alta precisão, cuidados dermatológicos e procedimentos cirúrgicos com segurança e tecnologia.
            </p>
          </div>

          {/* 4 Diferenciais em Cards Escuros Sobre o Hero */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-ink-900/80 border border-ink-800 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-orange shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-neutral-200">
                Equipe médica especializada
              </span>
            </div>
            <div className="p-4 rounded-xl bg-ink-900/80 border border-ink-800 flex items-center gap-3">
              <Building2 className="w-5 h-5 text-brand-orange shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-neutral-200">
                Estrutura cirúrgica própria
              </span>
            </div>
            <div className="p-4 rounded-xl bg-ink-900/80 border border-ink-800 flex items-center gap-3">
              <Cpu className="w-5 h-5 text-brand-orange shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-neutral-200">
                Tecnologia avançada
              </span>
            </div>
            <div className="p-4 rounded-xl bg-ink-900/80 border border-ink-800 flex items-center gap-3">
              <UserCheck className="w-5 h-5 text-brand-orange shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-neutral-200">
                Atendimento personalizado
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Barra de Filtros / Tabs */}
      <section className="sticky top-[72px] sm:top-[80px] z-30 bg-white/95 backdrop-blur-md border-b border-borderGray py-4 shadow-sm">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {tabs.map((tab) => {
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-all duration-150 ${
                    isSelected
                      ? "bg-brand-orange text-white shadow-sm"
                      : "bg-surface text-ink-700 hover:bg-borderGray/50 hover:text-ink-950 border border-borderGray"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Seções de Serviço (Alternando Imagem e Conteúdo) */}
      <div className="divide-y divide-borderGray bg-white">
        {/* SERVIÇO 1: TRANSPLANTE CAPILAR */}
        {shouldShow("transplante") && (
          <section id="transplante" className="py-20 sm:py-28">
            <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Imagem */}
                <div className="lg:col-span-6">
                  <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-soft border border-borderGray bg-ink-950">
                    <ImagePlaceholder
                      name="service-transplante"
                      src={clinicConfig.images.transplante}
                      alt="Transplante Capilar Fio a Fio (FUE)"
                      ratio="4/3"
                      label="Transplante Capilar Fio a Fio (FUE)"
                      variant="dark"
                      priorityLabel="Procedimento Cirúrgico"
                      className="w-full h-80 sm:h-[450px]"
                    />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
                      TRANSPLANTE CAPILAR
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-ink-950 leading-tight">
                      Transplante Capilar Fio a Fio (FUE)
                    </h2>
                    <p className="mt-4 text-base text-ink-600 leading-relaxed">
                      Restauração definitiva da calvície com a moderna técnica FUE. As unidades foliculares são extraídas uma a uma sem cicatriz linear, preservando a área doadora e garantindo alta densidade e naturalidade no desenho da linha frontal.
                    </p>
                  </div>

                  {/* Benefícios */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    {[
                      "Técnica FUE sem cicatriz linear",
                      "Planejamento milimétrico da linha frontal",
                      "Resultados extremamente naturais",
                      "Acompanhamento pós-operatório rigoroso",
                      "Equipe médica com foco exclusivo",
                      "Ambiente cirúrgico seguro e certificado",
                    ].map((b, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-800">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <Button
                      href={clinicConfig.whatsappUrl}
                      variant="primary"
                      size="md"
                      icon={<FaWhatsapp className="w-4 h-4" />}
                    >
                      Agendar avaliação capilar
                    </Button>
                    <Button
                      href="/contato"
                      variant="secondary"
                      size="md"
                    >
                      Dúvidas sobre o procedimento
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SERVIÇO 2: DERMATOLOGIA (Alternado: Conteúdo à Esquerda, Imagem à Direita) */}
        {shouldShow("dermatologia") && (
          <section id="dermatologia" className="py-20 sm:py-28 bg-surface">
            <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Conteúdo */}
                <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
                      DERMATOLOGIA
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-ink-950 leading-tight">
                      Dermatologia Clínica e Estética
                    </h2>
                    <p className="mt-4 text-base text-ink-600 leading-relaxed">
                      Diagnóstico preciso, prevenção e tratamentos modernos para a saúde da pele, cabelos e unhas. Nossa abordagem combina medicina baseada em evidências a tecnologias avançadas para restaurar a vitalidade e a beleza natural.
                    </p>
                  </div>

                  {/* Itens do Serviço */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    {[
                      "Controle de acne e oleosidade",
                      "Tratamento de manchas e melasma",
                      "Rejuvenescimento facial estruturado",
                      "Doenças de pele, cabelos e unhas",
                      "Procedimentos estéticos seguros",
                      "Tecnologias a laser e radiofrequência",
                    ].map((b, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-800">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button
                      href={clinicConfig.whatsappUrl}
                      variant="primary"
                      size="md"
                      icon={<FaWhatsapp className="w-4 h-4" />}
                    >
                      Agendar consulta dermatológica
                    </Button>
                  </div>
                </div>

                {/* Imagem */}
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="rounded-2xl overflow-hidden shadow-soft border border-borderGray bg-white">
                    <ImagePlaceholder
                      name="service-dermatologia"
                      src={clinicConfig.images.dermatologia}
                      alt="Dermatologia Clínica e Avançada"
                      ratio="4/3"
                      label="Dermatologia Clínica e Avançada"
                      variant="light"
                      priorityLabel="Cuidados da Pele"
                      className="w-full h-80 sm:h-[450px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SERVIÇO 3: CIRURGIA PLÁSTICA (Imagem à Esquerda, Conteúdo à Direita) */}
        {shouldShow("plastica") && (
          <section id="plastica" className="py-20 sm:py-28">
            <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Imagem */}
                <div className="lg:col-span-6">
                  <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-soft border border-borderGray bg-ink-950">
                    <ImagePlaceholder
                      name="service-cirurgia-plastica"
                      src={clinicConfig.images.centroCirurgico}
                      alt="Cirurgia Plástica Estética e Reparadora"
                      ratio="4/3"
                      label="Cirurgia Plástica Estética e Reparadora"
                      variant="dark"
                      priorityLabel="Centro Cirúrgico Próprio"
                      className="w-full h-80 sm:h-[450px]"
                    />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
                      CIRURGIA PLÁSTICA
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-ink-950 leading-tight">
                      Procedimentos Estéticos e Reparadores
                    </h2>
                    <p className="mt-4 text-base text-ink-600 leading-relaxed">
                      Intervenções cirúrgicas planejadas de forma personalizada para realçar a harmonia corporal e facial. Realizadas em centro cirúrgico com infraestrutura completa e suporte anestésico especializado.
                    </p>
                  </div>

                  {/* Procedimentos editáveis */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    {[
                      "Blefaroplastia (pálpebras)",
                      "Rinoplastia e remodelação nasal",
                      "Otoplastia (orelhas)",
                      "Cirurgias de contorno corporal",
                      "Lipoaspiração e definição",
                      "Cirurgias reparadoras e cicatrizes",
                    ].map((b, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-800">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button
                      href={clinicConfig.whatsappUrl}
                      variant="primary"
                      size="md"
                      icon={<FaWhatsapp className="w-4 h-4" />}
                    >
                      Agendar avaliação cirúrgica
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SERVIÇO 4: TRATAMENTOS CAPILARES (Alternado: Conteúdo à Esquerda, Imagem à Direita) */}
        {shouldShow("capilar") && (
          <section id="capilar" className="py-20 sm:py-28 bg-surface">
            <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Conteúdo */}
                <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
                      TRATAMENTOS CAPILARES
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-ink-950 leading-tight">
                      Soluções para a saúde dos seus cabelos
                    </h2>
                    <p className="mt-4 text-base text-ink-600 leading-relaxed">
                      Protocolos clínicos indicados para fases iniciais ou moderadas de afinamento capilar, controle da queda e fortalecimento do couro cabeludo, além de suporte essencial para pacientes pré e pós-transplante.
                    </p>
                  </div>

                  {/* Protocolos */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    {[
                      "MMP Capilar (microinfusão de medicamentos)",
                      "Bioestimuladores foliculares",
                      "Terapias injetáveis de alta absorção",
                      "LED e Laserterapia capilar de baixa intensidade",
                      "Protocolos médicos personalizados",
                      "Acompanhamento tricoscópico periódico",
                    ].map((b, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-800">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button
                      href={clinicConfig.whatsappUrl}
                      variant="primary"
                      size="md"
                      icon={<FaWhatsapp className="w-4 h-4" />}
                    >
                      Agendar protocolo capilar
                    </Button>
                  </div>
                </div>

                {/* Imagem */}
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="rounded-2xl overflow-hidden shadow-soft border border-borderGray bg-white">
                    <ImagePlaceholder
                      name="service-tratamentos-capilares"
                      src={clinicConfig.images.tricologia}
                      alt="MMP e Protocolos Médicos Capilares"
                      ratio="4/3"
                      label="MMP e Protocolos Médicos Capilares"
                      variant="light"
                      priorityLabel="Tricologia Clínica"
                      className="w-full h-80 sm:h-[450px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SERVIÇO 5: ESTÉTICA MÉDICA (Imagem à Esquerda, Conteúdo à Direita) */}
        {shouldShow("estetica") && (
          <section id="estetica" className="py-20 sm:py-28">
            <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Imagem */}
                <div className="lg:col-span-6">
                  <div className="rounded-2xl overflow-hidden shadow-soft border border-borderGray bg-surface">
                    <ImagePlaceholder
                      name="service-estetica"
                      src={clinicConfig.images.estetica}
                      alt="Procedimentos Estéticos Não Cirúrgicos"
                      ratio="4/3"
                      label="Procedimentos Estéticos Não Cirúrgicos"
                      variant="light"
                      priorityLabel="Cosmiatria Médica"
                      className="w-full h-80 sm:h-[450px]"
                    />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
                      ESTÉTICA MÉDICA
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-ink-950 leading-tight">
                      Procedimentos estéticos não cirúrgicos
                    </h2>
                    <p className="mt-4 text-base text-ink-600 leading-relaxed">
                      Tratamentos cosmiátricos avançados conduzidos exclusivamente por médicos dermatologistas para harmonização elegante, melhora da textura dérmica e estímulo de colágeno sem exageros.
                    </p>
                  </div>

                  {/* Procedimentos estéticos */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    {[
                      "Limpeza de pele profunda médica",
                      "Peelings químicos seriados",
                      "Microagulhamento robótico",
                      "Preenchimentos com ácido hialurônico",
                      "Aplicação de toxina botulínica",
                      "Bioestimuladores de colágeno",
                    ].map((b, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-800">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button
                      href={clinicConfig.whatsappUrl}
                      variant="primary"
                      size="md"
                      icon={<FaWhatsapp className="w-4 h-4" />}
                    >
                      Agendar procedimento estético
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* 4. CTA Final */}
      <FinalCTA
        title="Dúvidas sobre o procedimento ideal para você?"
        subtitle="Agende uma consulta avaliativa com nossa equipe médica para traçar um plano individualizado."
      />
    </div>
  );
}
