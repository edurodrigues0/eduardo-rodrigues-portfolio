interface DividerProps {
  title: string;
}

export function Divider(props: DividerProps) {
  return (
    <div className="w-full py-3 flex items-center text-sm text-primary before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">
      <div className="flex items-center justify-center gap-2">
        <h1 className="text-2xl font-bold">{props.title}</h1>
      </div>
    </div>
  );
}
