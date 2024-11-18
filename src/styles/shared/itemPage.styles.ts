import { makeStyles } from "@mui/styles";

export const useItemPageTitleStyles = makeStyles(() => ({
  container: {
    width: 1280,
    height: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 34px",
    "@media (max-width: 1280px)": {
      width: "90%",
      margin: "50px 0px",
      height: 100,
      padding: 0,
    },
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "2.5rem",
    "@media (max-width: 1280px)": {
      fontSize: "2rem",
    },
  },
}));
