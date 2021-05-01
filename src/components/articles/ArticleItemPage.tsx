import { ArticleItemPageProps } from "../../types/articles/articleItemPage.types";
import PortableTextPresenterProps from "../../lib/sanity.io/PortableTextPresenter";
import { Typography } from "@material-ui/core";
import { useArticleItemPageStyles } from "../../styles/articles/articleItemPage.styles";
import ArticleTitle from "./ArticleTitle";
import ArticleMetadata from "./ArticleMetadata";

export default function ArticleItemPage({
  article,
}: ArticleItemPageProps): JSX.Element {
  const classes = useArticleItemPageStyles();
  return (
    <section className={classes.root}>
      <ArticleTitle mainImageUrl={article.thumbnailURL} title={article.title} />
      <div className={classes.bodyContainer}>
        <ArticleMetadata article={article} />
        {article.body && <PortableTextPresenterProps body={article.body} />}
      </div>
    </section>
  );
}
