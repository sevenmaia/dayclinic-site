"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Globe,
  ChevronRight,
  User,
  ExternalLink,
} from "lucide-react";
import {
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { BioLinkConfig, BioLinkItem } from "@/data/biolink-data";

interface BioLinkViewProps {
  config: BioLinkConfig;
}

export function BioLinkView({ config }: BioLinkViewProps) {
  const shouldReduceMotion = useReducedMotion();

  // Helper para renderizar o ícone do link
  const renderIcon = (iconType: BioLinkItem["icon"], isHighlighted?: boolean) => {
    switch (iconType) {
      case "whatsapp":
        return <FaWhatsapp className="w-5 h-5 text-white" />;
      case "youtube":
        return <FaYoutube className="w-5 h-5 text-[#D94B4B]" />;
      case "doctor":
        return <User className="w-5 h-5 text-[#D98900]" />;
      case "globe":
      default:
        return <Globe className="w-5 h-5 text-[#D98900]" />;
    }
  };

  // Tracking simples de analytics
  const trackClick = (item: BioLinkItem) => {
    if (typeof window !== "undefined") {
      const eventData = {
        event: item.icon === "whatsapp" ? "bio_whatsapp_click" : "bio_link_click",
        link_id: item.id,
        link_title: item.title,
        destination: item.url,
        timestamp: new Date().toISOString(),
      };
      
      // Envia para dataLayer se GTM estiver presente
      if ((window as any).dataLayer) {
        (window as any).dataLayer.push(eventData);
      }
      
      // Envia evento padrão customizado
      window.dispatchEvent(new CustomEvent("bio_click", { detail: eventData }));
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#151515] antialiased selection:bg-[#D98900] selection:text-white relative overflow-hidden flex flex-col justify-between">
      {/* Background decorativo sutil com curvas arquitetônicas muito suaves da Day Clinic */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Curva sutil superior */}
        <div className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[680px] h-[340px] bg-gradient-to-b from-[#FFF4E3]/60 via-[#FFF9F0]/40 to-transparent rounded-full blur-2xl" />
        {/* Linha arquitetônica ultra suave */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-full max-w-[560px] h-px bg-gradient-to-r from-transparent via-[#D98900]/15 to-transparent" />
      </div>

      {/* Contêiner Central Mobile-First (Máx 560px no Desktop, 100% no celular com safe-areas) */}
      <main className="relative z-10 w-full max-w-[560px] mx-auto px-5 sm:px-6 pt-10 sm:pt-14 pb-8 flex-1 flex flex-col">
        {/* Cabeçalho */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center space-y-4 mb-7"
        >
          {/* Logo Oficial da Day Clinic em Círculo com Borda Delicada */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border border-[#EAEAEA] shadow-xs flex items-center justify-center p-3.5 group transition-transform duration-300 hover:scale-105">
            <Image
              src={config.logoUrl}
              alt="Logo Day Clinic Tirapelle & Vieira"
              width={88}
              height={88}
              priority
              className="object-contain w-auto h-auto max-h-16"
            />
          </div>

          <div className="space-y-1">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#151515]">
              {config.title}
            </h1>
            <p className="text-xs sm:text-sm font-medium text-[#747474]">
              {config.subtitle}
            </p>
          </div>
        </motion.div>

        {/* Lista de Links Principais */}
        <div className="space-y-3 sm:space-y-3.5 flex-1">
          {config.links
            .filter((item) => item.enabled)
            .sort((a, b) => a.order - b.order)
            .map((item, index) => {
              const isHighlight = item.highlighted;

              return (
                <motion.div
                  key={item.id}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
                  animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 * index }}
                >
                  <Link
                    href={item.url}
                    target={item.newTab ? "_blank" : undefined}
                    rel={item.newTab ? "noopener noreferrer" : undefined}
                    onClick={() => trackClick(item)}
                    className={`group w-full min-h-[72px] sm:min-h-[76px] p-3.5 sm:p-4 rounded-xl flex items-center justify-between gap-3 transition-all duration-200 active:scale-[0.98] ${
                      isHighlight
                        ? "bg-[#D98900] text-white shadow-md shadow-[#D98900]/25 hover:bg-[#C77900] border border-[#D98900]"
                        : "bg-white text-[#151515] border border-[#EAEAEA] hover:border-[#D98900]/40 shadow-xs hover:shadow-card hover:-translate-y-0.5"
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Ícone dentro de círculo discreto */}
                      <div
                        className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                          isHighlight
                            ? "bg-white/20 border border-white/25"
                            : "bg-[#F7F7F5] border border-[#EAEAEA]"
                        }`}
                      >
                        {renderIcon(item.icon, isHighlight)}
                      </div>

                      {/* Texto Título e Subtítulo */}
                      <div className="text-left min-w-0">
                        <span
                          className={`block text-xs sm:text-sm font-bold truncate leading-snug ${
                            isHighlight ? "text-white" : "text-[#151515]"
                          }`}
                        >
                          {item.title}
                        </span>
                        {item.subtitle && (
                          <span
                            className={`block text-[11px] sm:text-xs truncate font-medium mt-0.5 ${
                              isHighlight ? "text-white/85" : "text-[#747474]"
                            }`}
                          >
                            {item.subtitle}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Seta Direita Indicadora */}
                    <div className="shrink-0 pl-1">
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 ${
                          isHighlight ? "text-white/90" : "text-[#747474]"
                        }`}
                      />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
        </div>

        {/* Seção Redes Sociais */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-8 pt-6 border-t border-[#EAEAEA]/80 text-center space-y-4"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#747474]">
            ACOMPANHE TAMBÉM
          </span>

          <div className="flex items-center justify-center gap-3 sm:gap-4">
            {config.socials.instagram && (
              <a
                href={config.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Day Clinic"
                className="flex flex-col items-center gap-1.5 group"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-[#EAEAEA] flex items-center justify-center text-[#D98900] hover:text-[#C77900] hover:border-[#D98900]/40 hover:bg-[#FFF2DC] transition-all duration-200 shadow-xs hover:-translate-y-0.5">
                  <FaInstagram className="w-4 h-4" />
                </div>
                <span className="text-[10px] text-[#747474] font-medium group-hover:text-[#151515]">
                  Instagram
                </span>
              </a>
            )}

            {config.socials.youtube && (
              <a
                href={config.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Canal no YouTube da Day Clinic"
                className="flex flex-col items-center gap-1.5 group"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-[#EAEAEA] flex items-center justify-center text-[#D94B4B] hover:border-[#D94B4B]/40 hover:bg-[#FDEEEE] transition-all duration-200 shadow-xs hover:-translate-y-0.5">
                  <FaYoutube className="w-4 h-4" />
                </div>
                <span className="text-[10px] text-[#747474] font-medium group-hover:text-[#151515]">
                  YouTube
                </span>
              </a>
            )}

            {config.socials.website && (
              <Link
                href={config.socials.website}
                aria-label="Site oficial da Day Clinic"
                className="flex flex-col items-center gap-1.5 group"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-[#EAEAEA] flex items-center justify-center text-[#D98900] hover:text-[#C77900] hover:border-[#D98900]/40 hover:bg-[#FFF2DC] transition-all duration-200 shadow-xs hover:-translate-y-0.5">
                  <Globe className="w-4 h-4" />
                </div>
                <span className="text-[10px] text-[#747474] font-medium group-hover:text-[#151515]">
                  Site
                </span>
              </Link>
            )}

            {config.socials.facebook && (
              <a
                href={config.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Day Clinic"
                className="flex flex-col items-center gap-1.5 group"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-[#EAEAEA] flex items-center justify-center text-[#3D7DDE] hover:border-[#3D7DDE]/40 hover:bg-[#EBF3FC] transition-all duration-200 shadow-xs hover:-translate-y-0.5">
                  <FaFacebookF className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] text-[#747474] font-medium group-hover:text-[#151515]">
                  Facebook
                </span>
              </a>
            )}

            {config.socials.linkedin && (
              <a
                href={config.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Day Clinic"
                className="flex flex-col items-center gap-1.5 group"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-[#EAEAEA] flex items-center justify-center text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#EBF3FC] transition-all duration-200 shadow-xs hover:-translate-y-0.5">
                  <FaLinkedinIn className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] text-[#747474] font-medium group-hover:text-[#151515]">
                  LinkedIn
                </span>
              </a>
            )}
          </div>
        </motion.div>

        {/* Rodapé Minimalista Oficial */}
        <footer className="mt-8 pt-4 text-center text-xs text-[#747474] space-y-1">
          <p className="text-[11px] font-semibold text-[#343434] uppercase tracking-wider">
            {config.footerCopy}
          </p>
          <p className="text-[10px] text-[#747474] leading-relaxed whitespace-pre-line">
            {config.footerText}
          </p>
        </footer>
      </main>
    </div>
  );
}
