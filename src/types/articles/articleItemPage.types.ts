import { Article } from "../shared/articles.types";

export interface ArticleItemPageProps {
  article: Article;
}

export interface ArticleTitleProps {
  mainImageUrl: string;
  title: string;
}

export type ArticleMetadataProps = ArticleItemPageProps;
