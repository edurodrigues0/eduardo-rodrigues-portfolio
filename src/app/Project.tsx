"use client";

import { PrismicRichText, useAllPrismicDocumentsByType } from "@prismicio/react";

import { Badge } from "@/components/ui/badge";
import Image from "next/image"
import { useState } from "react";

export function Project() {
  const [documents, {state}] = useAllPrismicDocumentsByType('projects')

  const [slide, setSlide] = useState(0);


  // Funcao para Slide de projeto anterior
  function prevSlide() {
    if (slide <= 0) {
      return setSlide(documents!.length - 1);
    }
    return setSlide(slide - 1);
  }


  // Funcao para proximo Slide de projetos
  function nextSlide() {
    if (slide >= documents!.length - 1) {
      return setSlide(0);
    }

    return setSlide(slide + 1);
  }

  return (
    <div
      id="project"
      className="w-full h-screen max-sm:h-full flex flex-col items-center p-10"
    >
      <h1 className="text-4xl max-md:text-2xl max-sm:text-lg mb-20">
        My Projects
      </h1>

      <div className="carousel carousel-center max-w-2xl max-md:max-w-md w-full p-4 space-x-4 rounded-box">
        {state === "loaded" && (
        documents && (
          documents.map((doc) => {
            return (
              <div
                key={doc.id}
                id={doc.id}
                className="carousel-item w-full relative"
              >
                <Image
                  width={500}
                  height={500}
                  alt=""
                  src={doc.data.slices[0].primary.slide.url}
                  className="w-full h-[33rem]"
                />
                <div className="absolute w-full h-44 max-md:h-32 px-8 py-4 bg-secondary opacity-80 bottom-0">
                  <div className="flex gap-4 items-center">
                    <h1 className="text-xl max-md:text-lg max-sm:text-base text-primary">
                      {doc.data.slices[0].primary.title}
                    </h1>
                    <Badge
                      variant="outline"
                      className="border-slate-200 rounded-md max-md:text-[0.625rem]"
                    >
                      {doc.data.slices[0].primary.language}
                    </Badge>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    <PrismicRichText field={doc.data.slices[0].primary.description} />
                  </span>
                  <div className="flex items-center gap-4 mt-2 text-sm max-md:text-xs">
                    <a
                      href={doc.data.slices[0].primary.homepage.url}
                      target="_blank"
                      rel="noopener"
                      className="hover:underline"
                    >
                      Link
                    </a>
                    <a
                      href={doc.data.slices[0].primary.repository.url}
                      target="_blank"
                      className="hover:underline"
                    >
                      Repositorie
                    </a>
                  </div>
  
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 -top-1/4">
                    <a
                      onClick={prevSlide}
                      href={`#${documents[slide].id}`}
                      className="btn btn-circle"
                    >
                      ❮
                    </a>
                    <a
                      onClick={nextSlide}
                      href={`#${documents[slide].id}`}
                      className="btn btn-circle"
                    >
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        )
        )}
      </div>
    </div>
  );
}