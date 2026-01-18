import Image from "next/image";
import aboutImage from "../../public/about-image.png";

export function About() {
  return (
    <div className="w-full h-full 2xl:h-screen max-lg:h-full py-16 flex flex-col items-center">
      <h1 className="text-5xl max-xl:text-4xl max-md:text-3xl max-sm:text-2xl text-cyan-400 font-bold">
        Sobre
      </h1>

      <div className="mt-16 w-full px-4 max-lg:px-6 max-md:px-4 max-sm:px-2">
        <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-8 max-xl:gap-8 max-lg:gap-6 max-md:gap-4 max-w-[1440px] mx-auto items-stretch">
          {/* Texto */}
          <div className="w-full flex flex-col items-start max-xl:items-center">
            <h1 className="inline-block bg-slate-700 text-4xl mb-16 py-4 px-6 rounded-tl-[3rem] rounded-br-[3rem] border-2 border-cyan-500 max-2xl:text-2xl max-2xl:mb-8 max-md:text-lg max-xl:mb-8">
              Um pouco sobre mim
            </h1>

            <div className="py-6 px-10 w-full max-xl:w-full bg-slate-900 rounded-xl flex flex-col gap-4 leading-relaxed">
            <span className="text-sm text-cyan-500">&lt;p&gt;</span>
            <p>
              <span className="text-cyan-500 text-4xl">Olá!</span> <br />
              Eu sou Eduardo Rodrigues, Desenvolvedor Full Stack apaixonado por
              criar soluções digitais de alto impacto.<br />
              <br />
              Minha stack principal inclui{" "}
              <span className="text-cyan-500 font-semibold">
                React JS
              </span>
              ,{" "}
              <span className="text-cyan-500 font-semibold">
                React Native
              </span>
              ,{" "}
              <span className="text-cyan-500 font-semibold">
                Next.js
              </span>
              ,{" "}
              <span className="text-cyan-500 font-semibold">
                Nuxt.js
              </span>
              ,{" "}
              <span className="text-cyan-500 font-semibold">
                Node.js
              </span>{" "}
              e{" "}
              <span className="text-cyan-500 font-semibold">
                Python
              </span>
              . Especializo-me em construir aplicações web modernas, sistemas
              mobile nativos e APIs RESTful robustas que atendem às necessidades
              de negócios em escala. <br />
              <br />
              Além do código, integro{" "}
              <span className="text-cyan-500 font-semibold">
                Inteligência Artificial
              </span>{" "}
              em meu workflow de desenvolvimento para acelerar a entrega de
              projetos, otimizar código, gerar documentação e automatizar tarefas
              repetitivas. Essa abordagem me permite focar em resolver problemas
              complexos e agregar valor real aos produtos. <br />
              <br />
              Sou entusiasta por tecnologia, sempre em busca de novas tendências e
              melhores práticas. Minha dedicação em resolver problemas de forma
              eficiente, combinada com o uso estratégico de IA e minha capacidade
              de trabalhar em equipe, fazem de mim um profissional diferenciado
              para projetos desafiadores e inovadores.
            </p>
            <span className="text-sm text-cyan-500">&lt;/p&gt;</span>
          </div>
        </div>

          {/* Imagem */}
          <div className="w-full h-full flex items-center justify-center max-xl:justify-center">
            <Image
              src={aboutImage}
              alt="coding"
              width={600}
              height={800}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
