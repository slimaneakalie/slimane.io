import { PodcastItemPageProps } from "../../types/podcast/components.types";

export default function PodcastItemPageComponent({
  podcastItem,
}: PodcastItemPageProps): JSX.Element {
  return <>Video id: {podcastItem.videoId}</>;
}
