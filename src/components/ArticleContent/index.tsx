import { PrismicRichText, usePrismicDocumentByUID } from "@prismicio/react";
import Image from "next/image";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "../Link";
import { RichTextField } from "@prismicio/client";
import { AiOutlineLoading } from "react-icons/ai";
import { PostDocument } from "@/types/prismic";

interface ArticleContentProps {
  slug: string;
}

export default function ArticleContent({ slug }: ArticleContentProps) {
  const [document, { state, error }] = usePrismicDocumentByUID<PostDocument>(
    "posts",
    slug,
  );

  function calculateReadingTime(content: RichTextField): number {
    const wordsPerMinute = 200;
    
    // Extrai o texto do RichTextField
    const textContent = content
      .map((block) => {
        if ("text" in block) {
          return block.text;
        }
        return "";
      })
      .join(" ");

    const words = textContent.trim().split(/\s+/).filter(Boolean).length;
    const readingTime = Math.ceil(words / wordsPerMinute);

    return readingTime || 1; // Retorna pelo menos 1 minuto
  }

  return (
    <article className="mt-32 flex flex-col gap-8 w-[720px] mx-auto max-lg:w-[540px] max-sm:w-[320px]">
      <Link
        className="text-sky-300 hover:text-sky-500"
        href="/blog"
        title="VOLTAR"
        icon={FiChevronLeft}
      />

      {state === "loading" && (
        <div className="w-full h-[400px] flex items-center justify-center">
          <AiOutlineLoading className="text-7xl text-cyan-500 animate-spin" />
        </div>
      )}

      {state === "failed" && (
        <div className="w-full h-[400px] flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl text-red-400 font-semibold">
            Erro ao carregar post
          </h2>
          <p className="text-slate-300">
            {error?.message || "Não foi possível carregar o conteúdo."}
          </p>
        </div>
      )}

      {state === "loaded" && !document && (
        <div className="w-full h-[400px] flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl text-yellow-400 font-semibold">
            Post não encontrado
          </h2>
          <p className="text-slate-300">
            O post que você está procurando não existe ou foi removido.
          </p>
        </div>
      )}

      {state === "loaded" && document && (
        <>
          <header className="flex flex-col gap-4">
            <h1 className="text-cyan-500 text-2xl font-semibold">
              {document.data.title}
            </h1>

            <div className="border-y border-slate-700 flex items-center gap-6 py-6">
              <span className="font-bold">
                Data{" "}
                <span className="font-normal text-sm">
                  {new Intl.DateTimeFormat("pt-BR", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                  }).format(new Date(document.first_publication_date))}
                </span>
              </span>

              <span className="font-bold">
                Leitura{" "}
                <span className="font-normal text-sm">
                  {calculateReadingTime(document.data.content)} min
                </span>
              </span>
            </div>
          </header>

          <div className="flex flex-col gap-4 leading-relaxed pb-10">
            <Image
              src={document.data.banner.url}
              className="w-full h-72 object-fill"
              alt={document.data.banner.alt || document.data.title}
              height={400}
              width={400}
            />

            <main className="flex flex-col gap-4">
              <PrismicRichText field={document.data.content as RichTextField} />
            </main>
          </div>
        </>
      )}
    </article>
  );
}
