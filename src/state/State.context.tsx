import React, { useEffect } from 'react';

import { Article } from '@/state/hooks/ArticlesHook';

type StateServices = {
    readonly articles: Article[];
    readonly setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
    readonly search: string;
    readonly setSearch: React.Dispatch<React.SetStateAction<string>>;
    readonly category: string | null;
    readonly setCategory: React.Dispatch<React.SetStateAction<string | null>>;
    readonly filteredArticles: Article[];
};

interface Props {
    readonly children: JSX.Element;
}

const StateContext = React.createContext<StateServices | undefined>(undefined);

export const StateProvider = ({ children }: Props): JSX.Element => {
    const [articles, setArticles] = React.useState<Article[]>([]);
    const [filteredArticles, setFilteredArticles] = React.useState<Article[]>([]);
    const [search, setSearch] = React.useState<string>('');
    const [category, setCategory] = React.useState<string | null>(null);

    useEffect(() => {
        if (articles) {
            const filtered = articles.filter((article) => {
                const title = article.title.toLowerCase();
                const description = article.description.toLowerCase();
                const searchLower = search.toLowerCase();

                return (
                    (title.includes(searchLower) || description.includes(searchLower)) &&
                    (category ? article.category === category : true)
                );
            });

            setFilteredArticles(filtered);
        }
    }, [articles, search, category]);

    return (
        <StateContext.Provider
            value={{
                articles,
                setArticles,
                search,
                setSearch,
                category,
                setCategory,
                filteredArticles,
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
