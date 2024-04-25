"use client";

import { About } from "@/components/About";
import { Home } from "@/components/Home";
import { Layout } from "@/layout/Layout";
import { PrismicProvider } from "@prismicio/react";
import { client } from "@/services/prismic";
import { Skills } from "../components/Skills";
import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <PrismicProvider client={client}>
      <Header />
      <Layout>
        <main className="xl:px-10 md:px-5 sm:px-4">
          <Home />
          <About />
          <Skills />
          <Contact />
        </main>
      </Layout>
    </PrismicProvider>
  );
}
