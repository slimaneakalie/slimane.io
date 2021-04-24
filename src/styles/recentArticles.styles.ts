import { makeStyles } from "@material-ui/core/styles";

export const useRecentArticlesStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "20px 0px",
  },
  mainTitle: {
    fontWeight: "bold",
    marginBottom: 20,
  },
}));
