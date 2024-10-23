import { useAllPrismicDocumentsByType } from "@prismicio/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { lazy, Suspense } from "react";
const ProjectCard = lazy(async () => import("./ProjectCard"));

export function Project() {
  const [documents] = useAllPrismicDocumentsByType("projects");

  return (
    <div className="w-full h-screen max-sm:h-full flex flex-col items-center py-16">
      <h1
        id="projects"
        className="text-5xl max-xl:text-4xl max-md:text-3xl max-sm:text-2xl text-cyan-400 font-bold"
      >
        Projetos
      </h1>
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full max-w-4xl max-lg:max-w-xl max-sm:max-w-[300px] flex flex-1 items-center justify-center mt-6"
      >
        <CarouselContent>
          <Suspense
            fallback={<span className="text-xs">Carregando projetos...</span>}
          >
            {documents &&
              documents.map((doc) => (
                <CarouselItem
                  key={doc.id}
                  id={doc.id}
                  className="flex items-center justify-center mt-"
                >
                  <ProjectCard doc={doc} />
                </CarouselItem>
              ))}
          </Suspense>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
