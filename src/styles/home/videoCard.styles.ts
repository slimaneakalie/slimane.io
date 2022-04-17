import { makeStyles } from "@material-ui/core/styles";

export const useVideoCardStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    animation: `$videoTransition 1s ${theme.transitions.easing.easeInOut}`,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "flex-start",
  },
  media: {
    height: 155,
    width: "auto",
    filter: 'grayscale(100%)',
    "&:hover" : {
      filter: "grayscale(0%)",
    },
    "@media (max-width: 1024px)": {
      height: 128,
    },
    "@media (max-width: 768px)": {
      height: 214,
    },
    "@media (max-width: 540px)": {
      height: 150,
    },
    "@media (max-width: 414px)": {
      height: 117,
    },
    "@media (max-width: 375px)": {
      height: 105,
    },
    "@media (max-width: 280px)": {
      height: 101,
    },
  },
  "@keyframes videoTransition": {
    "0%": {
      opacity: 0,
      transform: "translateY(4rem)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));
