import * as React from "react";
import { Avatar } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

import MainTitle from "../src/components/shared/MainTitle";
import { useAboutPageStyles } from "../src/styles/about/aboutPage.styles";
import { IconLinkProps } from "../src/types/about/iconLink.types";
import { IconLink } from "../src/components/about/IconLink";
import Head from "next/head";

export default function About(): JSX.Element {
  const classes = useAboutPageStyles();
  const iconLinks: IconLinkProps[] = [
    {
      link: "https://twitter.com/cd_slimane",
      icon: <TwitterIcon />,
      label: "Twitter",
    },
    {
      link: "https://www.linkedin.com/in/slimaneakalie",
      icon: <LinkedInIcon />,
      label: "Linkedin",
    },
    {
      link: "https://github.com/slimaneakalie",
      icon: <GitHubIcon />,
      label: "Github",
    },
  ];
  return (
    <>
      <Head>
        <meta name="description" content="About Slimane Akalië" />
      </Head>
      <section className={classes.root}>
        <div className={classes.mainContainer}>
          <div className={classes.textContainer}>
            <MainTitle>About me</MainTitle>
            <p className={classes.text}>
              My name is Slimane Akalië (
              <span className={classes.arabicText}>سليمان أقليع</span>), I am a
              human being from{" "}
              <a
                href="https://en.wikipedia.org/wiki/Ifrane"
                target="_blank"
                rel="noreferrer"
              >
                Ifrane
              </a>
              .
              <br />
              These days, I am focusing mainly on software engineering, and on
              the side, I make videos and podcasts. Sometimes I write articles.
              <br />
              For software, I work mainly on the backend and dabble sometimes with the frontend.
              <br />
              For podcasts, I am curious about understanding people who disagree with me.
              <br />
              Other than that, I like to read books, exercise, and play soccer.
            </p>
            <div className={classes.iconLinksContainer}>
              {iconLinks.map((iconLink) => (
                <IconLink key={iconLink.label} {...iconLink} />
              ))}
            </div>
          </div>
          <div className={classes.avatarContainer}>
            <Avatar
              alt={"Slimane Akalië"}
              title={"Slimane Akalië"}
              src={"/slimane.png"}
              className={classes.avatar}
            />
          </div>
        </div>
      </section>
    </>
  );
}
