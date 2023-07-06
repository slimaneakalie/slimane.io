import React from "react";
import RecentArticles from "../../components/home/RecentArticles";
import { useSelector } from "react-redux";
import { selectHomeStateField } from "../../store/home/selectors";
import { ArticlesMap } from "../../types/shared/articles.types";

export default function RecentArticlesContainer(): JSX.Element {
  const latestArticles = useSelector(
    selectHomeStateField("latestArticles")
  ) as ArticlesMap;

  return <RecentArticles articles={latestArticles} />;
}
