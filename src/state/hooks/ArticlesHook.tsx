import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';

interface ResponseArticle {
    readonly date: string;
    readonly excerpt: string;
    readonly post_category_id: string;
    readonly post_image: number;
    readonly post_thumbnail: string;
    readonly slug: string;
    readonly title: string;
}

export interface Article {
    readonly date: string;
    readonly description: string;
    readonly category: string;
    readonly image: number;
    readonly thumbnail: string;
    readonly slug: string;
    readonly title: string;
}

export enum Category {
    'All',
}

const mapArticle = (article: ResponseArticle): Article => ({
    date: article.date,
    description: article.excerpt,
    category: article.post_category_id,
    image: article.post_image,
    thumbnail: article.post_thumbnail,
    slug: article.slug,
    title: article.title,
});

export const getArticles = async (): Promise<Article[]> => {
    const { data } = await axios.get<ResponseArticle[]>('https://react-challenge.human.hr/last-100-news.json');
    return data.map((article) => mapArticle(article)) || [];
};

export const useArticles = (articles?: Article[]): UseQueryResult<Article[]> =>
    useQuery({
        queryKey: [],
        queryFn: getArticles,
        initialData: articles,
    });
