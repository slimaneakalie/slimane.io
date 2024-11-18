import { makeStyles } from "../../components/mui";

export const usePrimaryButtonStyles = makeStyles(() => ({
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
