import { makeStyles } from "@material-ui/core/styles";

export const usePrimaryButtonStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#23848C",
    // textTransform: "none",
    color: "white",
    "&:hover": {
      backgroundColor: "#0e7077",
      color: "#ededed",
    },
  },
}));
