"use client";

import { PrismicProvider } from "@prismicio/react";
import { client } from "@/services/prismic";
import { Header } from "@/components/Header";
import { NavigationBar } from "@/components/NavigationBar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Divider } from "@/components/Divider";
export default function HomePage() {
  return (
    <PrismicProvider client={client}>
      <div className="max-w-[1920px] px-32 max-lg:px-24 max-md:px-16 max-sm:px-4">
        <Header />
        <NavigationBar />
        <Hero />
        <Divider />
        <About />
        <Divider />
      </div>
    </PrismicProvider>
  );
}
