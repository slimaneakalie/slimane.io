import { PodcastItemPageProps } from "../../types/podcast/components.types";
import { usePodcastItemPageStyles } from "../../styles/podcast/podcastItemPageComponent.styles";
import MainTitle from "../shared/MainTitle";
import YoutubeEmbed from "../home/YoutubeEmbed";
import PodcastEmbed from "../shared/PodcastEmbed";
import { createPodcastEmbedLink } from "../../lib/utils";
import ImageTitle from "../shared/ImageTitle";
import clsx from "clsx";
import { CommentsPanelProps } from "../../types/shared/commentsPanel.types";
import CommentsPanel from "../shared/CommentsPanel";
import PodcastPlatformsPageDisplay from "./PodcastPlatformsPageDisplay";

export default function PodcastItemPageComponent({
  podcastItem,
  audioPlatforms,
}: PodcastItemPageProps): JSX.Element {
  const classes = usePodcastItemPageStyles();
  const podcastEmbedUrl = createPodcastEmbedLink(podcastItem.audioId);

  const commentsProps: CommentsPanelProps = {
    mediaSlugID: podcastItem._id,
    mediaTitle: podcastItem.title,
    mediaTypeSlug: "podcast",
  };

  return (
    <section className={classes.root}>
      <ImageTitle
        mainImageUrl={"/podcast.png"}
        title={podcastItem.title}
        imgFilterClassName={classes.imageTitle}
      />
      <div className={classes.bodyContainer}>
        <div className={classes.videoContainer}>
          <div className={classes.youtubeContainer}>
            <YoutubeEmbed embedId={podcastItem.videoId} />
          </div>

          <PodcastPlatformsPageDisplay audioPlatforms={audioPlatforms} className={classes.platformsContainer}/>
        </div>
        <PodcastEmbed
          podcastEmbedUrl={podcastEmbedUrl}
          className={classes.podcastEmbed}
        />
        <br /> <br />
        <MainTitle>About this podcast</MainTitle>
        <p className={classes.description}>{podcastItem.englishDescription}</p>
        <MainTitle>حول هذا البودكاست</MainTitle>
        <p className={clsx(classes.description, classes.arabicText)}>
          {podcastItem.arabicDescription}
        </p>
        <CommentsPanel {...commentsProps} />
      </div>
    </section>
  );
}
