import { Button } from "@/components/ui/button";

export function FirstPage() {
  
  function scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }

  return (
    <div className="grid grid-cols-2 h-[calc(100vh-5rem)]">
      <div className="p-5 h-full flex flex-col items-start justify-center relative">
        <h1 className="py-4 text-7xl max-md:text-4xl max-sm:text-2xl bg-gradient-to-r from-orange-600 to-orange-100 bg-clip-text text-transparent">
          Hi there, <br /> I{"'"}m Eduardo Rodrigues
        </h1>
        <span className="text-4xl max-md:text-xl max-sm:text-sm mt-4">Full-Stack Developer</span>
        <span className="text-2xl max-md:text-lg max-sm:text-xs text-muted-foreground">
          For Website and Mobile
        </span>

        <Button
          variant="outline"
          className="absolute bottom-32 max-md:bottom-48 max-sm:bottom-36 max-sm:text-xs"
        >
          See more about me
        </Button>
      </div>

      <div className="bg-secondary flex flex-col items-center justify-center relative">
        <span className="py-4 text-[10rem] max-md:text-9xl max-sm:text-7xl">
          👨🏻‍💻
        </span>
        <Button
          variant="outline"
          className="absolute bottom-32 max-md:bottom-48 max-sm:bottom-36 max-sm:text-xs bg-secondary border-primary self-center mt-10 hover:bg-primary"
        >
          See My Works
        </Button>
      </div>
    </div>
  );
}
