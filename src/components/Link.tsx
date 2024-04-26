import { AnchorHTMLAttributes, useEffect, useState } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  href: string;
}

export function Link({ title, href, ...rest }: LinkProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentHash = window.location.hash;

      setIsActive(currentHash === href);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [href]);

  return isActive === true ? (
    <a className="flex group" {...rest}>
      <div className="text-cyan-500 cursor-pointer">
        <span className="flex flex-col items-center">
          <span className="text-sm max-md:text-xs mb-0.5 transition-all duration-200">
            {title}
          </span>

          <span className="h-1 w-5 mb-1 rounded-full bg-cyan-500"></span>
        </span>
      </div>
    </a>
  ) : (
    <a className="flex group" href={href} {...rest}>
      <div className="text-white hover:text-cyan-500 cursor-pointer">
        <span className="flex flex-col items-center">
          <span className="text-sm max-md:text-xs mb-0.5 transition-all duration-200">
            {title}
          </span>

          <span className="h-2 w-2 rounded-full group-hover:bg-cyan-500 transition-all duration-150 delay-100"></span>
        </span>
      </div>
    </a>
  );
}
