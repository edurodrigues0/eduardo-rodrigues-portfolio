/* eslint-disable @typescript-eslint/no-explicit-any */

import { PrismicRichText, usePrismicDocumentByUID } from "@prismicio/react";
import Image from "next/image";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "../Link";
import { PrismicDocument, RichTextField } from "@prismicio/client";

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
    };
  };
}

export default function ArticleContent({ slug }: ArticleContentProps) {
  const [document] = usePrismicDocumentByUID<Document>("posts", slug);

  if (!document) {
    return false;
  }

  function calculateReadingTime(): number {
    const wordsPerMinute = 200;
    const content = document?.data.content?.map((con) => con.text);
    const allWords = content?.reduce((acc, curr) => (acc += curr));

    const words = String(allWords).trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / wordsPerMinute);

    return readingTime;
  }

  return (
    <div className="mt-32 flex flex-col gap-8 w-[720px] mx-auto max-lg:w-[540px] max-sm:w-[320px]">
      <Link
        className="text-sky-300 hover:text-sky-500"
        href="/blog"
        title="VOLTAR"
        icon={FiChevronLeft}
      />

      <h2 className="text-cyan-500 text-2xl font-semibold">
        {document.data.title}
      </h2>

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

      <article className="flex flex-col gap-4 leading-relaxed pb-10">
        <Image
          src={document.data.banner.url}
          className="w-full h-72 object-fill"
          alt="imagem de banner"
          height={400}
          width={400}
        />

        <div className="flex flex-col gap-4">
          <PrismicRichText field={document.data.content as RichTextField} />
        </div>
      </article>
    </div>
  );
}
