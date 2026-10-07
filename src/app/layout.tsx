import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { clinicConfig } from "@/config/clinic";

export const metadata: Metadata = {
  title: {
    default: `${clinicConfig.name} | Referência em Transplante Capilar, Dermatologia e Cirurgia Plástica`,
    template: `%s | ${clinicConfig.name}`,
  },
  description:
    "Clínica médica de alto padrão em Manaus/AM. Especialistas em transplante capilar FUE, dermatologia clínica e cirurgia plástica com estrutura cirúrgica própria e tecnologia avançada.",
  keywords: [
    "Transplante Capilar Manaus",
    "FUE Manaus",
    "Dermatologista Manaus",
    "Cirurgia Plástica Manaus",
    "Day Clinic Tirapelle Vieira",
    "Tratamento Calvície Manaus",
  ],
  authors: [{ name: clinicConfig.name }],
  openGraph: {
    title: `${clinicConfig.name} | Medicina Premium em Manaus`,
    description:
      "Excelência médica em transplante capilar, dermatologia e cirurgia plástica. Tecnologia avançada e atendimento personalizado.",
    siteName: clinicConfig.name,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen font-sans bg-white text-ink-900 selection:bg-brand-orange selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
