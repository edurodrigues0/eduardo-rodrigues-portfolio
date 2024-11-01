import { useEffect, useState, useRef } from "react";
import {
  MdGridView,
  MdPersonOutline,
  MdCode,
  MdMonitor,
  MdMailOutline,
} from "react-icons/md";
import NextLink from "next/link";

const navLinks = [
  { id: "inicio", Icon: MdGridView },
  { id: "sobre", Icon: MdPersonOutline },
  { id: "skills", Icon: MdCode },
  { id: "projetos", Icon: MdMonitor },
  { id: "contato", Icon: MdMailOutline },
];

export function NavigationBar() {
  const [activeLink, setActiveLink] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(handleIntersection, {
        root: null,
        threshold: 0.1,
      });
    }

    const observer = observerRef.current;

    navLinks.forEach(({ id }) => {
      const target = document.getElementById(id);
      if (target) {
        observer.observe(target);
      }
    });

    window.location.hash = `#${activeLink}`;
    return () => {
      navLinks.forEach(({ id }) => {
        const target = document.getElementById(id);
        if (target) {
          observer.unobserve(target);
        }
      });
    };
  }, [activeLink]);

  return (
    <nav
      aria-label="Topics"
      className="w-16 max-sm:w-12 py-2 px-3 bg-slate-900 flex flex-col items-center gap-6 rounded-full border border-white fixed top-48 left-10 z-10 max-sm:hidden"
    >
      {navLinks.map(({ id, Icon }) => (
        <NextLink
          key={id}
          href={`#${id}`}
          data-active={activeLink === id}
          className="text-2xl p-1 rounded-full data-[active=true]:bg-white data-[active=true]:text-slate-800"
        >
          <Icon />
        </NextLink>
      ))}
    </nav>
  );
}
