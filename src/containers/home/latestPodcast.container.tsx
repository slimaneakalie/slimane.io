import LatestPodcast from "../../components/home/LatestPodcast";
import { AudioPlatforms } from "../../types/home/LatestPodcast";
import { useSelector } from "react-redux";
import { selectHomeStateField } from "../../store/home/selectors";

export default function LatestPodcastContainer(): JSX.Element {
  const podcastEmbedUrl = useSelector(
    selectHomeStateField("latestPodcastEmbedUrl")
  ) as string;

  const audioPlatforms = useSelector(
    selectHomeStateField("audioPlatforms")
  ) as AudioPlatforms[];

  return (
    <LatestPodcast
      podcastEmbedUrl={podcastEmbedUrl}
      audioPlatforms={audioPlatforms}
    />
  );
}
