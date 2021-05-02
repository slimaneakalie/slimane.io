import { LatestPodcastProps } from "../../types/home/LatestPodcast";
import { useLatestPodcastStyles } from "../../styles/home/latestPodcast.styles";
import MainTitle from "../shared/MainTitle";
import PodcastEmbed from "../shared/PodcastEmbed";
import WhereToListenContainer from "../../containers/shared/whereToListen.container";

export default function LatestPodcast({
  podcastEmbedUrl,
}: LatestPodcastProps): JSX.Element {
  const classes = useLatestPodcastStyles();
  return (
    <section className={classes.root}>
      <MainTitle className={classes.mainTitleContainer}>
        LATEST PODCAST
      </MainTitle>

      <PodcastEmbed podcastEmbedUrl={podcastEmbedUrl} />

      <WhereToListenContainer className={classes.whereToListenContainer} />
    </section>
  );
}
