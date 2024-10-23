import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes, useEffect, useMemo } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  href: string;
}

export function Link({ title, href, ...rest }: LinkProps) {
  const pathname = usePathname();

  const isActive = useMemo(() => {
    if (pathname === href) {
      return true;
    }

    if (href.startsWith("/blog") && pathname.startsWith("/blog")) {
      return true;
    }

    return false;
  }, [pathname, href]);

  return isActive ? (
    <a
      href={href}
      className="text-cyan-500 cursor-pointer font-semibold text-sm max-md:text-xs"
      {...rest}
    >
      {title}
    </a>
  ) : (
    <a
      href={href}
      className="flex group font-semibold text-sm max-md:text-xs transition-all duration-200 hover:text-slate-300"
      {...rest}
    >
      {title}
    </a>
  );
}
