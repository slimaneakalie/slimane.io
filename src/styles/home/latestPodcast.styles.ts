import { makeStyles } from "@mui/styles";

export const useLatestPodcastStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "20px 0px",
  },
  mainTitleContainer: {
    marginBottom: 20,
  },
  podcastCard: {
    marginTop: 20,
    width: 1280,
    "@media (max-width: 1280px)": {
      width: "90%",
    },
  },
  whereToListenContainer: {
    marginTop: 20,
  },
}));
