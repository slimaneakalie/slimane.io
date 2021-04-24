import { Typography } from "@material-ui/core";
import { useVideoPanelStyles } from "../styles/videoPanel.styles";
import YoutubeEmbed from "./YoutubeEmbed";

export default function VideoPanel(): JSX.Element {
  const classes = useVideoPanelStyles();
  return (
    <section className={classes.root}>
      <div className={classes.textContainer}>
        <Typography variant="h3" component="h1" className={classes.mainTitle}>
          Wa Drari !
        </Typography>
        <Typography variant="h4" component="div" className={classes.paragraph}>
          <div className={classes.selfPresentation}>
            This is Slimane, I'm a software engineer, part-time Youtuber and
            podcast host.
          </div>
          <div>
            In this website I share whatever I learn or build and my thoughts on
            productivity and life.
          </div>
        </Typography>
      </div>
      <div className={classes.videoContainer}>
        <YoutubeEmbed embedId={"1sM54FPUagk"} />
      </div>
    </section>
  );
}
