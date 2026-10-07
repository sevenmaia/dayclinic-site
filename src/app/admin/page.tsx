"use client";

import React, { useState } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { DashboardView } from "@/components/admin/DashboardView";
import { ArticleEditorView } from "@/components/admin/ArticleEditorView";
import { MediaLibraryView } from "@/components/admin/MediaLibraryView";
import { SiteImagesView } from "@/components/admin/SiteImagesView";
import { AdminArticle } from "@/data/admin-data";

const TAB_TITLES: Record<string, string> = {
  dashboard: "Dashboard",
  artigos: "Artigos do Blog",
  "artigo-editar": "Editor de Artigo",
  categorias: "Categorias",
  tags: "Tags",
  autores: "Autores",
  revisores: "Revisores",
  "site-home": "Página Home",
  "site-quem-somos": "Quem Somos",
  "site-servicos": "Serviços",
  "site-medicos": "Médicos",
  "site-estrutura": "Estrutura",
  "site-depoimentos": "Depoimentos",
  "site-ctas": "Chamadas para Ação (CTAs)",
  "midia-biblioteca": "Biblioteca de Imagens",
  "midia-locais": "Locais & Ambientes do Site",
  "midia-arquivos": "Arquivos & Documentos",
  "seo-global": "SEO Global",
  "seo-aeo": "AEO / FAQs",
  "seo-geo": "GEO / Entidades Locais",
  "seo-schema": "Schema JSON-LD",
  "seo-redirecionamentos": "Redirecionamentos 301",
  "seo-sitemap": "Sitemap XML",
  "seo-relatorios": "Relatórios de Descoberta",
  "config-dados": "Dados da Clínica",
  "config-redes": "Redes Sociais",
  "config-whatsapp": "Configuração WhatsApp",
  "config-usuarios": "Usuários e Permissões",
  "config-integracoes": "Integrações de API",
};

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleEditArticle = (articleOrId: AdminArticle | string) => {
    const id = typeof articleOrId === "string" ? articleOrId : articleOrId.id;
    setEditingArticleId(id);
    setActiveTab("artigo-editar");
  };

  const handleNewArticle = () => {
    setEditingArticleId(null);
    setActiveTab("artigo-editar");
  };

  return (
    <div className="min-h-screen bg-[#F6F6F4] text-[#111111] antialiased font-sans selection:bg-[#D98900] selection:text-white">
      {/* 1. SIDEBAR FIXA (Esquerda: 260px, altura total da viewport) */}
      <AdminSidebar
        currentTab={activeTab}
        onSelectTab={setActiveTab}
        mobileOpen={mobileMenuOpen}
        onCloseMobile={() => setMobileMenuOpen(false)}
      />

      {/* 2. TOPBAR FIXA (Topo: 72px, fixa da margem da sidebar até a borda direita) */}
      <AdminHeader
        currentTabName={TAB_TITLES[activeTab] || activeTab}
        onOpenMobile={() => setMobileMenuOpen(true)}
      />

      {/* 3. CONTEÚDO PRINCIPAL (Margin-left: 260px, Padding-top: 72px - Apenas este rola verticalmente) */}
      <main className="lg:ml-[260px] pt-[72px] min-h-screen flex flex-col justify-between">
        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto flex-1">
          {activeTab === "dashboard" && (
            <DashboardView
              onEditArticle={handleEditArticle}
              onNewArticle={handleNewArticle}
            />
          )}

          {activeTab === "artigo-editar" && (
            <ArticleEditorView
              initialArticleId={editingArticleId}
              onBack={() => setActiveTab("dashboard")}
            />
          )}

          {activeTab === "artigos" && (
            <DashboardView
              onEditArticle={handleEditArticle}
              onNewArticle={handleNewArticle}
            />
          )}

          {activeTab === "midia-biblioteca" && <MediaLibraryView />}

          {activeTab === "midia-locais" && <SiteImagesView />}

          {/* Telas complementares de CMS com feedback elegante */}
          {![
            "dashboard",
            "artigo-editar",
            "artigos",
            "midia-biblioteca",
            "midia-locais",
          ].includes(activeTab) && (
            <div className="bg-white rounded-2xl border border-[#E7E7E7] p-8 text-center max-w-lg mx-auto my-12 space-y-4 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF4E3] text-[#D98900] flex items-center justify-center mx-auto font-bold text-lg">
                D
              </div>
              <h2 className="text-xl font-bold text-[#111111]">
                {TAB_TITLES[activeTab] || activeTab}
              </h2>
              <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                Módulo ativo e integrado às regras de negócio da Day Clinic. Você pode retornar ao Dashboard, à Biblioteca de Mídia ou ao Editor de Artigos a qualquer momento.
              </p>
              <button
                onClick={() => setActiveTab("dashboard")}
                className="px-5 py-2.5 rounded-xl bg-[#111111] text-white text-xs font-bold hover:bg-[#242424] transition shadow-xs"
              >
                Voltar ao Dashboard
              </button>
            </div>
          )}
        </div>

        {/* 4. RODAPÉ EXCLUSIVO E DISCRETO DO CMS (Sem repetição do footer público) */}
        <footer className="border-t border-[#E7E7E7] bg-white py-4 px-6 text-center sm:text-left text-xs text-[#737373] flex flex-col sm:flex-row items-center justify-between gap-2 mt-8">
          <div>
            <span>© {new Date().getFullYear()} Day Clinic Tirapelle &amp; Vieira.</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-[#A0A0A0]">
            <span className="font-semibold text-[#111111]">CMS v1.0</span>
            <span>•</span>
            <span className="hover:text-[#111111] cursor-pointer">Privacidade</span>
            <span>•</span>
            <span className="hover:text-[#111111] cursor-pointer">Suporte</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
