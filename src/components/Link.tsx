import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes, useEffect, useState } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  href: string;
}

export function Link({ title, href, ...rest }: LinkProps) {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    pathname === href ? setIsActive(true) : setIsActive(false);
  }, [pathname]);

  return isActive === true ? (
    <a
      className="text-cyan-500 cursor-pointer font-semibold text-sm max-md:text-xs"
      {...rest}
    >
      {title}
    </a>
  ) : (
    <a
      className="flex group font-semibold text-sm max-md:text-xs transition-all duration-200 hover:text-slate-300"
      href={href}
      {...rest}
    >
      {title}
    </a>
  );
}
