import { useEffect, useState } from 'react';

import { useStateContext } from '@/state';

import { Article, Category } from '@/domain';

const CATEGORIES: Category[] = [
    { id: '1', name: 'X Universe' },
    { id: '2', name: 'Elite: Dangerous' },
    { id: '3', name: 'Starpoint Gemini' },
    { id: '4', name: 'EVE Online' },
];

interface ReturnProps {
    readonly filteredArticles: Article[];
    readonly filteredCategories: Category[];
}

const filterArticlesBySearch = (articles: Article[], search: string): Article[] =>
    articles.filter((article) => {
        const title = article.title.toLowerCase();
        const description = article.description.toLowerCase();
        const searchLower = search.toLowerCase();

        return title.includes(searchLower) || description.includes(searchLower);
    });

const filterArticlesByCategory = (
    articles: Article[],
    category: string | null,
    excludedCategories: string[],
): Article[] =>
    articles.filter(
        (article) => (!category || article.category === category) && !excludedCategories.includes(article.category),
    );

const filterAvailableCategories = (articles: Article[]): Category[] =>
    CATEGORIES.filter(({ id }) => articles.some((article) => article.category === id));

export const useFilteredData = (): ReturnProps => {
    const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
    const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);
    const { articles, search, category, excludedCategories } = useStateContext();

    useEffect(() => {
        let filteredArticles = filterArticlesBySearch(articles, search);

        setFilteredCategories(filterAvailableCategories(filteredArticles));

        filteredArticles = filterArticlesByCategory(filteredArticles, category, excludedCategories);

        setFilteredArticles(filteredArticles);
    }, [articles, search, category, excludedCategories]);

    return { filteredArticles, filteredCategories };
};
