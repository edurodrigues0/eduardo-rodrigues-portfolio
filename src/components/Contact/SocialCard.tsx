import { Card } from "@/components/ui/card";

interface SocialCardProps {
  link: string;
  icon: React.ReactNode;
  title: string;
  user: string;
}

export function SocialCard({ link, icon, title, user }: SocialCardProps) {
  return (
    <a href={link} target="_blank">
      <Card className="flex items-center gap-4 p-4 w-80 max-md:w-52">
        {icon}
        <div className="flex flex-col">
          <span className="font-bold max-md:text-xs">{title}</span>
          <span className="text-muted-foreground text-sm max-md:text-[0.5rem]">
            {user}
          </span>
        </div>
      </Card>
    </a>
  );
}
