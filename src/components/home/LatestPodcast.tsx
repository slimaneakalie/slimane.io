import { LatestPodcastProps } from "../../types/home/LatestPodcast";
import { Divider, Typography } from "@material-ui/core";
import { PrimaryButton } from "../shared/PrimaryButton";
import LinkWrapper from "../../containers/shared/linkWrapper.container";
import { useLatestPodcastStyles } from "../../styles/home/latestPodcast.styles";

export default function LatestPodcast({
  podcastEmbedUrl,
  audioPlatforms,
}: LatestPodcastProps): JSX.Element {
  const classes = useLatestPodcastStyles();
  return (
    <section className={classes.root}>
      <div className={classes.mainTitleContainer}>
        <Typography variant="h4" component="h1" className={classes.mainTitle}>
          LATEST PODCAST
        </Typography>
        <Divider className={classes.divider} />
      </div>

      <iframe
        src={podcastEmbedUrl}
        height="161px"
        className={classes.embedContainer}
        frameBorder="0"
        scrolling="no"
      ></iframe>

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
