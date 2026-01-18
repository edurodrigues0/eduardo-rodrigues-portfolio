"use client";

import { Header } from "@/components/Header";
import { Posts } from "@/components/Post";
import { Footer } from "@/components/Footer";
import { PrismicProvider } from "@prismicio/react";
import { client } from "@/services/prismic";
import { motion } from "framer-motion";
import { SearchPostContextProvider } from "@/context/SearchPostContext";

export default function Blog() {
  return (
    <SearchPostContextProvider>
      <PrismicProvider client={client}>
        <div className="max-w-[1440px] mx-auto px-32 max-lg:px-24 max-md:px-16 max-sm:px-6 overflow-x-hidden">
          <Header />
          <main>
            <div className="mt-32 flex flex-col items-center gap-6">
              <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 260,
                }}
                className="text-cyan-500 text-7xl font-bold"
              >
                Blog
              </motion.h1>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 260,
                }}
                className="text-sm max-sm:text-xs"
              >
                Meus pensamentos sobre tecnologia e negócios
              </motion.span>
            </div>

            <Posts />
          </main>
          <Footer />
        </div>
      </PrismicProvider>
    </SearchPostContextProvider>
  );
}
