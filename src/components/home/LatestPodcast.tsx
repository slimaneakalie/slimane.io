import * as React from "react";
import { LatestPodcastProps } from "../../types/home/LatestPodcast";
import { useLatestPodcastStyles } from "../../styles/home/latestPodcast.styles";
import MainTitle from "../shared/MainTitle";
import WhereToListenContainer from "../../containers/shared/whereToListen.container";
import PodcastCard from "../podcast/PodcastCard";

export default function LatestPodcast({
  podcastItem,
}: LatestPodcastProps): JSX.Element | null {
  if (!podcastItem) {
    return null;
  }

  const classes = useLatestPodcastStyles();
  return (
    <section className={classes.root}>
      <MainTitle className={classes.mainTitleContainer}>
        LATEST PODCAST
      </MainTitle>

      <PodcastCard
        podcastCardData={podcastItem}
        className={classes.podcastCard}
      />
      <WhereToListenContainer className={classes.whereToListenContainer} />
    </section>
  );
}
