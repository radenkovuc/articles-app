import { useStateContext } from '@/state';

import Article from '@/components/Article';

const BASE_CLASS = 'articles-app__articles';

export const Articles = (): JSX.Element => {
    const { setArticles, filteredArticles } = useStateContext();

    if (!filteredArticles.length) {
        return <div className={BASE_CLASS}>No articles</div>;
    }

    const onDeleteArticle = (slug: string) => {
        setArticles((articles) => articles.filter((article) => article.slug !== slug));
    };

    return (
        <div className={BASE_CLASS}>
            {filteredArticles.map((article) => (
                <Article key={article.slug} article={article} onDeleteArticle={onDeleteArticle} />
            ))}
        </div>
    );
};
