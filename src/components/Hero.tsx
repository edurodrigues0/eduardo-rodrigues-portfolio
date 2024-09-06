import { Highlights } from "./Highlights";
import { InfoCard } from "./InfoCard";

export function Hero() {
  return (
    <div className="w-full h-[910px] py-16 flex flex-col items-center">
      <h1 className="text-5xl text-cyan-400 font-bold">
        Desenvolvedor Full Stack
      </h1>

      <div className="flex items-center gap-28 px-32 mt-16">
        <InfoCard />
        <div className="flex items-center">
          <div className="max-w-[745px] flex flex-col gap-3 pr-16">
            <h1 className="text-4xl">
              <span className="text-sm text-cyan-500 ml-[-1rem]">
                &lt;h1&gt;
              </span>
              <br />
              Ola Eu sou <br />
              <span className="text-cyan-500">Eduardo Rodrigues</span>,
              <br />
              Desenvolvedor Full-Stack{" "}
              <span className="text-sm text-cyan-500">&lt;/h1&gt;</span>
            </h1>

            <p className="text-base">
              <span className="text-sm text-cyan-500 ml-[-1rem]">
                &lt;p&gt;
              </span>
              <br />
              Um entusiasta da tecnologia apaixonado por código, games, academia
              e futebol. Amo transformar ideias malucas em soluções incríveis.
              Sempre pronto para aprender algo novo e fazer parte de projetos
              emocionantes!
              <br />
              <span className="text-sm text-cyan-500  ml-[-1rem]">
                &lt;/p&gt;
              </span>
            </p>
          </div>
          <div className="flex items-center">
            <Highlights />
          </div>
        </div>
      </div>
    </div>
  );
}
