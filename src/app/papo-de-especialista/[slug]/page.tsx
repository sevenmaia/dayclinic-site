import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/home/FinalCTA";
import { articlesData } from "@/data/articles";
import { clinicConfig } from "@/config/clinic";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticleDetailsPage({ params }: ArticlePageProps) {
  const article = articlesData.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articlesData
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <div className="pt-24 sm:pt-28">
      {/* Header do Artigo */}
      <section className="bg-surface border-b border-borderGray py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            href="/papo-de-especialista"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange hover:text-brand-hover mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para o blog</span>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-brand-orange text-white rounded">
              {article.category}
            </span>
            <div className="flex items-center gap-2 text-xs text-ink-500">
              <Calendar className="w-3.5 h-3.5 text-brand-orange" />
              <span>{article.date}</span>
              {article.readTime && (
                <>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </>
              )}
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-950 leading-tight">
            {article.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-ink-600 leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Imagem de Capa e Conteúdo */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Slot de Imagem do Artigo */}
          <div className="rounded-2xl overflow-hidden shadow-soft border border-borderGray mb-12 bg-ink-950">
            <ImagePlaceholder
              name={article.imageSlot}
              src={article.imageSrc}
              alt={article.title}
              ratio="16/9"
              label={article.title}
              variant="dark"
              priorityLabel="Artigo Papo de Especialista"
              className="w-full h-80 sm:h-[460px]"
            />
          </div>

          {/* Corpo do Artigo Editorial */}
          <div className="prose prose-lg max-w-none text-ink-800 space-y-6 leading-relaxed">
            <p className="text-lg text-ink-700 leading-relaxed font-normal">
              A evolução constante dos procedimentos médicos voltados para a restauração capilar e estética dermatológica exige clareza técnica e transparência. Na Day Clinic Tirapelle & Vieira, cada orientação médica fundamenta-se nas melhores evidências científicas e na compreensão biológica individual do paciente.
            </p>

            <h2 className="text-2xl font-bold text-ink-950 pt-4">
              Compreendendo o Diagnóstico e as Particularidades
            </h2>
            <p>
              Qualquer intervenção médica de sucesso tem início em uma anamnese detalhada. O exame clínico minucioso permite identificar fatores subjacentes como predisposição genética, desequilíbrios nutricionais, hábitos diários e o impacto das condições climáticas regionais.
            </p>

            <div className="p-6 my-8 rounded-xl bg-surface border-l-4 border-brand-orange">
              <p className="text-sm font-semibold text-ink-900 italic">
                &ldquo;A harmonia e a naturalidade de um resultado não derivam de exageros técnicos, mas sim do respeito estrito à anatomia e às proporções originais de cada paciente.&rdquo;
              </p>
              <span className="mt-2 block text-xs text-brand-orange font-bold uppercase tracking-wider">
                — Corpo Clínico Day Clinic
              </span>
            </div>

            <h2 className="text-2xl font-bold text-ink-950 pt-4">
              A Abordagem Integrada da Day Clinic
            </h2>
            <p>
              O diferencial da nossa prática médica está no alinhamento de condutas. O paciente que realiza uma cirurgia ou transplante capilar dispõe de suporte contínuo de suporte dermatológico e acompanhamento dos tecidos no pré e pós-operatório, reduzindo desconfortos e acelerando o processo de cicatrização.
            </p>

            <h3 className="text-xl font-bold text-ink-950 pt-2">
              Orientações de Segurança
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-ink-700 text-sm">
              <li>Nunca inicie medicações orais ou tópicas para calvície sem prescrição médica especializada.</li>
              <li>Certifique-se de que o profissional responsável possui registro RQE na especialidade indicada.</li>
              <li>Respeite o repouso e os protocolos de cuidados higiênicos prescritos pela equipe médica.</li>
            </ul>
          </div>

          {/* Bloco de Autor Médico */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-surface border border-borderGray flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-brand-soft border-2 border-brand-orange flex items-center justify-center text-brand-orange font-bold text-xl shrink-0">
              DC
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-brand-orange font-bold">
                Publicação Médica
              </span>
              <h4 className="text-lg font-bold text-ink-950">
                Corpo Clínico Day Clinic Tirapelle & Vieira
              </h4>
              <p className="mt-1 text-xs text-ink-600 leading-relaxed">
                Artigo revisado tecnicamente pelos diretores médicos Dra. Janaina Tirapelle (Dermatologista) e Dr. Roberto Vieira (Cirurgião Plástico).
              </p>
            </div>
          </div>

          {/* Ações e Compartilhamento */}
          <div className="mt-8 pt-6 border-t border-borderGray flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/papo-de-especialista"
              className="text-xs font-bold uppercase tracking-wider text-ink-600 hover:text-brand-orange transition-colors"
            >
              ← Ver mais artigos do blog
            </Link>

            <Button
              href={clinicConfig.whatsappUrl}
              variant="primary"
              size="sm"
              icon={<FaWhatsapp className="w-4 h-4" />}
            >
              Agendar consulta sobre o tema
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <FinalCTA />
    </div>
  );
}
