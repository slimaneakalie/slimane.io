import { makeStyles } from "@material-ui/core/styles";

export const useBooksItemPageStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  bodyContainer: {
    width: 1230,
    marginTop: 20,
    lineHeight: 1.8,
    textAlign: "left",
    "@media (max-width: 1230px)": {
      width: "90%",
    },
  },
  highlightContainer: {
    marginLeft: 13,
    marginBottom: 50,
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 900px)": {
      flexDirection: "column",
    },
  },
  highlightContent: {
    maxWidth: "60%",
    "& > *": {
      width: "100%",
    },
    "& > main": {
      fontSize: 20,
    },
    "@media (max-width: 900px)": {
      maxWidth: "100%",
    },
  },
  coverContainer: {
    textAlign: "center",
    "@media (max-width: 1230px)": {
      maxWidth: "90%",
    },
  },

  cover: {
    transform: "rotate(-18deg)",
    height: 300,
    width: "auto",
  },
}));
