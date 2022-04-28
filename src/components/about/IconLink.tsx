import * as React from "react";
import { IconLinkProps } from "../../types/about/iconLink.types";
import { useIconLinkStyles } from "../../styles/about/iconLink.styles";

export function IconLink({ link, label, icon }: IconLinkProps): JSX.Element {
  const classes = useIconLinkStyles();
  return (
    <a className={classes.link} href={link} target={"_blank"} rel="noreferrer">
      <div className={classes.root}>
        <div className={classes.icon}>{icon}</div>
        <div className={classes.label}>{label}</div>
      </div>
    </a>
  );
}
