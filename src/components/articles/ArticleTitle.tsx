import { Typography } from "@material-ui/core";
import { useArticleTitleStyles } from "../../styles/articles/articleTitle.styles";
import { ArticleTitleProps } from "../../types/articles/articleItemPage.types";

export default function ArticleTitle(props: ArticleTitleProps): JSX.Element {
  const classes = useArticleTitleStyles(props);
  return (
    <div className={classes.root}>
      <div className={classes.mainImage} />
      <div className={classes.titleTextContainer}>
        <Typography variant="h2" component="h1" className={classes.title}>
          {props.title}
        </Typography>
      </div>
    </div>
  );
}
