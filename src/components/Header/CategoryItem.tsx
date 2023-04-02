import classNames from 'classnames';

import { useStateContext } from '@/state';

import { Category } from '@/components/Header/Categories';

const BASE_CLASS = 'articles-app__header__category';

interface Props {
    readonly category: Category;
}

export const CategoryItem = ({ category: { id, name } }: Props): JSX.Element | null => {
    const { category, setCategory, articles } = useStateContext();

    if (!articles.some((article) => article.category === id)) {
        return null;
    }

    const onClick = () => {
        setCategory(id);
    };

    return (
        <div className={classNames(BASE_CLASS, id === category && `${BASE_CLASS}--active`)} onClick={onClick}>
            {name}
        </div>
    );
};
