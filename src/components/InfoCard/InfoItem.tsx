import { ReactElement } from "react";

type InfoItemProps = {
  icon: ReactElement;
  title: string;
};

export function InfoItem({ title, icon }: InfoItemProps) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="text-cyan-500">{icon}</span>
      <span>{title}</span>
    </div>
  );
}
