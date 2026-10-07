import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export interface ArticleData {
  id: string;
  slug: string;
  title: string;
  category: "Dermatologia" | "Transplante Capilar" | "Cirurgia Plástica" | "Saúde";
  date: string;
  excerpt: string;
  imageSlot: string;
  imageSrc?: string;
  readTime?: string;
}

interface ArticleCardProps {
  article: ArticleData;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="flex flex-col bg-white rounded-xl overflow-hidden border border-borderGray hover:shadow-card hover:border-brand-orange/40 transition-all duration-300 group">
      {/* Imagem do Artigo */}
      <div className="relative overflow-hidden bg-ink-950">
        <ImagePlaceholder
          name={article.imageSlot}
          src={article.imageSrc}
          alt={article.title}
          ratio="16/10"
          label={article.title}
          variant="dark"
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 z-10">
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-brand-orange text-white rounded">
            {article.category}
          </span>
        </div>
      </div>

      {/* Conteúdo do Artigo */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center gap-2 text-xs text-ink-500 mb-2.5">
            <Calendar className="w-3.5 h-3.5 text-brand-orange" />
            <time dateTime={article.date}>{article.date}</time>
            {article.readTime && (
              <>
                <span>•</span>
                <span>{article.readTime}</span>
              </>
            )}
          </div>

          <h3 className="text-lg font-bold text-ink-950 group-hover:text-brand-orange transition-colors line-clamp-2">
            <Link href={`/papo-de-especialista/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          <p className="mt-3 text-sm text-ink-600 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-borderGray-subtle">
          <Link
            href={`/papo-de-especialista/${article.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange group-hover:text-brand-hover transition-colors"
          >
            <span>Ler artigo</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
