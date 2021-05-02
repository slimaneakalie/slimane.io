import { makeStyles } from "@material-ui/core/styles";
import React from "react";

export const useWebsitePresenterStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 1280px)": {
      display: "block",
    },
  },
  container: {
    marginBottom: "3rem",
    padding: "0 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    animation: `$panelTransition 1s ${theme.transitions.easing.easeInOut}`,
    width: 1280,
    "& > div": {
      width: "45%",
    },
    "@media (max-width: 900px)": {
      flexDirection: "column",
      height: 650,
      "& > div": {
        width: "100%",
        // height: "45%",
        padding: 20,
      },
    },
    "@media (max-width: 1280px)": {
      width: "auto",
    },
  },
  "@keyframes panelTransition": {
    "0%": {
      opacity: 0,
      transform: "translateY(4rem)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  mainTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  paragraph: {
    fontWeight: "normal",
    fontSize: "1.5rem",
  },
  selfPresentation: {
    marginBottom: 25,
  },
  videoContainer: {},
}));
