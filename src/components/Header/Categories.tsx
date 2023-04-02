import { CategoryItem } from '@/components/Header/CategoryItem';

const BASE_CLASS = 'articles-app__header__categories';

export type Category = {
    readonly id: string;
    readonly name: string;
};

const CATEGORIES: Category[] = [
    { id: '1', name: 'X Universe' },
    { id: '2', name: 'Elite: Dangerous' },
    { id: '3', name: 'Starpoint Gemini' },
    { id: '4', name: 'EVE Online' },
];

export const Categories = (): JSX.Element => {
    return (
        <div className={BASE_CLASS}>
            {CATEGORIES.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
};
