"use client";

import { Header } from "@/components/Header";
import postImage from "../../public/post-image.jpg";
import { Posts } from "@/components/Post";
import { StaticImageData } from "next/image";

interface Post {
  id: number;
  title: string;
  image: StaticImageData;
  resume: string;
  link: string;
  date: Date;
}

const posts: Post[] = [
  {
    id: 1,
    image: postImage,
    title: "What does it take to become a web developer?",
    resume:
      "Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the intertent",
    link: "what-does-it-take-to-become-a-web-developer",
    date: new Date("2023-01-10"),
  },
  {
    id: 2,
    image: postImage,
    title: "Lorem ipsum dolor",
    resume:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dolorem sequi quidem id minima facere? Quo ratione, qui explicabo tempora culpa reiciendis recusandae officiis, id quaerat unde impedit. Perspiciatis, error!",
    link: "lorem-ipsum-dolor",
    date: new Date("2023-01-10"),
  },
];

export default function Blog() {
  return (
    <div className="max-w-[1920px] px-32 max-lg:px-24 max-md:px-16 max-sm:px-6 overflow-x-hidden">
      <Header />
      <div className="mt-32 flex flex-col items-center gap-6">
        <h1 className="text-cyan-500 text-7xl font-bold">Blog</h1>
        <span className="text-sm max-sm:text-xs">
          Meus pensamentos sobre tecnologia e negócios
        </span>
      </div>

      <Posts posts={posts} />
    </div>
  );
}
