import { RecentArticlesProps } from "../types/recentArticles.types";
import ArticleCard from "./ArticleCard";
import { useRecentArticlesStyles } from "../styles/recentArticles.styles";

export default function RecentArticles({
  articles,
}: RecentArticlesProps): JSX.Element {
  const classes = useRecentArticlesStyles();

  return (
    <section className={classes.root}>
      <ArticleCard />
    </section>
  );
}
