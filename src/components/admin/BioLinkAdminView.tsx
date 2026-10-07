"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Link2,
  ExternalLink,
  Plus,
  Trash2,
  GripVertical,
  Star,
  Check,
  Eye,
  Globe,
  Save,
  ArrowUpRight,
  TrendingUp,
  Sliders,
} from "lucide-react";
import { FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa";
import { BioLinkConfig, BioLinkItem, INITIAL_BIOLINK_CONFIG } from "@/data/biolink-data";

export function BioLinkAdminView() {
  const [config, setConfig] = useState<BioLinkConfig>(INITIAL_BIOLINK_CONFIG);
  const [savedToast, setSavedToast] = useState(false);

  // Manipulação de Links
  const toggleLink = (id: string) => {
    setConfig({
      ...config,
      links: config.links.map((l) => (l.id === id ? { ...l, enabled: !l.enabled } : l)),
    });
  };

  const toggleHighlight = (id: string) => {
    setConfig({
      ...config,
      links: config.links.map((l) =>
        l.id === id ? { ...l, highlighted: !l.highlighted } : l
      ),
    });
  };

  const updateLink = (id: string, field: keyof BioLinkItem, value: any) => {
    setConfig({
      ...config,
      links: config.links.map((l) => (l.id === id ? { ...l, [field]: value } : l)),
    });
  };

  const deleteLink = (id: string) => {
    setConfig({
      ...config,
      links: config.links.filter((l) => l.id !== id),
    });
  };

  const addNewLink = () => {
    const newId = `link-${Date.now()}`;
    const newOrder = config.links.length + 1;
    setConfig({
      ...config,
      links: [
        ...config.links,
        {
          id: newId,
          title: "Novo Link Day Clinic",
          subtitle: "Descrição do destino",
          url: "https://",
          icon: "globe",
          highlighted: false,
          enabled: true,
          order: newOrder,
          newTab: true,
        },
      ],
    });
  };

  const handleSave = () => {
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E7E7E7]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D98900] bg-[#FFF4E3] px-2.5 py-0.5 rounded-md">
              Bio Link Oficial
            </span>
            <span className="text-xs text-[#737373]">Rotas: /links e /bio</span>
          </div>
          <h1 className="text-2xl font-bold text-[#111111] mt-1">Gerenciador de Bio Link</h1>
          <p className="text-xs sm:text-sm text-[#737373]">
            Personalize a página oficial de links da bio do Instagram com acesso direto ao WhatsApp e site.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {savedToast && (
            <span className="flex items-center gap-1.5 text-xs text-[#26944B] bg-[#26944B]/10 px-3 py-1.5 rounded-lg border border-[#26944B]/20 font-medium">
              <Check className="w-3.5 h-3.5" /> Salvo com sucesso!
            </span>
          )}

          <Link
            href="/links"
            target="_blank"
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg border border-[#E7E7E7] bg-white text-xs sm:text-sm font-semibold text-[#111111] hover:bg-[#F6F6F4] transition shadow-xs"
          >
            <Eye className="w-4 h-4 text-[#737373]" />
            Ver Página Real
            <ExternalLink className="w-3 h-3 text-[#737373]" />
          </Link>

          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-lg bg-[#D98900] hover:bg-[#C77900] text-white text-xs sm:text-sm font-semibold transition shadow-md shadow-[#D98900]/20"
          >
            <Save className="w-4 h-4" />
            Salvar Alterações
          </button>
        </div>
      </div>

      {/* Analytics Card */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded-lg border border-[#E7E7E7] shadow-xs">
          <span className="text-[10px] font-bold uppercase text-[#737373]">Cliques no WhatsApp</span>
          <p className="text-xl sm:text-2xl font-extrabold text-[#D98900] mt-1">418</p>
          <span className="text-[10px] text-[#26944B] font-semibold flex items-center gap-1 mt-0.5">
            <TrendingUp className="w-3 h-3" /> +24% nesta semana
          </span>
        </div>
        <div className="p-4 bg-white rounded-lg border border-[#E7E7E7] shadow-xs">
          <span className="text-[10px] font-bold uppercase text-[#737373]">Acessos ao Site</span>
          <p className="text-xl sm:text-2xl font-extrabold text-[#111111] mt-1">186</p>
          <span className="text-[10px] text-[#737373]">Origem: Instagram Bio</span>
        </div>
        <div className="p-4 bg-white rounded-lg border border-[#E7E7E7] shadow-xs">
          <span className="text-[10px] font-bold uppercase text-[#737373]">YouTube Transplante</span>
          <p className="text-xl sm:text-2xl font-extrabold text-[#111111] mt-1">93</p>
          <span className="text-[10px] text-[#737373]">Vídeos assistidos</span>
        </div>
        <div className="p-4 bg-white rounded-lg border border-[#E7E7E7] shadow-xs">
          <span className="text-[10px] font-bold uppercase text-[#737373]">Dra. Janaina / Dr. Roberto</span>
          <p className="text-xl sm:text-2xl font-extrabold text-[#111111] mt-1">142</p>
          <span className="text-[10px] text-[#737373]">Trajetória médica</span>
        </div>
      </div>

      {/* Grid: Editor de Links & Configurações de Cabeçalho */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Coluna 1: Lista de Links Gerenciáveis (lg:col-span-8) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#111111]">Links Ativos na Bio ({config.links.length})</h3>
            <button
              onClick={addNewLink}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111111] hover:bg-[#222222] text-white text-xs font-bold transition"
            >
              <Plus className="w-3.5 h-3.5" /> Adicionar Link
            </button>
          </div>

          <div className="space-y-3">
            {config.links.map((link) => (
              <div
                key={link.id}
                className={`p-4 rounded-lg border bg-white shadow-xs transition-all space-y-3 ${
                  link.highlighted ? "border-[#D98900] ring-1 ring-[#D98900]/20" : "border-[#E7E7E7]"
                } ${!link.enabled ? "opacity-60 bg-[#FAFAFA]" : ""}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="cursor-grab text-[#737373] p-1">
                      <GripVertical className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-bold text-[#111111]">
                      #{link.order} — {link.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleHighlight(link.id)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1 transition ${
                        link.highlighted
                          ? "bg-[#D98900] text-white"
                          : "bg-[#F6F6F4] text-[#737373] hover:text-[#111111]"
                      }`}
                      title="Destacar com cor laranja oficial"
                    >
                      <Star className="w-3 h-3" />
                      {link.highlighted ? "Destaque" : "Normal"}
                    </button>

                    <button
                      onClick={() => toggleLink(link.id)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition ${
                        link.enabled
                          ? "bg-[#EAF7EE] text-[#26944B]"
                          : "bg-[#F6F6F4] text-[#737373]"
                      }`}
                    >
                      {link.enabled ? "Ativo" : "Pausado"}
                    </button>

                    <button
                      onClick={() => deleteLink(link.id)}
                      className="p-1 text-[#737373] hover:text-[#D94B4B] transition"
                      title="Excluir link"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#737373] mb-1">Título do Botão</label>
                    <input
                      type="text"
                      value={link.title}
                      onChange={(e) => updateLink(link.id, "title", e.target.value)}
                      className="w-full text-xs p-2 rounded-md border border-[#E7E7E7] focus:border-[#D98900] outline-hidden font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-[#737373] mb-1">Subtítulo / Descrição</label>
                    <input
                      type="text"
                      value={link.subtitle || ""}
                      onChange={(e) => updateLink(link.id, "subtitle", e.target.value)}
                      className="w-full text-xs p-2 rounded-md border border-[#E7E7E7] focus:border-[#D98900] outline-hidden"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-semibold text-[#737373] mb-1">URL de Destino</label>
                    <input
                      type="text"
                      value={link.url}
                      onChange={(e) => updateLink(link.id, "url", e.target.value)}
                      className="w-full text-xs p-2 rounded-md border border-[#E7E7E7] focus:border-[#D98900] outline-hidden font-mono text-zinc-800"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna 2: Configurações de Identidade & Redes (lg:col-span-4) */}
        <div className="lg:col-span-4 space-y-5">
          <div className="p-5 bg-white rounded-lg border border-[#E7E7E7] shadow-xs space-y-4">
            <h4 className="text-sm font-bold text-[#111111]">Cabeçalho do Bio Link</h4>

            <div>
              <label className="block text-xs font-semibold text-[#737373] mb-1">Título Principal</label>
              <input
                type="text"
                value={config.title}
                onChange={(e) => setConfig({ ...config, title: e.target.value })}
                className="w-full text-xs p-2.5 rounded-md border border-[#E7E7E7] focus:border-[#D98900] outline-hidden font-bold"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#737373] mb-1">Frase de Assinatura</label>
              <input
                type="text"
                value={config.subtitle}
                onChange={(e) => setConfig({ ...config, subtitle: e.target.value })}
                className="w-full text-xs p-2.5 rounded-md border border-[#E7E7E7] focus:border-[#D98900] outline-hidden"
              />
            </div>
          </div>

          <div className="p-5 bg-white rounded-lg border border-[#E7E7E7] shadow-xs space-y-4">
            <h4 className="text-sm font-bold text-[#111111]">Redes Sociais (Ícones Inferiores)</h4>

            <div>
              <label className="block text-xs font-semibold text-[#737373] mb-1">Instagram URL</label>
              <input
                type="text"
                value={config.socials.instagram || ""}
                onChange={(e) =>
                  setConfig({
                    ...config,
                    socials: { ...config.socials, instagram: e.target.value },
                  })
                }
                className="w-full text-xs p-2 rounded-md border border-[#E7E7E7] focus:border-[#D98900] outline-hidden font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#737373] mb-1">YouTube URL</label>
              <input
                type="text"
                value={config.socials.youtube || ""}
                onChange={(e) =>
                  setConfig({
                    ...config,
                    socials: { ...config.socials, youtube: e.target.value },
                  })
                }
                className="w-full text-xs p-2 rounded-md border border-[#E7E7E7] focus:border-[#D98900] outline-hidden font-mono"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
