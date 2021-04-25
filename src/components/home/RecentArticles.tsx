import { RecentArticlesProps } from "../../types/home/recentArticles.types";
import ArticleCard from "../shared/ArticleCard";
import { useRecentArticlesStyles } from "../../styles/home/recentArticles.styles";
import { Divider, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { PrimaryButton } from "../shared/PrimaryButton";
import LinkWrapper from "../../containers/shared/linkWrapper.container";

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
      <LinkWrapper href={"/articles"} isExternal={false}>
        <PrimaryButton endIcon={<AddIcon />} className={classes.seeAllButton}>
          See more
        </PrimaryButton>
      </LinkWrapper>
    </section>
  );
}
