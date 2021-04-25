import { makeStyles } from "@material-ui/core/styles";

export const useLatestPodcastStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "20px 0px",
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
