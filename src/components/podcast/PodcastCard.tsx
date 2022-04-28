import * as React from "react";
import { PodcastCardProps } from "../../types/podcast/components.types";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import LinkWrapper from "../../containers/shared/linkWrapper.container";
import { createPodcastLink, loadImageEffect } from "../../lib/utils";
import { usePodcastCardStyles } from "../../styles/podcast/podcastCard.styles";
import clsx from "clsx";
import { useState, useEffect } from "react";

export default function PodcastCard({
  podcastCardData,
  className,
}: PodcastCardProps): JSX.Element {
  const classes = usePodcastCardStyles();
  const podcastLink = createPodcastLink(podcastCardData.slug.current);

  const [podcastImg, setPodcastImg] = useState("/podcast.png");
  useEffect(
    () => loadImageEffect(podcastCardData.thumbnailURL, setPodcastImg),
    [podcastImg]
  );

  return (
    <Card className={clsx(classes.root, className)} raised={true}>
      <LinkWrapper href={podcastLink} isExternal={false}>
        <CardActionArea className={classes.container}>
          <img
            alt={podcastCardData.title}
            src={podcastImg}
            className={classes.media}
          />
          <CardContent className={classes.content}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title}
            >
              {podcastCardData.title}
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              className={classes.title}
            >
              {podcastCardData.excerpt}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className={classes.metadataPanel}
            >
              Streamed {podcastCardData.streamingDateStr}
            </Typography>
          </CardContent>
        </CardActionArea>
      </LinkWrapper>
    </Card>
  );
}
