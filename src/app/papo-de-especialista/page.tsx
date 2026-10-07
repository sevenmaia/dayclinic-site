"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Mail, TrendingUp, Tag, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ArticleCard from "@/components/blog/ArticleCard";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/home/FinalCTA";
import { articlesData } from "@/data/articles";

export default function PapoDeEspecialistaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState<boolean>(false);

  const categories = [
    "Todos",
    "Dermatologia",
    "Transplante Capilar",
    "Cirurgia Plástica",
    "Saúde",
  ];

  // Filtro de artigos em tempo real
  const filteredArticles = useMemo(() => {
    return articlesData.filter((article) => {
      const matchesCategory =
        selectedCategory === "Todos" || article.category === selectedCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Contagem por categoria
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    categories.forEach((cat) => {
      if (cat === "Todos") {
        counts[cat] = articlesData.length;
      } else {
        counts[cat] = articlesData.filter((a) => a.category === cat).length;
      }
    });
    return counts;
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <div className="pt-24 sm:pt-28">
      {/* 1. Hero Papo de Especialista */}
      <section className="relative py-16 sm:py-24 bg-ink-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D98900_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.20em] text-brand-orange mb-4">
              BLOG DAY CLINIC
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Papo de Especialista
            </h1>
            <p className="mt-6 text-base sm:text-xl text-neutral-300 leading-relaxed">
              Conteúdos confiáveis e atualizados sobre dermatologia, transplante capilar, cirurgia plástica e saúde, com a experiência e o rigor da equipe Day Clinic Tirapelle & Vieira.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Filtros e Campo de Busca */}
      <section className="bg-surface border-b border-borderGray py-6">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Categorias Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-all duration-150 ${
                      isSelected
                        ? "bg-brand-orange text-white shadow-sm"
                        : "bg-white text-ink-700 hover:text-ink-950 hover:bg-white/80 border border-borderGray"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Input de Busca */}
            <div className="relative w-full lg:w-80">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar conteúdos..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-borderGray rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/30 text-ink-900 placeholder:text-ink-400"
              />
              <Search className="w-4 h-4 text-ink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Grid de Artigos (8 Colunas) + Sidebar (4 Colunas) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Coluna Principal dos Artigos (8 colunas) */}
            <div className="lg:col-span-8">
              {filteredArticles.length === 0 ? (
                <div className="p-12 text-center bg-surface rounded-2xl border border-borderGray">
                  <p className="text-base font-semibold text-ink-800">
                    Nenhum artigo encontrado para o termo pesquisado.
                  </p>
                  <p className="mt-2 text-xs text-ink-500">
                    Tente buscar por outra palavra-chave ou selecione uma categoria diferente.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory("Todos");
                      setSearchQuery("");
                    }}
                    className="mt-4 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-soft rounded-lg"
                  >
                    Limpar filtros
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar (4 colunas) */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Bloco 1: Categorias */}
              <div className="p-6 rounded-2xl bg-surface border border-borderGray">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-borderGray">
                  <Tag className="w-4 h-4 text-brand-orange" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-ink-950">
                    Categorias
                  </h3>
                </div>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => setSelectedCategory(cat)}
                        className={`w-full flex items-center justify-between text-sm py-1.5 px-2.5 rounded-lg transition-colors ${
                          selectedCategory === cat
                            ? "bg-brand-orange text-white font-semibold"
                            : "text-ink-700 hover:bg-white hover:text-ink-950"
                        }`}
                      >
                        <span>{cat}</span>
                        <span className="text-xs opacity-75">
                          ({categoryCounts[cat] || 0})
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bloco 2: Mais Lidos */}
              <div className="p-6 rounded-2xl bg-surface border border-borderGray">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-borderGray">
                  <TrendingUp className="w-4 h-4 text-brand-orange" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-ink-950">
                    Mais Lidos
                  </h3>
                </div>
                <div className="space-y-4">
                  {articlesData.slice(0, 3).map((article, idx) => (
                    <Link
                      key={article.id}
                      href={`/papo-de-especialista/${article.slug}`}
                      className="group flex gap-3 text-xs leading-snug"
                    >
                      <span className="font-mono text-base font-bold text-brand-orange shrink-0">
                        0{idx + 1}
                      </span>
                      <div>
                        <h4 className="font-semibold text-ink-900 group-hover:text-brand-orange transition-colors">
                          {article.title}
                        </h4>
                        <span className="text-[11px] text-ink-400 mt-1 block">
                          {article.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bloco 3: Newsletter */}
              <div className="p-6 rounded-2xl bg-ink-950 text-white border border-ink-800">
                <div className="w-10 h-10 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  Receba nossos conteúdos por e-mail
                </h3>
                <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                  Fique por dentro das novidades, dicas de cuidados médicos e artigos da equipe Day Clinic.
                </p>

                {newsletterSubscribed ? (
                  <div className="mt-4 p-3 rounded-lg bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-semibold text-center">
                    Inscrição realizada com sucesso!
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="mt-4 space-y-2.5">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Seu melhor e-mail"
                      className="w-full px-3.5 py-2.5 text-xs bg-ink-900 border border-ink-700 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      size="sm"
                      className="w-full justify-center text-xs"
                    >
                      Quero receber
                    </Button>
                  </form>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 4. CTA Final */}
      <FinalCTA
        title="Quer tirar dúvidas com um de nossos médicos?"
        subtitle="Agende uma consulta ou envie sua mensagem pelo WhatsApp da Day Clinic."
      />
    </div>
  );
}
