import { CarouselSlides } from "./CarouselSlide";

export function Project() {
  return (
    <div
      id="project"
      className="w-full h-screen max-sm:h-full flex flex-col items-center p-10"
    >
      <h1 className="text-4xl max-md:text-2xl max-sm:text-lg mb-20">
        My Projects
      </h1>

      <CarouselSlides />
    </div>
  );
}
