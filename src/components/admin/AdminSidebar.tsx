"use client";

import React from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  Folder,
  Tags,
  UserRound,
  Users,
  Home,
  Building2,
  Stethoscope,
  Image as ImageIcon,
  GalleryHorizontal,
  FolderArchive,
  Globe,
  HelpCircle,
  Cpu,
  Code2,
  ArrowRightLeft,
  FileCode2,
  BarChart3,
  Settings,
  Share2,
  MessageCircle,
  ShieldCheck,
  Zap,
  ExternalLink,
  ChevronRight,
  X,
} from "lucide-react";

interface AdminSidebarProps {
  currentTab?: string;
  onSelectTab?: (tab: string) => void;
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  currentTab = "dashboard",
  onSelectTab,
  mobileOpen = false,
  onCloseMobile,
}) => {
  const navSections = [
    {
      title: "PRINCIPAL",
      items: [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
      ],
    },
    {
      title: "CONTEÚDOS",
      items: [
        { id: "artigos", label: "Artigos", icon: FileText },
        { id: "categorias", label: "Categorias", icon: Folder },
        { id: "tags", label: "Tags", icon: Tags },
        { id: "autores", label: "Autores", icon: UserRound },
        { id: "revisores", label: "Revisores", icon: Users },
      ],
    },
    {
      title: "SITE",
      items: [
        { id: "site-home", label: "Home", icon: Home },
        { id: "site-quem-somos", label: "Quem Somos", icon: Building2 },
        { id: "site-servicos", label: "Serviços", icon: Stethoscope },
        { id: "site-medicos", label: "Médicos", icon: Users },
        { id: "site-estrutura", label: "Estrutura", icon: Building2 },
        { id: "site-depoimentos", label: "Depoimentos", icon: MessageCircle },
        { id: "site-ctas", label: "CTAs", icon: Zap },
      ],
    },
    {
      title: "MÍDIA",
      items: [
        { id: "midia-biblioteca", label: "Biblioteca de imagens", icon: ImageIcon },
        { id: "midia-locais", label: "Locais / ambientes", icon: GalleryHorizontal },
        { id: "midia-arquivos", label: "Arquivos", icon: FolderArchive },
      ],
    },
    {
      title: "SEO & DESCOBERTA",
      items: [
        { id: "seo-global", label: "SEO Global", icon: Globe },
        { id: "seo-aeo", label: "AEO / FAQs", icon: HelpCircle },
        { id: "seo-geo", label: "GEO / Entidades", icon: Cpu },
        { id: "seo-schema", label: "Schema", icon: Code2 },
        { id: "seo-redirecionamentos", label: "Redirecionamentos", icon: ArrowRightLeft },
        { id: "seo-sitemap", label: "Sitemap", icon: FileCode2 },
        { id: "seo-relatorios", label: "Relatórios", icon: BarChart3 },
      ],
    },
    {
      title: "CONFIGURAÇÕES",
      items: [
        { id: "config-dados", label: "Dados da clínica", icon: Settings },
        { id: "config-redes", label: "Redes sociais", icon: Share2 },
        { id: "config-whatsapp", label: "WhatsApp", icon: MessageCircle },
        { id: "config-usuarios", label: "Usuários e permissões", icon: ShieldCheck },
        { id: "config-integracoes", label: "Integrações", icon: Zap },
      ],
    },
  ];

  const handleItemClick = (id: string) => {
    if (onSelectTab) onSelectTab(id);
    if (onCloseMobile) onCloseMobile();
  };

  return (
    <>
      {/* Backdrop para mobile / tablet quando menu estiver aberto */}
      {mobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-xs transition-opacity"
        />
      )}

      {/* Sidebar Fixa */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-[260px] h-screen bg-[#111111] text-[#E6E6E6] flex flex-col z-50 border-r border-[#222222] transition-transform duration-300 ease-in-out select-none ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Topo Logo Day Clinic */}
        <div className="h-[72px] px-6 border-b border-[#222222] flex items-center justify-between shrink-0">
          <div>
            <span className="block text-sm font-extrabold tracking-widest uppercase text-white leading-tight">
              DAY CLINIC
            </span>
            <span className="block text-[10px] tracking-[0.2em] uppercase text-[#D98900] font-semibold">
              TIRAPELLE &amp; VIEIRA
            </span>
          </div>

          {/* Botão fechar em telas pequenas */}
          <button
            onClick={onCloseMobile}
            className="lg:hidden p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu ROLÁVEL Internamente (Scrollbar discreta) */}
        <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-5 scrollbar-thin scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20">
          {navSections.map((sec, idx) => (
            <div key={idx} className="space-y-1">
              <h5 className="text-[10px] font-bold uppercase tracking-wider text-[#737373] px-3 mb-1.5">
                {sec.title}
              </h5>
              <div className="space-y-0.5">
                {sec.items.map((item) => {
                  const Icon = item.icon;
                  const active = currentTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-[10px] text-xs font-medium transition-all group ${
                        active
                          ? "bg-[#D98900] text-white font-semibold shadow-sm"
                          : "text-white/70 hover:bg-white/[0.07] hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Icon
                          className={`w-4 h-4 shrink-0 transition-colors ${
                            active ? "text-white" : "text-white/50 group-hover:text-white"
                          }`}
                        />
                        <span className="truncate">{item.label}</span>
                      </div>
                      <ChevronRight
                        className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                          active ? "text-white/80" : "text-white/20 group-hover:text-white/50"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé Fixo da Sidebar (Sticky bottom) */}
        <div className="p-3.5 border-t border-[#222222] bg-[#141414] shrink-0 space-y-2.5">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#26944B] animate-pulse" />
              <span className="text-white/80 font-medium text-[11px]">Site online</span>
            </div>

            <Link
              href="/"
              target="_blank"
              className="flex items-center gap-1.5 text-[#D98900] hover:text-[#C77900] text-[11px] font-semibold transition-colors"
            >
              <span>Ver site</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

          {/* Perfil Admin na base da sidebar */}
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            <div className="w-7 h-7 rounded-full bg-[#FFF3DF] border border-[#D98900]/40 flex items-center justify-center text-[#D98900] font-bold text-xs shrink-0">
              A
            </div>
            <div className="text-left min-w-0 flex-1">
              <span className="block text-xs font-bold text-white truncate leading-tight">
                Arthur
              </span>
              <span className="block text-[10px] text-zinc-400 font-medium truncate">
                Administrador
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
