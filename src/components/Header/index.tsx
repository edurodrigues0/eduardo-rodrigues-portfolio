import NextLink from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Link } from "../Link";
import { InputPopover } from "../InputPopover";
import { SearchInput } from "../SearchInput";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const isBlogPath = pathname === "/blog";

  return (
    <header className="w-full py-16 flex items-center justify-between border-b-2 border-slate-700">
      <h1
        id="inicio"
        className="text-2xl max-xl:text-lg max-lg:text-base max-md:text-sm max-sm:text-xs"
      >
        <span className="text-cyan-400 mr-1">&lt;C /&gt;</span>
        EduardoRodrigues
      </h1>

      <div className="flex items-center justify-center gap-16 max-lg:gap-8 max-md:gap-4  max-sm:gap-4">
        <nav className="grid grid-cols-2 gap-8 max-lg:gap-4">
          <Link href="/" title="Home" />
          <Link href="/blog" title="Blog" />
        </nav>

        {isBlogPath && <SearchInput className="max-sm:hidden max-md:hidden" />}

        <InputPopover />

        <div className="flex items-center gap-8 max-lg:gap-4 max-sm:hidden">
          <NextLink href="https://github.com/edurodrigues0/" target="_blank">
            <FiGithub className="text-xl text-cyan-400" />
          </NextLink>

          <NextLink
            href="https://www.linkedin.com/in/eduardo-rodrigues-93b66518a/"
            target="_blank"
          >
            <FiLinkedin className="text-xl text-cyan-400" />
          </NextLink>

          <NextLink href="mailto:edurodriguesdev1@gmail.com" target="_blank">
            <FiMail className="text-xl text-cyan-400" />
          </NextLink>
        </div>
      </div>
    </header>
  );
}
