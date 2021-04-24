import { makeStyles } from "@material-ui/core/styles";

export const useArticleStyles = makeStyles((theme) => ({
  root: {
    width: 800,
  },
  container: {
    display: "flex",
    justifyContent: "flex-start",
  },
  media: {
    height: 150,
    width: 200,
  },
  metadataPanel: {
    color: "gray",
    fontSize: "0.8rem",
  },
}));
