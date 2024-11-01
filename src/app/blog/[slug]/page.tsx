"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { client } from "@/services/prismic";
import { PrismicProvider } from "@prismicio/react";
import { lazy, Suspense } from "react";
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
        <Footer />
      </div>
    </PrismicProvider>
  );
}
