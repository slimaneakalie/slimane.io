import { RecentVideosProps } from "../../types/home/recentVideos.types";
import { Typography } from "@material-ui/core";
import { PrimaryButton } from "./PrimaryButton";
import { useRecentVideosStyles } from "../../styles/home/recentVideos.styles";
import VideoCard from "./VideoCard";

export default function RecentVideos({
  videos,
  allVideosExternalLink,
}: RecentVideosProps): JSX.Element {
  const classes = useRecentVideosStyles();
  return (
    <section className={classes.root}>
      <Typography variant="h4" component="h1" className={classes.mainTitle}>
        RECENT VIDEOS
      </Typography>
      <div className={classes.cardsContainer}>
        {videos.map((video) => (
          <VideoCard {...video} key={video.id} />
        ))}
      </div>
      <PrimaryButton
        className={classes.seeAllButton}
        href={allVideosExternalLink}
        target={"_blank"}
      >
        See all videos
      </PrimaryButton>
    </section>
  );
}
