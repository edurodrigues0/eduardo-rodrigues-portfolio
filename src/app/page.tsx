"use client";

import { About } from "@/components/About";
import { Home } from "@/components/Home";
import { Layout } from "@/layout/Layout";
import { PrismicProvider } from "@prismicio/react";
import { client } from "@/services/prismic";
import { Skills } from "../components/Skills";
import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Project } from "@/components/Project";

export default function HomePage() {
  return (
    <PrismicProvider client={client}>
      <Header />

      <Layout>
        <main className="xl:px-10 md:px-5 sm:px-4">
          <Home />
          <About />
          <Skills />
          <Project />
          <Contact />
        </main>

        <footer className="w-full h-10 max-sm:h-5 my-10 flex items-center justify-center">
          <h1 className="mx-auto text-xs max-sm:text-[10px] text-slate-300">
            Desenvolvido com 💙 em Next JS por Eduardo Rodrigues.
          </h1>
        </footer>
      </Layout>
    </PrismicProvider>
  );
}
