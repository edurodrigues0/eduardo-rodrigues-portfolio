import { Card } from "../ui/card";

interface SocialCardProps {
  link: string;
  icon: React.ReactNode;
  title: string;
  user: string;
}

export function SocialCard({ link, icon, title, user }: SocialCardProps) {
  return (
    <a href={link} target="_blank" className="h-20 transition-all duration-300">
      <Card className="flex items-center gap-4 p-4 w-80 max-md:w-72 hover:p-5">
        {icon}
        <div className="flex flex-col">
          <span className="font-bold">{title}</span>
          <span className="text-slate-300 text-sm max-md:text-xs">{user}</span>
        </div>
      </Card>
    </a>
  );
}
