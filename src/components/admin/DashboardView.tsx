"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  FileEdit,
  Stethoscope,
  AlertTriangle,
  TrendingUp,
  MessageCircle,
  Users,
  Eye,
  CheckCircle2,
  Calendar,
  ChevronRight,
  Search,
  ArrowUpRight,
  ExternalLink,
  Plus,
} from "lucide-react";
import {
  ADMIN_INITIAL_ARTICLES,
  UPCOMING_PUBLICATIONS,
  AdminArticle,
} from "@/data/admin-data";

interface DashboardViewProps {
  onEditArticle?: (article: AdminArticle) => void;
  onNewArticle?: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ onEditArticle, onNewArticle }) => {
  const [timeFilter, setTimeFilter] = useState<"7d" | "30d" | "90d">("30d");

  return (
    <div className="space-y-8 pb-12">
      {/* 1. TOPO / BANNER DE BOAS-VINDAS COM FOTO DOS MÉDICOS FUNDADORES */}
      <div className="relative rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-r from-[#FFF4E3] via-[#FFF9F0] to-[#FFFFFF] border border-[#E7E7E7] shadow-xs p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        <div className="max-w-xl space-y-3 z-10">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#D98900]">
            BEM-VINDO(A)
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111111] leading-tight">
            Seu conteúdo, mais <br />
            visibilidade e resultados.
          </h1>
          <p className="text-xs sm:text-sm text-[#737373] leading-relaxed max-w-md">
            Gerencie seu site, blog e informações da clínica em um só lugar com alta fidelidade e SEO/AEO otimizado.
          </p>
        </div>

        {/* Imagem dos Médicos extraída com alta fidelidade */}
        <div className="relative w-72 h-44 shrink-0 rounded-md sm:rounded-lg overflow-hidden shadow-sm border border-[#E7E7E7] bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/admin/admin-welcome-doctors.png"
            alt="Dra. Janaina Tirapelle e Dr. João Vieira"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* 2. OS 4 CARDS DE STATUS DINÂMICOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Card 1: Publicados */}
        <div className="bg-white p-4 sm:p-5 rounded-lg sm:rounded-xl border border-[#E7E7E7] shadow-xs flex items-center gap-3.5 sm:gap-4 hover:border-[#D98900] transition-colors">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-md sm:rounded-lg bg-[#EAF7EE] text-[#26944B] flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <span className="text-2xl font-extrabold text-[#111111] leading-none block">
              12
            </span>
            <span className="text-xs text-[#737373] font-medium">
              Artigos publicados
            </span>
          </div>
        </div>

        {/* Card 2: Rascunhos */}
        <div className="bg-white p-4 sm:p-5 rounded-lg sm:rounded-xl border border-[#E7E7E7] shadow-xs flex items-center gap-3.5 sm:gap-4 hover:border-[#D98900] transition-colors">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-md sm:rounded-lg bg-[#FFF4E3] text-[#D98900] flex items-center justify-center shrink-0">
            <FileEdit className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <span className="text-2xl font-extrabold text-[#111111] leading-none block">
              3
            </span>
            <span className="text-xs text-[#737373] font-medium">
              Rascunhos
            </span>
          </div>
        </div>

        {/* Card 3: Em revisão médica */}
        <div className="bg-white p-4 sm:p-5 rounded-lg sm:rounded-xl border border-[#E7E7E7] shadow-xs flex items-center gap-3.5 sm:gap-4 hover:border-[#D98900] transition-colors">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-md sm:rounded-lg bg-[#EBF3FC] text-[#3D7DDE] flex items-center justify-center shrink-0">
            <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <span className="text-2xl font-extrabold text-[#111111] leading-none block">
              2
            </span>
            <span className="text-xs text-[#737373] font-medium">
              Em revisão médica
            </span>
          </div>
        </div>

        {/* Card 4: Precisa de atualização */}
        <div className="bg-white p-4 sm:p-5 rounded-lg sm:rounded-xl border border-[#E7E7E7] shadow-xs flex items-center gap-3.5 sm:gap-4 hover:border-[#D98900] transition-colors">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-md sm:rounded-lg bg-[#FDEEEE] text-[#D94B4B] flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <span className="text-2xl font-extrabold text-[#111111] leading-none block">
              1
            </span>
            <span className="text-xs text-[#737373] font-medium">
              Precisa de atualização
            </span>
          </div>
        </div>
      </div>

      {/* 3. DESEMPENHO DE CONTEÚDO (GRÁFICO COM FILTROS) */}
      <div className="bg-white p-5 sm:p-7 rounded-lg sm:rounded-xl border border-[#E7E7E7] shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-[#111111]">
              Desempenho de conteúdo
            </h3>
            <p className="text-xs text-[#737373]">
              Acompanhamento de alcance, leitores e conversões geradas no site.
            </p>
          </div>

          <div className="flex items-center gap-1 bg-[#F6F6F4] p-1 rounded-md sm:rounded-lg border border-[#E7E7E7] self-start sm:self-auto">
            {(["7d", "30d", "90d"] as const).map((period) => (
              <button
                key={period}
                onClick={() => setTimeFilter(period)}
                className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  timeFilter === period
                    ? "bg-white text-[#111111] shadow-xs"
                    : "text-[#737373] hover:text-[#111111]"
                }`}
              >
                {period === "7d" ? "7 dias" : period === "30d" ? "Últimos 30 dias" : "90 dias"}
              </button>
            ))}
          </div>
        </div>

        {/* Métricas Principais */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 pb-4 border-b border-[#F6F6F4]">
          <div className="space-y-1">
            <span className="text-xs text-[#737373] font-medium block">Visualizações</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-[#111111]">14.2K</span>
              <span className="text-xs font-bold text-[#26944B] flex items-center">
                ↑ 12%
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-[#737373] font-medium block">Visitantes Únicos</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-[#111111]">6.1K</span>
              <span className="text-xs font-bold text-[#26944B] flex items-center">
                ↑ 18%
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-[#737373] font-medium block">Cliques no WhatsApp</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-[#111111]">1.8K</span>
              <span className="text-xs font-bold text-[#26944B] flex items-center">
                ↑ 25%
              </span>
            </div>
          </div>
        </div>

        {/* Gráfico Visual Simples em Barras (Laranja Brand) */}
        <div className="pt-2">
          <div className="flex items-end justify-between gap-2 h-36 pt-4">
            {[45, 60, 52, 78, 65, 80, 95, 70, 85, 110, 125, 140, 120, 150, 160].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div
                  style={{ height: `${(h / 160) * 100}%` }}
                  className="w-full rounded-t-md bg-[#FFF3DF] group-hover:bg-[#D98900] transition-colors"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-[#737373] pt-2 border-t border-[#F6F6F4]">
            <span>01 Mar</span>
            <span>15 Mar</span>
            <span>30 Mar</span>
          </div>
        </div>
      </div>

      {/* 4. GRID: ÚLTIMOS ARTIGOS + CHECKLIST SEO + PRÓXIMAS PUBLICAÇÕES */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Tabela de Últimos Artigos (lg:col-span-8) */}
        <div className="lg:col-span-8 bg-white p-5 sm:p-7 rounded-lg sm:rounded-xl border border-[#E7E7E7] shadow-xs space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-[#111111]">
                Últimos artigos
              </h3>
              <p className="text-xs text-[#737373]">
                Artigos gerenciados no CMS do blog Papo de Especialista.
              </p>
            </div>
            <button
              onClick={() => onEditArticle && onEditArticle(ADMIN_INITIAL_ARTICLES[0])}
              className="text-xs font-bold text-[#D98900] hover:text-[#C77900] flex items-center gap-1"
            >
              <span>Ver todos</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#E7E7E7] text-[#737373] uppercase tracking-wider text-[10px]">
                  <th className="pb-3 font-bold">Título</th>
                  <th className="pb-3 font-bold">Categoria</th>
                  <th className="pb-3 font-bold">Status</th>
                  <th className="pb-3 font-bold">Data</th>
                  <th className="pb-3 font-bold text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F6F6F4]">
                {ADMIN_INITIAL_ARTICLES.map((article) => {
                  const statusColors: Record<string, string> = {
                    Publicado: "bg-[#EAF7EE] text-[#26944B]",
                    "Em revisão": "bg-[#EBF3FC] text-[#3D7DDE]",
                    Rascunho: "bg-[#FFF4E3] text-[#D98900]",
                  };

                  return (
                    <tr key={article.id} className="hover:bg-[#FDFDFD] transition-colors">
                      <td className="py-3.5 pr-4">
                        <div className="flex items-center gap-3">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={article.image}
                            alt=""
                            className="w-9 h-9 rounded-lg object-cover shrink-0 border border-[#E7E7E7]"
                          />
                          <span className="font-semibold text-[#111111] line-clamp-1 max-w-xs">
                            {article.title}
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 text-[#5C5C5C] font-medium">
                        {article.category}
                      </td>
                      <td className="py-3.5">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold ${
                            statusColors[article.status] || "bg-[#F6F6F4] text-[#737373]"
                          }`}
                        >
                          {article.status}
                        </span>
                      </td>
                      <td className="py-3.5 text-[#737373] whitespace-nowrap">
                        {article.date}
                      </td>
                      <td className="py-3.5 text-right">
                        <button
                          onClick={() => onEditArticle && onEditArticle(article)}
                          className="text-[#D98900] hover:text-[#C77900] font-bold text-xs underline"
                        >
                          Editar
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Coluna Direita: Checklist SEO + Próximas Publicações (lg:col-span-4) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Card Checklist SEO */}
          <div className="bg-white p-5 sm:p-6 rounded-lg sm:rounded-xl border border-[#E7E7E7] shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-[#111111]">Checklist SEO</h4>
              <span className="w-2 h-2 rounded-full bg-[#26944B]" />
            </div>

            <div className="flex items-center gap-4 p-3.5 sm:p-4 rounded-md sm:rounded-lg bg-[#F6F6F4] border border-[#E7E7E7]">
              <div className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full border-4 border-[#26944B] flex items-center justify-center font-extrabold text-sm text-[#111111] bg-white">
                92%
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-[#111111] block">
                  Seu site está bem otimizado!
                </span>
                <span className="text-[11px] text-[#737373] block">
                  46 de 50 fatores verificados
                </span>
              </div>
            </div>

            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2 text-[#5C5C5C]">
                <CheckCircle2 className="w-4 h-4 text-[#26944B] shrink-0" />
                <span>46 páginas indexáveis</span>
              </li>
              <li className="flex items-center gap-2 text-[#5C5C5C]">
                <CheckCircle2 className="w-4 h-4 text-[#26944B] shrink-0" />
                <span>Sitemap atualizado</span>
              </li>
              <li className="flex items-center gap-2 text-[#5C5C5C]">
                <CheckCircle2 className="w-4 h-4 text-[#26944B] shrink-0" />
                <span>Schema JSON-LD configurado</span>
              </li>
              <li className="flex items-center gap-2 text-[#D98900]">
                <AlertTriangle className="w-4 h-4 text-[#D98900] shrink-0" />
                <span>3 páginas sem meta description</span>
              </li>
              <li className="flex items-center gap-2 text-[#D98900]">
                <AlertTriangle className="w-4 h-4 text-[#D98900] shrink-0" />
                <span>2 imagens sem texto ALT</span>
              </li>
            </ul>
          </div>

          {/* Card Próximas Publicações */}
          <div className="bg-white p-5 sm:p-6 rounded-lg sm:rounded-xl border border-[#E7E7E7] shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-[#111111]">
                Próximas publicações
              </h4>
              <button className="text-[11px] font-bold text-[#D98900] hover:text-[#C77900] flex items-center gap-0.5">
                <span>Ver calendário</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-3">
              {UPCOMING_PUBLICATIONS.map((pub) => (
                <div
                  key={pub.id}
                  className="p-3 rounded-md sm:rounded-lg border border-[#E7E7E7] bg-[#F6F6F4] flex items-start gap-3"
                >
                  <div className="bg-[#111111] text-white p-2 rounded-lg text-center shrink-0 w-11">
                    <span className="block text-xs font-black leading-none">
                      {pub.dateBadge.day}
                    </span>
                    <span className="block text-[9px] font-bold uppercase text-[#D98900]">
                      {pub.dateBadge.month}
                    </span>
                  </div>

                  <div className="space-y-1 min-w-0">
                    <h5 className="text-xs font-bold text-[#111111] line-clamp-2 leading-snug">
                      {pub.title}
                    </h5>
                    <div className="flex items-center gap-2 text-[10px]">
                      <span className="text-[#737373]">{pub.category}</span>
                      <span>•</span>
                      <span className="font-semibold text-[#D98900]">
                        {pub.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
