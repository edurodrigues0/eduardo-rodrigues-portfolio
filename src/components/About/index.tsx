import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import Image from "next/image";
import { Divider } from "../Divider";

export function About() {
  // Array de objetos de skills
  const icons = [
    {
      id: 1,
      icon: <FiMail size={24} />,
      href: "mailto:edurodriguesdev1@gmail.com",
    },
    {
      id: 2,
      icon: <FiGithub size={24} />,
      href: "https://github.com/edurodrigues0",
    },
    {
      id: 3,
      icon: <FiLinkedin size={24} />,
      href: "https://www.linkedin.com/in/eduardo-rodrigues-93b66518a/",
    },
  ];

  return (
    <div
      id="sobre"
      className="w-full h-screen flex flex-col items-center justify-start"
    >
      <Divider title="Sobre" />

      <div className="flex-1 w-full flex justify-around items-center gap-10">
        <div className="flex flex-col gap-6 items-center">
          <Image
            width={500}
            height={500}
            className="p-2 w-72 rounded-full border-2 border-primary"
            src="https://github.com/edurodrigues0.png"
            alt="Foto de perfil de Eduardo Rodrigues"
          />
          <span className="text-2xl w-fit font-bold">Eduardo Rodrigues</span>
          <div className="w-full flex items-center justify-evenly text-primary">
            {icons.map((icon) => {
              return (
                <a
                  key={icon.id}
                  href={icon.href}
                  className="hover:text-primaryForeground transition-colors"
                  target="_blank"
                >
                  {icon.icon}
                </a>
              );
            })}
          </div>
        </div>

        <div className="text-start w-[470px]">
          <h1 className="text-xl font-bold">Conheça um pouco sobre mim</h1>

          <p className="mt-3">
            Olá, eu sou Eduardo Rodrigues, moro em Sacramento, Brasil.
            <br />
            Como desenvolvedor full-stack, tenho uma paixão por criar e
            personalizar websites, bem como desenvolver APIs robustas para
            suportar uma variedade de aplicações web e móveis. Ao longo dos
            anos, acumulei uma ampla gama de habilidades nesse campo. Minha
            expertise abrange o uso de tecnologias modernas, como{" "}
            <span className="text-primary">
              React JS, React Native, Next JS e Node JS
            </span>
            <br />
            Sou entusiasta por games, futebol e academia, e adoro canalizar
            minha criatividade em transformar ideias malucas em códigos
            funcionais relacionado a esses assuntos.
            <br />
            Estou sempre buscando aprender e me atualizar para enfrentar novos
            desafios e contribuir de maneira significativa para projetos
            empolgantes e inovadores
          </p>
        </div>
      </div>
    </div>
  );
}
