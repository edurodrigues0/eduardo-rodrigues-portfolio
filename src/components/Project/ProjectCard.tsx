import { PrismicDocument } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

interface ProjetctCardProps {
  doc: PrismicDocument;
}

export function ProjectCard({ doc }: ProjetctCardProps) {
  function handleGoToLink(href: string) {
    window.open(href, "_blank");
  }

  return (
    <div className="relative h-96 w-80 bg-slate-600 grid grid-rows-4 p-4 rounded-lg shadow-lg shadow-slate-700">
      <div className="absolute -top-3 right-1/2 translate-x-1/2 h-20 w-72 bg-primary rounded-lg -z-50" />
      <header className="w-full flex flex-col gap-3 row-span-2">
        <h1 className="mx-auto font-bold">
          {doc.data.slices[0].primary.title}
        </h1>
        <span className="mx-auto text-slate-300 text-xs px-2">
          <PrismicRichText field={doc.data.slices[0].primary.description} />
        </span>
      </header>
      <div className="flex flex-wrap items-end justify-start gap-x-4 gap-y-3 self-center">
        {doc.tags.map((tag, index) => {
          return (
            <span
              key={index}
              className="p-2 border border-primary rounded-lg text-xs text-foreground uppercase"
            >
              {tag}
            </span>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-4 self-end">
        <button
          onClick={() =>
            handleGoToLink(doc.data.slices[0].primary.homepage.url)
          }
          className="p-2 w-full bg-slate-700 text-primary rounded-lg font-bold text-base hover:bg-slate-700/75 transition-colors"
        >
          Acessar
        </button>
        <button
          disabled={!doc.data.slices[0].primary.repository.url}
          onClick={() =>
            handleGoToLink(doc.data.slices[0].primary.repository.url)
          }
          className="p-2 w-full bg-slate-700 text-primary rounded-lg font-bold text-base hover:bg-slate-700/75 transition-colors disabled:bg-gray-800 disabled:text-cyan-800"
        >
          Repositorio
        </button>
      </div>
    </div>
  );
}
