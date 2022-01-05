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
    fontSize: 20,
    lineHeight: 1.8,
    textAlign: "justify",
    "@media (max-width: 900px)": {
      width: "90%",
    },
    "& blockquote": {
      fontStyle: "italic",
      padding: "5px 19px 1px 16px",
      borderLeft: "8px solid #1b4d9e",
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
        content: '',
      },
    },
  },
}));
