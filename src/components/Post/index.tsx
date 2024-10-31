import { useAllPrismicDocumentsByType } from "@prismicio/react";
import Image from "next/image";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function Posts() {
  const [documents] = useAllPrismicDocumentsByType("posts");

  return (
    <div className="max-w-[62.5rem] w-full mt-16 border-t border-slate-700 py-16 mx-auto flex flex-col gap-16">
      {documents ? (
        documents.map((document) => {
          return (
            <div
              key={document.uid}
              className="flex items-center gap-16 border-b border-slate-700 pb-16 max-lg:flex-col"
            >
              <Image
                className="w-[15rem] h-[15rem] max-md:w-[12rem] max-md:h-[12rem] max-sm:w-[10rem] max-sm:h-[10rem] object-cover"
                src={document.data.banner.url}
                alt="Imagem banner"
                height={240}
                width={240}
              />

              <div className="flex-1 flex flex-col gap-6 max-lg:text-center">
                <h2 className="text-cyan-500 text-4xl font-semibold max-md:text-3xl max-sm:text-2xl">
                  {document.data.title}
                </h2>

                <div
                  dangerouslySetInnerHTML={{
                    __html: document.data.content[0].text,
                  }}
                  className="max-w-[720px] text-clip line-clamp-3 max-md:max-w-[100%] max-md:text-base max-sm:text-sm"
                />

                <a
                  href={`/blog/${document.uid}`}
                  className="text-cyan-500 text-lg font-light hover:text-cyan-400 transition-colors max-md:text-base max-sm:text-sm"
                >
                  Leia mais {">>"}
                </a>

                <div className="flex items-center gap-8 max-md:justify-center">
                  <span className="text-sm max-md:text-xs">
                    Data:{" "}
                    {new Date(
                      document.first_publication_date,
                    ).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex flex-col">
          <span className="mx-auto text-4xl animate-spin text-cyan-500">
            <AiOutlineLoading3Quarters />
          </span>
        </div>
      )}
    </div>
  );
}
