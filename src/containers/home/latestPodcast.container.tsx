import React from "react";
import LatestPodcast from "../../components/home/LatestPodcast";
import { useSelector } from "react-redux";
import { selectHomeStateField } from "../../store/home/selectors";
import { PodcastItem } from "../../types/podcast/podcast.types";

export default function LatestPodcastContainer(): JSX.Element {
  const podcastItem = useSelector(
    selectHomeStateField("latestPodcast")
  ) as PodcastItem;

  return <LatestPodcast podcastItem={podcastItem} />;
}
