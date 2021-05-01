import { makeStyles } from "@material-ui/core/styles";

export const useArticleMetadataStyles = makeStyles((theme) => ({
  root: {},
  authorLabel: {
    fontStyle: "italic",
    marginRight: 6,
  },
  link: {
    textDecoration: "none",
    color: "gray",
    textTransform: "uppercase",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "antiquewhite",
    },
  },
  separator: {
    margin: "0px 12px",
  },
  tags: {
    textTransform: "uppercase",
    fontWeight: "bold",
  },
}));
