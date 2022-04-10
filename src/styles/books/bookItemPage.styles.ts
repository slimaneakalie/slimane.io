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
  highlightContent: {
    marginLeft: 13,
    marginBottom: 50,
    "& > main": {
      fontSize: 20,
    }
  },
}));
