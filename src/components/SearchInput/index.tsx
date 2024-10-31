import { FiSearch } from "react-icons/fi";
import { cn } from "@/lib/utils";

type SearchInputProps = {
  className?: string;
};

export function SearchInput({ className }: SearchInputProps) {
  return (
    <div
      className={cn(
        "w-52 h-8 px-4 rounded-3xl overflow-hidden flex items-center gap-1 bg-white focus-within:outline focus-within:outline-2 focus-within:outline-cyan-400 max-lg:w-40",
        className,
      )}
    >
      <input className="w-full focus:outline-none text-slate-800 text-xs" />
      <button>
        <FiSearch className="text-xl text-slate-800" />
      </button>
    </div>
  );
}
