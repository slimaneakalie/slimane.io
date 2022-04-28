import { makeStyles } from "@mui/styles";
import { Direction } from "@mui/material";
import { isArabicArticle } from "../../lib/utils";
import { Article } from "../../types/shared/articles.types";

export const useArticleItemPageStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  bodyContainer: (article: Article) => ({
    direction: article.textOrientation as Direction,
    width: 900,
    marginTop: 20,
    fontSize: 20,
    fontFamily: isArabicArticle(article) ? "Tajawal" : "inherit",
    lineHeight: 1.8,
    textAlign: "justify",
    "& .remark-highlight": {
      fontSize: 16,
    },
    "@media (max-width: 900px)": {
      width: "90%",
    },
    "& p > code": {
      backgroundColor: "#272822",
      borderRadius: 5,
      color: "white",
      padding: "3px 5px",
    },
    "& img": {
      maxWidth: "100%",
      border: "2px solid #8145A7",
    },
    "& blockquote": {
      padding: "5px 19px 1px 16px",
      borderLeft: "8px solid #8145A7",
      lineHeight: 1.6,
      position: "relative",
      background: "#EDEDED",
      "&::before": {
        content: "\\201C",
        color: "#78C0A8",
        fontSize: "4em",
        position: "absolute",
        left: "10px",
        top: "-10px",
      },
      "&::after": {
        content: "",
      },
    },
  }),
}));
