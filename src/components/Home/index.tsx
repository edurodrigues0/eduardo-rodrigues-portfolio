import { Button } from "../ui/button";
import Image from "next/image";
import heroSvg from "public/hero.svg";

export function Home() {
  return (
    <div
      id="inicio"
      className="p-10 calc(h-screen-2.5rem) grid grid-cols-2 gap-10"
    >
      <div className="justify-self-center self-center flex flex-col gap-3">
        <h2 className="text-primary text-xl font-semibold -mb-3">
          DESENVOLVEDOR FULL-STACK
        </h2>
        <h1 className="text-5xl font-bold">Eduardo Rodrigues</h1>
        <p className="w-1/2 text-lg">
          Um entusiasta da tecnologia apaixonado por código, café e games. Amo
          transformar ideias malucas em soluções incríveis. Sempre pronto para
          aprender algo novo e fazer parte de projetos emocionantes!
        </p>
        <Button className="p-4 w-fit" variant="outline">
          BAIXAR CURRÍCULO
        </Button>
      </div>

      <Image
        className="justify-self-center self-center"
        src={heroSvg}
        alt="A programming person"
        width="512"
        height="512"
      />

      <div className="absolute overflow-clip z-0 top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 h-[70%] w-[40%] rounded-full bg-white/10 blur-3xl" />
    </div>
  );
}
