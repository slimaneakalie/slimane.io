import { ArticleItemPageProps } from "../../types/articles/articleItemPage.types";
import PortableTextPresenterProps from "../../lib/sanity.io/PortableTextPresenter";
import { Typography } from "@material-ui/core";
import { useArticleItemPageStyles } from "../../styles/articles/articleItemPage.styles";

export default function ArticleItemPage(
  props: ArticleItemPageProps
): JSX.Element {
  const { article } = props;
  const classes = useArticleItemPageStyles(props);
  return (
    <section className={classes.root}>
      <div className={classes.titleContainer}>
        <div className={classes.mainImage}>
          <div className={classes.mainImageBackground} />
        </div>
        <div className={classes.titleTextContainer}>
          <Typography variant="h2" component="h1" className={classes.title}>
            {article.title}
          </Typography>
        </div>
      </div>

      <div className={classes.bodyContainer}>
        {article.body && <PortableTextPresenterProps body={article.body} />}
      </div>
    </section>
  );
}
