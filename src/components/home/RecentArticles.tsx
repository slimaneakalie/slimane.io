import { RecentArticlesProps } from "../../types/home/recentArticles.types";
import ArticleCard from "./ArticleCard";
import { useRecentArticlesStyles } from "../../styles/home/recentArticles.styles";
import { Typography } from "@material-ui/core";
import { PrimaryButton } from "./PrimaryButton";
import LinkWrapper from "./LinkWrapper";

export default function RecentArticles({
  articles,
}: RecentArticlesProps): JSX.Element {
  const classes = useRecentArticlesStyles();

  return (
    <section className={classes.root}>
      <Typography variant="h4" component="h1" className={classes.mainTitle}>
        RECENT ARTICLES
      </Typography>

      {Object.keys(articles).map((key) => (
        <ArticleCard {...articles[key]} key={key} />
      ))}
      <LinkWrapper href={"/articles"} isExternal={false}>
        <PrimaryButton className={classes.seeAllButton}>
          See all articles
        </PrimaryButton>
      </LinkWrapper>
    </section>
  );
}
