import Image, { StaticImageData } from "next/image";

interface Post {
  id: number;
  title: string;
  image: StaticImageData;
  resume: string;
  link: string;
  date: Date;
}

interface PostProps {
  posts: Post[];
}

export function Posts({ posts }: PostProps) {
  return (
    <div className="max-w-[62.5rem] w-full mt-16 border-t border-slate-700 py-16 mx-auto flex flex-col gap-16">
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            className="flex items-center gap-16 border-b border-slate-700 pb-16 max-lg:flex-col"
          >
            <Image
              className="w-[15rem] h-[15rem] max-md:w-[12rem] max-md:h-[12rem] max-sm:w-[10rem] max-sm:h-[10rem] object-cover"
              src={post.image}
              alt="notebook com codigos e com itens em volta dele"
              height={240}
              width={240}
            />

            <div className="flex-1 flex flex-col gap-6 max-lg:text-center">
              <h2 className="text-cyan-500 text-4xl font-semibold max-md:text-3xl max-sm:text-2xl">
                {post.title}
              </h2>

              <p className="max-w-[720px] text-clip line-clamp-3 max-md:max-w-[100%] max-md:text-base max-sm:text-sm">
                {post.resume.slice(0, 100)}
                {"..."}
              </p>

              <a
                href={`/blog/${post.link}`}
                className="text-cyan-500 text-lg font-light hover:text-cyan-400 transition-colors max-md:text-base max-sm:text-sm"
              >
                Leia mais {">>"}
              </a>

              <div className="flex items-center gap-8 max-md:justify-center">
                <span className="text-sm max-md:text-xs">
                  Data: {new Date(post.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
