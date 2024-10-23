interface TagProps {
  title: string;
}

export function Tag({ title }: TagProps) {
  return (
    <span className="px-2 py-1 bg-gray-700 text-[0.625rem] font-semibold text-cyan-500 rounded-full">
      {title}
    </span>
  );
}
