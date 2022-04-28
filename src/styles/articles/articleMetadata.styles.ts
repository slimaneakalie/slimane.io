import { makeStyles } from "@mui/styles";

export const useArticleMetadataStyles = makeStyles(() => ({
  root: {
    textAlign: "left",
  },
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
