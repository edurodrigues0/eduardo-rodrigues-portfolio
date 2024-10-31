import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes, ElementType, useMemo } from "react";
import NextLink from "next/link";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  icon?: ElementType;
  href: string;
  className?: string;
}

export function Link({
  title,
  icon: Icon,
  href,
  className,
  ...rest
}: LinkProps) {
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
    <NextLink
      href={href}
      className={`${"flex items-center gap-2 text-cyan-500 cursor-pointer font-semibold text-sm max-md:text-xs"}, ${className}`}
      {...rest}
    >
      {Icon && <Icon size={24} />}
      {title}
    </NextLink>
  ) : (
    <NextLink
      href={href}
      className="flex group font-semibold text-sm max-md:text-xs transition-all duration-200 hover:text-slate-300"
      {...rest}
    >
      {title}
    </NextLink>
  );
}
