import LatestPodcast from "../../components/home/LatestPodcast";
import { AudioPlatforms } from "../../types/home/LatestPodcast";

const podcastEmbedUrl =
  "https://anchor.fm/kass-atay-podcast/embed/episodes/Open-source-ev39gr";

const audioPlatforms: AudioPlatforms[] = [
  {
    name: "Apple podcasts",
    url:
      "https://podcasts.apple.com/ma/podcast/kass-datay-podcast-%D9%83%D8%A7%D8%B3-%D8%AF%D8%A7%D8%AA%D8%A7%D9%8A-%D8%A8%D9%88%D8%AF%D9%83%D8%A7%D8%B3%D8%AA/id1541529548",
    iconPath: "/apple-podcasts.png",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/show/6hg0nxGMK32GjxFR4Qwgqu",
    iconPath: "/spotify.png",
  },
  {
    name: "Google podcasts",
    url:
      "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80MTM4NDkzOC9wb2RjYXN0L3Jzcw==",
    iconPath: "/google-podcasts.png",
  },
  {
    name: "Deezer",
    url: "https://www.deezer.com/us/show/2111312",
    iconPath: "/deezer.png",
  },
];

export default function LatestPodcastContainer(): JSX.Element {
  return (
    <LatestPodcast
      podcastEmbedUrl={podcastEmbedUrl}
      audioPlatforms={audioPlatforms}
    />
  );
}
