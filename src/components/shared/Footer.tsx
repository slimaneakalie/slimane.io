import { useFooterStyles } from "../../styles/shared/footer.styles";
import * as React from "react";
import {GitHub as GitHubIcon} from "../mui";

export default function Footer(): JSX.Element {
  const classes = useFooterStyles();
  const currentYear = new Date().getFullYear();
  return (
    <footer className={classes.root}>
      <div className={classes.contentContainer}>
        &#169; Slimane Akalië, {currentYear}. Open sourced on
        <a
          href={"https://github.com/slimaneakalie/slimane.io"}
          target={"_blank"}
          rel="noreferrer"
          className={classes.githubLink}
        >
          <GitHubIcon />
        </a>
      </div>
    </footer>
  );
}
