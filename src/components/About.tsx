import Image from "next/image";
import aboutImage from "../public/about-image.png";

export function About() {
  return (
    <div className="w-full h-full 2xl:h-screen max-lg:h-full py-16 flex flex-col items-center">
      <h1 className="text-5xl max-xl:text-4xl max-md:text-3xl max-sm:text-2xl text-cyan-400 font-bold">
        Sobre
      </h1>

      <div className="mt-16 w-full flex items-end justify-around max-xl:justify-center max-xl:flex-col max-xl:items-center max-xl:gap-16 max-lg:gap-10 max-md:gap-8">
        {/* Texto */}
        <div className="max-w-2xl w-full flex flex-col items-start max-xl:items-center">
          <h1 className="inline-block bg-slate-700 text-4xl mb-16 py-4 px-6 rounded-tl-[3rem] rounded-br-[3rem] border-2 border-cyan-500 max-2xl:text-2xl max-2xl:mb-8 max-md:text-lg">
            Um pouco sobre mim
          </h1>

          <div className="py-6 px-10 w-[800px] max-2xl:w-[600px] max-xl:w-[500px] max-lg:w-full bg-slate-900 rounded-xl flex flex-col gap-4 leading-relaxed">
            <span className="text-sm text-cyan-500">&lt;p&gt;</span>
            <p>
              <span className="text-cyan-500 text-4xl">Olá!</span> <br />
              Eu sou Eduardo Rodrigues, moro em Sacramento, Brasil. Como
              desenvolvedor full-stack, tenho uma paixão por criar e
              personalizar websites, bem como desenvolver APIs robustas para
              suportar uma variedade de aplicações web e móveis. Ao longo dos
              anos, acumulei uma ampla gama de habilidades nesse campo. Minha
              expertise abrange o uso de tecnologias, como{" "}
              <span className="text-cyan-500">
                React JS, React Native, Next JS e Node JS{" "}
              </span>{" "}
              Sou entusiasta por games, futebol e academia, e adoro canalizar
              minha criatividade em transformar ideias malucas em códigos
              relacionado a esses assuntos. Estou sempre buscando aprender e me
              atualizar para enfrentar novos desafios e contribuir de maneira
              significativa para projetos empolgantes e inovadores.
            </p>
            <span className="text-sm text-cyan-500">&lt;/p&gt;</span>
          </div>
        </div>

        {/* Imagem */}
        <div className="flex-shrink-0 max-w-sm">
          <Image
            src={aboutImage}
            alt="coding"
            width={462}
            height={556}
            className="object-contain max-w-full max-h-[500px]"
          />
        </div>
      </div>
    </div>
  );
}
