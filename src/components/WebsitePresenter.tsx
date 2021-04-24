import { Typography } from "@material-ui/core";
import { useWebsitePresenterStyles } from "../styles/websitePresenter.styles";
import YoutubeEmbed from "./YoutubeEmbed";

export default function WebsitePresenter(): JSX.Element {
  const classes = useWebsitePresenterStyles();
  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <div>
          <Typography variant="h3" component="h1" className={classes.mainTitle}>
            Wa Drari !
          </Typography>
          <Typography
            variant="h4"
            component="div"
            className={classes.paragraph}
          >
            <div className={classes.selfPresentation}>
              This is Slimane, I'm a software engineer, Youtuber and podcast
              host.
            </div>
            <div>
              In this website I share whatever I learn or build and my thoughts
              on life.
            </div>
          </Typography>
        </div>
        <div>
          <YoutubeEmbed embedId={"1sM54FPUagk"} />
        </div>
      </div>
    </section>
  );
}
