import { makeStyles } from "@mui/styles";

export const useIconLinkStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "antiquewhite",
    },
    padding: 5,
    borderRadius: 18,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  label: {
    fontSize: 25,
  },
  icon: {
    alignItems: "center",
    display: "flex",
    marginRight: 5,
    "& > svg": {
      fontSize: 40,
    },
  },
}));
