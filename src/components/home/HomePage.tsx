import WebsitePresenter from "./WebsitePresenter";
import RecentArticles from "../../containers/home/recentArticles.container";
import RecentVideos from "../../containers/home/recentVideos.container";
import LatestPodcast from "../../containers/home/latestPodcast.container";

export default function HomePage(): JSX.Element {
  return (
    <>
      <WebsitePresenter />
      <RecentArticles />
      <RecentVideos />
      <LatestPodcast />
    </>
  );
}
