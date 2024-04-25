import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return <div className="max-w-[1440px] mx-auto">{children}</div>;
}
