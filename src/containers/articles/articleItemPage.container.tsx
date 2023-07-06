import React from "react";
import ArticleItemPage from "../../components/articles/ArticleItemPage";
import { ArticleItemPageProps } from "../../types/articles/articleItemPage.types";

export default function ArticleItemPageContainer(
  props: ArticleItemPageProps
): JSX.Element {
  return <ArticleItemPage {...props} />;
}
