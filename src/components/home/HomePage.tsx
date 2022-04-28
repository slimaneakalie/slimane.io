import * as React from "react";
import WebsitePresenter from "../../containers/home/websitePresenter.container";
import RecentArticles from "../../containers/home/recentArticles.container";
import RecentVideos from "../../containers/home/recentVideos.container";
import LatestPodcast from "../../containers/home/latestPodcast.container";
import { useHomePageStyles } from "../../styles/home/homePage.styles";

export default function HomePage(): JSX.Element {
  const classes = useHomePageStyles();
  return (
    <>
      <WebsitePresenter />
      <section className={classes.updatesSection}>
        <div className={classes.updatesContainer}>
          <RecentArticles />
          <RecentVideos />
        </div>
      </section>
      <LatestPodcast />
    </>
  );
}
