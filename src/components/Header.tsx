import React, { useEffect, useState } from "react";
import {
  Toolbar,
  Button,
  AppBar,
  IconButton,
  Drawer,
  MenuItem,
  Link as MaterialLink,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { useHeaderStyles } from "../styles/header.styles";
import { HeaderProps, HeaderState } from "../types/header.types";
import { isClient } from "../common/utils";
import LinkWrapper from "./LinkWrapper";

export default function Header({ links }: HeaderProps): JSX.Element {
  // initial state
  const initialState: HeaderState = {
    mobileView: true,
    drawerOpen: false,
  };

  // hooks
  const classes = useHeaderStyles();
  const [state, setState] = useState(initialState);
  const { mobileView, drawerOpen } = state;

  // ui helpers
  const createMenuButtons = (): React.ReactNode[] =>
    links.map(({ label, link, isExternal }) => (
      <Button key={label} color={"inherit"} className={classes.menuButton}>
        <LinkWrapper isExternal={isExternal} href={link}>
          <a
            className={classes.link}
            href={isExternal ? link : undefined}
            target={isExternal ? "_blank" : undefined}
          >
            {label}
          </a>
        </LinkWrapper>
      </Button>
    ));

  const createDrawerMenuChoices = (): React.ReactNode[] =>
    links.map(({ label, link, isExternal }) => (
      <LinkWrapper isExternal={isExternal} href={link} key={label}>
        <MaterialLink
          {...{
            className: classes.link,
            href: isExternal ? link : undefined,
            target: isExternal ? "_blank" : undefined,
          }}
        >
          <MenuItem className={classes.menuDrawerItem}>{label}</MenuItem>
        </MaterialLink>
      </LinkWrapper>
    ));

  const logo = (): React.ReactNode => (
    <img className={classes.logo} src={"/logo.svg"} />
  );

  const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
  const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));

  const displayDesktop = (): React.ReactNode => (
    <Toolbar className={classes.toolbar}>
      {logo()}
      <div>{createMenuButtons()}</div>
    </Toolbar>
  );

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
          <div className={classes.mobileMenu}>{createDrawerMenuChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  // handle responsiveness
  const setResponsiveness = () => {
    return isClient() && window.innerWidth < 900
      ? setState((prevState) => ({ ...prevState, mobileView: true }))
      : setState((prevState) => ({ ...prevState, mobileView: false }));
  };

  useEffect(() => {
    setResponsiveness();
    isClient() && window.addEventListener("resize", () => setResponsiveness());
  }, []);

  // rendering
  return (
    <AppBar
      elevation={0}
      position="static"
      className={classes.appBar}
      color={"transparent"}
    >
      {mobileView ? displayMobile() : displayDesktop()}
    </AppBar>
  );
}
