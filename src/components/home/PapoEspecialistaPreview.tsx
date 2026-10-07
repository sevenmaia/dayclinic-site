"use client";

import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ArticleCard from "@/components/blog/ArticleCard";
import { articlesData } from "@/data/articles";
import { MotionFade, MotionStaggerGroup, MotionStaggerChild } from "@/components/motion/MotionFade";

export const PapoEspecialistaPreview: React.FC = () => {
  const latestArticles = articlesData.slice(0, 3);

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-borderGray overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFade variant="fadeLeft" className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="PAPO DE ESPECIALISTA"
              title="Conteúdos para a sua saúde e bem-estar."
              subtitle="Artigos e orientações médicas elaborados pelo corpo clínico da Day Clinic para esclarecer suas dúvidas com profundidade."
            />

            <Button
              href="/papo-de-especialista"
              variant="secondary"
              size="md"
              withArrow
              className="shrink-0"
            >
              Ver todos os artigos
            </Button>
          </div>
        </MotionFade>

        {/* Cards de Artigos em Stagger FadeUp Controlado */}
        <MotionStaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((article) => (
            <MotionStaggerChild key={article.id}>
              <ArticleCard article={article} />
            </MotionStaggerChild>
          ))}
        </MotionStaggerGroup>
      </div>
    </section>
  );
};

export default PapoEspecialistaPreview;
