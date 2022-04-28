import * as React from "react";
import { Typography } from "@mui/material";
import { useItemPageTitleStyles } from "../../styles/shared/itemPage.styles";
import { ItemPageTitleProps } from "../../types/shared/ItemPageTitle.types";

export default function ItemPageTitle({
  children,
}: ItemPageTitleProps): JSX.Element {
  const classes = useItemPageTitleStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h2" component="h1" className={classes.title}>
        {children}
      </Typography>
    </div>
  );
}
