import React, { useEffect, useState } from "react";
import {
  Toolbar,
  Button,
  AppBar,
  IconButton,
  Drawer,
  MenuItem,
  Link,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useHeaderStyles } from "../styles/Header";
import { HeaderProps, HeaderState } from "../types/Header";
import { isClient } from "../common/utils";

export default function Header({ links }: HeaderProps): JSX.Element {
  const classes = useHeaderStyles();
  const initialState: HeaderState = {
    mobileView: false,
    drawerOpen: false,
  };
  const [state, setState] = useState(initialState);
  const { mobileView, drawerOpen } = state;

  const createMenuButtons = (): React.ReactNode[] =>
    links.map(({ label, link }) => (
      <Button key={label} color={"inherit"} className={classes.menuButton}>
        <a className={classes.link} href={link}>
          {label}
        </a>
      </Button>
    ));

  const createDrawerMenuChoices = (): React.ReactNode[] =>
    links.map(({ label, link }) => (
      <Link
        {...{
          to: link,
          color: "inherit",
          className: classes.link,
          key: label,
        }}
      >
        <MenuItem>{label}</MenuItem>
      </Link>
    ));

  const logo = (): React.ReactNode => (
    <img className={classes.logo} src={"/logo.svg"} />
  );

  const displayDesktop = (): React.ReactNode => (
    <Toolbar className={classes.toolbar}>
      {logo()}
      <div>{createMenuButtons()}</div>
    </Toolbar>
  );

  const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
  const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));

  const displayMobile = (): React.ReactNode => {
    return (
      <Toolbar className={classes.toolbarMobile}>
        {logo()}
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div>{createDrawerMenuChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  useEffect(() => {
    const setResponsiveness = () => {
      return isClient() && window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    isClient() && window.addEventListener("resize", () => setResponsiveness());
  }, []);

  return (
    <header>
      <AppBar
        position="static"
        className={classes.header}
        color={"transparent"}
      >
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
