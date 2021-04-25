import { LatestPodcastProps } from "../types/LatestPodcast";
import { Typography } from "@material-ui/core";
import { PrimaryButton } from "./PrimaryButton";
import LinkWrapper from "./LinkWrapper";

export default function LatestPodcast({
  podcastEmbedUrl,
  podcastPageLink,
}: LatestPodcastProps): JSX.Element {
  const classes = useLatestPodcastStyles();
  return (
    <section className={classes.root}>
      <Typography variant="h4" component="h1" className={classes.mainTitle}>
        Latest Podcast
      </Typography>

      <iframe
        src={podcastEmbedUrl}
        height="300px"
        width="900px"
        frameBorder="0"
        scrolling="no"
      ></iframe>

      <LinkWrapper href={podcastPageLink} isExternal={false}>
        <PrimaryButton className={classes.seeAllButton}>
          See all episodes
        </PrimaryButton>
      </LinkWrapper>
    </section>
  );
}
