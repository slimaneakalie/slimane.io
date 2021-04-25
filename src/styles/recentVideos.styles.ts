import { makeStyles } from "@material-ui/core/styles";

export const useRecentVideosStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "20px 0px",
  },
  cardsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: 1280,
    "& > div": {
      maxWidth: "20%",
      //flex: 1,
    },
  },
  mainTitle: {
    fontWeight: "bold",
  },
  seeAllButton: {
    marginTop: 40,
    fontSize: 18,
    backgroundColor: "#dc0046",
    "&:hover": {
      backgroundColor: "#9A0436",
    },
  },
}));
