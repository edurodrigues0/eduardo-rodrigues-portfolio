import NextLink from "next/link";
import { MdGridView } from "react-icons/md";

export function NavigationBar() {
  return (
    <nav className="w-16 py-2 px-3 bg-slate-900 flex flex-col items-center gap-6 rounded-full border border-white fixed top-48 left-10">
      <NextLink href="#" className="text-2xl p-1 rounded-full">
        <MdGridView />
      </NextLink>

      <NextLink href="#" className="text-2xl p-1 rounded-full">
        <MdGridView />
      </NextLink>

      <NextLink href="#" className="text-2xl p-1 rounded-full">
        <MdGridView />
      </NextLink>

      <NextLink href="#" className="text-2xl p-1 rounded-full">
        <MdGridView />
      </NextLink>

      <NextLink href="#" className="text-2xl p-1 rounded-full">
        <MdGridView />
      </NextLink>

      <NextLink
        href="#"
        className="text-2xl p-1 bg-white text-slate-800 rounded-full"
      >
        <MdGridView />
      </NextLink>
    </nav>
  );
}
