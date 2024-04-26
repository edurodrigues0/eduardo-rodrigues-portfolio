import { Button } from "../ui/button";
import Image from "next/image";
import heroSvg from "public/hero.svg";

export function Home() {
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1EJeo6wYqBBDE4-kk64-rzDFYPOOBQgTj/view?usp=sharing",
      "_blank",
    );
  };

  return (
    <div
      id="inicio"
      className="h-[calc(100vh-1rem)] w-full flex max-sm:flex-col-reverse items-center justify-evenly max-sm:justify-center max-sm:gap-10"
    >
      <div className="flex flex-col gap-4 w-1/2">
        <h2 className="text-primary text-xl max-md:text-sm font-semibold -mb-3">
          DESENVOLVEDOR FULL-STACK
        </h2>
        <h1 className="text-5xl max-md:text-sm font-bold">Eduardo Rodrigues</h1>
        <p className="text-lg max-md:text-xs w-96 max-sm:w-full">
          Um entusiasta da tecnologia apaixonado por{" "}
          <span className="text-primary font-semibold">
            código, games, academia e futebol.
          </span>
          <br />
          Amo transformar ideias malucas em soluções incríveis. Sempre pronto
          para aprender algo novo e fazer parte de projetos emocionantes!
        </p>
        <Button
          className="p-4 w-fit max-sm:w-full row-span-2 max-md:p-2 max-md:text-xs"
          variant="outline"
          onClick={handleClick}
        >
          BAIXAR CURRÍCULO
        </Button>
      </div>

      <Image
        priority={true}
        src={heroSvg}
        alt="A programming person"
        width="512"
        height="512"
        className="max-lg:h-80 max-sm:h-72"
      />

      <div className="absolute overflow-clip z-0 top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 h-[70%] w-[40%] rounded-full bg-white/10 blur-3xl" />
    </div>
  );
}
