import { Typography } from "@material-ui/core";
import WebsitePresenter from "../src/components/WebsitePresenter";
import RecentArticles from "../src/containers/recentArticles.container";

export default function Home() {
  return (
    <>
      <WebsitePresenter />
      <RecentArticles />
    </>
  );
}
