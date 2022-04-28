import { makeStyles } from "@mui/styles";

export const useYoutubeEmbedStyles = makeStyles(() => ({
  root: {
    overflow: "hidden",
    position: "relative",
    height: 0,
    paddingBottom: "56.25%",
    borderRadius: 28,
    boxShadow:
      "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)",
    "& > iframe": {
      left: 0,
      top: 0,
      height: "100%",
      width: "100%",
      position: "absolute",
    },
  },

  progressBarContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
    color: "#FF0C00",
  },

  videoContainer: {
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
}));
