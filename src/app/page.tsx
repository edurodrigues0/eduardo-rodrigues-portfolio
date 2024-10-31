"use client";

import { PrismicProvider } from "@prismicio/react";
import { client } from "@/services/prismic";
import { Header } from "@/components/Header";
import { NavigationBar } from "@/components/NavigationBar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Divider } from "@/components/Divider";
import { Skills } from "@/components/Skills";
import { Project } from "@/components/Project";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <PrismicProvider client={client}>
      <div className="max-w-[1920px] px-32 max-lg:px-24 max-md:px-16 max-sm:px-6 overflow-x-hidden">
        <Header />
        <NavigationBar />
        <Hero />

        <Divider id="sobre" />
        <About />

        <Divider id="skills" />
        <Skills />

        <Divider id="projetos" />
        <Project />

        <Divider id="contato" />
        <Contact />

        <Footer />
      </div>
    </PrismicProvider>
  );
}
