import { makeStyles } from "@material-ui/core/styles";

export const useArticleItemPageStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  bodyContainer: {
    width: 900,
    marginTop: 20,
    fontSize: 24,
    lineHeight: 1.8,
    textAlign: "justify",
    "@media (max-width: 900px)": {
      width: "90%",
    },
  },
}));
