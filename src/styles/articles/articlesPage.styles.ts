import { makeStyles } from "@material-ui/core/styles";

export const useArticlesPageStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  articleCard: {
    marginBottom: 20,
    width: "50%",
    "@media (max-width: 1280px)": {
      width: "90%",
    },
  },
}));
