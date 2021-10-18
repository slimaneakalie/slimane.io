import React, { useState } from "react";
import { YoutubeEmbedProps } from "../../types/home/youtubeEmbed.types";
import { useYoutubeEmbedStyles } from "../../styles/home/youtubeEmbed.styles";
import clsx from "clsx";

export default function YoutubeEmbed({
  embedId,
  className,
  videoStart,
  autoPlay,
}: YoutubeEmbedProps) {
  let embedLink = `https://www.youtube.com/embed/${embedId}?modestbranding=1&autoplay=1&start=${videoStart}`;
  if (autoPlay) {
    embedLink += "&autoplay=1&mute=1";
  }

  const classes = useYoutubeEmbedStyles();
  return (
    <div className={clsx(classes.root, className)}>
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
      />
    </div>
  );
}
