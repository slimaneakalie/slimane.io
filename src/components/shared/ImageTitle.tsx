import * as React from "react";
import { Typography } from "@mui/material";
import { useImageTitleStyles } from "../../styles/shared/ImageTitle.styles";
import { ImageTitleProps } from "../../types/shared/imageTitle.types";
import clsx from "clsx";

export default function ImageTitle(props: ImageTitleProps): JSX.Element {
  const classes = useImageTitleStyles(props);
  const { title } = props;
  let { imgFilterClassName } = props;
  if (!imgFilterClassName) {
    imgFilterClassName = classes.imageBackgroundFilter;
  }

  return (
    <div className={classes.root}>
      <div className={clsx(classes.mainImage, imgFilterClassName)} />
      <div className={classes.titleTextContainer}>
        <Typography variant="h2" component="h1" className={classes.title}>
          {title}
        </Typography>
      </div>
    </div>
  );
}
