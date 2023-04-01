import { GetServerSideProps } from 'next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { StateProvider } from '@/state';

import ArticlesPage from '@/components/ArticlesPage';

interface Props {
    readonly search: string;
    readonly category: string | null;
}

const Home = ({ search, category }: Props): JSX.Element => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <StateProvider>
                <ArticlesPage search={search} category={category} />
            </StateProvider>
        </QueryClientProvider>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query, filter } = context.query;

    return {
        props: {
            search: query || '',
            category: filter || null,
        },
    };
};

export default Home;
