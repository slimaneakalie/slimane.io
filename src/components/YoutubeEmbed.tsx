import React from "react";
import { YoutubeEmbedProps } from "../types/youtubeEmbed.types";
import { useYoutubeEmbedStyles } from "../styles/youtubeEmbed.styles";

export default function YoutubeEmbed({ embedId }: YoutubeEmbedProps) {
  const classes = useYoutubeEmbedStyles();
  return (
    <div className={classes.root}>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        name="fitvid0"
        modestbrowsing="1"
      />
    </div>
  );
}
