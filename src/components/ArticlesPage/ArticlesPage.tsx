import { useEffect } from 'react';

import { useStateContext } from '@/state';
import useArticles from '@/state/hooks';
import { Article } from '@/state/hooks/ArticlesHook';

import Header from '@/components/Header';
import Search from '@/components/Search';
import Articles from '@/components/Articles';
import { URLUpdater } from './URLUpdater';

interface Props {
    readonly search: string;
    readonly category: string | null;
    readonly articles: Article[];
}

export const ArticlesPage = ({ search, category, articles }: Props): JSX.Element => {
    const { data, isLoading, isError, isFetched } = useArticles(articles);
    const { setArticles, setSearch, setCategory } = useStateContext();

    useEffect(() => {
        setSearch(search);
        setCategory(category);
    }, []);

    useEffect(() => {
        if (isFetched && data) {
            setArticles(data);
        }
    }, [isFetched]);

    if (!isFetched) {
        //Loading page
        return <div>Fetching...</div>;
    }

    if (isError) {
        //Error page
        return <div>Error...</div>;
    }

    return (
        <>
            <URLUpdater />
            <Header />
            <Search />
            <Articles />
        </>
    );
};
