import { makeStyles } from "@mui/styles";
import { ImageTitleProps } from "../../types/shared/imageTitle.types";

export const useImageTitleStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: 500,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mainImage: (props: ImageTitleProps) => ({
    backgroundImage: `url(${props.mainImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -100,
  }),
  imageBackgroundFilter: {
    filter: "blur(2px) brightness(80%)",
  },
  titleTextContainer: {
    position: "relative",
    zIndex: 100,
    width: 1280,
    height: "100%",
    color: "white",
    textShadow: "1px 1px 2px black, 0 0 1em black, 0 0 0.2em black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 1280px)": {
      width: "90%",
    },
  },
  title: (props: ImageTitleProps) => ({
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "3rem",
    fontFamily: props.isArabicTitle ? "Tajawal" : "inherit",
  }),
}));
