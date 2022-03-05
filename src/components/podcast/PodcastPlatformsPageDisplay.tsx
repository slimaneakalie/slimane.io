import clsx from "clsx";
import { usePodcastPlatformsPageDisplayStyles } from "../../styles/podcast/podcastPlatformsDisplay.styles";
import { PodcastPlatformsPageDisplayProps } from "../../types/podcast/components.types";
import { AudioPlatform } from "../../types/shared/whereToListen.types";

export default function PodcastPlatformsPageDisplay({
  audioPlatforms,
  className,
}: PodcastPlatformsPageDisplayProps): JSX.Element {
  const classes = usePodcastPlatformsPageDisplayStyles();
  let rootClassName = classes.root;
  if (className) {
    rootClassName = clsx(classes.root, className);
  }

  return (
    <div className={rootClassName}>
      {audioPlatforms.map((platform) => (
          <a
            href={platform.url}
            className={classes.platformElement}
            key={platform.name}
            target={"_blank"}
          >
            <img
              src={platform.largeIconPath}
              title={platform.name}
              alt={platform.name}
              className={classes.platformImage}
            />
          </a>
      ))}
    </div>
  );
}
