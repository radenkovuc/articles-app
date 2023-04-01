import React from "react";

import { Article } from "@/state/hooks/ArticlesHook";

type StateServices = {
  readonly articles?: Article[];
  readonly setArticles: (articles?: Article[]) => void;
  readonly search: string;
  readonly setSearch: (search: string) => void;
  readonly category: string | null;
  readonly setCategory: (category: string | null) => void;
};

interface Props {
  readonly children: JSX.Element;
}

const StateContext = React.createContext<StateServices | undefined>(undefined);

export const StateProvider = ({ children }: Props): JSX.Element => {
  const [articles, setArticles] = React.useState<Article[] | undefined>([]);
  const [search, setSearch] = React.useState<string>("");
  const [category, setCategory] = React.useState<string | null>(null);

  return (
    <StateContext.Provider
      value={{
        articles,
        setArticles,
        search,
        setSearch,
        category,
        setCategory,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = (): StateServices => {
  const context = React.useContext(StateContext);
  if (context === undefined) {
    throw new Error("useServices must be used within a ServicesProvider");
  }
  return context;
};
