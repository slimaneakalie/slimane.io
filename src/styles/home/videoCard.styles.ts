import { makeStyles } from "@material-ui/core/styles";

export const useVideoCardStyles = makeStyles((theme) => ({
  root: {
    width: 320,
    marginTop: 20,
    "@media (max-width: 900px)": {
      width: "90%",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "flex-start",
  },
  media: {
    height: "auto",
    width: "100%",
  },
}));
