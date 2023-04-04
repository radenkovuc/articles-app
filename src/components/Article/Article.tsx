import { Article as DomainArticle } from '@/domain/Article';

import { ArticleLink } from '@/components/Article/ArticleLink';

interface Props {
    readonly article: DomainArticle;
    readonly onDeleteArticle: (slug: string) => void;
}

const BASE_CLASS = 'articles-app__article';

export const Article = ({
    article: { link, title, thumbnailUrl, description, date, slug },
    onDeleteArticle,
}: Props): JSX.Element => (
    <div className={BASE_CLASS}>
        <ArticleLink link={link} className={`${BASE_CLASS}__image`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={thumbnailUrl} alt={slug} />
        </ArticleLink>
        <div className={`${BASE_CLASS}__content`}>
            <ArticleLink link={link}>
                <div className={`${BASE_CLASS}__title`}>{title}</div>
            </ArticleLink>
            <div className={`${BASE_CLASS}__date`}>{date}</div>
            <div className={`${BASE_CLASS}__description`} dangerouslySetInnerHTML={{ __html: description }} />
            <div className={`${BASE_CLASS}__article-link`}>
                <ArticleLink link={link}>Full article</ArticleLink>
            </div>
        </div>
        <div className={`${BASE_CLASS}__delete`}>
            <div onClick={() => onDeleteArticle(slug)}>Delete</div>
        </div>
    </div>
);
