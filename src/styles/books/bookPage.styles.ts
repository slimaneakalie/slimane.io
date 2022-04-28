import { makeStyles } from "@mui/styles";

export const useBooksPageStyles = makeStyles(() => ({
  root: {
    padding: "30px 0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: 1280,
    "@media (max-width: 1340px)": {
      width: "90%",
    },
  },
  title: {
    marginBottom: 30,
  },
  booksCardsContainer: {
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
}));
