export interface AdminArticle {
  id: string;
  title: string;
  slug: string;
  category: "Dermatologia" | "Transplante Capilar" | "Cirurgia Plástica" | "Tricologia" | "Estética";
  status: "Publicado" | "Rascunho" | "Em revisão" | "Revisão médica" | "Agendado" | "Precisa atualizar";
  date: string;
  author: string;
  image: string;
  excerpt: string;
  seoTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  faq: { question: string; answer: string }[];
  geoEntities: string[];
}

export interface UpcomingPublication {
  id: string;
  dateBadge: { day: string; month: string };
  title: string;
  category: string;
  status: "Agendado" | "Rascunho" | "Em revisão";
}

export interface MediaItem {
  id: string;
  title: string;
  fileName: string;
  category: "Todas" | "Clínica" | "Médicos" | "Procedimentos" | "Blog" | "Banners";
  dimensions: string;
  weight: string;
  url: string;
  alt: string;
  usedIn: string[];
}

export const ADMIN_INITIAL_ARTICLES: AdminArticle[] = [
  {
    id: "art-1",
    title: "Bioestimuladores em Manaus: quando são indicados?",
    slug: "bioestimuladores-em-manaus",
    category: "Dermatologia",
    status: "Publicado",
    date: "12 de mar. de 2024",
    author: "Dra. Janaina Tirapelle",
    image: "/images/site/dermatologia.jpg",
    excerpt: "Entenda quando os bioestimuladores podem ser indicados, como funcionam e quais cuidados são necessários.",
    seoTitle: "Bioestimuladores em Manaus: Indicações e Cuidados | Day Clinic",
    metaDescription: "Entenda quando os bioestimuladores podem ser indicados, como funcionam e quais cuidados pós-procedimento são necessários.",
    primaryKeyword: "bioestimuladores em manaus",
    secondaryKeywords: ["bioestimuladores", "colágeno", "tratamento facial", "dermatologia manaus"],
    faq: [
      {
        question: "O que são bioestimuladores?",
        answer: "Os bioestimuladores são substâncias injetáveis que estimulam o próprio organismo a produzir novo colágeno de forma natural e gradual."
      },
      {
        question: "Quanto tempo dura o efeito dos bioestimuladores?",
        answer: "Os resultados costumam ser visíveis a partir de 30 dias e se mantêm por um período de 18 a 24 meses dependendo do organismo do paciente."
      }
    ],
    geoEntities: ["Day Clinic", "Dermatologia Manaus", "Bioestimuladores", "Dra. Janaina Tirapelle", "Adrianópolis"]
  },
  {
    id: "art-2",
    title: "Transplante capilar: principais técnicas e resultados",
    slug: "transplante-capilar-tecnicas-resultados",
    category: "Transplante Capilar",
    status: "Publicado",
    date: "08 de mar. de 2024",
    author: "Dr. João Vieira",
    image: "/images/site/transplante.jpg",
    excerpt: "Conheça a técnica FUE motorizada e as vantagens do transplante capilar de alta densidade.",
    seoTitle: "Transplante Capilar em Manaus: FUE e Resultados Naturais | Day Clinic",
    metaDescription: "Saiba tudo sobre o transplante capilar FUE com nossa equipe cirúrgica em Manaus.",
    primaryKeyword: "transplante capilar manaus",
    secondaryKeywords: ["técnica FUE", "calvície masculina", "implante capilar"],
    faq: [
      {
        question: "O que é a técnica FUE?",
        answer: "FUE é a extração individual de unidades foliculares sem incisão linear, garantindo recuperação rápida e sem cicatriz aparente."
      }
    ],
    geoEntities: ["Day Clinic", "Transplante Capilar Manaus", "Tricologia", "Dr. João Vieira"]
  },
  {
    id: "art-3",
    title: "Cuidados com a pele no clima de Manaus",
    slug: "cuidados-com-a-pele-clima-manaus",
    category: "Dermatologia",
    status: "Em revisão",
    date: "05 de mar. de 2024",
    author: "Dra. Janaina Tirapelle",
    image: "/images/site/estetica.jpg",
    excerpt: "Como manter a hidratação e a barreira cutânea preservadas mesmo sob alta umidade e radiação UV intensa.",
    seoTitle: "Cuidados com a Pele no Calor e Umidade | Day Clinic Manaus",
    metaDescription: "Dicas de dermatologia médica para manter sua pele protegida e livre de oleosidade em Manaus.",
    primaryKeyword: "cuidados com a pele manaus",
    secondaryKeywords: ["protetor solar", "oleosidade", "pele no calor"],
    faq: [],
    geoEntities: ["Day Clinic", "Dermatologia", "Manaus"]
  },
  {
    id: "art-4",
    title: "Lipoaspiração: quando é indicada?",
    slug: "lipoaspiracao-quando-e-indicada",
    category: "Cirurgia Plástica",
    status: "Rascunho",
    date: "01 de mar. de 2024",
    author: "Dr. Roberto Silva",
    image: "/images/site/centro-cirurgico.jpg",
    excerpt: "Esclareça mitos e verdades sobre contorno corporal e indicações médicas para a cirurgia plástica.",
    seoTitle: "Lipoaspiração em Manaus: Quando Operar? | Day Clinic",
    metaDescription: "Entenda a indicação segura para cirurgia de lipoaspiração com internação day clinic.",
    primaryKeyword: "lipoaspiração manaus",
    secondaryKeywords: ["cirurgia plástica", "contorno corporal"],
    faq: [],
    geoEntities: ["Day Clinic", "Cirurgia Plástica", "Manaus"]
  }
];

export const UPCOMING_PUBLICATIONS: UpcomingPublication[] = [
  {
    id: "up-1",
    dateBadge: { day: "15", month: "MAR" },
    title: "Qual a diferença entre toxina botulínica e preenchimento?",
    category: "Dermatologia",
    status: "Agendado"
  },
  {
    id: "up-2",
    dateBadge: { day: "22", month: "MAR" },
    title: "Recuperação pós-transplante capilar: cuidados essenciais",
    category: "Transplante Capilar",
    status: "Rascunho"
  },
  {
    id: "up-3",
    dateBadge: { day: "28", month: "MAR" },
    title: "Como escolher o melhor tratamento para sua pele",
    category: "Dermatologia",
    status: "Em revisão"
  }
];

export const MEDIA_LIBRARY_MOCK: MediaItem[] = [
  {
    id: "m-1",
    title: "Fachada Day Clinic",
    fileName: "hero-fachada.png",
    category: "Clínica",
    dimensions: "1920 x 1080",
    weight: "840 KB",
    url: "/images/site/hero-fachada.png",
    alt: "Fachada arquitetônica moderna da Day Clinic Tirapelle & Vieira em Manaus",
    usedIn: ["Home > Hero principal", "Quem Somos > Fachada"]
  },
  {
    id: "m-2",
    title: "Recepção Principal de Mármore",
    fileName: "recepcao.jpg",
    category: "Clínica",
    dimensions: "1920 x 1080",
    weight: "520 KB",
    url: "/images/site/recepcao.jpg",
    alt: "Recepção elegante com balcão de mármore e atendimento da Day Clinic",
    usedIn: ["Estrutura > Recepção", "Home > Ambiente"]
  },
  {
    id: "m-3",
    title: "Centro Cirúrgico Avançado",
    fileName: "centro-cirurgico.jpg",
    category: "Clínica",
    dimensions: "1920 x 1080",
    weight: "610 KB",
    url: "/images/site/centro-cirurgico.jpg",
    alt: "Sala cirúrgica estéril equipada para procedimentos e transplantes",
    usedIn: ["Estrutura > Centro Cirúrgico", "Transplante Capilar > Bloco"]
  },
  {
    id: "m-4",
    title: "Consultório Médico",
    fileName: "consultorio.jpg",
    category: "Clínica",
    dimensions: "1920 x 1080",
    weight: "480 KB",
    url: "/images/site/consultorio.jpg",
    alt: "Consultório moderno para atendimento dermatológico e tricológico",
    usedIn: ["Quem Somos > Consultórios"]
  },
  {
    id: "m-5",
    title: "Procedimento Facial Dermatologia",
    fileName: "dermatologia.jpg",
    category: "Procedimentos",
    dimensions: "1920 x 1080",
    weight: "340 KB",
    url: "/images/site/dermatologia.jpg",
    alt: "Aplicação dermatológica de precisão com luz e cuidados médicos",
    usedIn: ["Serviços > Dermatologia", "Blog > Artigo Bioestimuladores"]
  },
  {
    id: "m-6",
    title: "Corpo Clínico Fundador",
    fileName: "quem-somos-medicos.png",
    category: "Médicos",
    dimensions: "1600 x 900",
    weight: "720 KB",
    url: "/images/site/quem-somos-medicos.png",
    alt: "Dra. Janaina Tirapelle e Dr. João Vieira em frente à Day Clinic",
    usedIn: ["Home > Médicos", "Quem Somos > Fundadores", "Admin > Boas-vindas"]
  }
];
