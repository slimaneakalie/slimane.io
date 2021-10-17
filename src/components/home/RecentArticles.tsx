import { RecentArticlesProps } from "../../types/home/recentArticles.types";
import ArticleCard from "../shared/ArticleCard";
import { useRecentArticlesStyles } from "../../styles/home/recentArticles.styles";
import MainTitle from "../shared/MainTitle";
import React from "react";

export default function RecentArticles({
  articles,
}: RecentArticlesProps): JSX.Element {
  const classes = useRecentArticlesStyles();

  return (
    <section className={classes.root}>
      <MainTitle>RECENT ARTICLES</MainTitle>

      {Object.keys(articles).map((key) => (
        <ArticleCard article={articles[key]} key={key} />
      ))}
    </section>
  );
}
