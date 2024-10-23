import {
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiComputerLine, RiSmartphoneLine, RiServerLine } from "react-icons/ri";

import Image from "next/image";
import codingImage from "../../public/coding.jpg";
import { Card } from "./Card";
import { ServicesCard } from "./ServicesCard";

const skills = [
  {
    id: 1,
    title: "HTML5",
    icon: <FaHtml5 color="#DD4B25" />,
    dominance: 90,
    color: "bg-[#DD4B25]",
  },
  {
    id: 2,
    title: "CSS",
    icon: <FaCss3Alt color="#77B2DD" />,
    dominance: 70,
    color: "bg-[#77B2DD]",
  },
  {
    id: 3,
    title: "Javascript",
    icon: <IoLogoJavascript color="#F7DF1E" />,
    dominance: 80,
    color: "bg-[#F7DF1E]",
  },
  {
    id: 4,
    title: "React JS",
    icon: <FaReact color="#4082CC" />,
    dominance: 70,
    color: "bg-[#4082CC]",
  },
  {
    id: 5,
    title: "React Native",
    icon: <FaReact color="#61DBFB" />,
    dominance: 40,
    color: "bg-[#61DBFB]",
  },
  {
    id: 6,
    title: "Node JS",
    icon: <FaNodeJs color="#57A745" />,
    dominance: 80,
    color: "bg-[#57A745]",
  },
  {
    id: 7,
    title: "Postgres",
    icon: <BiLogoPostgresql color="#396C94" />,
    dominance: 50,
    color: "bg-[#396C94]",
  },

  {
    id: 8,
    title: "Docker",
    icon: <FaDocker color="#088FBA" />,
    dominance: 30,
    color: "bg-[#088FBA]",
  },
  {
    id: 9,
    title: "Golang",
    icon: <FaGolang color="#79D4FD" />,
    dominance: 30,
    color: "bg-[#79D4FD]",
  },
];

export function Skills() {
  return (
    <div className="relative h-screen max-xl:h-screen max-lg:h-full w-full py-16 flex flex-col items-center overflow-hidden">
      <Image
        className="absolute h-screen w-screen max-xl:h-full object-cover opacity-5 -mt-16"
        src={codingImage}
        alt="coding image"
        width={1920}
        height={1080}
      />
      <h1 className="text-5xl max-xl:text-4xl max-md:text-3xl max-sm:text-2xl text-cyan-400 font-bold">
        Skills
      </h1>
      <span className="text-sm text-slate-300 mt-4 leading-relaxed">
        Estou me esforçando para nunca parar de aprender e melhorar
      </span>

      <div className="mt-16 flex items-center max-lg:flex-col gap-16 max-xl:gap-4">
        <ServicesCard
          icon={RiComputerLine}
          title="Desenvolvedor Web"
          skills="HTML · CSS · JS · REACT.JS · NEXT.JS"
        />

        <ServicesCard
          icon={RiSmartphoneLine}
          title="Desenvolvedor Mobile"
          skills="REACT NATIVE"
        />

        <ServicesCard
          icon={RiServerLine}
          title="Desenvolvedor Back end"
          skills="NODE.JS · NEST.JS · GO · POSTGRESQL"
        />
      </div>

      <div className="mt-16 w-[60rem] max-lg:w-full p-8 flex items-center gap-16 flex-wrap max-md:justify-center">
        {skills.map((skill) => (
          <Card
            key={skill.id}
            dominance={skill.dominance}
            icon={skill.icon}
            title={skill.title}
            color={skill.color}
          />
        ))}
      </div>
    </div>
  );
}
