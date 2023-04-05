import { useStateContext } from '@/state';
import { useArticles } from '@/state/hooks';

import { Categories } from './Categories';
import { ToggleButton } from './ToggleButton';

const BASE_CLASS = 'articles-app__header';
const MAX_NUMBER_OF_ARTICLES = 100;

export const Header = (): JSX.Element => {
    const { refetch } = useArticles();
    const { articles, setArticles, setCategory, setExcludedCategories } = useStateContext();

    const fetchData = async () => {
        const { data } = await refetch();
        if (data) {
            setArticles(data);
        }
    };

    const resetFilters = () => {
        setCategory(null);
        setExcludedCategories([]);
    };

    const showRefetchButton = articles.length < MAX_NUMBER_OF_ARTICLES;

    return (
        <div className={BASE_CLASS}>
            <Categories />
            <ToggleButton />
            <button className={`${BASE_CLASS}__button`} onClick={resetFilters}>
                Show all
            </button>
            {showRefetchButton && (
                <button className={`${BASE_CLASS}__button`} onClick={fetchData}>
                    Refetch
                </button>
            )}
        </div>
    );
};
