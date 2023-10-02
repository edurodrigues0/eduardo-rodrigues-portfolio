import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  Card as CardShadcn,
  CardTitle,
} from "@/components/ui/card";

import { Slider } from "@/components/ui/slider";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  dominance: number;
}

export function Card({ icon, title, description, dominance }: CardProps) {
  return (
    <CardShadcn className="max-md:w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="h-20">
        <CardDescription className="w-60 max-md:w-full">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">Dominance:</span>
        <Slider disabled max={10} defaultValue={[dominance]} />
      </CardFooter>
    </CardShadcn>
  );
}
