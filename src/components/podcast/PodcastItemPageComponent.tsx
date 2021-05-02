import { PodcastItemPageProps } from "../../types/podcast/components.types";
import { usePodcastItemPageStyles } from "../../styles/podcast/podcastItemPageComponent.styles";
import MainTitle from "../shared/MainTitle";
import YoutubeEmbed from "../home/YoutubeEmbed";

export default function PodcastItemPageComponent({
  podcastItem,
}: PodcastItemPageProps): JSX.Element {
  const classes = usePodcastItemPageStyles();
  return (
    <section className={classes.root}>
      {/*<ArticleTitle*/}
      <div className={classes.bodyContainer}>
        <MainTitle>Video version</MainTitle>
        <div className={classes.videoContainer}>
          <YoutubeEmbed embedId={podcastItem.videoId} />
        </div>
        <MainTitle>Audio version</MainTitle>
      </div>
    </section>
  );
}
