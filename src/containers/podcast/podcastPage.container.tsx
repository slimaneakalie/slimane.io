import React from "react";
import PodcastPageComponent from "../../components/podcast/PodcastPageComponent";
import { PodcastMap } from "../../types/podcast/podcast.types";
import { useSelector } from "react-redux";
import { selectPodcastStateField } from "../../store/podcast/selectors";

export default function PodcastPageContainer(): JSX.Element {
  const podcastPageEpisodes = useSelector(
    selectPodcastStateField("pagePodcastEpisodes")
  ) as PodcastMap;
  return <PodcastPageComponent podcastPageEpisodes={podcastPageEpisodes} />;
}
