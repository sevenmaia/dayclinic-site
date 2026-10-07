/**
 * Central Configuration for Day Clinic Tirapelle & Vieira
 * Dados reais extraídos do site oficial https://tirapellevieira.com.br/
 */

export const clinicConfig = {
  name: "Day Clinic Tirapelle & Vieira",
  tagline: "Dermatologia, Cirurgia Plástica e Transplante Capilar em Manaus",
  city: "Manaus - AM",
  phone: "(92) 98467-4763",
  phoneRaw: "5592984674763",
  whatsapp: "(92) 98467-4763",
  whatsappNumber: "5592984674763",
  whatsappDefaultMessage: "Olá! Gostaria de agendar uma consulta na Day Clinic Tirapelle & Vieira.",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappDefaultMessage)}`;
  },
  email: "contato@tirapellevieira.com.br",
  address: "Av. Maceió, 22, Adrianópolis, Manaus - AM, CEP 69057-010",
  operatingHours: "Segunda a Sexta: 08h às 19h | Sábado: 08h às 13h",
  instagram: "https://www.instagram.com/_dayclinic/",
  instagramHandle: "@_dayclinic",
  youtube: "https://youtube.com",
  linkedin: "https://linkedin.com",
  facebook: "https://facebook.com",

  // Médicos Diretores e Responsáveis Técnicos
  doctors: [
    {
      id: "dra-janaina",
      name: "Dra. Janaina Tirapelle",
      specialty: "Dermatologista (SBD)",
      role: "Diretora Médica & Co-Fundadora",
      crm: "CRM/AM 5934",
      rqe: "RQE 4200",
      bio: "Médica dermatologista titular pela Sociedade Brasileira de Dermatologia (SBD), referência em tricologia médica, rejuvenescimento facial natural e tratamentos avançados da pele.",
      imageSlot: "doctor-janaina",
      photoSrc: "/images/site/quem-somos-medicos.png",
      instagram: "https://www.instagram.com/janainatirapelledermato/",
    },
    {
      id: "dr-roberto",
      name: "Dr. Roberto Vieira",
      specialty: "Cirurgião Plástico & Transplante Capilar",
      role: "Responsável Técnico & Co-Fundador",
      crm: "CRM/AM 4331",
      rqe: "RQE 2579",
      bio: "Cirurgião plástico membro da Sociedade Brasileira de Cirurgia Plástica (SBCP) e especialista em restauração capilar FUE de alta densidade e cirurgia plástica com máxima segurança.",
      imageSlot: "doctor-roberto",
      photoSrc: "/images/site/quem-somos-medicos.png",
      instagram: "https://www.instagram.com/dr_robertovieira/",
    },
  ],

  // Imagens Oficiais
  images: {
    heroFachada: "/images/site/hero-fachada.png",
    bannerPc: "/images/site/banner-pc.png",
    bannerMobile: "/images/site/banner-mobile.png",
    quemSomosMedicos: "/images/site/quem-somos-medicos.png",
    transplante: "/images/site/transplante.jpg",
    dermatologia: "/images/site/dermatologia.jpg",
    centroCirurgico: "/images/site/centro-cirurgico.jpg",
    recepcao: "/images/site/recepcao.jpg",
    estetica: "/images/site/estetica.jpg",
    tricologia: "/images/site/tricologia.jpg",
    consultorio: "/images/site/consultorio.jpg",
    tecnologia: "/images/site/tecnologia.jpg",
  },

  // Navegação Global
  navigation: [
    { label: "Quem Somos", href: "/quem-somos" },
    { label: "Especialidades", href: "/servicos" },
    { label: "Estrutura", href: "/#estrutura" },
    { label: "Médicos", href: "/#medicos" },
    { label: "Conteúdos", href: "/papo-de-especialista" },
    { label: "Contato", href: "/contato" },
  ],
};
