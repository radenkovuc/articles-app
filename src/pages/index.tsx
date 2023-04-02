import { GetServerSideProps } from 'next';

import { StateProvider } from '@/state';
import { Article, getArticles } from '@/state/hooks/ArticlesHook';

import ArticlesPage from '@/components/ArticlesPage';

interface Props {
    readonly search: string;
    readonly category: string | null;
    readonly articles: Article[];
}

const Home = ({ search, category, articles }: Props): JSX.Element => {
    return (
        <StateProvider>
            <ArticlesPage search={search} category={category} articles={articles} />
        </StateProvider>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query, filter } = context.query;
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
