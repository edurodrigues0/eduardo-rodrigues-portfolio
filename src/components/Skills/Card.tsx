import { ReactNode } from "react";
import { Slider } from "../ui/slider";

interface CardProps {
  title: string;
  icon: ReactNode;
  dominance: number;
  color?: string;
}

export function Card({ title, icon, dominance, color }: CardProps) {
  return (
    <div className="w-32 h-32 p-1 flex flex-col gap-5 items-center justify-center">
      <span className="text-lg -mb-4">{title}</span>
      {icon}
      <Slider
        className={color ?? "bg-primary"}
        disabled
        defaultValue={[dominance]}
      />
    </div>
  );
}
