import { makeStyles } from "@mui/styles";

export const useRecentVideosStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: "20px 0px",
  },
  cardsContainer: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    "& > div": {
      flexBasis: "auto",
      position: "relative",
      boxSizing: "border-box",
      margin: 20,
    },
  },
  seeAllButton: {
    marginTop: 40,
    fontSize: 18,
    cursor: "pointer",
    backgroundColor: "#dc0046",
    "&:hover": {
      backgroundColor: "#9A0436",
    },
  },
}));
