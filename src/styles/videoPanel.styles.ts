import { makeStyles } from "@material-ui/core/styles";

export const useVideoPanelStyles = makeStyles((theme) => ({
  root: {
    marginTop: "3rem",
    marginBottom: "3rem",
    padding: "0 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  paragraph: {
    fontWeight: "normal",
    fontSize: "1.5rem",
  },
  selfPresentation: {
    marginBottom: 25,
  },
  textContainer: {
    width: "45%",
  },
  videoContainer: {
    width: "45%",
  },
}));
