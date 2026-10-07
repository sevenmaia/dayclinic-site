"use client";

import React from "react";
import { CheckCircle2, Sparkles, UserCheck, Shield } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { clinicConfig } from "@/config/clinic";
import { MotionFade, MotionStaggerGroup, MotionStaggerChild } from "@/components/motion/MotionFade";

export const TransplanteSection: React.FC = () => {
  const highlights = [
    {
      title: "Técnica FUE Avançada",
      desc: "Extração de unidades foliculares individuais sem cortes lineares nem cicatriz aparente.",
      icon: <Sparkles className="w-5 h-5 text-brand-orange" />,
    },
    {
      title: "Planejamento Individualizado",
      desc: "Desenho da linha frontal respeitando a simetria facial, densidade ideal e naturalidade.",
      icon: <UserCheck className="w-5 h-5 text-brand-orange" />,
    },
    {
      title: "Estrutura Cirúrgica Especializada",
      desc: "Procedimento realizado em centro cirúrgico próprio com microscopia de alta precisão.",
      icon: <Shield className="w-5 h-5 text-brand-orange" />,
    },
    {
      title: "Acompanhamento Contínuo",
      desc: "Protocolo pós-operatório completo com revisões periódicas e estímulo ao crescimento folicular.",
      icon: <CheckCircle2 className="w-5 h-5 text-brand-orange" />,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-borderGray overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Lado Esquerdo: Imagem entrando pela esquerda (fadeLeft) */}
          <div className="lg:col-span-6 relative">
            <MotionFade variant="fadeLeft">
              <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-soft border border-borderGray bg-ink-950">
                <ImagePlaceholder
                  name="transplante-procedimento"
                  src={clinicConfig.images.transplante}
                  alt="Procedimento de Transplante Capilar FUE na Day Clinic"
                  ratio="4/3"
                  label="Procedimento de Transplante Capilar FUE"
                  variant="dark"
                  priorityLabel="Procedimento FUE"
                  className="w-full h-80 sm:h-[450px]"
                />

                {/* Tag flutuante de diferenciação médica */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-3.5 sm:p-4 rounded-md sm:rounded-lg bg-white/95 backdrop-blur-md shadow-card border border-borderGray-subtle">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-orange/15 text-brand-orange flex items-center justify-center font-bold text-sm">
                      FUE
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-ink-900">
                        Restauração Capilar de Alta Densidade
                      </h4>
                      <p className="text-[11px] text-ink-600">
                        Fios naturais transplantados para recuperação definitiva da autoestima.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </MotionFade>
          </div>

          {/* Lado Direito: Conteúdo entrando pela direita (fadeRight) */}
          <div className="lg:col-span-6 space-y-6">
            <MotionFade variant="fadeRight">
              <SectionHeading
                eyebrow="TRANSPLANTE CAPILAR"
                title="Tecnologia e experiência para resultados naturais."
                subtitle="Combinamos rigor cirúrgico com sensibilidade estética para devolver densidade e jovialidade de forma harmônica."
              />
            </MotionFade>

            {/* Benefícios com stagger fadeUp */}
            <MotionStaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {highlights.map((item, idx) => (
                <MotionStaggerChild key={idx}>
                  <div className="p-4 rounded-xl bg-surface border border-borderGray/80 flex flex-col justify-between h-full">
                    <div className="mb-3">{item.icon}</div>
                    <h4 className="text-sm font-bold text-ink-950">{item.title}</h4>
                    <p className="mt-1 text-xs text-ink-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </MotionStaggerChild>
              ))}
            </MotionStaggerGroup>

            <MotionFade variant="fadeUp" delay={0.2} className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                href="/servicos#transplante"
                variant="primary"
                size="md"
                withArrow
              >
                Saiba mais sobre o transplante
              </Button>
              <Button
                href={clinicConfig.whatsappUrl}
                variant="secondary"
                size="md"
              >
                Agendar avaliação capilar
              </Button>
            </MotionFade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransplanteSection;
