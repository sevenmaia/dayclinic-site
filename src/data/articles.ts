import { ArticleData } from "@/components/blog/ArticleCard";
import { clinicConfig } from "@/config/clinic";

export interface ExtendedArticleData extends ArticleData {
  imageSrc?: string;
}

export const articlesData: ExtendedArticleData[] = [
  {
    id: "art-1",
    slug: "transplante-capilar-fue-como-funciona",
    title: "Transplante Capilar FUE: tudo o que você precisa saber sobre a recuperação",
    category: "Transplante Capilar",
    date: "12 Mar 2026",
    readTime: "5 min de leitura",
    excerpt:
      "Entenda o passo a passo da técnica FUE, desde o planejamento cirúrgico da linha frontal até as orientações essenciais para os primeiros dias após o procedimento.",
    imageSlot: "blog-01",
    imageSrc: clinicConfig.images.transplante,
  },
  {
    id: "art-2",
    slug: "mmp-capilar-para-queda-de-cabelo",
    title: "MMP Capilar: microinfusão de medicamentos contra a calvície e afinamento",
    category: "Dermatologia",
    date: "28 Fev 2026",
    readTime: "4 min de leitura",
    excerpt:
      "Conheça o protocolo médico que entrega princípios ativos diretamente na raiz folicular, desacelerando a queda e estimulando o espessamento dos fios.",
    imageSlot: "blog-02",
    imageSrc: clinicConfig.images.tricologia,
  },
  {
    id: "art-3",
    slug: "cuidados-com-a-pele-no-clima-de-manaus",
    title: "Cuidados essenciais com a pele e fotoproteção no clima equatorial de Manaus",
    category: "Saúde",
    date: "15 Fev 2026",
    readTime: "6 min de leitura",
    excerpt:
      "Dicas médicas para controlar a oleosidade, prevenir o melasma e proteger a barreira cutânea em ambientes de alta temperatura e umidade.",
    imageSlot: "blog-03",
    imageSrc: clinicConfig.images.dermatologia,
  },
  {
    id: "art-4",
    slug: "planejamento-cirurgia-plastica-segura",
    title: "Planejamento pré-operatório: os pilares de uma cirurgia plástica segura",
    category: "Cirurgia Plástica",
    date: "02 Fev 2026",
    readTime: "7 min de leitura",
    excerpt:
      "Avaliação de risco cirúrgico, exames laboratoriais prévios e alinhamento de expectativas para intervenções faciais e corporais.",
    imageSlot: "blog-04",
    imageSrc: clinicConfig.images.centroCirurgico,
  },
  {
    id: "art-5",
    slug: "bioestimuladores-de-colageno-rejuvenescimento",
    title: "Bioestimuladores de colágeno: firmeza natural sem efeito volumizado",
    category: "Dermatologia",
    date: "20 Jan 2026",
    readTime: "5 min de leitura",
    excerpt:
      "Como substâncias como o ácido poli-L-lático e hidroxiapatita de cálcio agem estimulando a neocolagênese para prevenir a flacidez.",
    imageSlot: "blog-05",
    imageSrc: clinicConfig.images.estetica,
  },
  {
    id: "art-6",
    slug: "mitos-e-verdades-sobre-queda-capilar",
    title: "Mitos e verdades sobre calvície masculina e feminina: quando procurar o médico?",
    category: "Transplante Capilar",
    date: "10 Jan 2026",
    readTime: "4 min de leitura",
    excerpt:
      "Diferença entre eflúvio telógeno e alopecia androgenética, e por que a automedicação pode atrasar o diagnóstico correto.",
    imageSlot: "blog-06",
    imageSrc: clinicConfig.images.tecnologia,
  },
];
