"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { clinicConfig } from "@/config/clinic";
import Button from "@/components/ui/Button";

export const Footer: React.FC = () => {
  const pathname = usePathname();

  // No painel administrativo não renderiza o footer público do site
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-white border-t border-borderGray text-ink-700">
      {/* Top Banner / Chamada de Contato Rápido */}
      <div className="bg-surface py-8 border-b border-borderGray/70">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-orange/15 text-brand-orange flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-ink-950">
                Atendimento Médico Especializado em Manaus
              </p>
              <p className="text-xs text-ink-600">
                Transplante Capilar FUE • Cirurgia Plástica • Dermatologia Avançada
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              href={clinicConfig.whatsappUrl}
              variant="primary"
              size="sm"
              icon={<FaWhatsapp className="w-4 h-4" />}
            >
              Falar no WhatsApp
            </Button>
            <Button
              href={`tel:${clinicConfig.phoneRaw}`}
              variant="secondary"
              size="sm"
              icon={<Phone className="w-4 h-4" />}
            >
              {clinicConfig.phone}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Coluna 1: Marca & Propósito */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/images/logo/logo-dark.png"
                alt="Day Clinic Tirapelle & Vieira"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-ink-600 leading-relaxed">
              Medicina de excelência, tecnologia cirúrgica de ponta e cuidado humanizado em cada etapa do seu tratamento.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={clinicConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Day Clinic"
                className="w-9 h-9 rounded-full bg-surface border border-borderGray flex items-center justify-center text-ink-700 hover:text-brand-orange hover:border-brand-orange transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href={clinicConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Day Clinic"
                className="w-9 h-9 rounded-full bg-surface border border-borderGray flex items-center justify-center text-ink-700 hover:text-brand-orange hover:border-brand-orange transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href={clinicConfig.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Canal no YouTube"
                className="w-9 h-9 rounded-full bg-surface border border-borderGray flex items-center justify-center text-ink-700 hover:text-brand-orange hover:border-brand-orange transition-colors"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href={clinicConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Institucional"
                className="w-9 h-9 rounded-full bg-surface border border-borderGray flex items-center justify-center text-ink-700 hover:text-brand-orange hover:border-brand-orange transition-colors"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink-950">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              {clinicConfig.navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-brand-orange transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange opacity-70" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Especialidades Principais */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink-950">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/servicos#transplante"
                  className="hover:text-brand-orange transition-colors"
                >
                  Transplante Capilar FUE
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos#dermatologia"
                  className="hover:text-brand-orange transition-colors"
                >
                  Dermatologia Clínica e Cirúrgica
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos#plastica"
                  className="hover:text-brand-orange transition-colors"
                >
                  Cirurgia Plástica Estética e Reparadora
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos#capilar"
                  className="hover:text-brand-orange transition-colors"
                >
                  Protocolos e Tratamentos Capilares (MMP)
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos#estetica"
                  className="hover:text-brand-orange transition-colors"
                >
                  Estética Médica Facial e Corporal
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato & Localização */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink-950">
              Atendimento e Localização
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>{clinicConfig.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <span>{clinicConfig.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <span>{clinicConfig.email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-ink-600">
                  {clinicConfig.operatingHours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divisor & Responsabilidade Médica */}
        <div className="mt-12 pt-8 border-t border-borderGray text-xs text-ink-500 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-ink-700">Responsabilidade Técnica:</p>
              <p>
                Dra. Janaina Tirapelle — {clinicConfig.doctors[0].crm} | {clinicConfig.doctors[0].rqe}
              </p>
              <p>
                Dr. Roberto Vieira — {clinicConfig.doctors[1].crm} | {clinicConfig.doctors[1].rqe}
              </p>
            </div>
            <div className="md:text-right">
              <p>
                As informações deste site têm caráter meramente informativo e educativo e não substituem a consulta médica presencial.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-borderGray-subtle gap-2">
            <p>
              © {new Date().getFullYear()} {clinicConfig.name}. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-[11px] text-ink-400">
              <span>Desenvolvido com excelência médica e precisão técnica.</span>
              <span className="text-borderGray">•</span>
              <Link
                href="/admin"
                className="text-ink-500 hover:text-brand-orange transition-colors font-medium flex items-center gap-1"
              >
                Painel CMS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
