import { makeStyles } from "@material-ui/core/styles";

export const useArticleCardStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    marginTop: 20,
    "@media (max-width: 900px)": {
      width: "90%",
    },
    animation: `$articleTransition 1s ${theme.transitions.easing.easeInOut}`,
  },
  container: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  media: {
    height: 100,
    width: "100%",
    filter: 'grayscale(100%)',
    "&:hover": {
      filter: 'grayscale(0%)',
    }
  },
  content: {
    width: "100%",
  },
  metadataPanel: {
    color: "gray",
    fontSize: "0.8rem",
  },
  "@keyframes articleTransition": {
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
