import { makeStyles } from "@mui/styles";

export const useAboutPageStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  avatar: {
    width: 240,
    height: "auto",
    boxShadow:
      "0px 9px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)",
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
    height: "100%",
    "@media (max-width: 1100px)": {
      width: "100%",
      marginBottom: 40,
    },
  },
  mainContainer: {
    width: 1280,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    "@media (max-width: 1280px)": {
      width: "90%",
    },
    "@media (max-width: 1100px)": {
      flexDirection: "column-reverse",
    },
  },
  text: {
    fontSize: 24,
    lineHeight: 1.8,
  },
  textContainer: {
    width: "80%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    paddingRight: 40,
    paddingLeft: 35,
    "@media (max-width: 1100px)": {
      width: "100%",
      alignItems: "center",
      padding: 0,
    },
  },
  iconLinksContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    "& > a": {
      margin: 20,
    },
    "@media (max-width: 900px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      "& > a": {
        marginLeft: 0,
      },
    },
  },
  arabicText: {
    fontFamily: "Tajawal",
  },
}));
