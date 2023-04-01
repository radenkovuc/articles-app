import { Article as DomainArticle } from "@/state/hooks/ArticlesHook";

interface Props {
  readonly article: DomainArticle;
  readonly onDeleteArticle: (slug: string) => void;
}

const BASE_CLASS = "articles-app__article";

export const Article = ({ article, onDeleteArticle }: Props): JSX.Element => (
  <div className={BASE_CLASS} onClick={() => onDeleteArticle(article.slug)}>
    {article.title}
  </div>
);
