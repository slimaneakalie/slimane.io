import { Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import ListAltIcon from "@material-ui/icons/ListAlt";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import TwitterIcon from '@material-ui/icons/Twitter';

import MainTitle from "../src/components/shared/MainTitle";
import { useAboutPageStyles } from "../src/styles/about/aboutPage.styles";
import { IconLinkProps } from "../src/types/about/iconLink.types";
import { IconLink } from "../src/components/about/IconLink";

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
    <section className={classes.root}>
      <div className={classes.mainContainer}>
        <div className={classes.textContainer}>
          <MainTitle>About me</MainTitle>
          <p className={classes.text}>
            My name is Slimane Akalië, I'm a full-time software engineer and
            part-time content creator.
            <br />
            Most of my engineering work is related to web products. For content
            creation, I'm interested in the intersection of three main topics:
            productivity, software engineering, and entrepreneurship. <br />
            <br />
            Other than that, I like to read books, exercise, play soccer, and
            pick up new skills.
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
  );
}
