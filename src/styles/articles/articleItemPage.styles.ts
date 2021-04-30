import { makeStyles } from "@material-ui/core/styles";
import { ArticleItemPageProps } from "../../types/articles/articleItemPage.types";

export const useArticleItemPageStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  bodyContainer: {
    width: "100%",
    marginTop: 20,
    padding: "0px 25%",
    fontSize: 24,
    lineHeight: 1.8,
    textAlign: "justify",
  },
  titleContainer: {
    width: "100%",
    height: 400,
    position: "relative",
    padding: "0px 25%",
  },
  mainImage: {
    width: "100%",
    height: "100%",
    filter: "blur(2px) brightness(80%);",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -100,
    padding: "0px 18%",
  },
  mainImageBackground: (props: ArticleItemPageProps) => ({
    backgroundImage: `url(${props.article.thumbnailURL})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  }),
  titleTextContainer: {
    position: "relative",
    zIndex: 100,
    color: "white",
    textShadow: "1px 1px 2px black, 0 0 1em black, 0 0 0.2em black",
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  title: {
    fontWeight: "bold",
  },
}));
