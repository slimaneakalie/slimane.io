import { makeStyles } from "@material-ui/core/styles";

export const useFooterStyles = makeStyles((theme) => ({
  root: {
    marginTop: "auto",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
  },
  contentContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 1280,
    "@media (max-width: 1280px)": {
      width: "100%",
    },
  },

  githubLink: {
    marginLeft: 8,
    textDecoration: "none",
    color: "inherit",
  },
}));
