import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';

import { Article as ResponseArticle } from '@/domain/response';
import { Article } from '@/domain';

import { mapArticle } from '@/mappers';

export const getArticles = async (): Promise<Article[]> => {
    const { data } = await axios.get<ResponseArticle[]>('https://react-challenge.human.hr/last-100-news.json');
    return data.map((article) => mapArticle(article));
};

export const useArticles = (articles?: Article[]): UseQueryResult<Article[]> =>
    useQuery({
        queryKey: [],
        queryFn: getArticles,
        initialData: articles,
    });
