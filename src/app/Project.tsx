"use client";

import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { api } from "@/services/api";

interface Repos {
  id: number;
  name: string;
  html_url: string;
  homepage: string;
  language: string;
  description: string;
}

export function Project() {
  const [repos, setRepos] = useState<Repos[]>([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    api.get("/users/EduRodriguesDev/repos").then((response) => {
      setRepos(response.data);
    });
  }, []);

  const repostoryList = repos.filter((repo) => repo.name !== "EduRodriguesDev");

  function prevSlide() {
    if (slide <= 0) {
      return setSlide(repostoryList.length - 1);
    }
    return setSlide(slide - 1);
  }

  function nextSlide() {
    if (slide >= repostoryList.length - 1) {
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
        Projects
      </h1>

      <div className="carousel carousel-center max-w-2xl max-md:max-w-md w-full p-4 space-x-4 rounded-box">
        {repostoryList.map((repo) => {
          const homepage = repo.homepage?.replace("https://", '')
          return (
            <div
              key={repo.id}
              id={repo.name}
              className="carousel-item w-full relative"
            >
              <img
                src="http://github.com/edurodrigues0.png"
                className="w-full"
              />
              <div className="absolute w-full h-44 max-md:h-32 px-8 py-4 bg-secondary opacity-80 bottom-0">
                <div className="flex gap-4 items-center">
                  <h1 className="text-xl max-md:text-lg max-sm:text-base text-primary">
                    {repo.name}
                  </h1>
                  <Badge
                    variant="outline"
                    className="border-slate-200 rounded-md max-md:text-[0.625rem]"
                  >
                    {repo.language}
                  </Badge>
                </div>
                <span className="text-xs text-muted-foreground">
                  {repo.description}
                </span>
                <div className="flex items-center gap-4 mt-2 text-sm max-md:text-xs">
                  {repo.homepage && (
                    <a
                      href={`https://${homepage}`}
                      target="_blank"
                      rel="noopener"
                      className="hover:underline"
                    >
                      Link
                    </a>
                  )}
                  <a
                    href={repo.html_url}
                    target="_blank"
                    className="hover:underline"
                  >
                    Repositorie
                  </a>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 -top-1/4">
                  <a
                    onClick={prevSlide}
                    href={`#${repostoryList[slide].name}`}
                    className="btn btn-circle"
                  >
                    ❮
                  </a>
                  <a
                    onClick={nextSlide}
                    href={`#${repostoryList[slide].name}`}
                    className="btn btn-circle"
                  >
                    ❯
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
