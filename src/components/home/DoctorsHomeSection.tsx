"use client";

import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import DoctorCard from "@/components/home/DoctorCard";
import { clinicConfig } from "@/config/clinic";
import { MotionFade } from "@/components/motion/MotionFade";

export const DoctorsHomeSection: React.FC = () => {
  return (
    <section id="medicos" className="py-20 sm:py-28 bg-white border-t border-borderGray overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFade variant="fadeLeft" className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="CORPO CLÍNICO"
              title="Experiência e dedicação em cada atendimento."
              subtitle="Direção técnica médica com sólida formação acadêmica, títulos de especialista pela SBD e SBCP, e dedicação integral ao paciente."
            />

            <Button
              href="/quem-somos#equipe"
              variant="secondary"
              size="md"
              withArrow
              className="shrink-0"
            >
              Conheça nossa equipe
            </Button>
          </div>
        </MotionFade>

        {/* Grade Editorial com Entrada Cruzada (Dra. Janaina pela esquerda, Dr. Roberto pela direita) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <MotionFade variant="fadeLeft" delay={0.1}>
            <DoctorCard doctor={clinicConfig.doctors[0]} />
          </MotionFade>

          <MotionFade variant="fadeRight" delay={0.15}>
            <DoctorCard doctor={clinicConfig.doctors[1]} />
          </MotionFade>
        </div>
      </div>
    </section>
  );
};

export default DoctorsHomeSection;
