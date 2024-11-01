import { createContext, ReactNode, useState } from "react";

interface SearchPostContextProps {
  children: ReactNode;
}

interface SearchContextData {
  search: string;
  onSearch: (title: string) => void;
}

export const SearchPostContext = createContext({} as SearchContextData);

export function SearchPostContextProvider({
  children,
}: SearchPostContextProps) {
  const [search, setSearch] = useState<string>("");

  function onSearch(title: string) {
    setSearch(title);
  }

  return (
    <SearchPostContext.Provider
      value={{
        search,
        onSearch,
      }}
    >
      {children}
    </SearchPostContext.Provider>
  );
}
