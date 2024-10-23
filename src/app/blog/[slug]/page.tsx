"use client";

import { Header } from "@/components/Header";

export default function Page({ params }: { params: { slug: number } }) {
  return (
    <div className="max-w-[1920px] px-32 max-lg:px-24 max-md:px-16 max-sm:px-6 overflow-x-hidden">
      <Header />
      <span>My post: {params.slug}</span>
    </div>
  );
}
