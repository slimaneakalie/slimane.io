import React from "react";
import ArticlesPage from "../../components/articles/ArticlesPage";
import { useSelector } from "react-redux";
import { ArticlesMap } from "../../types/shared/articles.types";
import { selectArticlesStateField } from "../../store/articles/selectors";

export default function ArticlesPageContainer(): JSX.Element {
  const pageArticles = useSelector(
    selectArticlesStateField("pageArticles")
  ) as ArticlesMap;

  return <ArticlesPage articles={pageArticles} />;
}
