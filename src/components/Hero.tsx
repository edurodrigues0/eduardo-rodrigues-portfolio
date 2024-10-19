"use client";

import { Highlights } from "./Highlights";
import { InfoCard } from "./InfoCard";
import { motion } from "framer-motion";

const highlights = {
  language: 4,
  devTools: 6,
  expirience: 1,
};

export function Hero() {
  return (
    <div className="w-full h-[910px] max-xl:h-full py-16 flex flex-col items-center">
      <motion.h1
        id="hero"
        className="text-5xl max-xl:text-4xl max-md:text-3xl max-sm:text-2xl text-cyan-400 font-bold"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 260,
        }}
      >
        Desenvolvedor Full Stack
      </motion.h1>

      <div className="flex max-xl:flex-col items-center gap-28 px-32 max-xl:px-28 mt-16">
        <InfoCard />
        <div className="flex items-center max-sm:flex-col max-md:justify-center">
          <div className="max-w-[745px] max-md:w-full flex flex-col max-xl:items-center max-xl:justify-center gap-3 pr-16">
            <h1 className="text-4xl max-md:text-2xl max-md:ml-1">
              <span className="text-sm text-cyan-500 ml-[-1rem] max-md:ml-[-0.25rem]">
                &lt;h1&gt;
              </span>
              <br />
              Ola Eu sou <br />
              <span className="text-cyan-500">Eduardo Rodrigues</span>,
              <br />
              Desenvolvedor Full-Stack{" "}
              <span className="text-sm text-cyan-500">&lt;/h1&gt;</span>
            </h1>

            <p className="text-base max-md:ml-1">
              <span className="text-sm text-cyan-500 ml-[-1rem] max-md:ml-[-0.25rem]">
                &lt;p&gt;
              </span>
              <br />
              Um entusiasta da tecnologia apaixonado por código, games, academia
              e futebol. Amo transformar ideias malucas em soluções incríveis.
              Sempre pronto para aprender algo novo e fazer parte de projetos
              emocionantes!
              <br />
              <span className="text-sm text-cyan-500  ml-[-1rem] max-md:ml-[-0.25rem]">
                &lt;/p&gt;
              </span>
            </p>
          </div>
          <div className="flex items-center max-md:mt-4">
            <Highlights
              languages={highlights.language}
              devTools={highlights.devTools}
              experience={highlights.expirience}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
