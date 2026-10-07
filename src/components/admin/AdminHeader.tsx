"use client";

import React from "react";
import Link from "next/link";
import { Search, Bell, ExternalLink, Menu } from "lucide-react";

interface AdminHeaderProps {
  currentTabName?: string;
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
  onOpenMobile?: () => void;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({
  currentTabName = "Dashboard",
  searchQuery = "",
  onSearchChange,
  onOpenMobile,
}) => {
  return (
    <header className="fixed top-0 left-0 lg:left-[260px] right-0 h-[72px] bg-white/95 backdrop-blur-md border-b border-[#ECECEC] px-4 sm:px-8 flex items-center justify-between z-40 select-none">
      {/* Botão menu mobile + Título da Página Atual */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobile}
          className="lg:hidden p-2 text-zinc-700 hover:text-black rounded-lg hover:bg-zinc-100"
          aria-label="Abrir menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <h2 className="text-base sm:text-lg font-bold text-[#111111] capitalize truncate">
          {currentTabName}
        </h2>
      </div>

      {/* Busca Global */}
      <div className="hidden md:block relative w-72 lg:w-96">
        <Search className="w-4 h-4 text-[#737373] absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Buscar no painel... (Ctrl+K)"
          value={searchQuery}
          onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
          className="w-full text-xs pl-10 pr-4 py-2.5 rounded-xl bg-[#F6F6F4] border border-transparent focus:border-[#D98900] focus:bg-white focus:outline-none transition-all placeholder-[#737373]"
        />
      </div>

      {/* Ações, Botão Ver Site e Perfil */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Link Ver Site */}
        <Link
          href="/"
          target="_blank"
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E6E6E6] text-xs font-semibold text-[#111111] hover:bg-[#F6F6F4] transition-colors"
        >
          <span>Ver site</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#737373]" />
        </Link>

        {/* Notificações */}
        <button
          aria-label="Notificações"
          className="relative p-2 text-[#737373] hover:text-[#111111] hover:bg-[#F6F6F4] rounded-full transition-colors"
        >
          <Bell className="w-4 h-4" />
          <span className="w-2 h-2 rounded-full bg-[#D98900] absolute top-1.5 right-1.5" />
        </button>

        {/* Avatar e Perfil */}
        <div className="flex items-center gap-2.5 pl-2 sm:pl-3 border-l border-[#ECECEC]">
          <div className="w-8 h-8 rounded-full bg-[#FFF3DF] border border-[#D98900]/40 flex items-center justify-center text-[#D98900] font-bold text-xs shrink-0">
            A
          </div>
          <div className="text-left hidden sm:block">
            <span className="block text-xs font-bold text-[#111111] leading-tight">
              Arthur
            </span>
            <span className="block text-[10px] text-[#737373] font-medium">
              Administrador
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
