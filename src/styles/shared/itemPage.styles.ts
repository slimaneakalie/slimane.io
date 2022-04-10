import { makeStyles } from "@material-ui/core/styles";

export const useItemPageTitleStyles = makeStyles((theme) => ({
  container: {
    width: 1280,
    height: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 1280px)": {
      width: "90%",
      margin: "50px 0px",
    },
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "3rem",
  },
}));