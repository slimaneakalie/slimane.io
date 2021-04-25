import { makeStyles } from "@material-ui/core/styles";

export const useHomePageStyles = makeStyles((theme) => ({
  updatesSection: {
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  updatesContainer: {
    display: "flex",
    width: 1280,
    "& > *": {
      width: "50%",
    },
    "@media (max-width: 1280px)": {
      display: "block",
      "& > *": {
        width: "100%",
      },
    },
  },
}));
