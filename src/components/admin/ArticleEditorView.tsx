"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FileText,
  Search,
  Plus,
  ArrowLeft,
  Save,
  Eye,
  CheckCircle2,
  Calendar,
  Sparkles,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Heading2,
  Heading3,
  Link2,
  Image as ImageIcon,
  Quote,
  Table as TableIcon,
  HelpCircle,
  Globe,
  Share2,
  Code2,
  Check,
  Upload,
  AlertCircle
} from "lucide-react";
import { AdminArticle, ADMIN_INITIAL_ARTICLES } from "@/data/admin-data";

interface ArticleEditorViewProps {
  onBack: () => void;
  initialArticleId?: string | null;
}

export function ArticleEditorView({ onBack, initialArticleId }: ArticleEditorViewProps) {
  // Find current article or initialize a new one
  const initialData = ADMIN_INITIAL_ARTICLES.find((a) => a.id === initialArticleId) || ADMIN_INITIAL_ARTICLES[0];

  const [activeTab, setActiveTab] = useState<"conteudo" | "seo" | "aeo" | "geo" | "schema" | "publicacao">("conteudo");
  const [seoPreviewTab, setSeoPreviewTab] = useState<"google" | "opengraph">("google");

  // Form states
  const [title, setTitle] = useState(initialData.title);
  const [slug, setSlug] = useState(initialData.slug);
  const [category, setCategory] = useState(initialData.category);
  const [status, setStatus] = useState(initialData.status);
  const [author, setAuthor] = useState(initialData.author);
  const [image, setImage] = useState(initialData.image);
  const [excerpt, setExcerpt] = useState(initialData.excerpt);
  const [contentHtml, setContentHtml] = useState(
    `<h2>Por que considerar bioestimuladores de colágeno?</h2>\n<p>Com o passar dos anos, a produção natural de colágeno pelo organismo começa a diminuir progressivamente. Em regiões de clima equatorial como Manaus, a incidência de radiação solar exige protocolos de dermatologia avançada para manter a sustentação e a saúde cutânea.</p>\n<p>Os bioestimuladores atuam de forma biocompatível, estimulando os fibroblastos a produzirem novo colágeno de alta qualidade, restaurando a firmeza sem alterar o volume exagerado da face.</p>\n<h3>Principais benefícios observados</h3>\n<p>Entre os diferenciais do tratamento na Day Clinic Tirapelle & Vieira, destacam-se a avaliação tridimensional, o planejamento individualizado e a aplicação precisa realizada exclusivamente por médicos especialistas.</p>`
  );

  // SEO states
  const [seoTitle, setSeoTitle] = useState(initialData.seoTitle);
  const [metaDesc, setMetaDesc] = useState(initialData.metaDescription);
  const [primaryKw, setPrimaryKw] = useState(initialData.primaryKeyword);
  const [keywords, setKeywords] = useState<string[]>(initialData.secondaryKeywords);
  const [newKw, setNewKw] = useState("");

  // AEO / FAQ state
  const [faqs, setFaqs] = useState(initialData.faq);
  const [newFaqQ, setNewFaqQ] = useState("");
  const [newFaqA, setNewFaqA] = useState("");

  // GEO Entities
  const [geoEntities, setGeoEntities] = useState(initialData.geoEntities);
  const [newGeo, setNewGeo] = useState("");

  // Save feedback state
  const [savedToast, setSavedToast] = useState(false);

  const handleSave = () => {
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 3000);
  };

  const addKeyword = () => {
    if (newKw.trim() && !keywords.includes(newKw.trim())) {
      setKeywords([...keywords, newKw.trim()]);
      setNewKw("");
    }
  };

  const removeKeyword = (kw: string) => {
    setKeywords(keywords.filter((k) => k !== kw));
  };

  const addFaq = () => {
    if (newFaqQ.trim() && newFaqA.trim()) {
      setFaqs([...faqs, { question: newFaqQ.trim(), answer: newFaqA.trim() }]);
      setNewFaqQ("");
      setNewFaqA("");
    }
  };

  const removeFaq = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const addGeoEntity = () => {
    if (newGeo.trim() && !geoEntities.includes(newGeo.trim())) {
      setGeoEntities([...geoEntities, newGeo.trim()]);
      setNewGeo("");
    }
  };

  const removeGeoEntity = (item: string) => {
    setGeoEntities(geoEntities.filter((g) => g !== item));
  };

  return (
    <div className="space-y-6">
      {/* Top action bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E7E7E7]">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-md sm:rounded-lg border border-[#E7E7E7] bg-white text-[#737373] hover:text-[#111111] hover:border-[#111111]/30 transition shadow-xs"
            title="Voltar aos Artigos"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#FFF4E3] text-[#D98900] border border-[#D98900]/20">
                {category}
              </span>
              <span className="text-xs text-[#737373]">Última edição hoje às 14:32</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#111111] mt-1 line-clamp-1">{title || "Sem título"}</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {savedToast && (
            <span className="flex items-center gap-1.5 text-xs text-[#26944B] bg-[#26944B]/10 px-3 py-1.5 rounded-md sm:rounded-lg border border-[#26944B]/20 font-medium">
              <Check className="w-3.5 h-3.5" /> Salvo com sucesso!
            </span>
          )}

          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-md sm:rounded-lg border border-[#E7E7E7] bg-white text-xs sm:text-sm font-semibold text-[#111111] hover:bg-[#F6F6F4] transition shadow-xs"
          >
            <Eye className="w-4 h-4 text-[#737373]" />
            Prévia
          </button>

          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-md sm:rounded-lg bg-[#D98900] hover:bg-[#C77900] text-white text-xs sm:text-sm font-semibold transition shadow-md shadow-[#D98900]/20"
          >
            <Save className="w-4 h-4" />
            Salvar Alterações
          </button>
        </div>
      </div>

      {/* Tabs navigation */}
      <div className="flex items-center gap-2 border-b border-[#E7E7E7] overflow-x-auto pb-1 text-sm">
        <button
          onClick={() => setActiveTab("conteudo")}
          className={`flex items-center gap-2 px-4 py-2.5 border-b-2 font-medium transition whitespace-nowrap ${
            activeTab === "conteudo"
              ? "border-[#D98900] text-[#D98900] font-semibold"
              : "border-transparent text-[#737373] hover:text-[#111111]"
          }`}
        >
          <FileText className="w-4 h-4" /> Conteúdo do Artigo
        </button>

        <button
          onClick={() => setActiveTab("seo")}
          className={`flex items-center gap-2 px-4 py-2.5 border-b-2 font-medium transition whitespace-nowrap ${
            activeTab === "seo"
              ? "border-[#D98900] text-[#D98900] font-semibold"
              : "border-transparent text-[#737373] hover:text-[#111111]"
          }`}
        >
          <Search className="w-4 h-4" /> SEO & Pré-visualização
          <span className="w-2 h-2 rounded-full bg-[#26944B]"></span>
        </button>

        <button
          onClick={() => setActiveTab("aeo")}
          className={`flex items-center gap-2 px-4 py-2.5 border-b-2 font-medium transition whitespace-nowrap ${
            activeTab === "aeo"
              ? "border-[#D98900] text-[#D98900] font-semibold"
              : "border-transparent text-[#737373] hover:text-[#111111]"
          }`}
        >
          <HelpCircle className="w-4 h-4" /> AEO / FAQ ({faqs.length})
        </button>

        <button
          onClick={() => setActiveTab("geo")}
          className={`flex items-center gap-2 px-4 py-2.5 border-b-2 font-medium transition whitespace-nowrap ${
            activeTab === "geo"
              ? "border-[#D98900] text-[#D98900] font-semibold"
              : "border-transparent text-[#737373] hover:text-[#111111]"
          }`}
        >
          <Globe className="w-4 h-4" /> GEO & Entidades ({geoEntities.length})
        </button>

        <button
          onClick={() => setActiveTab("schema")}
          className={`flex items-center gap-2 px-4 py-2.5 border-b-2 font-medium transition whitespace-nowrap ${
            activeTab === "schema"
              ? "border-[#D98900] text-[#D98900] font-semibold"
              : "border-transparent text-[#737373] hover:text-[#111111]"
          }`}
        >
          <Code2 className="w-4 h-4" /> Schema JSON-LD
        </button>

        <button
          onClick={() => setActiveTab("publicacao")}
          className={`flex items-center gap-2 px-4 py-2.5 border-b-2 font-medium transition whitespace-nowrap ${
            activeTab === "publicacao"
              ? "border-[#D98900] text-[#D98900] font-semibold"
              : "border-transparent text-[#737373] hover:text-[#111111]"
          }`}
        >
          <Calendar className="w-4 h-4" /> Agendamento & Status
        </button>
      </div>

      {/* Main Tab Content */}
      {activeTab === "conteudo" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main article content column (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Title & Slug */}
            <div className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 border border-[#E7E7E7] shadow-xs space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#737373] uppercase tracking-wider mb-1.5">
                  Título do Artigo
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Digite o título principal..."
                  className="w-full text-lg sm:text-xl font-bold text-[#111111] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-md sm:rounded-lg border border-[#E7E7E7] focus:border-[#D98900] focus:ring-1 focus:ring-[#D98900] outline-hidden placeholder:text-[#A0A0A0]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#737373] uppercase tracking-wider mb-1.5">
                  URL Amigável (Slug)
                </label>
                <div className="flex items-center rounded-md sm:rounded-lg border border-[#E7E7E7] bg-[#F6F6F4] px-3 sm:px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm">
                  <span className="text-[#737373] font-medium mr-1">/papo-de-especialista/</span>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="w-full bg-transparent text-[#111111] font-semibold outline-hidden"
                  />
                </div>
              </div>
            </div>

            {/* Visual Editor Card */}
            <div className="bg-white rounded-lg sm:rounded-xl border border-[#E7E7E7] shadow-xs overflow-hidden">
              {/* Toolbar */}
              <div className="bg-[#F8F8F7] border-b border-[#E7E7E7] px-4 py-2.5 flex flex-wrap items-center gap-1 text-[#3C3C3C]">
                <button
                  type="button"
                  className="p-1.5 rounded-lg hover:bg-white text-xs font-semibold px-2 border border-transparent hover:border-[#E7E7E7]"
                  title="Parágrafo"
                >
                  P
                </button>
                <button
                  type="button"
                  className="p-1.5 rounded-lg hover:bg-white text-xs font-semibold px-2 border border-transparent hover:border-[#E7E7E7] flex items-center gap-1"
                  title="Título H2"
                >
                  <Heading2 className="w-4 h-4" /> H2
                </button>
                <button
                  type="button"
                  className="p-1.5 rounded-lg hover:bg-white text-xs font-semibold px-2 border border-transparent hover:border-[#E7E7E7] flex items-center gap-1"
                  title="Título H3"
                >
                  <Heading3 className="w-4 h-4" /> H3
                </button>

                <div className="h-4 w-px bg-[#E7E7E7] mx-1" />

                <button
                  type="button"
                  className="p-1.5 rounded-lg hover:bg-white border border-transparent hover:border-[#E7E7E7]"
                  title="Negrito"
                >
                  <Bold className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="p-1.5 rounded-lg hover:bg-white border border-transparent hover:border-[#E7E7E7]"
                  title="Itálico"
                >
                  <Italic className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="p-1.5 rounded-lg hover:bg-white border border-transparent hover:border-[#E7E7E7]"
                  title="Sublinhado"
                >
                  <Underline className="w-4 h-4" />
                </button>

                <div className="h-4 w-px bg-[#E7E7E7] mx-1" />

                <button
                  type="button"
                  className="p-1.5 rounded-lg hover:bg-white border border-transparent hover:border-[#E7E7E7]"
                  title="Lista com marcadores"
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="p-1.5 rounded-lg hover:bg-white border border-transparent hover:border-[#E7E7E7]"
                  title="Lista numerada"
                >
                  <ListOrdered className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="p-1.5 rounded-lg hover:bg-white border border-transparent hover:border-[#E7E7E7]"
                  title="Citação"
                >
                  <Quote className="w-4 h-4" />
                </button>

                <div className="h-4 w-px bg-[#E7E7E7] mx-1" />

                <button
                  type="button"
                  className="p-1.5 rounded-lg hover:bg-white border border-transparent hover:border-[#E7E7E7]"
                  title="Inserir Link"
                >
                  <Link2 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="p-1.5 rounded-lg hover:bg-white border border-transparent hover:border-[#E7E7E7]"
                  title="Inserir Imagem da Biblioteca"
                >
                  <ImageIcon className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="p-1.5 rounded-lg hover:bg-white border border-transparent hover:border-[#E7E7E7]"
                  title="Inserir Tabela Comparativa"
                >
                  <TableIcon className="w-4 h-4" />
                </button>
              </div>

              {/* Textarea simulation */}
              <div className="p-6">
                <label className="block text-xs font-bold text-[#737373] uppercase tracking-wider mb-2">
                  Corpo do Artigo (Rich HTML)
                </label>
                <textarea
                  rows={14}
                  value={contentHtml}
                  onChange={(e) => setContentHtml(e.target.value)}
                  className="w-full font-mono text-sm leading-relaxed text-[#111111] p-4 rounded-xl border border-[#E7E7E7] focus:border-[#D98900] focus:ring-1 focus:ring-[#D98900] outline-hidden bg-[#FAFAFA]"
                />

                <div className="mt-4 pt-4 border-t border-[#E7E7E7] flex items-center justify-between text-xs text-[#737373]">
                  <span>Aproximadamente 420 palavras | 3 min de leitura</span>
                  <span className="flex items-center gap-1 text-[#26944B] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Legibilidade adequada (Flesch Score 78)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Editor Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Status & Publication Box */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 border border-[#E7E7E7] shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-[#111111]">Status & Configuração</h3>

              <div>
                <label className="block text-xs text-[#737373] mb-1">Status da Publicação</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as any)}
                  className="w-full text-xs sm:text-sm font-semibold text-[#111111] px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-md sm:rounded-lg border border-[#E7E7E7] focus:border-[#D98900] outline-hidden bg-white"
                >
                  <option value="Publicado">Publicado</option>
                  <option value="Rascunho">Rascunho</option>
                  <option value="Em revisão">Em revisão</option>
                  <option value="Revisão médica">Revisão médica</option>
                  <option value="Agendado">Agendado</option>
                  <option value="Precisa atualizar">Precisa atualizar</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-[#737373] mb-1">Categoria Principal</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full text-xs sm:text-sm font-semibold text-[#111111] px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-md sm:rounded-lg border border-[#E7E7E7] focus:border-[#D98900] outline-hidden bg-white"
                >
                  <option value="Dermatologia">Dermatologia</option>
                  <option value="Transplante Capilar">Transplante Capilar</option>
                  <option value="Cirurgia Plástica">Cirurgia Plástica</option>
                  <option value="Tricologia">Tricologia</option>
                  <option value="Estética">Estética</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-[#737373] mb-1">Autor Responsável</label>
                <select
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full text-xs sm:text-sm font-semibold text-[#111111] px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-md sm:rounded-lg border border-[#E7E7E7] focus:border-[#D98900] outline-hidden bg-white"
                >
                  <option value="Dra. Janaina Tirapelle">Dra. Janaina Tirapelle (CRM-AM 7349)</option>
                  <option value="Dr. João Vieira">Dr. João Vieira (CRM-AM 8521)</option>
                  <option value="Dr. Roberto Silva">Dr. Roberto Silva (CRM-AM 6240)</option>
                  <option value="Equipe Médica Day Clinic">Equipe Médica Day Clinic</option>
                </select>
              </div>
            </div>

            {/* Featured Image */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 border border-[#E7E7E7] shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#111111]">Imagem Destacada</h3>
                <span className="text-[11px] text-[#737373]">16:9 ideal</span>
              </div>

              <div className="relative aspect-video rounded-md sm:rounded-lg overflow-hidden border border-[#E7E7E7] bg-[#F6F6F4] group">
                <Image
                  src={image}
                  alt="Imagem destacada do artigo"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-[#111111]/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                  <button
                    type="button"
                    className="px-3 py-1.5 rounded-md sm:rounded-lg bg-white text-xs font-bold text-[#111111] hover:bg-[#F6F6F4] transition"
                  >
                    Trocar imagem
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-[#737373] pt-1">
                <span>{image.split("/").pop()}</span>
                <button
                  type="button"
                  onClick={() => setImage("/images/site/transplante.jpg")}
                  className="text-[#D98900] hover:underline font-semibold"
                >
                  Selecionar outra
                </button>
              </div>
            </div>

            {/* Excerpt / Resumo */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 border border-[#E7E7E7] shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#111111]">Resumo / Lead</h3>
                <span className="text-[11px] text-[#737373]">{excerpt.length}/160 caracteres</span>
              </div>
              <p className="text-xs text-[#737373]">
                Utilizado nos cards da listagem do blog e na chamada inicial do artigo.
              </p>
              <textarea
                rows={3}
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="w-full text-xs text-[#111111] p-2.5 sm:p-3 rounded-md sm:rounded-lg border border-[#E7E7E7] focus:border-[#D98900] outline-hidden leading-relaxed"
              />
            </div>
          </div>
        </div>
      )}

      {/* SEO & Previews Tab */}
      {activeTab === "seo" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* SEO Inputs (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E7E7E7] shadow-xs space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#111111]">Metadados para Motores de Busca</h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#26944B]/10 text-[#26944B]">
                  Pontuação SEO: 94/100
                </span>
              </div>

              {/* Title SEO */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-[#737373] uppercase tracking-wider">
                    Título SEO (Meta Title)
                  </label>
                  <span
                    className={`text-xs font-bold ${
                      seoTitle.length > 60 ? "text-[#D94B4B]" : "text-[#26944B]"
                    }`}
                  >
                    {seoTitle.length}/60 caracteres
                  </span>
                </div>
                <input
                  type="text"
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value)}
                  className="w-full text-sm font-medium text-[#111111] px-4 py-2.5 rounded-xl border border-[#E7E7E7] focus:border-[#D98900] outline-hidden"
                />
              </div>

              {/* Meta Description */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-[#737373] uppercase tracking-wider">
                    Meta Descrição
                  </label>
                  <span
                    className={`text-xs font-bold ${
                      metaDesc.length > 160 ? "text-[#D94B4B]" : "text-[#26944B]"
                    }`}
                  >
                    {metaDesc.length}/160 caracteres
                  </span>
                </div>
                <textarea
                  rows={3}
                  value={metaDesc}
                  onChange={(e) => setMetaDesc(e.target.value)}
                  className="w-full text-sm text-[#111111] p-3 rounded-xl border border-[#E7E7E7] focus:border-[#D98900] outline-hidden leading-relaxed"
                />
              </div>

              {/* Keywords */}
              <div>
                <label className="block text-xs font-bold text-[#737373] uppercase tracking-wider mb-1.5">
                  Palavra-chave Principal
                </label>
                <input
                  type="text"
                  value={primaryKw}
                  onChange={(e) => setPrimaryKw(e.target.value)}
                  className="w-full text-sm font-semibold text-[#111111] px-4 py-2.5 rounded-xl border border-[#E7E7E7] focus:border-[#D98900] outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#737373] uppercase tracking-wider mb-1.5">
                  Palavras-chave Secundárias
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {keywords.map((kw) => (
                    <span
                      key={kw}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F6F6F4] text-xs font-medium text-[#3C3C3C] border border-[#E7E7E7]"
                    >
                      {kw}
                      <button
                        type="button"
                        onClick={() => removeKeyword(kw)}
                        className="text-[#737373] hover:text-[#D94B4B]"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newKw}
                    onChange={(e) => setNewKw(e.target.value)}
                    placeholder="Adicionar palavra-chave..."
                    className="flex-1 text-xs text-[#111111] px-3.5 py-2 rounded-xl border border-[#E7E7E7] focus:border-[#D98900] outline-hidden"
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addKeyword())}
                  />
                  <button
                    type="button"
                    onClick={addKeyword}
                    className="px-3 py-2 rounded-xl bg-[#111111] text-white text-xs font-bold hover:bg-[#242424]"
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* SERP Previews (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E7E7E7] shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-[#E7E7E7] pb-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSeoPreviewTab("google")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                      seoPreviewTab === "google"
                        ? "bg-[#111111] text-white"
                        : "bg-[#F6F6F4] text-[#737373] hover:text-[#111111]"
                    }`}
                  >
                    Google SERP Preview
                  </button>
                  <button
                    onClick={() => setSeoPreviewTab("opengraph")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                      seoPreviewTab === "opengraph"
                        ? "bg-[#111111] text-white"
                        : "bg-[#F6F6F4] text-[#737373] hover:text-[#111111]"
                    }`}
                  >
                    WhatsApp & Redes (Open Graph)
                  </button>
                </div>
                <span className="text-[11px] text-[#737373]">Live Preview</span>
              </div>

              {/* Google Preview */}
              {seoPreviewTab === "google" ? (
                <div className="p-4 rounded-xl border border-[#E7E7E7] bg-[#FAFAFA] space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#202124]">
                    <div className="w-4 h-4 rounded-full bg-[#D98900] flex items-center justify-center text-white text-[9px] font-bold">
                      D
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] font-medium text-[#202124] leading-tight">Day Clinic Manaus</span>
                      <span className="text-[10px] text-[#5F6368] leading-tight">
                        https://dayclinic.com.br/papo-de-especialista/{slug}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-base font-medium text-[#1A0DAB] hover:underline cursor-pointer leading-snug">
                    {seoTitle || "Título do artigo no Google"}
                  </h4>

                  <p className="text-xs text-[#4D5156] leading-relaxed">
                    {metaDesc || "A meta descrição configurada aparecerá exatamente aqui para os usuários no buscador do Google."}
                  </p>
                </div>
              ) : (
                /* Social / WhatsApp Card Preview */
                <div className="max-w-sm mx-auto rounded-xl border border-[#E7E7E7] overflow-hidden bg-white shadow-sm">
                  <div className="relative aspect-video bg-[#F6F6F4]">
                    <Image src={image} alt="Open Graph Preview" fill className="object-cover" />
                  </div>
                  <div className="p-3.5 space-y-1">
                    <span className="text-[10px] font-bold uppercase text-[#737373] tracking-wider">
                      DAYCLINIC.COM.BR
                    </span>
                    <h5 className="text-xs font-bold text-[#111111] line-clamp-2 leading-tight">
                      {seoTitle}
                    </h5>
                    <p className="text-[11px] text-[#737373] line-clamp-2">
                      {metaDesc}
                    </p>
                  </div>
                </div>
              )}

              {/* SEO Tips */}
              <div className="p-4 rounded-xl bg-[#FFF4E3] border border-[#D98900]/20 text-xs text-[#3C3C3C] space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-[#D98900]">
                  <Sparkles className="w-4 h-4" /> Checklist de Otimização Semântica
                </div>
                <ul className="space-y-1 text-[#3C3C3C] list-disc list-inside">
                  <li>Palavra-chave principal identificada nos primeiros 100 caracteres.</li>
                  <li>Tamanho do Meta Title adequado para exibição em dispositivos móveis.</li>
                  <li>Link canônico gerado automaticamente com HTTPS.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AEO / FAQ Tab */}
      {activeTab === "aeo" && (
        <div className="bg-white rounded-2xl p-6 border border-[#E7E7E7] shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#E7E7E7]">
            <div>
              <h3 className="text-base font-bold text-[#111111]">
                Perguntas Frequentes para Answer Engine Optimization (AEO)
              </h3>
              <p className="text-xs text-[#737373]">
                Estrutura otimizada para respostas diretas no Google, Perplexity e ChatGPT com FAQPage Schema automático.
              </p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FFF4E3] text-[#D98900]">
              {faqs.length} perguntas cadastradas
            </span>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="p-4 rounded-xl border border-[#E7E7E7] bg-[#FAFAFA] relative group">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <h4 className="text-sm font-bold text-[#111111] flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#111111] text-white text-[11px] flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      {f.question}
                    </h4>
                    <p className="text-xs text-[#737373] pl-7 leading-relaxed">{f.answer}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFaq(i)}
                    className="text-xs text-[#737373] hover:text-[#D94B4B] p-1"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add new FAQ form */}
          <div className="p-4 rounded-xl border border-dashed border-[#D98900]/40 bg-[#FFF4E3]/30 space-y-3">
            <h4 className="text-xs font-bold text-[#D98900] uppercase tracking-wider">
              Adicionar Nova Pergunta & Resposta
            </h4>
            <input
              type="text"
              value={newFaqQ}
              onChange={(e) => setNewFaqQ(e.target.value)}
              placeholder="Pergunta (ex: Em quanto tempo aparecem os resultados?)"
              className="w-full text-xs text-[#111111] p-3 rounded-xl border border-[#E7E7E7] bg-white focus:border-[#D98900] outline-hidden font-medium"
            />
            <textarea
              rows={2}
              value={newFaqA}
              onChange={(e) => setNewFaqA(e.target.value)}
              placeholder="Resposta médica clara, objetiva e direta..."
              className="w-full text-xs text-[#111111] p-3 rounded-xl border border-[#E7E7E7] bg-white focus:border-[#D98900] outline-hidden"
            />
            <button
              type="button"
              onClick={addFaq}
              className="px-4 py-2 rounded-xl bg-[#D98900] hover:bg-[#C77900] text-white text-xs font-bold transition flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" /> Adicionar Pergunta ao AEO
            </button>
          </div>
        </div>
      )}

      {/* GEO Entities Tab */}
      {activeTab === "geo" && (
        <div className="bg-white rounded-2xl p-6 border border-[#E7E7E7] shadow-xs space-y-6">
          <div className="pb-3 border-b border-[#E7E7E7]">
            <h3 className="text-base font-bold text-[#111111]">Entidades de Busca Geográfica (GEO / Local SEO)</h3>
            <p className="text-xs text-[#737373]">
              Vincula o artigo a termos regionais de Manaus, bairros (Adrianópolis, Ponta Negra) e entidades médicas reconhecidas.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {geoEntities.map((geo) => (
              <span
                key={geo}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#F6F6F4] text-xs font-semibold text-[#111111] border border-[#E7E7E7]"
              >
                <Globe className="w-3.5 h-3.5 text-[#D98900]" />
                {geo}
                <button
                  type="button"
                  onClick={() => removeGeoEntity(geo)}
                  className="text-[#737373] hover:text-[#D94B4B] ml-1"
                >
                  ×
                </button>
              </span>
            ))}
          </div>

          <div className="flex gap-2 max-w-md">
            <input
              type="text"
              value={newGeo}
              onChange={(e) => setNewGeo(e.target.value)}
              placeholder="Nova entidade (ex: Manaus, AM, Adrianópolis...)"
              className="flex-1 text-xs text-[#111111] px-3.5 py-2.5 rounded-xl border border-[#E7E7E7] focus:border-[#D98900] outline-hidden"
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addGeoEntity())}
            />
            <button
              type="button"
              onClick={addGeoEntity}
              className="px-4 py-2.5 rounded-xl bg-[#111111] text-white text-xs font-bold hover:bg-[#242424]"
            >
              Adicionar
            </button>
          </div>
        </div>
      )}

      {/* Schema Tab */}
      {activeTab === "schema" && (
        <div className="bg-white rounded-2xl p-6 border border-[#E7E7E7] shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E7E7E7]">
            <div>
              <h3 className="text-base font-bold text-[#111111]">Schema Markup (JSON-LD) Injetado</h3>
              <p className="text-xs text-[#737373]">
                Estrutura de dados Schema.org padrão MedicalWebPage, MedicalBusiness e FAQPage validada.
              </p>
            </div>
            <span className="text-xs text-[#26944B] font-bold flex items-center gap-1">
              <Check className="w-3.5 h-3.5" /> Sintaxe Válida
            </span>
          </div>

          <pre className="p-4 rounded-xl bg-[#181818] text-[#3CD070] font-mono text-xs overflow-x-auto leading-relaxed">
{`{
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "headline": "${title}",
  "url": "https://dayclinic.com.br/papo-de-especialista/${slug}",
  "image": "https://dayclinic.com.br${image}",
  "author": {
    "@type": "Physician",
    "name": "${author}"
  },
  "publisher": {
    "@type": "MedicalClinic",
    "name": "Day Clinic Tirapelle & Vieira",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Manaus",
      "addressRegion": "AM",
      "addressCountry": "BR"
    }
  },
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": ${JSON.stringify(
      faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer
        }
      })),
      null,
      2
    )}
  }
}`}
          </pre>
        </div>
      )}

      {/* Publicacao / Scheduling Tab */}
      {activeTab === "publicacao" && (
        <div className="bg-white rounded-2xl p-6 border border-[#E7E7E7] shadow-xs space-y-6 max-w-2xl">
          <div className="pb-3 border-b border-[#E7E7E7]">
            <h3 className="text-base font-bold text-[#111111]">Configurações de Agendamento</h3>
            <p className="text-xs text-[#737373]">Defina a data e horário exatos para publicação automática.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#737373] uppercase mb-1.5">Data de Publicação</label>
              <input
                type="date"
                defaultValue="2024-03-12"
                className="w-full text-sm text-[#111111] p-3 rounded-xl border border-[#E7E7E7] outline-hidden focus:border-[#D98900]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#737373] uppercase mb-1.5">Horário (Fuso Manaus / UTC-4)</label>
              <input
                type="time"
                defaultValue="09:00"
                className="w-full text-sm text-[#111111] p-3 rounded-xl border border-[#E7E7E7] outline-hidden focus:border-[#D98900]"
              />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#F6F6F4] border border-[#E7E7E7] text-xs text-[#3C3C3C] space-y-1">
            <span className="font-bold text-[#111111]">Notificação Automática:</span>
            <p>Ao publicar, o sitemap.xml será atualizado e o Google Search Console receberá ping de re-indexação.</p>
          </div>
        </div>
      )}
    </div>
  );
}
