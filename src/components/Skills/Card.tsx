import { ReactNode } from "react";
import { Slider } from "../ui/slider";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  icon: ReactNode;
  dominance: number;
  color?: string;
}

export function Card({ title, icon, dominance, color }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1 }}
      animate={{ scale: 0.8 }}
      className="w-32 max-sm:w-24 h-24 max-sm:h-28 p-1 flex flex-col gap-5 items-center justify-center"
    >
      <span className="text-lg max-sm:text-xs -mb-4">{title}</span>
      <span className="text-6xl max-sm:text-4xl">{icon}</span>
      <Slider
        className={color ?? "bg-primary"}
        disabled
        defaultValue={[dominance]}
      />
    </motion.div>
  );
}
