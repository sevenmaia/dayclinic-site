"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Image as ImageIcon,
  Search,
  Upload,
  Check,
  Filter,
  Trash2,
  Copy,
  ExternalLink,
  Info,
  Maximize2,
  X
} from "lucide-react";
import { MediaItem, MEDIA_LIBRARY_MOCK } from "@/data/admin-data";

export function MediaLibraryView() {
  const [items, setItems] = useState<MediaItem[]>(MEDIA_LIBRARY_MOCK);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ["Todas", "Clínica", "Médicos", "Procedimentos", "Blog", "Banners"];

  const filteredItems = items.filter((item) => {
    const matchesCat = selectedCategory === "Todas" || item.category === selectedCategory;
    const matchesQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.fileName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.alt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const handleCopyUrl = (url: string, id: string) => {
    navigator.clipboard?.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E7E7E7]">
        <div>
          <h1 className="text-2xl font-bold text-[#111111]">Biblioteca de Mídia</h1>
          <p className="text-xs sm:text-sm text-[#737373]">
            Gerencie fotografias da clínica, corpo clínico, equipamentos e imagens de artigos.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#D98900] hover:bg-[#C77900] text-white text-sm font-semibold transition shadow-md shadow-[#D98900]/20 w-fit"
        >
          <Upload className="w-4 h-4" />
          Fazer Upload de Imagem
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#E7E7E7] shadow-xs">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-[#111111] text-white"
                  : "bg-[#F6F6F4] text-[#737373] hover:text-[#111111]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#737373] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar imagem por nome ou tag..."
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-[#E7E7E7] focus:border-[#D98900] outline-hidden bg-[#F8F8F7]"
          />
        </div>
      </div>

      {/* Grid of Media */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group cursor-pointer bg-white rounded-2xl border border-[#E7E7E7] overflow-hidden hover:border-[#D98900] hover:shadow-md transition flex flex-col"
          >
            <div className="relative aspect-4/3 bg-[#F6F6F4] overflow-hidden">
              <Image
                src={item.url}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-[#111111]/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="p-2 rounded-full bg-white text-[#111111] shadow-md">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            <div className="p-3 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold text-[#111111] truncate" title={item.title}>
                  {item.title}
                </p>
                <p className="text-[11px] text-[#737373] truncate mt-0.5">{item.fileName}</p>
              </div>

              <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#E7E7E7] text-[10px] text-[#737373]">
                <span>{item.weight}</span>
                <span className="font-medium text-[#D98900]">{item.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Details Inspector Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-[#111111]/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full border border-[#E7E7E7] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
            {/* Visual Preview Side */}
            <div className="md:w-1/2 bg-[#181818] p-6 flex flex-col items-center justify-center relative min-h-[260px]">
              <div className="relative w-full h-full min-h-[220px]">
                <Image
                  src={selectedItem.url}
                  alt={selectedItem.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="mt-2 text-[11px] text-[#A0A0A0]">{selectedItem.dimensions}</span>
            </div>

            {/* Info Side */}
            <div className="md:w-1/2 p-6 flex flex-col justify-between overflow-y-auto space-y-4">
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D98900] bg-[#FFF4E3] px-2 py-0.5 rounded-md">
                      {selectedItem.category}
                    </span>
                    <h3 className="text-base font-bold text-[#111111] mt-2">{selectedItem.title}</h3>
                    <p className="text-xs text-[#737373]">{selectedItem.fileName}</p>
                  </div>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="p-1 rounded-lg text-[#737373] hover:text-[#111111] hover:bg-[#F6F6F4]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-4 space-y-3 text-xs">
                  <div>
                    <label className="block text-[#737373] font-semibold mb-1">Texto Alternativo (ALT)</label>
                    <input
                      type="text"
                      defaultValue={selectedItem.alt}
                      className="w-full text-xs p-2.5 rounded-xl border border-[#E7E7E7] focus:border-[#D98900] outline-hidden text-[#111111]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#737373] font-semibold mb-1">Onde esta imagem é usada</label>
                    <div className="space-y-1">
                      {selectedItem.usedIn.map((loc, i) => (
                        <div
                          key={i}
                          className="px-2.5 py-1.5 rounded-lg bg-[#F6F6F4] text-[#3C3C3C] text-[11px] font-medium"
                        >
                          {loc}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E7E7E7] flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => handleCopyUrl(selectedItem.url, selectedItem.id)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#E7E7E7] text-xs font-semibold text-[#111111] hover:bg-[#F6F6F4]"
                >
                  {copiedId === selectedItem.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#26944B]" /> URL Copiada!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copiar URL
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 rounded-xl bg-[#111111] text-white text-xs font-bold hover:bg-[#242424]"
                >
                  Concluir
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
