import Head from "next/head";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Card,
} from "@material-ui/core";
import { useArticleCardStyles } from "../../styles/shared/articleCard.styles";
import LinkWrapper from "../../containers/shared/linkWrapper.container";
import { createArticleLink } from "../../lib/utils";
import { ArticleCardProps } from "../../types/shared/articleCard.types";
import clsx from "clsx";

export default function ArticleCard({
  article,
  className,
}: ArticleCardProps): JSX.Element {
  const classes = useArticleCardStyles();
  const articleLink = createArticleLink(article.id);

  return (
    <>
    <Head>
      <link rel="preload" as="image" href={article.thumbnailURL}/>
    </Head>
    <Card className={clsx(classes.root, className)} raised={true}>
      <LinkWrapper href={articleLink} isExternal={false}>
        <CardActionArea className={classes.container}>
          <CardMedia
            className={classes.media}
            image={article.thumbnailURL}
            title={article.title}
          />
          <CardContent className={classes.content}>
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
              {article.publishingDateStr} - {article.readingTimeInMinute} min
              read
            </Typography>
          </CardContent>
        </CardActionArea>
      </LinkWrapper>
    </Card>
    </>
  );
}
