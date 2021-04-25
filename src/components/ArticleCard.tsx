import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Card,
} from "@material-ui/core";
import { useArticleCardStyles } from "../styles/articleCard.styles";
import { Article } from "../types/articleCard.types";
import LinkWrapper from "./LinkWrapper";
import { createArticleLink } from "../common/utils";

export default function ArticleCard(article: Article): JSX.Element {
  const classes = useArticleCardStyles();
  const articleLink = createArticleLink(article.id);

  return (
    <Card className={classes.root} raised={true}>
      <LinkWrapper href={articleLink} isExternal={false}>
        <CardActionArea className={classes.container}>
          <CardMedia
            className={classes.media}
            image={article.thumbnailURL}
            title={article.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {article.title}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="p">
              {article.shortDescription}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className={classes.metadataPanel}
            >
              {article.publishingDate.toLocaleDateString()} -{" "}
              {article.readingTimeInMinute} min read
            </Typography>
          </CardContent>
        </CardActionArea>
      </LinkWrapper>
    </Card>
  );
}