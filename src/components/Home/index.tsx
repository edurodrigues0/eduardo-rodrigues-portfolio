import { Button } from "../ui/button";
import Image from "next/image";
import heroSvg from "public/hero.svg";

export function Home() {
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1sqJHk7awVtYVKUTBljxHIv9lvrGAB79t/view?usp=sharing",
      "_blank",
    );
  };

  return (
    <div
      id="inicio"
      className="h-[calc(100vh-(5rem))] w-full flex items-center justify-evenly"
    >
      <div className="flex flex-col gap-4 w-1/2">
        <h2 className="text-primary text-xl font-semibold -mb-3">
          DESENVOLVEDOR FULL-STACK
        </h2>
        <h1 className="text-5xl font-bold">Eduardo Rodrigues</h1>
        <p className="text-lg w-96">
          Um entusiasta da tecnologia apaixonado por código, games, academia e
          futebol.
          <br />
          Amo transformar ideias malucas em soluções incríveis. Sempre pronto
          para aprender algo novo e fazer parte de projetos emocionantes!
        </p>
        <Button
          className="p-4 w-fit row-span-2"
          variant="outline"
          onClick={handleClick}
        >
          BAIXAR CURRÍCULO
        </Button>
      </div>

      <Image
        src={heroSvg}
        alt="A programming person"
        width="512"
        height="512"
      />

      <div className="absolute overflow-clip z-0 top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 h-[70%] w-[40%] rounded-full bg-white/10 blur-3xl" />
    </div>
  );
}
