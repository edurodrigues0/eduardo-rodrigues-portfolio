import { PrismicDocument } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

interface ProjetctCardProps {
  doc: PrismicDocument;
}

export default function ProjectCard({ doc }: ProjetctCardProps) {
  function handleGoToLink(href: string) {
    const formattedHref = href.replace("https://", "");
    window.open("https://" + formattedHref, "_blank");
  }

  return (
    <div className="relative h-96 max-lg:h-[30rem] w-[28rem] max-lg:w-64 bg-slate-600 grid grid-rows-4 p-4 rounded-lg shadow-lg shadow-slate-700">
      <header className="w-full flex flex-col gap-3 row-span-2">
        <h1 className="mx-auto font-bold">
          {doc.data.slices[0].primary.title}
        </h1>
        <span className="mx-auto text-slate-300 text-xs px-2">
          <PrismicRichText field={doc.data.slices[0].primary.description} />
        </span>
      </header>
      <div className="flex flex-wrap items-end justify-start gap-x-4 max-sm:gap-x-2 gap-y-3 self-center">
        {doc.tags.map((tag, index) => {
          return (
            <span
              key={index}
              className="p-2 max-sm:p-1.5 border border-primary rounded-lg text-xs text-foreground font-light uppercase"
            >
              {tag}
            </span>
          );
        })}
      </div>
      <div className="flex max-sm:flex-col items-center justify-center gap-4 max-sm:gap-3 self-end">
        <button
          onClick={() =>
            handleGoToLink(doc.data.slices[0].primary.homepage.url)
          }
          className="p-2 w-full flex items-center justify-center cursor-pointer bg-slate-700 text-primary rounded-lg font-bold text-base max-sm:text-xs hover:bg-slate-700/75 transition-colors"
        >
          Acessar
        </button>

        <button
          disabled={!doc.data.slices[0].primary.repository.url}
          onClick={() =>
            handleGoToLink(doc.data.slices[0].primary.repository.url)
          }
          className="p-2 w-full bg-slate-700 text-primary rounded-lg font-bold text-base max-sm:text-xs hover:bg-slate-700/75 transition-colors disabled:bg-gray-800 disabled:text-cyan-800"
        >
          Repositorio
        </button>
      </div>
    </div>
  );
}
