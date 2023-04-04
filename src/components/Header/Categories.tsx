import { useFilteredData } from '@/state/hooks';

import { CategoryItem } from '@/components/Header/CategoryItem';

const BASE_CLASS = 'articles-app__header__categories';

export const Categories = (): JSX.Element => {
    const { filteredCategories } = useFilteredData();

    return (
        <div className={BASE_CLASS}>
            {filteredCategories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
};
