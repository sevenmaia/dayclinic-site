import { clinicConfig } from "@/config/clinic";

export interface BioLinkItem {
  id: string;
  title: string;
  subtitle?: string;
  url: string;
  icon: "globe" | "whatsapp" | "youtube" | "doctor" | "instagram" | "custom";
  highlighted?: boolean;
  enabled: boolean;
  order: number;
  newTab?: boolean;
}

export interface BioLinkConfig {
  title: string;
  subtitle: string;
  logoUrl: string;
  profileSlotImage?: string;
  links: BioLinkItem[];
  socials: {
    instagram?: string;
    youtube?: string;
    website?: string;
    facebook?: string;
    linkedin?: string;
  };
  footerText: string;
  footerCopy: string;
}

export const INITIAL_BIOLINK_CONFIG: BioLinkConfig = {
  title: "Day Clinic",
  subtitle: "O resultado está nos detalhes!",
  logoUrl: "/images/logo/logo-dark.png",
  profileSlotImage: "/images/site/quem-somos-medicos.png",
  links: [
    {
      id: "link-site",
      title: "Conheça o nosso site",
      subtitle: "Tratamentos, especialidades e equipe",
      url: "/",
      icon: "globe",
      highlighted: false,
      enabled: true,
      order: 1,
      newTab: false,
    },
    {
      id: "link-whatsapp",
      title: "WhatsApp",
      subtitle: "Fale com a nossa equipe",
      url: clinicConfig.whatsappUrl,
      icon: "whatsapp",
      highlighted: true,
      enabled: true,
      order: 2,
      newTab: true,
    },
    {
      id: "link-yt-transplante",
      title: "YouTube Transplante Capilar",
      subtitle: "Vídeos, depoimentos e informações",
      url: "https://youtube.com/@dayclinicmanaus",
      icon: "youtube",
      highlighted: false,
      enabled: true,
      order: 3,
      newTab: true,
    },
    {
      id: "link-yt-dermato",
      title: "YouTube Dermatologia",
      subtitle: "Cuidados com a pele e tratamentos",
      url: "https://youtube.com/@dayclinicmanaus",
      icon: "youtube",
      highlighted: false,
      enabled: true,
      order: 4,
      newTab: true,
    },
    {
      id: "link-dra-janaina",
      title: "Dra. Janaina Tirapelle – Dermatologista",
      subtitle: `${clinicConfig.doctors[0].crm} | ${clinicConfig.doctors[0].rqe}`,
      url: clinicConfig.doctors[0].instagram || "https://www.instagram.com/janainatirapelledermato/",
      icon: "doctor",
      highlighted: false,
      enabled: true,
      order: 5,
      newTab: true,
    },
    {
      id: "link-dr-roberto",
      title: "Dr. Roberto Vieira – Transplante Capilar",
      subtitle: `${clinicConfig.doctors[1].crm} | ${clinicConfig.doctors[1].rqe}`,
      url: clinicConfig.doctors[1].instagram || "https://www.instagram.com/dr_robertovieira/",
      icon: "doctor",
      highlighted: false,
      enabled: true,
      order: 6,
      newTab: true,
    },
  ],
  socials: {
    instagram: clinicConfig.instagram,
    youtube: "https://youtube.com/@dayclinicmanaus",
    website: "/",
    facebook: clinicConfig.facebook,
    linkedin: clinicConfig.linkedin,
  },
  footerText: "Day Clinic Tirapelle & Vieira\nDermatologia • Transplante Capilar • Saúde e Bem-estar",
  footerCopy: "© 2024 Day Clinic Tirapelle & Vieira",
};
