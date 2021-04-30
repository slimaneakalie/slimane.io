import { makeStyles } from "@material-ui/core/styles";

export const useRecentVideosStyles = makeStyles((theme) => ({
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
    // width: 1280,
    "& > div": {
      flexBasis: "43%",
      position: "relative",
      boxSizing: "border-box",
      margin: 20,
      // maxWidth: "20%",
      //flex: 1,
    },
    "@media (max-width: 1280px)": {
      "& > div": {
        flexBasis: "22%",
      },
    },
    "@media (max-width: 1000px)": {
      "& > div": {
        flexBasis: "29%",
      },
    },
    "@media (max-width: 900px)": {
      "& > div": {
        flexBasis: "50%",
      },
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
