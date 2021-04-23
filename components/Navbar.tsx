import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Button, AppBar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    paddingRight: "79px",
    paddingLeft: "118px",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  logo: {
    width: 70,
    height: 60,
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

interface NavbarLink {
  link: string;
  label: string;
  isExternal?: boolean;
}

export interface NavbarProps {
  links: NavbarLink[];
}

export default function Navbar({ links }: NavbarProps): JSX.Element {
  const classes = useStyles();

  const logo = (): React.ReactNode => (
    <img className={classes.logo} src={"/logo.svg"} />
  );

  const displayDesktop = (): React.ReactNode => (
    <Toolbar className={classes.toolbar}>
      {logo()}
      <div>{createMenuButtons()}</div>
    </Toolbar>
  );

  const createMenuButtons = (): React.ReactNode[] =>
    links.map(({ label, link }) => (
      <Button key={label} color={"inherit"} className={classes.menuButton}>
        <a className={classes.link} href={link}>
          {label}
        </a>
      </Button>
    ));

  return (
    <header>
      <AppBar
        position="static"
        className={classes.header}
        color={"transparent"}
      >
        {displayDesktop()}
      </AppBar>
    </header>
  );
}
