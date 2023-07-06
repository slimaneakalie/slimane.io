import React from "react";
import { PodcastItemPageProps } from "../../types/podcast/components.types";
import PodcastItemPageComponent from "../../components/podcast/PodcastItemPageComponent";
import { AudioPlatform } from "../../types/shared/whereToListen.types";
import { selectSharedStateField } from "../../store/shared/selectors";
import { useSelector } from "react-redux";

export default function PodcastItemPageContainer({
  podcastItem,
}: PodcastItemPageProps): JSX.Element {
  const audioPlatforms = useSelector(
    selectSharedStateField("audioPlatforms")
  ) as AudioPlatform[];

  return (
    <PodcastItemPageComponent
      podcastItem={podcastItem}
      audioPlatforms={audioPlatforms}
    />
  );
}
