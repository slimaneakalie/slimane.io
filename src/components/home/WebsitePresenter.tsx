import { Typography } from "@material-ui/core";
import { useWebsitePresenterStyles } from "../../styles/home/websitePresenter.styles";
import YoutubeEmbed from "./YoutubeEmbed";
import { WebsitePresenterProps } from "../../types/home/websitePresenter.types";

export default function WebsitePresenter({
  videoId,
}: WebsitePresenterProps): JSX.Element {
  const classes = useWebsitePresenterStyles();
  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <div>
          <Typography variant="h3" component="h1" className={classes.mainTitle}>
            Hello World !
          </Typography>
          <Typography
            variant="h4"
            component="div"
            className={classes.paragraph}
          >
            <div className={classes.selfPresentation}>
              This is Slimane, I'm a software engineer, part-time Youtuber and
              podcast host.
            </div>
            <div>
              In this website I share whatever I learn or build and my thoughts
              on various topics.
            </div>
          </Typography>
        </div>
        <div>
          <YoutubeEmbed embedId={videoId} className={classes.videoContainer} />
        </div>
      </div>
    </section>
  );
}
