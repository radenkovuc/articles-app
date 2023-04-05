import classNames from 'classnames';

import { useStateContext } from '@/state';

import { Category } from '@/domain';

const BASE_CLASS = 'articles-app__header__category';

interface Props {
    readonly category: Category;
}

export const CategoryItem = ({ category: { id, name } }: Props): JSX.Element | null => {
    const { category, setCategory, excludedCategories, setExcludedCategories } = useStateContext();

    const isExcluded = excludedCategories.includes(id);

    const onClick = () => {
        setCategory(id);
        setExcludedCategories([]);
    };

    return (
        <div
            className={classNames(
                BASE_CLASS,
                id === category && `${BASE_CLASS}--active`,
                isExcluded && `${BASE_CLASS}--excluded`,
            )}
            onClick={onClick}
        >
            {name}
        </div>
    );
};
