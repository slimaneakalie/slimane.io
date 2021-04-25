import LatestPodcast from "../components/LatestPodcast";

const podcastEmbedUrl =
  "https://anchor.fm/kass-atay-podcast/embed/episodes/Open-source-ev39gr";

export default function LatestPodcastContainer(): JSX.Element {
  return (
    <LatestPodcast
      podcastEmbedUrl={podcastEmbedUrl}
      podcastPageLink={"/podcast"}
    />
  );
}
