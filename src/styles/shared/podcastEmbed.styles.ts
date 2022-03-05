import { makeStyles } from "@material-ui/core/styles";

export const usePodcastEmbedStyles = makeStyles((theme) => ({
  root: {
    height: 161,
    position: "relative",
    "@media (max-width: 1280px)": {
      width: "100%",
    },
  },
  progressBarContainer: {
    position: "absolute",
    width: "100%",
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },
  podcastContainer: {
    position: "absolute",
    width: "100%",
    zIndex: 1,
  }
}));
