import { Typography } from "@material-ui/core";
import { useWebsitePresenterStyles } from "../../styles/home/websitePresenter.styles";
import YoutubeEmbed from "./YoutubeEmbed";
import { WebsitePresenterProps } from "../../types/home/websitePresenter.types";
import Typewriter from "typewriter-effect";

export default function WebsitePresenter({
  videoId,
  videoStart,
}: WebsitePresenterProps): JSX.Element {
  const classes = useWebsitePresenterStyles();
  const typeWriterOptions = {
    loop: true,
    autoStart: true,
    wrapperClassName: classes.typewriter,
    delay: 50,
    strings: [
      "software.engineer ⌨️",
      "part-time.youtuber 🎬",
      "podcast.host 🎙️",
    ],
  };

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
              This is Slimane, I'm a (<Typewriter options={typeWriterOptions} />);
            </div>
            <div className={classes.websiteComment}>
              /* In this website I share whatever I create and my thoughts on
              various topics. My money .. I mean my opinions are my own. */
            </div>
          </Typography>
        </div>
        <div>
          <YoutubeEmbed embedId={videoId} videoStart={videoStart} autoPlay={true} className={classes.videoContainer} />
        </div>
      </div>
    </section>
  );
}
