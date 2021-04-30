import { RecentArticlesProps } from "../../types/home/recentArticles.types";
import ArticleCard from "../shared/ArticleCard";
import { useRecentArticlesStyles } from "../../styles/home/recentArticles.styles";
import { Divider, Typography } from "@material-ui/core";

export default function RecentArticles({
  articles,
}: RecentArticlesProps): JSX.Element {
  const classes = useRecentArticlesStyles();

  return (
    <section className={classes.root}>
      <div>
        <Typography variant="h4" component="h1" className={classes.mainTitle}>
          RECENT ARTICLES
        </Typography>
        <Divider className={classes.divider} />
      </div>

      {Object.keys(articles).map((key) => (
        <ArticleCard {...articles[key]} key={key} />
      ))}
    </section>
  );
}
