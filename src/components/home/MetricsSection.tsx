"use client";

import React from "react";
import { Award, ShieldCheck, Users, Building2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import CounterNumber from "@/components/motion/CounterNumber";
import { MotionFade, MotionStaggerGroup, MotionStaggerChild } from "@/components/motion/MotionFade";

interface MetricItem {
  id: string;
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

const metrics: MetricItem[] = [
  {
    id: "exp",
    icon: <Award className="w-6 h-6 text-brand-orange" />,
    value: "+10 anos",
    label: "Experiência Clínica",
    description: "Trajetória consolidada e atualização médica contínua em centros de referência.",
  },
  {
    id: "procedimentos",
    icon: <ShieldCheck className="w-6 h-6 text-brand-orange" />,
    value: "+2.000",
    label: "Procedimentos Realizados",
    description: "Intervenções cirúrgicas e protocolos executados com foco em excelência e segurança.",
  },
  {
    id: "equipe",
    icon: <Users className="w-6 h-6 text-brand-orange" />,
    value: "100%",
    label: "Equipe Especializada",
    description: "Corpo clínico com títulos de especialista reconhecidos pela AMB, SBD e SBCP.",
  },
  {
    id: "estrutura",
    icon: <Building2 className="w-6 h-6 text-brand-orange" />,
    value: "Própria",
    label: "Estrutura Cirúrgica",
    description: "Ambientes em Adrianópolis projetados sob rigorosos padrões de biossegurança.",
  },
];

export const MetricsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-ink-950 text-white py-16 sm:py-20 border-y border-ink-800 overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFade variant="fadeUp" viewportAmount={0.25}>
          <MotionStaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {metrics.map((item) => (
              <MotionStaggerChild key={item.id}>
                <div className="flex flex-col p-6 rounded-xl bg-ink-900/60 border border-ink-800/80 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/40 h-full">
                  {/* Ícone com scale sutil 0.9 -> 1 */}
                  <motion.div
                    initial={shouldReduceMotion ? {} : { scale: 0.9, opacity: 0.8 }}
                    whileInView={shouldReduceMotion ? {} : { scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-5 border border-brand-orange/20"
                  >
                    {item.icon}
                  </motion.div>

                  {/* Contador suave com CounterNumber */}
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    <CounterNumber value={item.value} />
                  </div>

                  <div className="mt-2 text-sm font-bold uppercase tracking-wider text-brand-orange">
                    {item.label}
                  </div>

                  <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </MotionStaggerChild>
            ))}
          </MotionStaggerGroup>
        </MotionFade>
      </div>
    </section>
  );
};

export default MetricsSection;
