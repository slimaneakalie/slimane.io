import { Typography } from "@material-ui/core";
import { useImageTitleStyles } from "../../styles/shared/ImageTitle.styles";
import { ImageTitleProps } from "../../types/shared/imageTitle.types";

export default function ImageTitle(props: ImageTitleProps): JSX.Element {
  const classes = useImageTitleStyles(props);
  const { title, imgClassName } = props;

  return (
    <div className={classes.root}>
      <div
        className={`${classes.mainImage} ${classes.imageBackgroundFilter} ${imgClassName}`}
      />
      <div className={classes.titleTextContainer}>
        <Typography variant="h2" component="h1" className={classes.title}>
          {title}
        </Typography>
      </div>
    </div>
  );
}
