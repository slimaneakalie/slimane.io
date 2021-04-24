import { makeStyles } from "@material-ui/core/styles";

export const useHeaderStyles = makeStyles((theme) => ({
  header: {
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  logo: {
    width: 70,
    height: 60,
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    paddingRight: "79px",
    paddingLeft: "118px",
  },
  toolbarMobile: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
