import { makeStyles } from "@mui/styles";

export const usePodcastPageStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  cardsContainer: {
    width: 1280,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: 40,
    "@media (max-width: 1280px)": {
      width: "90%",
    },
  },
  podcastCard: {
    marginTop: 20,
    width: "90%",
    "@media (max-width: 900px)": {
      width: "100%",
    },
  },
}));
