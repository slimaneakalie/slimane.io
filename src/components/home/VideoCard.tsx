import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Card,
} from "@material-ui/core";
import { createArticleLink, createVideoLink } from "../../common/utils";
import { Video } from "../../types/home/videoCard.types";
import { useVideoCardStyles } from "../../styles/home/videoCard.styles";

export default function VideoCard(video: Video): JSX.Element {
  const classes = useVideoCardStyles();
  const videoLink = createVideoLink(video.id);

  return (
    <Card className={classes.root} raised={true}>
      <CardActionArea
        className={classes.container}
        href={videoLink}
        target={"_blank"}
      >
        {/*<CardMedia*/}

        {/*  image={video.thumbnailURL}*/}
        {/*  title={video.title}*/}
        {/*/>*/}
        <img
          title={video.title}
          className={classes.media}
          src={video.thumbnailURL}
        />
      </CardActionArea>
    </Card>
  );
}
