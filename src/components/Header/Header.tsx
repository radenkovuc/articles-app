import useArticles from '@/state/hooks';
import { useStateContext } from '@/state';

import { Categories } from '@/components/Header/Categories';

const BASE_CLASS = 'articles-app__header';
const MAX_NUMBER_OF_ARTICLES = 100;

export const Header = (): JSX.Element => {
    const { refetch } = useArticles();
    const { articles, setArticles, setCategory } = useStateContext();

    const updateData = async () => {
        const { data } = await refetch();
        if (data) {
            setArticles(data);
        }
    };

    const resetFilters = () => {
        setCategory(null);
    };

    return (
        <div className={BASE_CLASS}>
            <Categories />
            <button className={`${BASE_CLASS}__button`} onClick={resetFilters}>
                Show all
            </button>
            {articles.length < MAX_NUMBER_OF_ARTICLES && (
                <button className={`${BASE_CLASS}__button`} onClick={updateData}>
                    Refetch
                </button>
            )}
        </div>
    );
};
