import { useStateContext } from "@/state";

import Article from "@/components/Article";

const BASE_CLASS = "articles-app__articles";

export const Articles = (): JSX.Element => {
  const { articles, setArticles } = useStateContext();

  if (!articles || articles.length === 0) {
    return <div className={BASE_CLASS}>No articles</div>;
  }

  const onDeleteArticle = (slug: string) => {
    const newArticles = articles.filter((article) => article.slug !== slug);
    setArticles(newArticles);
  };

  return (
    <div className={BASE_CLASS}>
      {articles.map((article) => (
        <Article
          key={article.slug}
          article={article}
          onDeleteArticle={onDeleteArticle}
        />
      ))}
    </div>
  );
};
