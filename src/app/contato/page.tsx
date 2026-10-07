"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, CalendarDays, ShieldCheck, CheckCircle2 } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { clinicConfig } from "@/config/clinic";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    especialidade: "Transplante Capilar",
    periodo: "Manhã",
    mensagem: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prepara mensagem formatada para WhatsApp da clínica
    const textMsg = `Olá, meu nome é ${formData.nome}. Gostaria de agendar uma consulta.\n• Especialidade de interesse: ${formData.especialidade}\n• Período preferencial: ${formData.periodo}\n• Mensagem: ${formData.mensagem || "Não informada"}`;
    const url = `https://wa.me/${clinicConfig.whatsappNumber}?text=${encodeURIComponent(textMsg)}`;
    
    setEnviado(true);
    // Redireciona para o WhatsApp após 1 segundo
    setTimeout(() => {
      window.open(url, "_blank");
    }, 1200);
  };

  return (
    <div className="pt-24 sm:pt-28">
      {/* 1. Hero Contato */}
      <section className="relative py-16 sm:py-24 bg-ink-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D98900_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.20em] text-brand-orange mb-4">
              ATENDIMENTO & AGENDAMENTO
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Inicie seu atendimento com nossa equipe médica.
            </h1>
            <p className="mt-6 text-base sm:text-xl text-neutral-300 leading-relaxed">
              Estamos à disposição para esclarecer suas dúvidas sobre procedimentos, avaliações capilares e consultas em nossa sede em Manaus.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Conteúdo Principal: Informações de Contato + Formulário de Triagem */}
      <section className="py-20 sm:py-28 bg-surface">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Coluna 1: Informações e Canais Diretos */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <SectionHeading
                  eyebrow="CANAIS DIRETOS"
                  title="Fale diretamente conosco."
                  subtitle="Escolha o canal de sua preferência para atendimento ágil e discreto."
                />
              </div>

              {/* Botão de Destaque WhatsApp */}
              <div className="p-6 rounded-2xl bg-white border border-borderGray shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/15 text-brand-orange flex items-center justify-center">
                    <FaWhatsapp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-ink-950">
                      WhatsApp Oficial
                    </h3>
                    <p className="text-xs text-ink-500">
                      Canal prioritário para triagem e marcação de consultas
                    </p>
                  </div>
                </div>

                <Button
                  href={clinicConfig.whatsappUrl}
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  icon={<FaWhatsapp className="w-4 h-4" />}
                >
                  Iniciar conversa no WhatsApp
                </Button>
              </div>

              {/* Informações detalhadas da clínica */}
              <div className="p-6 rounded-2xl bg-white border border-borderGray shadow-sm space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-ink-950 font-bold">Endereço</strong>
                    <span className="text-ink-600 leading-relaxed">
                      {clinicConfig.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-borderGray-subtle">
                  <Phone className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-ink-950 font-bold">Telefone</strong>
                    <a
                      href={`tel:${clinicConfig.phoneRaw}`}
                      className="text-ink-600 hover:text-brand-orange transition-colors"
                    >
                      {clinicConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-borderGray-subtle">
                  <Mail className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-ink-950 font-bold">E-mail</strong>
                    <a
                      href={`mailto:${clinicConfig.email}`}
                      className="text-ink-600 hover:text-brand-orange transition-colors"
                    >
                      {clinicConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-borderGray-subtle">
                  <Clock className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-ink-950 font-bold">Horário de Funcionamento</strong>
                    <span className="text-ink-600 leading-relaxed">
                      {clinicConfig.operatingHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna 2: Formulário de Triagem / Agendamento */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-borderGray shadow-card">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                    TRIAGEM DE ATENDIMENTO
                  </span>
                  <h3 className="text-2xl font-bold text-ink-950 mt-1">
                    Solicite seu agendamento
                  </h3>
                  <p className="text-sm text-ink-600 mt-2">
                    Preencha os campos abaixo para que nossa equipe médica verifique a disponibilidade e entre em contato.
                  </p>
                </div>

                {enviado ? (
                  <div className="p-8 rounded-xl bg-brand-soft border border-brand-orange/30 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-ink-950">
                      Solicitação registrada!
                    </h4>
                    <p className="text-xs sm:text-sm text-ink-700">
                      Você está sendo redirecionado para o WhatsApp com os dados preenchidos.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-800 mb-1.5">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) =>
                          setFormData({ ...formData, nome: e.target.value })
                        }
                        placeholder="Ex: Carlos Eduardo"
                        className="w-full px-4 py-3 text-sm bg-surface border border-borderGray rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/40 text-ink-900"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-ink-800 mb-1.5">
                          WhatsApp / Telefone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.telefone}
                          onChange={(e) =>
                            setFormData({ ...formData, telefone: e.target.value })
                          }
                          placeholder="(92) 99999-9999"
                          className="w-full px-4 py-3 text-sm bg-surface border border-borderGray rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/40 text-ink-900"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-ink-800 mb-1.5">
                          Especialidade *
                        </label>
                        <select
                          value={formData.especialidade}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              especialidade: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 text-sm bg-surface border border-borderGray rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/40 text-ink-900"
                        >
                          <option value="Transplante Capilar">
                            Transplante Capilar FUE
                          </option>
                          <option value="Dermatologia">
                            Dermatologia Clínica / Cirúrgica
                          </option>
                          <option value="Cirurgia Plástica">
                            Cirurgia Plástica
                          </option>
                          <option value="Tratamentos Capilares (MMP)">
                            Tratamentos Capilares (MMP)
                          </option>
                          <option value="Estética Médica">
                            Estética Médica Facial/Corporal
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-800 mb-1.5">
                        Período de preferência
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {["Manhã", "Tarde", "Qualquer horário"].map((p) => (
                          <button
                            type="button"
                            key={p}
                            onClick={() =>
                              setFormData({ ...formData, periodo: p })
                            }
                            className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                              formData.periodo === p
                                ? "bg-brand-orange text-white border-brand-orange"
                                : "bg-surface text-ink-700 border-borderGray hover:bg-white"
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-800 mb-1.5">
                        Mensagem ou detalhes adicionais (opcional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.mensagem}
                        onChange={(e) =>
                          setFormData({ ...formData, mensagem: e.target.value })
                        }
                        placeholder="Conte um pouco sobre o que busca..."
                        className="w-full px-4 py-3 text-sm bg-surface border border-borderGray rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/40 text-ink-900"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full justify-center"
                      icon={<CalendarDays className="w-5 h-5" />}
                    >
                      Enviar solicitação de agendamento
                    </Button>

                    <p className="text-[11px] text-ink-500 text-center">
                      * O envio do formulário representa um pedido de triagem e agendamento que será confirmado pela recepção da Day Clinic.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
