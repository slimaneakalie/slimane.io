import { LatestPodcastProps } from "../../types/home/LatestPodcast";
import { Typography } from "@material-ui/core";
import { PrimaryButton } from "../shared/PrimaryButton";
import LinkWrapper from "../../containers/shared/linkWrapper.container";
import { useLatestPodcastStyles } from "../../styles/home/latestPodcast.styles";

export default function LatestPodcast({
  podcastEmbedUrl,
  podcastPageLink,
}: LatestPodcastProps): JSX.Element {
  const classes = useLatestPodcastStyles();
  return (
    <section className={classes.root}>
      <Typography variant="h4" component="h1" className={classes.mainTitle}>
        LATEST PODCAST
      </Typography>
      <iframe
        src={podcastEmbedUrl}
        height="161px"
        className={classes.embedContainer}
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </section>
  );
}