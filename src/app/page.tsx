"use client";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Home } from "@/components/Home";
import { Layout } from "@/layout/Layout";
import { PrismicProvider } from "@prismicio/react";
import { Project } from "@/components/Project";
import { Separator } from "@/components/ui/separator";
import { client } from "@/services/prismic";

export default function HomePage() {
  return (
    <PrismicProvider client={client}>
      <Layout>
        <main id="home" className="xl:px-10 md:px-5 sm:px-4">
          <Home />
          {/* <Separator className="bg-white" />

          <About />
          <Separator className="bg-white" />

          <Project />
          <Separator className="bg-white" />

          <Contact /> */}
        </main>
      </Layout>
    </PrismicProvider>
  );
}
