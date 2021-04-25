import WebsitePresenter from "../src/components/WebsitePresenter";
import RecentArticles from "../src/containers/recentArticles.container";
import RecentVideos from "../src/containers/recentVideos.container";
import LatestPodcast from "../src/containers/latestPodcast.container";

export default function Home() {
  return (
    <>
      <WebsitePresenter />
      <RecentArticles />
      <LatestPodcast />
      <RecentVideos />
    </>
  );
}
