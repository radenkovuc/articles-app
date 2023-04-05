import { useStateContext } from '@/state';

const BASE_CLASS = 'articles-app__header__toggle-button-category__button';

interface Props {
    readonly categoryId: string;
}

export const CategoryButton = ({ categoryId }: Props): JSX.Element | null => {
    const { excludedCategories, setExcludedCategories } = useStateContext();

    const isExcluded = excludedCategories.includes(categoryId);

    const onClick = () =>
        setExcludedCategories(
            isExcluded ? excludedCategories.filter((id) => id !== categoryId) : [...excludedCategories, categoryId],
        );

    return (
        <button className={BASE_CLASS} onClick={onClick}>
            {isExcluded ? 'Excluded' : 'Exclude'}
        </button>
    );
};
