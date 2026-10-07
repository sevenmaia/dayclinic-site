"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, CalendarDays, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { clinicConfig } from "@/config/clinic";
import Button from "@/components/ui/Button";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha o menu mobile ao trocar de rota
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Se estiver na rota de administração ou na página de bio link, não renderizar o cabeçalho público
  if (pathname?.startsWith("/admin") || pathname === "/links" || pathname === "/bio") {
    return null;
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-header py-3.5 border-b border-borderGray-subtle"
            : "bg-white/90 backdrop-blur-sm py-4 border-b border-borderGray-subtle/60"
        }`}
      >
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
            aria-label="Página inicial Day Clinic"
          >
            <img
              src="/images/logo/logo-dark.png"
              alt="Day Clinic Tirapelle & Vieira"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-ink-700">
            {clinicConfig.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`transition-colors duration-150 py-1 relative hover:text-brand-orange ${
                    isActive
                      ? "text-brand-orange font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-orange"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              href={clinicConfig.whatsappUrl}
              variant="primary"
              size="sm"
              icon={<FaWhatsapp className="w-4 h-4" />}
            >
              Agendar consulta
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <Button
              href={clinicConfig.whatsappUrl}
              variant="primary"
              size="sm"
              className="px-3 py-2 text-xs"
              icon={<FaWhatsapp className="w-3.5 h-3.5" />}
            >
              Agendar
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-ink-800 hover:bg-surface transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-ink-900" />
              ) : (
                <Menu className="w-6 h-6 text-ink-900" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-borderGray">
                <img
                  src="/images/logo/logo-dark.png"
                  alt="Day Clinic"
                  className="h-9 w-auto"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-md text-ink-600 hover:text-ink-900"
                  aria-label="Fechar menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-4 mt-6">
                {clinicConfig.navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-base font-semibold py-2 px-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-brand-soft text-brand-orange"
                          : "text-ink-800 hover:bg-surface hover:text-brand-orange"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Footer Info */}
            <div className="pt-6 border-t border-borderGray space-y-4">
              <div className="text-xs text-ink-600 space-y-1">
                <p className="font-semibold text-ink-900">{clinicConfig.name}</p>
                <p>{clinicConfig.city}</p>
                <p>{clinicConfig.operatingHours}</p>
              </div>

              <Button
                href={clinicConfig.whatsappUrl}
                variant="primary"
                size="md"
                className="w-full justify-center"
                icon={<FaWhatsapp className="w-4 h-4" />}
              >
                Agendar via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
