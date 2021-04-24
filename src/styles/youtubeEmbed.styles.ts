import { makeStyles } from "@material-ui/core/styles";

export const useYoutubeEmbedStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    position: "relative",
    height: 0,
    paddingBottom: "56.25%",
    borderRadius: 28,
    "& > iframe": {
      left: 0,
      top: 0,
      height: "100%",
      width: "100%",
      position: "absolute",
    },
  },
}));
