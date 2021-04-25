import { makeStyles } from "@material-ui/core/styles";

export const useLatestPodcastStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "20px 0px",
  },
  embedContainer: {
    width: 1280,
    "@media (max-width: 1280px)": {
      width: "90%",
    },
  },
  mainTitle: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  seeAllButton: {
    marginTop: 40,
    fontSize: 18,
  },
}));
