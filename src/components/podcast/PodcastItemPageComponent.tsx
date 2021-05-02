import { PodcastItemPageProps } from "../../types/podcast/components.types";
import { usePodcastItemPageStyles } from "../../styles/podcast/podcastItemPageComponent.styles";
import MainTitle from "../shared/MainTitle";
import YoutubeEmbed from "../home/YoutubeEmbed";
import PodcastEmbed from "../shared/PodcastEmbed";
import { createPodcastEmbedLink } from "../../lib/utils";
import ImageTitle from "../shared/ImageTitle";
import WhereToListenContainer from "../../containers/shared/whereToListen.container";

export default function PodcastItemPageComponent({
  podcastItem,
}: PodcastItemPageProps): JSX.Element {
  const classes = usePodcastItemPageStyles();
  const podcastEmbedUrl = createPodcastEmbedLink(podcastItem.audioId);
  return (
    <section className={classes.root}>
      <ImageTitle
        mainImageUrl={"/podcast.png"}
        title={podcastItem.title}
        imgClassName={classes.imageTitle}
      />
      <div className={classes.bodyContainer}>
        <MainTitle>English description</MainTitle>
        <p className={classes.description}>{podcastItem.englishDescription}</p>

        <MainTitle>Arabic description</MainTitle>
        <p className={`${classes.description} ${classes.arabicText}`}>
          {podcastItem.arabicDescription}
        </p>

        <MainTitle>Video version</MainTitle>
        <div className={classes.videoContainer}>
          <YoutubeEmbed embedId={podcastItem.videoId} />
        </div>

        <MainTitle>Audio version</MainTitle>
        <PodcastEmbed
          podcastEmbedUrl={podcastEmbedUrl}
          className={classes.podcastEmbed}
        />

        <WhereToListenContainer />
      </div>
    </section>
  );
}