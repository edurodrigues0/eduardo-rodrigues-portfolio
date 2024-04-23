"use client";

import { Button } from "@/components/ui/button";
import { Card } from "./Card";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Image from "next/image";
import { LiaNodeJs } from "react-icons/lia";
import { RiReactjsLine } from "react-icons/ri";

export function About() {
  // Array de objetos de skills do usuario
  const skills = [
    {
      id: 1,
      title: "React JS",
      description: "JavaScript library for building user interfaces.",
      icon: <RiReactjsLine size={24} color="#4082cc" />,
      dominance: 7,
    },
    {
      id: 2,
      title: "React Native",
      description: "Build native mobile apps using JavaScript and React",
      icon: <RiReactjsLine size={24} color="#2bd5f3" />,
      dominance: 1.5,
    },
    {
      id: 3,
      title: "Node",
      description:
        "JavaScript runtime for building scalable and real-time server applications.",
      icon: <LiaNodeJs size={24} color="#6cc24a" />,
      dominance: 3,
    },
  ];

  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1sqJHk7awVtYVKUTBljxHIv9lvrGAB79t/view?usp=sharing",
      "_blank",
    );
  };

  return (
    <div
      id="sobre"
      className="p-10 w-full flex flex-col items-center justify-start"
    >
      <h1 className="text-4xl max-md:text-2xl max-sm:text-lg mb-20">
        ABOUT ME
      </h1>

      <Image
        width={300}
        height={300}
        className="max-md:w-48 max-sm:w-36 rounded-full border-2 border-primary grayscale transition-all ease duration-500 hover:grayscale-0"
        src="https://github.com/edurodrigues0.png"
        alt="Picture of the user"
      />
      <p className="w-96 max-md:w-72 max-sm:w-60 mt-8">
        <span className="text-primary font-bold">Hello, I{"'"}m a Eduardo</span>
        , full-stack developer based in Sacramento, Brazil. I have extensive
        knowledge in building and customizing websites and developing APIs. I am
        familiar with the following technologies:{" "}
        <span className="text-primary font-bold">
          React JS, React Native, Next JS, Node JS.
        </span>
      </p>

      <div className="flex gap-6 items-center flex-wrap max-md:justify-center mt-8">
        <Button
          variant="default"
          className="flex items-center gap-2 text-lg max-md:text-sm max-sm:text-xs"
          onClick={() => handleClick()}
        >
          <FaCloudDownloadAlt />
          Download CV
        </Button>
      </div>

      <h1 className="mt-12 max-sm:text-sm">
        <span className="text-primary">My</span> Skills
      </h1>
      <div className="mt-4 flex gap-4 max-md:w-full max-md:flex-col">
        {skills.map((skill) => {
          return (
            <Card
              key={skill.id}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              dominance={skill.dominance}
            />
          );
        })}
      </div>
    </div>
  );
}
