import React from "react";
import type { Metadata } from "next";
import { Compass, Eye, Heart, Shield, Award, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";
import MetricsSection from "@/components/home/MetricsSection";
import DoctorCard from "@/components/home/DoctorCard";
import ClinicGallery from "@/components/home/ClinicGallery";
import FinalCTA from "@/components/home/FinalCTA";
import { clinicConfig } from "@/config/clinic";

export const metadata: Metadata = {
  title: "Quem Somos | Day Clinic Tirapelle & Vieira",
  description:
    "Conheça a história, o propósito e o corpo clínico da Day Clinic em Manaus. Excelência médica em transplante capilar, cirurgia plástica e dermatologia.",
};

export default function QuemSomosPage() {
  return (
    <div className="pt-24 sm:pt-28">
      {/* 1. Hero Quem Somos com foto de fundo da fachada */}
      <section className="relative py-20 sm:py-28 bg-ink-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={clinicConfig.images.heroFachada}
            alt="Fachada Day Clinic Tirapelle & Vieira"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ink-950/85 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.20em] text-brand-orange mb-4">
              QUEM SOMOS
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Experiência, tecnologia e cuidado em cada detalhe.
            </h1>
            <p className="mt-6 text-base sm:text-xl text-neutral-300 leading-relaxed">
              A Day Clinic Tirapelle & Vieira nasceu com o compromisso de unir a alta precisão da medicina cirúrgica ao acolhimento e à atenção que cada paciente merece.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Nossa História / Propósito com a foto oficial dos fundadores (quem somos.png) */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Imagem Oficial dos Fundadores: quem somos.png */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl lg:rounded-3xl overflow-hidden shadow-soft border border-borderGray bg-surface">
                <img
                  src={clinicConfig.images.quemSomosMedicos}
                  alt="Dra. Janaina Tirapelle e Dr. Roberto Vieira — Fundadores da Day Clinic"
                  className="w-full h-auto object-cover max-h-[620px] transition-transform duration-500 hover:scale-102"
                />
              </div>
            </div>

            {/* Conteúdo Institucional */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="NOSSA HISTÓRIA"
                title="Uma trajetória construída com propósito."
                subtitle="Desde o início, nosso objetivo foi consolidar em Adrianópolis/Manaus um centro integrado de medicina estética e cirúrgica com padrão de grandes capitais mundiais."
              />

              <div className="space-y-4 text-sm sm:text-base text-ink-700 leading-relaxed">
                <p>
                  Idealizada pela <strong className="text-ink-950">Dra. Janaina Tirapelle</strong> (Dermatologista SBD • CRM/AM 5934 • RQE 4200) e pelo <strong className="text-ink-950">Dr. Roberto Vieira</strong> (Cirurgião Plástico SBCP & Especialista em Transplante Capilar FUE • CRM/AM 4331 • RQE 2579), a Day Clinic integra diagnósticos precisos e procedimentos minimamente invasivos sob uma mesma filosofia: o paciente no centro de todas as decisões médicas.
                </p>
                <p>
                  Nossa sede própria na Av. Maceió foi planejada com volumetria arquitetônica contemporânea, proporcionando privacidade total, conforto sensorial e centro cirúrgico exclusivo com fluxos de biossegurança hospitalar. Aqui, a tecnologia é uma aliada a serviço da naturalidade e da recuperação da autoestima.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Button
                  href={clinicConfig.whatsappUrl}
                  variant="primary"
                  size="md"
                >
                  Agendar consulta com os diretores
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Missão, Visão e Valores (3 Cards) */}
      <section className="py-20 sm:py-24 bg-surface border-t border-borderGray">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="NOSSOS PILARES"
            title="Princípios que orientam cada decisão médica."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card Missão */}
            <div className="p-8 rounded-2xl bg-white border border-borderGray shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-soft text-brand-orange flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-ink-950 mb-3">Missão</h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  Proporcionar procedimentos dermatológicos e cirúrgicos com o mais elevado padrão de segurança, ética e rigor técnico, resgatando a autoestima e a saúde integral de nossos pacientes.
                </p>
              </div>
            </div>

            {/* Card Visão */}
            <div className="p-8 rounded-2xl bg-white border border-borderGray shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-soft text-brand-orange flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-ink-950 mb-3">Visão</h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  Ser o centro de referência e excelência no Norte do Brasil em transplante capilar FUE, cirurgia plástica e rejuvenescimento, reconhecido pela naturalidade dos resultados e inovação contínua.
                </p>
              </div>
            </div>

            {/* Card Valores */}
            <div className="p-8 rounded-2xl bg-white border border-borderGray shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-soft text-brand-orange flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-ink-950 mb-3">Valores</h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  Ética inegociável, transparência diagnóstica, precisão cirúrgica, respeito à individualidade biológica e acompanhamento pós-operatório dedicado e contínuo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Métricas Institucionais */}
      <MetricsSection />

      {/* 5. Corpo Clínico Detalhado */}
      <section id="equipe" className="py-20 sm:py-28 bg-white border-t border-borderGray">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="DIREÇÃO MÉDICA"
            title="Corpo clínico titular e responsável técnico."
            subtitle="Conheça os profissionais que lideram a Day Clinic Tirapelle & Vieira com dedicação exclusiva e excelência acadêmica."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {clinicConfig.doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Estrutura e Galeria da Clínica */}
      <ClinicGallery />

      {/* 7. CTA Final */}
      <FinalCTA
        title="Agende sua consulta e venha conhecer nossa estrutura."
        subtitle="Estamos prontos para acolher você em Adrianópolis, Manaus, com toda a segurança e atenção médica necessária."
      />
    </div>
  );
}
