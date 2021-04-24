import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Card,
} from "@material-ui/core";
import { useArticleStyles } from "../styles/article.styles";
import { Article } from "../types/article.types";

export default function ArticleCard(article: Article): JSX.Element {
  const classes = useArticleStyles();

  return (
    <Card className={classes.root}>
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
    </Card>
  );
}
