"use client";

import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/home/ServiceCard";
import { servicesData } from "@/data/services";
import { MotionFade, MotionStaggerGroup, MotionStaggerChild } from "@/components/motion/MotionFade";

export const ServicesHomeSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFade variant="fadeUp" className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="NOSSAS ESPECIALIDADES"
              title="Tratamentos completos para a sua saúde e bem-estar."
              subtitle="Atuação médica integrada unindo dermatologia de precisão, restauração capilar avançada e cirurgia plástica."
            />

            <Button
              href="/servicos"
              variant="secondary"
              size="md"
              withArrow
              className="shrink-0"
            >
              Ver todas as especialidades
            </Button>
          </div>
        </MotionFade>

        {/* Grid de Cards em Cascata Controlada (stagger: 80–120ms) */}
        <MotionStaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.slice(0, 4).map((service) => (
            <MotionStaggerChild key={service.id}>
              <ServiceCard service={service} />
            </MotionStaggerChild>
          ))}
        </MotionStaggerGroup>
      </div>
    </section>
  );
};

export default ServicesHomeSection;
