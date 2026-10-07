import React from "react";
import HeroHome from "@/components/home/HeroHome";
import ServicesHomeSection from "@/components/home/ServicesHomeSection";
import DoctorsBannerSection from "@/components/home/DoctorsBannerSection";
import DoctorsHomeSection from "@/components/home/DoctorsHomeSection";
import TransplanteSection from "@/components/home/TransplanteSection";
import MetricsSection from "@/components/home/MetricsSection";
import ClinicGallery from "@/components/home/ClinicGallery";
import DifferentialsSection from "@/components/home/DifferentialsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PapoEspecialistaPreview from "@/components/home/PapoEspecialistaPreview";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero com Fachada Oficial Real */}
      <HeroHome />

      {/* 2. Especialidades / Serviços em Grid */}
      <ServicesHomeSection />

      {/* 3. Banner Oficial dos Médicos Fundadores (banner pc / banner mobile) */}
      <DoctorsBannerSection />

      {/* 4. Corpo Clínico (Dra. Janaina e Dr. Roberto) */}
      <DoctorsHomeSection />

      {/* 4. Destaque Transplante Capilar FUE */}
      <TransplanteSection />

      {/* 5. Métricas e Conquistas Institucionais */}
      <MetricsSection />

      {/* 6. Estrutura da Clínica / Galeria de Ambientes */}
      <ClinicGallery />

      {/* 7. Pilares & Diferenciais Médicos */}
      <DifferentialsSection />

      {/* 8. Depoimentos Éticos / Histórias de Resultados */}
      <TestimonialsSection />

      {/* 9. Papo de Especialista (Blog Preview) */}
      <PapoEspecialistaPreview />

      {/* 10. Chamada de Agendamento Final */}
      <FinalCTA />
    </>
  );
}
