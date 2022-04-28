import * as React from "react";
import { Typography } from "@mui/material";
import { WhereToListenProps } from "../../types/shared/whereToListen.types";
import { useWhereToListenStyles } from "../../styles/shared/whereToListen.styles";
import clsx from "clsx";

export default function WhereToListen({
  audioPlatforms,
  className,
}: WhereToListenProps): JSX.Element {
  const classes = useWhereToListenStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <Typography variant="h6" component="h1">
        Where to listen:
      </Typography>
      {audioPlatforms.map((platform) => (
        <a
          href={platform.url}
          className={classes.audioPlatformsLink}
          key={platform.name}
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            src={platform.iconPath}
            title={platform.name}
            alt={platform.name}
          />
        </a>
      ))}
    </div>
  );
}
