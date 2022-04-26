import React, { useState } from "react";
import { YoutubeEmbedProps } from "../../types/home/youtubeEmbed.types";
import { useYoutubeEmbedStyles } from "../../styles/home/youtubeEmbed.styles";
import clsx from "clsx";
import CircularProgress from "@mui/material/CircularProgress";

export default function YoutubeEmbed({
  embedId,
  className,
  videoStart,
  autoPlay,
}: YoutubeEmbedProps) {
  let embedLink = `https://www.youtube.com/embed/${embedId}?modestbranding=1`;
  if (autoPlay) {
    embedLink += `&autoplay=1&mute=1&start=${videoStart}`;
  }

  const classes = useYoutubeEmbedStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.progressBarContainer}>
        <CircularProgress color="inherit" />
      </div>
      <iframe
        width={"100%"}
        height={"100%"}
        src={embedLink}
        frameBorder={"0"}
        allow={
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        }
        name={"fitvid0"}
        allowFullScreen={true}
        className={classes.videoContainer}
      />
    </div>
  );
}
