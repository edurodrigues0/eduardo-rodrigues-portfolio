/* eslint-disable @typescript-eslint/no-explicit-any */

import { PrismicRichText, usePrismicDocumentByUID } from "@prismicio/react";
import Image from "next/image";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "../Link";
import { PrismicDocument, RichTextField } from "@prismicio/client";
import { AiOutlineLoading } from "react-icons/ai";

interface ArticleContentProps {
  slug: string;
}

interface Document
  extends PrismicDocument<Record<string, any>, string, string> {
  data: {
    title: string;
    content: RichTextField | any[] | null | undefined;
    banner: {
      url: string;
      alt: string;
    };
  };
}

export default function ArticleContent({ slug }: ArticleContentProps) {
  const [document] = usePrismicDocumentByUID<Document>("posts", slug);
  console.log(document);

  function calculateReadingTime(): number {
    const wordsPerMinute = 200;
    const content = document?.data.content?.map((con) => con.text);
    const allWords = content?.reduce((acc, curr) => (acc += curr));

    const words = String(allWords).trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / wordsPerMinute);

    return readingTime;
  }

  return (
    <article className="mt-32 flex flex-col gap-8 w-[720px] mx-auto max-lg:w-[540px] max-sm:w-[320px]">
      <Link
        className="text-sky-300 hover:text-sky-500"
        href="/blog"
        title="VOLTAR"
        icon={FiChevronLeft}
      />

      {document ? (
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
                  {calculateReadingTime()} min
                </span>
              </span>
            </div>
          </header>

          <div className="flex flex-col gap-4 leading-relaxed pb-10">
            <Image
              src={document.data.banner.url}
              className="w-full h-72 object-fill"
              alt={document.data.banner.alt || ""}
              height={400}
              width={400}
            />

            <main className="flex flex-col gap-4">
              <PrismicRichText field={document.data.content as RichTextField} />
            </main>
          </div>
        </>
      ) : (
        <div className="w-full h-[400px] flex items-center justify-center">
          <AiOutlineLoading className="text-7xl text-cyan-500 animate-spin" />
        </div>
      )}
    </article>
  );
}
