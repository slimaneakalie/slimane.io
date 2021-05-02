import { makeStyles } from "@material-ui/core/styles";

export const usePodcastCardStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    marginTop: 20,
    "@media (max-width: 900px)": {
      width: "100%",
    },
    animation: `$podcastTransition 1s ${theme.transitions.easing.easeInOut}`,
  },
  container: {
    display: "flex",
    justifyContent: "flex-start",
    // flexDirection: "column",
  },
  media: {
    height: 125,
  },
  title: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  content: {
    width: "100%",
    overflow: "hidden",
  },
  metadataPanel: {
    color: "gray",
    fontSize: "0.8rem",
  },
  "@keyframes podcastTransition": {
    "0%": {
      opacity: 0,
      transform: "translateY(4rem)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));
