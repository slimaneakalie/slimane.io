import { PodcastItemPageProps } from "../../types/podcast/components.types";
import PodcastItemPageComponent from "../../components/podcast/PodcastItemPageComponent";

export default function PodcastItemPageContainer({
  podcastItem,
}: PodcastItemPageProps): JSX.Element {
  return <PodcastItemPageComponent podcastItem={podcastItem} />;
}
