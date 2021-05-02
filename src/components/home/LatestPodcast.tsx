import { LatestPodcastProps } from "../../types/home/LatestPodcast";
import { Divider, Typography } from "@material-ui/core";
import { PrimaryButton } from "../shared/PrimaryButton";
import LinkWrapper from "../../containers/shared/linkWrapper.container";
import { useLatestPodcastStyles } from "../../styles/home/latestPodcast.styles";
import MainTitle from "../shared/MainTitle";
import PodcastEmbed from "../shared/PodcastEmbed";

export default function LatestPodcast({
  podcastEmbedUrl,
  audioPlatforms,
}: LatestPodcastProps): JSX.Element {
  const classes = useLatestPodcastStyles();
  return (
    <section className={classes.root}>
      <MainTitle className={classes.mainTitleContainer}>
        LATEST PODCAST
      </MainTitle>

      <PodcastEmbed podcastEmbedUrl={podcastEmbedUrl} />

      <div className={classes.audioPlatformsContainer}>
        <Typography variant="h6" component="h1">
          Where to listen:
        </Typography>
        {audioPlatforms.map((platform) => (
          <a
            href={platform.url}
            className={classes.audioPlatformsLink}
            key={platform.name}
            target={"_blank"}
          >
            <img
              src={platform.iconPath}
              title={platform.name}
              alt={platform.name}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
