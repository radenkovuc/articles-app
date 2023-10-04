import {GetServerSideProps} from 'next';

import {StateProvider} from '@/state';
import {getArticles, useArticles} from '@/state/hooks/ArticlesHook';

import {Article} from '@/domain';

import URLUpdater from '@/components/URLUpdater';
import Header from '@/components/Header';
import Search from '@/components/Search';
import Articles from '@/components/Articles';

interface Props {
    readonly search: string;
    readonly category: string | null;
    readonly articles: Article[];
}

const Home = ({search, category, articles}: Props): JSX.Element => {
    const {data} = useArticles(articles)

    return (
        <StateProvider initialCategory={category} initialSearch={search} initialArticles={data || []}>
            <>
                <URLUpdater/>
                <Header/>
                <Search/>
                <Articles/>
            </>
        </StateProvider>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {query, filter} = context.query;
    const articles = await getArticles();
    return {
        props: {
            search: query || '',
            category: filter || null,
            articles,
        },
    };
};

export default Home;
