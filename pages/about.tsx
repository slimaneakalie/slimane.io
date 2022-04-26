import { Avatar } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import MainTitle from "../src/components/shared/MainTitle";
import { useAboutPageStyles } from "../src/styles/about/aboutPage.styles";
import { IconLinkProps } from "../src/types/about/iconLink.types";
import { IconLink } from "../src/components/about/IconLink";
import Head from "next/head";

export default function About(): JSX.Element {
  const classes = useAboutPageStyles();
  const iconLinks: IconLinkProps[] = [
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
              My name is Slimane Akalië (سليمان أقليع), I'm a humain being from{" "}
              <a href="https://en.wikipedia.org/wiki/Ifrane" target="_blank">
                Ifrane
              </a>
              .
              <br />
              These days, I'm focusing mainly on software engineering, and on
              the side, I make videos and podcasts. Sometimes I write articles.
              <br />
              For the software engineering part, I work mainly on the backend
              and dabble sometimes with the frontend.
              <br />
              For the content part, I'm curious about the intersection of two
              topics: software engineering and finance.
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
