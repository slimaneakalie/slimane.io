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
    paddingRight: 79,
    paddingLeft: 118,
  },
  toolbarMobile: {
    display: "flex",
    justifyContent: "space-between",
  },
  mobileMenu: {},
}));
