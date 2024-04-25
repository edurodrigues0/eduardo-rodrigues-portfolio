import {
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { Divider } from "../Divider";
import { Card } from "./Card";

const skills = [
  {
    id: 1,
    title: "HTML5",
    icon: <FaHtml5 color="#DD4B25" size={64} />,
    dominance: 90,
    color: "bg-[#DD4B25]",
  },
  {
    id: 2,
    title: "CSS",
    icon: <FaCss3Alt color="#77B2DD" size={64} />,
    dominance: 70,
    color: "bg-[#77B2DD]",
  },
  {
    id: 3,
    title: "Javascript",
    icon: <IoLogoJavascript color="#F7DF1E" size={64} />,
    dominance: 80,
    color: "bg-[#F7DF1E]",
  },
  {
    id: 4,
    title: "React JS",
    icon: <FaReact color="#4082CC" size={64} />,
    dominance: 70,
    color: "bg-[#4082CC]",
  },
  {
    id: 5,
    title: "React Native",
    icon: <FaReact color="#61DBFB" size={64} />,
    dominance: 40,
    color: "bg-[#61DBFB]",
  },
  {
    id: 6,
    title: "Node JS",
    icon: <FaNodeJs color="#57A745" size={64} />,
    dominance: 80,
    color: "bg-[#57A745]",
  },
  {
    id: 7,
    title: "Postgres",
    icon: <BiLogoPostgresql color="#396C94" size={64} />,
    dominance: 50,
    color: "bg-[#396C94]",
  },

  {
    id: 8,
    title: "Docker",
    icon: <FaDocker color="#088FBA" size={64} />,
    dominance: 30,
    color: "bg-[#088FBA]",
  },
];

export function Skills() {
  return (
    <div id="skills" className="w-full flex flex-col items-center">
      <Divider title="Skills" />
      <div className="w-full p-16 flex gap-16 flex-wrap items-center justify-center">
        {skills.map((skill) => {
          return (
            <Card
              key={skill.id}
              title={skill.title}
              icon={skill.icon}
              dominance={skill.dominance}
              color={skill.color}
            />
          );
        })}
      </div>
    </div>
  );
}
