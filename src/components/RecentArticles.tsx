import { RecentArticlesProps } from "../types/recentArticles.types";
import ArticleCard from "./ArticleCard";
import { useRecentArticlesStyles } from "../styles/recentArticles.styles";
import { Typography } from "@material-ui/core";

export default function RecentArticles({
  articles,
}: RecentArticlesProps): JSX.Element {
  const classes = useRecentArticlesStyles();

  return (
    <section className={classes.root}>
      <Typography variant="h4" component="h1" className={classes.mainTitle}>
        Recent articles
      </Typography>

      {Object.keys(articles).map((key) => (
        <ArticleCard {...articles[key]} key={key} />
      ))}
    </section>
  );
}
