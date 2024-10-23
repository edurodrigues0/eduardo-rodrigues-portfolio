import NextLink from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Link } from "../Link";

export function Footer() {
  return (
    <footer className="mt-10 w-full h-16 border-t border-slate-700 flex items-center justify-between">
      <div className="flex gap-6 max-lg:gap-4 max-sm:hidden">
        <Link href="/" title="Home" />
        <Link href="/blog" title="Blog" />
      </div>
      <span className="font-light text-xs">
        Desenvolvido com 💙 em Next JS por Eduardo Rodrigues.
      </span>
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
    </footer>
  );
}
