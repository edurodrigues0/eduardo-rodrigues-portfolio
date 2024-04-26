import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { Divider } from "../Divider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { ProjectCard } from "./ProjectCard";

export function Project() {
  const [documents, { state }] = useAllPrismicDocumentsByType("projects");

  return (
    <div
      id="projetos"
      className="w-full h-screen max-sm:h-full flex flex-col items-center"
    >
      <Divider title="Projetos" />

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-5xl max-sm:max-w-[300px] flex flex-1 items-center justify-center"
      >
        <CarouselContent>
          {state === "loaded" &&
            documents &&
            documents.map((doc) => (
              <CarouselItem
                key={doc.id}
                id={doc.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <ProjectCard doc={doc} />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
