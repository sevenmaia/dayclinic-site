"use client";

import React from "react";
import { ShieldCheck, Building2, Cpu, HeartHandshake } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { MotionFade, MotionStaggerGroup, MotionStaggerChild } from "@/components/motion/MotionFade";

export const DifferentialsSection: React.FC = () => {
  const items = [
    {
      icon: <ShieldCheck className="w-7 h-7 text-brand-orange" />,
      title: "Especialistas Titulados",
      description:
        "Médicos com especialização reconhecida pelas sociedades brasileiras (SBD e SBCP) e constante atualização científica.",
    },
    {
      icon: <Building2 className="w-7 h-7 text-brand-orange" />,
      title: "Centro Cirúrgico Próprio",
      description:
        "Instalações exclusivas para transplantes e cirurgias menores, garantindo privacidade e controle total de assepsia.",
    },
    {
      icon: <Cpu className="w-7 h-7 text-brand-orange" />,
      title: "Tecnologia de Precisão",
      description:
        "Aparelhos modernos para mapeamento folicular digital, microscopia cirúrgica e tratamentos dermatológicos de vanguarda.",
    },
    {
      icon: <HeartHandshake className="w-7 h-7 text-brand-orange" />,
      title: "Acompanhamento Contínuo",
      description:
        "Protocolo assistencial humanizado que acompanha o paciente desde o primeiro diagnóstico até o pós-operatório tardio.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-t border-borderGray overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFade variant="fadeUp" className="mb-14">
          <SectionHeading
            eyebrow="POR QUE A DAY CLINIC"
            title="Diferenciais que definem nossa prática médica."
            subtitle="Cada detalhe do nosso atendimento foi pensado para unir o mais elevado rigor técnico ao bem-estar do paciente."
            align="center"
          />
        </MotionFade>

        <MotionStaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <MotionStaggerChild key={idx}>
              <div className="p-6 rounded-xl bg-surface border border-borderGray hover:border-brand-orange/40 hover:shadow-card transition-all duration-300 flex flex-col items-center text-center group h-full">
                <div className="w-14 h-14 rounded-xl bg-white border border-borderGray flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-ink-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-ink-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </MotionStaggerChild>
          ))}
        </MotionStaggerGroup>
      </div>
    </section>
  );
};

export default DifferentialsSection;
