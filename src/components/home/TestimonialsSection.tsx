"use client";

import React from "react";
import { Star, MessageSquareQuote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { MotionFade } from "@/components/motion/MotionFade";

interface TestimonialMock {
  id: string;
  author: string;
  treatment: string;
  content: string;
  rating: number;
  date: string;
}

const mockTestimonials: TestimonialMock[] = [
  {
    id: "depoimento-1",
    author: "Paciente A. S. [Exemplo]",
    treatment: "Transplante Capilar FUE",
    content:
      "Atenção impecável do Dr. Roberto e toda equipe durante o procedimento. O resultado da linha frontal superou as expectativas de naturalidade.",
    rating: 5,
    date: "Avaliação verificada",
  },
  {
    id: "depoimento-2",
    author: "Paciente M. R. [Exemplo]",
    treatment: "Dermatologia & Tratamentos Capilares",
    content:
      "A Dra. Janaina tem um olhar clínico extremamente minucioso e acolhedor. O protocolo capilar recuperou o volume dos meus cabelos.",
    rating: 5,
    date: "Avaliação verificada",
  },
  {
    id: "depoimento-3",
    author: "Paciente C. F. [Exemplo]",
    treatment: "Cirurgia Plástica & Recuperação",
    content:
      "A estrutura da clínica transmite total segurança de ambiente cirúrgico com o conforto de um atendimento privado e discreto.",
    rating: 5,
    date: "Avaliação verificada",
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-surface border-t border-borderGray overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFade variant="fadeUp" className="mb-14">
          <SectionHeading
            eyebrow="DEPOIMENTOS"
            title="Histórias reais de resultados."
            subtitle="O compromisso da Day Clinic é com o acolhimento humano, a precisão cirúrgica e a recuperação da sua autoestima."
            align="center"
          />
        </MotionFade>

        {/* Cards com o card central surgindo levemente antes (delay: card 0 = 0.08s, card 1 (central) = 0s, card 2 = 0.12s) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockTestimonials.map((item, idx) => {
            const delayTime = idx === 1 ? 0 : idx === 0 ? 0.08 : 0.14;
            return (
              <MotionFade key={item.id} variant="fadeUp" delay={delayTime}>
                <div className="bg-white p-7 rounded-2xl border border-borderGray flex flex-col justify-between shadow-sm hover:shadow-card transition-all duration-300 h-full">
                  <div>
                    {/* Estrelas */}
                    <div className="flex items-center gap-1 text-brand-orange mb-4">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-brand-orange" />
                      ))}
                    </div>

                    <div className="text-ink-900/20 mb-3">
                      <MessageSquareQuote className="w-8 h-8 text-brand-orange/30" />
                    </div>

                    <p className="text-sm text-ink-700 leading-relaxed italic">
                      &ldquo;{item.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-borderGray-subtle">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-ink-950">
                          {item.author}
                        </h4>
                        <span className="text-xs text-brand-orange font-medium">
                          {item.treatment}
                        </span>
                      </div>
                      <span className="text-[10px] text-ink-400">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>
              </MotionFade>
            );
          })}
        </div>

        <p className="text-center text-xs text-ink-400 mt-10">
          * Depoimentos ilustrativos formatados para apresentação de layout. Relatos reais de pacientes são mantidos sob consentimento e sigilo médico ético.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
