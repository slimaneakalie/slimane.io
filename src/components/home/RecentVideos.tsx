import { RecentVideosProps } from "../../types/home/recentVideos.types";
import { Divider, Typography } from "@material-ui/core";
import { PrimaryButton } from "../shared/PrimaryButton";
import { useRecentVideosStyles } from "../../styles/home/recentVideos.styles";
import VideoCard from "./VideoCard";
import AddIcon from "@material-ui/icons/Add";

export default function RecentVideos({
  videos,
  allVideosExternalLink,
}: RecentVideosProps): JSX.Element {
  const classes = useRecentVideosStyles();
  return (
    <section className={classes.root}>
      <div>
        <Typography variant="h4" component="h1" className={classes.mainTitle}>
          RECENT VIDEOS
        </Typography>
        <Divider className={classes.divider} />
      </div>
      <div className={classes.cardsContainer}>
        {videos.map((video) => (
          <VideoCard {...video} key={video.id} />
        ))}
      </div>
      <PrimaryButton
        className={classes.seeAllButton}
        href={allVideosExternalLink}
        endIcon={<AddIcon />}
        target={"_blank"}
      >
        See more
      </PrimaryButton>
    </section>
  );
}