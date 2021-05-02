import { Typography } from "@material-ui/core";
import { useImageTitleStyles } from "../../styles/shared/ImageTitle.styles";
import { ImageTitleProps } from "../../types/shared/imageTitle.types";

export default function ImageTitle(props: ImageTitleProps): JSX.Element {
  const classes = useImageTitleStyles(props);
  let { title, imgFilterClassName } = props;
  if (!imgFilterClassName) {
    imgFilterClassName = classes.imageBackgroundFilter;
  }

  return (
    <div className={classes.root}>
      <div className={`${classes.mainImage} ${imgFilterClassName}`} />
      <div className={classes.titleTextContainer}>
        <Typography variant="h2" component="h1" className={classes.title}>
          {title}
        </Typography>
      </div>
    </div>
  );
}
