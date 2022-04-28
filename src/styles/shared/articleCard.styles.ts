import { makeStyles } from "@mui/styles";
import { isArabicArticle } from "../../lib/utils";
import { Article } from "../../types/shared/articles.types";

export const useArticleCardStyles = makeStyles((theme: any) => ({
  root: {
    width: "90%",
    marginTop: 20,
    "@media (max-width: 900px)": {
      width: "90%",
    },
    animation: `$articleTransition 1s ${theme.transitions.easing.easeInOut}`,
    filter: "grayscale(100%)",
    "&:hover": {
      filter: "grayscale(0%)",
    },
  },
  container: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  media: {
    height: 100,
    width: "100%",
  },
  content: {
    width: "100%",
  },
  metadataPanel: {
    color: "gray",
    fontSize: "0.8rem",
  },
  title: (article: Article) => ({
    fontFamily: isArabicArticle(article) ? "Tajawal" : "inherit",
  }),
  shortDescription: (article: Article) => ({
    fontFamily: isArabicArticle(article) ? "Tajawal" : "inherit",
  }),

  "@keyframes articleTransition": {
    "0%": {
      opacity: 0,
      transform: "translateY(4rem)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));
