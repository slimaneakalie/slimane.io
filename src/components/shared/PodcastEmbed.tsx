import { PodcastEmbedProps } from "../../types/shared/podcastEmbed.types";
import { usePodcastEmbedStyles } from "../../styles/shared/podcastEmbed.styles";
import clsx from "clsx";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function PodcastEmbed({
  podcastEmbedUrl,
  className,
}: PodcastEmbedProps): JSX.Element {
  const classes = usePodcastEmbedStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.progressBarContainer}>
        <CircularProgress color="primary"/>
      </div>
      
      <iframe
        src={podcastEmbedUrl}
        height="161px"
        className={classes.podcastContainer}
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
}
