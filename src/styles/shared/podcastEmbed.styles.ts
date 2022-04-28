import { makeStyles } from "@mui/styles";

export const usePodcastEmbedStyles = makeStyles(() => ({
  root: {
    height: 232,
    position: "relative",
    "@media (max-width: 1280px)": {
      width: "100%",
    },
  },
  progressBarContainer: {
    position: "absolute",
    width: "100%",
    height: 232,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },
  podcastContainer: {
    position: "absolute",
    width: "100%",
    zIndex: 1,
    borderRadius: 12,
    height: 232,
  },
}));
