import { Article as DomainArticle } from '@/state/hooks/ArticlesHook';

interface Props {
    readonly article: DomainArticle;
    readonly onDeleteArticle: (slug: string) => void;
}

const IMAGE_BASE_URL = 'https://react-challenge.human.hr/assets/images/post_img/';
const BASE_CLASS = 'articles-app__article';

export const Article = ({ article, onDeleteArticle }: Props): JSX.Element => (
    <div className={BASE_CLASS}>
        <img className={`${BASE_CLASS}__image`} src={`${IMAGE_BASE_URL}${article.thumbnail}`} alt={article.slug} />
        <div className={`${BASE_CLASS}__content`}>
            <div className={`${BASE_CLASS}__title`}>{article.title}</div>
            <div className={`${BASE_CLASS}__date`}>{article.date}</div>
            <div className={`${BASE_CLASS}__description`} dangerouslySetInnerHTML={{ __html: article.description }} />
        </div>
        <div className={`${BASE_CLASS}__delete`}>
            <div onClick={() => onDeleteArticle(article.slug)}>Delete</div>
        </div>
    </div>
);
