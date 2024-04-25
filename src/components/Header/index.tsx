import { Link } from "../Link";

export function Header() {
  return (
    <header className="fixed max-w-[1440px] w-full h-10 flex items-center justify-between p-10 bg-background right-1/2 translate-x-1/2">
      <h1 className="text-white font-bold text-xl mb-0.5">
        <span className="text-cyan-500">&lt;/</span> Eduardo Rodrigues{" "}
        <span className="text-cyan-500">&gt;</span>
      </h1>

      <nav className="flex items-center gap-16 text-lg">
        <Link title="Sobre" href="#sobre" />
        <Link title="Skills" href="#skills" />
        <Link title="Projetos" href="#projetos" />
        <Link title="Contato" href="#contato" />
      </nav>
    </header>
  );
}
