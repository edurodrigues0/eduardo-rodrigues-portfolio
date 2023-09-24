export function Header() {
  return (
    <header className="w-full h-10 flex items-center justify-between p-10">
      <h1 className="max-xl:text-2xl max-md:text-xl max-sm:text-base text-primary">Eduardo Rodrigues</h1>
      <nav className="grid grid-cols-4 gap-4 max-sm:gap-2 max-sm:text-xs max-md:text-base">
        <a href="#firstPage" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="" className="hover:underline">Project</a>
        <a href="" className="hover:underline">Contact</a>
      </nav>
    </header>
  )
}