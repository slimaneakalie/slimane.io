import { makeStyles } from "@material-ui/core/styles";

export const usePodcastItemPageStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  bodyContainer: {
    width: 1220,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: 40,
    "@media (max-width: 1280px)": {
      width: "90%",
    },
  },
  videoContainer: {
    margin: "35px 0px 45px 0px",
    width: "50%",
    "@media (max-width: 900px)": {
      width: "100%",
    },
  },
}));
