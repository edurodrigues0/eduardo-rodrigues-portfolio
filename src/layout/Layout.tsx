import { Header } from "@/components/Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      {children}
    </div>
  );
}

{
  /* <p className="w-96 max-md:w-72 max-sm:w-60 mt-8">
<span className="text-primary font-bold">Hello, I{"'"}m a Eduardo</span>
, full-stack developer based in Sacramento, Brazil. I have extensive
knowledge in building and customizing websites and developing APIs. I am
familiar with the following technologies:{" "}
<span className="text-primary font-bold">
  React JS, React Native, Next JS, Node JS.
</span>
</p> */
}
