import { Article as ResponseArticle } from '@/domain/response';
import { Article } from '@/domain';

const IMAGE_BASE_URL = 'https://react-challenge.human.hr/assets/images/post_img/';
const ARTICLE_BASE_URL = 'https://react-challenge.human.hr/news/';

export const mapArticle = (article: ResponseArticle): Article => ({
    date: article.date,
    description: article.excerpt,
    category: article.post_category_id,
    imageUrl: IMAGE_BASE_URL + article.post_image,
    thumbnailUrl: IMAGE_BASE_URL + article.post_thumbnail,
    link: ARTICLE_BASE_URL + article.slug,
    slug: article.slug,
    title: article.title,
});
