import Head from "next/head";
import { CardActionArea, Card } from "@material-ui/core";
import { createVideoLink, createVideoThumbnailLink } from "../../lib/utils";
import { Video } from "../../types/home/videoCard.types";
import { useVideoCardStyles } from "../../styles/home/videoCard.styles";

export default function VideoCard(video: Video): JSX.Element {
  const classes = useVideoCardStyles();
  const videoLink = createVideoLink(video.id);
  const thumbnailURL = createVideoThumbnailLink(video.id);

  return (
    <>
    <Head>
      <link rel="preload" as="image" href={thumbnailURL}/>
    </Head>
    <Card className={classes.root} raised={true}>
      <CardActionArea
        className={classes.container}
        href={videoLink}
        target={"_blank"}
      >
        <img src={thumbnailURL} title={video.title} className={classes.media} />
      </CardActionArea>
    </Card>
    </>
  );
}
