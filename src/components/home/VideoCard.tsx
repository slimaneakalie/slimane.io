import { CardActionArea, CardMedia, Card } from "@material-ui/core";
import { createVideoLink, createVideoThumbnailLink } from "../../common/utils";
import { Video } from "../../types/home/videoCard.types";
import { useVideoCardStyles } from "../../styles/home/videoCard.styles";

export default function VideoCard(video: Video): JSX.Element {
  const classes = useVideoCardStyles();
  const videoLink = createVideoLink(video.id);
  const thumbnailURL = createVideoThumbnailLink(video.id);

  return (
    <Card className={classes.root} raised={true}>
      <CardActionArea
        className={classes.container}
        href={videoLink}
        target={"_blank"}
      >
        <CardMedia
          image={thumbnailURL}
          title={video.title}
          className={classes.media}
        />
      </CardActionArea>
    </Card>
  );
}
