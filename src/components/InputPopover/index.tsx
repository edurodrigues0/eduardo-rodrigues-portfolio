import * as Popover from "@radix-ui/react-popover";
import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

export function InputPopover() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 blur-md z-10"></div>
      )}

      <Popover.Root onOpenChange={(value) => setIsOpen(value)}>
        <Popover.Trigger
          asChild
          className="relative z-20 transition-colors data-[state=open]:bg-white data-[state=open]:text-slate-800 md:hidden lg:hidden"
        >
          <button className="p-1 rounded-full text-xl max-sm:text-sm">
            {isOpen ? <FiX /> : <FiSearch />}
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            sideOffset={5}
            className="flex absolute right-[-1rem] z-20"
          >
            <div className="w-52 h-8 px-4 rounded-3xl overflow-hidden flex items-center gap-1 bg-white focus-within:outline focus-within:outline-2 focus-within:outline-cyan-400">
              <input className="w-full focus:outline-none text-slate-800" />
              <FiSearch className="text-xl text-slate-800" />
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}
