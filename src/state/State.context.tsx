import React from 'react';

import { Article } from '@/domain';

type StateServices = {
    readonly articles: Article[];
    readonly setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
    readonly search: string;
    readonly setSearch: React.Dispatch<React.SetStateAction<string>>;
    readonly category: string | null;
    readonly setCategory: React.Dispatch<React.SetStateAction<string | null>>;
    readonly excludedCategories: string[];
    readonly setExcludedCategories: React.Dispatch<React.SetStateAction<string[]>>;
};

interface Props {
    readonly children: JSX.Element;
    readonly initialArticles: Article[];
    readonly initialSearch: string;
    readonly initialCategory: string | null;
}

const StateContext = React.createContext<StateServices | undefined>(undefined);

export const StateProvider = ({ children, initialArticles, initialSearch, initialCategory }: Props): JSX.Element => {
    const [articles, setArticles] = React.useState<Article[]>(initialArticles);
    const [search, setSearch] = React.useState<string>(initialSearch);
    const [category, setCategory] = React.useState<string | null>(initialCategory);
    const [excludedCategories, setExcludedCategories] = React.useState<string[]>([]);

    return (
        <StateContext.Provider
            value={{
                articles,
                setArticles,
                search,
                setSearch,
                category,
                setCategory,
                excludedCategories,
                setExcludedCategories,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = (): StateServices => {
    const context = React.useContext(StateContext);
    if (context === undefined) {
        throw new Error('useStateContext must be used within a StateProvider');
    }
    return context;
};
