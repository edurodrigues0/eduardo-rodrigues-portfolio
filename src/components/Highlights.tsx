export function Highlights() {
  return (
    <div className="w-52 h-96 p-8 bg-slate-900 rounded-[80px] flex flex-col items-center justify-center gap-12 overflow-hidden">
      <div className="flex gap-4">
        <h3 className="w-7 text-5xl text-cyan-500">4</h3>
        <span className="text-xs leading-5">Linguagens de programação</span>
      </div>

      <div className="flex gap-4">
        <h3 className="w-7 text-5xl text-cyan-500">6</h3>
        <span className="text-xs leading-5">
          Ferramentas de desenvolvimento
        </span>
      </div>

      <div className="flex gap-4">
        <h3 className="w-7 text-5xl text-cyan-500">1</h3>
        <span className="text-xs leading-5">Ano(s) de experiência</span>
      </div>
    </div>
  );
}
