import { Category } from '@/domain';

import { CategoryButton } from './CategoryButton';

const BASE_CLASS = 'articles-app__header__toggle-button-category';

interface Props {
    readonly category: Category;
}

export const ToggleButtonCategory = ({ category: { id, name } }: Props): JSX.Element => (
    <div className={BASE_CLASS}>
        <span className={`${BASE_CLASS}__text`}>{name}</span>
        <CategoryButton categoryId={id} />
    </div>
);
