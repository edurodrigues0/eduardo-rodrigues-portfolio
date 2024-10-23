interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  skills: string;
}

export function ServicesCard({ icon: Icon, title, skills }: ServiceCardProps) {
  return (
    <div className="bg-cyan-500 w-72 max-lg:w-64 h-36 rounded-lg flex flex-col items-center justify-evenly text-gray-600 leading-relaxed">
      <Icon size={42} />
      <h4 className="font-bold text-xl">{title}</h4>
      <span className="text-sm">{skills}</span>
    </div>
  );
}
