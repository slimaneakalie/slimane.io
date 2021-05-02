import { makeStyles } from "@material-ui/core/styles";

export const usePodcastPageStyles = makeStyles((theme) => ({
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
}));