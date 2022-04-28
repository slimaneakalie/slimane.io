import * as React from "react";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Card,
} from "@mui/material";
import { useArticleCardStyles } from "../../styles/shared/articleCard.styles";
import LinkWrapper from "../../containers/shared/linkWrapper.container";
import { createArticleLink, loadImageEffect } from "../../lib/utils";
import { ArticleCardProps } from "../../types/shared/articleCard.types";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function ArticleCard({
  article,
  className,
}: ArticleCardProps): JSX.Element {
  const classes = useArticleCardStyles(article);
  const articleLink = createArticleLink(article.id);

  const [articleImg, setArticleImg] = useState("/article.png");
  useEffect(
    () => loadImageEffect(article.thumbnailURL, setArticleImg),
    [articleImg]
  );

  return (
    <Card className={clsx(classes.root, className)} raised={true}>
      <LinkWrapper href={articleLink} isExternal={false}>
        <CardActionArea className={classes.container}>
          <CardMedia
            className={classes.media}
            image={articleImg}
            title={article.title}
          />
          <CardContent className={classes.content}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title}
            >
              {article.title}
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              className={classes.shortDescription}
            >
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
  );
}
