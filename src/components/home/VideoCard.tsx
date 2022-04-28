import * as React from "react";
import { CardActionArea, Card } from "@mui/material";
import {
  createVideoLink,
  createVideoThumbnailLink,
  loadImageEffect,
} from "../../lib/utils";
import { Video } from "../../types/home/videoCard.types";
import { useVideoCardStyles } from "../../styles/home/videoCard.styles";
import { useEffect, useState } from "react";

export default function VideoCard(video: Video): JSX.Element {
  const classes = useVideoCardStyles();
  const videoLink = createVideoLink(video.id);
  const thumbnailURL = createVideoThumbnailLink(video.id);

  const [videoImg, setVideoImg] = useState("/video.png");
  useEffect(() => loadImageEffect(thumbnailURL, setVideoImg), [videoImg]);

  return (
    <>
      <Card className={classes.root} raised={true}>
        <CardActionArea
          className={classes.container}
          href={videoLink}
          target={"_blank"}
        >
          <img src={videoImg} title={video.title} className={classes.media} />
        </CardActionArea>
      </Card>
    </>
  );
}
