import { makeStyles } from "@material-ui/core/styles";

export const useHeaderStyles = makeStyles((theme) => ({
  appBar: {
    paddingTop: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 1280px)": {
      display: "block",
    },
  },
  container: {
    width: 1280,
    "@media (max-width: 1280px)": {
      width: "auto",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      textDecoration: "none",
    },
  },
  logo: {
    width: 70,
    height: 60,
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: 18,
    marginLeft: 38,
    textDecoration: "none",
  },
  menuDrawerItem: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: 18,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    display: "block",
    width: 190,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  toolbarMobile: {
    display: "flex",
    justifyContent: "space-between",
  },
  mobileMenu: {},
}));
