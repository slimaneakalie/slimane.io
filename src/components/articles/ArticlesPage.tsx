import * as React from "react";
import { ArticlesPageProps } from "../../types/articles/articlesPage.types";
import ArticleCard from "../shared/ArticleCard";
import { useArticlesPageStyles } from "../../styles/articles/articlesPage.styles";
import MainTitle from "../shared/MainTitle";

export default function ArticlesPage(props: ArticlesPageProps): JSX.Element {
  const { articles } = props;
  const classes = useArticlesPageStyles();
  return (
    <section className={classes.root}>
      <MainTitle>ARTICLES</MainTitle>
      {Object.keys(articles).map((key) => (
        <ArticleCard
          article={articles[key]}
          className={classes.articleCard}
          key={key}
        />
      ))}
    </section>
  );
}
