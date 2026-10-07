import type { Metadata } from "next";
import { BioLinkView } from "@/components/biolink/BioLinkView";
import { INITIAL_BIOLINK_CONFIG } from "@/data/biolink-data";

export const metadata: Metadata = {
  title: "Day Clinic Tirapelle & Vieira | Links Oficiais",
  description:
    "Acesse os canais oficiais da Day Clinic Tirapelle & Vieira, agende sua avaliação e encontre conteúdos sobre dermatologia, transplante capilar e cirurgia plástica.",
  openGraph: {
    title: "Day Clinic Tirapelle & Vieira | Links Oficiais",
    description:
      "Canais oficiais da Day Clinic em Manaus. Fale no WhatsApp, agende sua consulta e acesse conteúdos exclusivos.",
    url: "https://dayclinic-site.vercel.app/bio",
    siteName: "Day Clinic Tirapelle & Vieira",
    locale: "pt_BR",
    type: "website",
  },
};

export default function BioPage() {
  return <BioLinkView config={INITIAL_BIOLINK_CONFIG} />;
}
