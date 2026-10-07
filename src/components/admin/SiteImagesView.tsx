"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Image as ImageIcon,
  Check,
  RefreshCw,
  ExternalLink,
  Sliders,
  Sparkles
} from "lucide-react";

interface SlotImage {
  id: string;
  page: "Home" | "Quem Somos" | "Estrutura" | "Serviços";
  slotName: string;
  recommendedSize: string;
  currentImage: string;
  focalPoint: string; // e.g. "center", "top", "50% 30%"
}

const INITIAL_SLOTS: SlotImage[] = [
  {
    id: "slot-1",
    page: "Home",
    slotName: "Hero Fachada Principal",
    recommendedSize: "1920 × 1080 px (16:9)",
    currentImage: "/images/site/hero-fachada.png",
    focalPoint: "Centro"
  },
  {
    id: "slot-2",
    page: "Home",
    slotName: "Destaque Médicos Fundadores",
    recommendedSize: "1600 × 900 px (16:9)",
    currentImage: "/images/site/quem-somos-medicos.png",
    focalPoint: "Centro superior"
  },
  {
    id: "slot-3",
    page: "Home",
    slotName: "Destaque Transplante Capilar FUE",
    recommendedSize: "1200 × 800 px (3:2)",
    currentImage: "/images/site/transplante.jpg",
    focalPoint: "Centro"
  },
  {
    id: "slot-4",
    page: "Estrutura",
    slotName: "Centro Cirúrgico Avançado",
    recommendedSize: "1600 × 1000 px (16:10)",
    currentImage: "/images/site/centro-cirurgico.jpg",
    focalPoint: "Centro"
  },
  {
    id: "slot-5",
    page: "Estrutura",
    slotName: "Recepção e Sala de Espera VIP",
    recommendedSize: "1400 × 900 px",
    currentImage: "/images/site/recepcao.jpg",
    focalPoint: "Centro"
  },
  {
    id: "slot-6",
    page: "Quem Somos",
    slotName: "Consultório e Atendimento Humanizado",
    recommendedSize: "1200 × 800 px",
    currentImage: "/images/site/consultorio.jpg",
    focalPoint: "Centro"
  }
];

export function SiteImagesView() {
  const [selectedPage, setSelectedPage] = useState<string>("Todas");
  const [slots, setSlots] = useState<SlotImage[]>(INITIAL_SLOTS);
  const [changedToast, setChangedToast] = useState(false);

  const pages = ["Todas", "Home", "Quem Somos", "Estrutura", "Serviços"];

  const filteredSlots = slots.filter(
    (slot) => selectedPage === "Todas" || slot.page === selectedPage
  );

  const handleSimulateChange = (id: string) => {
    setChangedToast(true);
    setTimeout(() => setChangedToast(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E7E7E7]">
        <div>
          <h1 className="text-2xl font-bold text-[#111111]">Imagens do Site (Slots por Página)</h1>
          <p className="text-xs sm:text-sm text-[#737373]">
            Substitua e controle o enquadramento visual de cada seção do site sem alterar o código.
          </p>
        </div>

        {changedToast && (
          <span className="flex items-center gap-1.5 text-xs text-[#26944B] bg-[#26944B]/10 px-3 py-1.5 rounded-lg border border-[#26944B]/20 font-medium">
            <Check className="w-3.5 h-3.5" /> Slot atualizado com sucesso!
          </span>
        )}
      </div>

      {/* Page Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => setSelectedPage(p)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              selectedPage === p
                ? "bg-[#111111] text-white"
                : "bg-white text-[#737373] hover:text-[#111111] border border-[#E7E7E7]"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Slots List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSlots.map((slot) => (
          <div
            key={slot.id}
            className="bg-white rounded-2xl border border-[#E7E7E7] overflow-hidden shadow-xs hover:border-[#D98900]/40 transition flex flex-col justify-between"
          >
            <div>
              <div className="p-4 pb-3 flex items-center justify-between border-b border-[#E7E7E7]/60">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D98900] bg-[#FFF4E3] px-2.5 py-0.5 rounded-md">
                  {slot.page}
                </span>
                <span className="text-[11px] text-[#737373]">{slot.recommendedSize}</span>
              </div>

              <div className="p-4 space-y-3">
                <h3 className="text-sm font-bold text-[#111111]">{slot.slotName}</h3>

                <div className="relative aspect-video rounded-xl overflow-hidden bg-[#F6F6F4] border border-[#E7E7E7]">
                  <Image
                    src={slot.currentImage}
                    alt={slot.slotName}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-[#111111]/75 backdrop-blur-xs text-[10px] text-white font-medium flex items-center gap-1">
                    <Sliders className="w-3 h-3 text-[#D98900]" />
                    Ponto focal: {slot.focalPoint}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 pt-2 border-t border-[#E7E7E7] flex items-center justify-between gap-2">
              <span className="text-[11px] text-[#737373] truncate">
                {slot.currentImage.split("/").pop()}
              </span>

              <button
                type="button"
                onClick={() => handleSimulateChange(slot.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F6F6F4] hover:bg-[#FFF4E3] hover:text-[#D98900] border border-[#E7E7E7] text-xs font-semibold text-[#111111] transition"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Alterar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
