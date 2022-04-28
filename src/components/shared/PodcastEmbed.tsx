import * as React from "react";
import { PodcastEmbedProps } from "../../types/shared/podcastEmbed.types";
import { usePodcastEmbedStyles } from "../../styles/shared/podcastEmbed.styles";
import clsx from "clsx";
import CircularProgress from "@mui/material/CircularProgress";

export default function PodcastEmbed({
  podcastEmbedUrl,
  className,
}: PodcastEmbedProps): JSX.Element {
  const classes = usePodcastEmbedStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.progressBarContainer}>
        <CircularProgress color="primary" />
      </div>

      <iframe
        src={podcastEmbedUrl}
        className={classes.podcastContainer}
        frameBorder="0"
        scrolling="no"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
    </div>
  );
}
