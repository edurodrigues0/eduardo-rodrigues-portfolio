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

  useEffect(() => {
    api.get("/users/EduRodriguesDev/repos").then((response) => {
      setRepos(response.data);
    });
  }, []);

  console.log(repos);

  const repostoryList = repos.filter((repo) => repo.name !== "EduRodriguesDev");

  return (
    <div className="w-full h-screen flex flex-col items-center p-10">
      <h1 className="text-4xl max-md:text-2xl max-sm:text-lg mb-20">
        Projects
      </h1>

      <div className="carousel carousel-center max-w-2xl w-full p-4 space-x-4 rounded-box">
        {repostoryList.map((repo) => {
          return (
            <div key={repo.id} id={repo.name} className="carousel-item w-full relative">
              <img
                src="http://github.com/edurodrigues0.png"
                className="w-full"
              />
              <div className="absolute w-full h-44 px-8 py-4 bg-secondary opacity-80 bottom-0">
                <div className="flex gap-4 items-center">
                  <h1 className="text-xl text-primary">
                    {repo.name}
                  </h1>
                  <Badge
                    variant="outline"
                    className="border-slate-200 rounded-md"
                  >
                    {repo.language}
                  </Badge>
                </div>
                <span className="text-xs text-muted-foreground">
                  {repo.description}
                </span>
                <div className="flex items-center gap-4 mt-2 text-sm">
                  <a href={`http://${repo.homepage}`} target="_blank" className="hover:underline">
                    Link
                  </a>
                  <a href={repo.html_url} target="_blank" className="hover:underline">
                    Repositorie
                  </a>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 -top-1/4">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
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
