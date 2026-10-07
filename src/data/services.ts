import { ServiceData } from "@/components/home/ServiceCard";
import { clinicConfig } from "@/config/clinic";

export interface ExtendedServiceData extends ServiceData {
  imageSrc?: string;
}

export const servicesData: ExtendedServiceData[] = [
  {
    id: "transplante",
    title: "Transplante Capilar FUE",
    category: "Restauração Capilar",
    description:
      "Técnica fio a fio sem cicatriz linear, planejamento milimétrico da linha anterior e máxima densidade folicular com resultado natural.",
    imageSlot: "service-transplante",
    imageSrc: clinicConfig.images.transplante,
    href: "/servicos#transplante",
  },
  {
    id: "dermatologia",
    title: "Dermatologia Clínica & Cirúrgica",
    category: "Saúde da Pele",
    description:
      "Acompanhamento especializado para acne, melasma, lesões cutâneas e rejuvenescimento facial com suporte tecnológico de ponta.",
    imageSlot: "service-dermatologia",
    imageSrc: clinicConfig.images.dermatologia,
    href: "/servicos#dermatologia",
  },
  {
    id: "plastica",
    title: "Cirurgia Plástica",
    category: "Procedimentos Cirúrgicos",
    description:
      "Procedimentos estéticos e reparadores com planejamento seguro, centro cirúrgico exclusivo e rigor técnico do pré ao pós-operatório.",
    imageSlot: "service-cirurgia-plastica",
    imageSrc: clinicConfig.images.centroCirurgico,
    href: "/servicos#plastica",
  },
  {
    id: "capilar",
    title: "Tratamentos & Tricologia Médica",
    category: "Terapias Capilares",
    description:
      "Protocolos personalizados como MMP Capilar, microinfusão de ativos, bioestimuladores e laserterapia para fortalecimento dos fios.",
    imageSlot: "service-tratamentos-capilares",
    imageSrc: clinicConfig.images.tricologia,
    href: "/servicos#capilar",
  },
  {
    id: "estetica",
    title: "Estética Médica Avançada",
    category: "Cosmiatria",
    description:
      "Tratamentos não cirúrgicos focados em harmonia facial, toxina botulínica, bioremodeladores e tecnologias para estímulo de colágeno.",
    imageSlot: "service-estetica",
    imageSrc: clinicConfig.images.estetica,
    href: "/servicos#estetica",
  },
];
