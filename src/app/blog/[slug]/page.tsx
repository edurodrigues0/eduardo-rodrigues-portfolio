"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { client } from "@/services/prismic";
import { PrismicProvider } from "@prismicio/react";
import { lazy, Suspense } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const ArticleContent = lazy(async () => import("@/components/ArticleContent"));

interface PageProps {
  params: {
    slug: string;
  };
}

export default function Page({ params: { slug } }: PageProps) {
  return (
    <PrismicProvider client={client}>
      <div className="max-w-[1920px] px-32 max-lg:px-24 max-md:px-16 max-sm:px-6 overflow-x-hidden">
        <Header />

        <Suspense
          fallback={<span className="text-xs">Carregando post...</span>}
        >
          <ArticleContent slug={slug} />
        </Suspense>

        <div className="flex items-center justify-between w-[720px] mx-auto border-t border-slate-700 pt-10 max-lg:w-[540px] max-sm:w-[320px]">
          <button className="text-2xl text-cyan-500 hover:text-cyan-400">
            {" "}
            <FiChevronLeft />{" "}
          </button>

          <button className="text-2xl text-cyan-500 hover:text-cyan-400">
            {" "}
            <FiChevronRight />{" "}
          </button>
        </div>

        <Footer />
      </div>
    </PrismicProvider>
  );
}
