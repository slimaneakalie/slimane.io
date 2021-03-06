import React, { useEffect, useState } from "react";
import {
  Toolbar,
  Button,
  AppBar,
  IconButton,
  Drawer,
  MenuItem,
  Link as MaterialLink,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { useHeaderStyles } from "../../styles/shared/header.styles";
import { HeaderProps, HeaderState } from "../../types/home/header.types";
import { isClient } from "../../lib/utils";
import LinkWrapper from "../../containers/shared/linkWrapper.container";
import Logo from "../home/Logo";

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
      <LinkWrapper isExternal={isExternal} href={link} key={label}>
        <a
          className={classes.link}
          href={isExternal ? link : undefined}
          rel="noreferrer"
          target={isExternal ? "_blank" : undefined}
        >
          <Button color={"inherit"} className={classes.menuButton}>
            {label}
          </Button>
        </a>
      </LinkWrapper>
    ));

  const createDrawerMenuChoices = (): React.ReactNode[] =>
    links.map(({ label, link, isExternal }) => (
      <LinkWrapper isExternal={isExternal} href={link} key={label}>
        <MaterialLink
          {...{
            className: classes.link,
            href: isExternal ? link : undefined,
            target: isExternal ? "_blank" : undefined,
            rel: isExternal ? "noreferrer" : undefined,
          }}
        >
          <MenuItem className={classes.menuDrawerItem}>{label}</MenuItem>
        </MaterialLink>
      </LinkWrapper>
    ));

  const logo = (): React.ReactNode => (
    <LinkWrapper href={"/"} isExternal={false}>
      <Logo className={classes.logo} />
    </LinkWrapper>
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
    return isClient() && window.innerWidth < 1200
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
      <div className={classes.container}>
        {mobileView ? displayMobile() : displayDesktop()}
      </div>
    </AppBar>
  );
}
