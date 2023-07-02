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
import {
  HeaderLink,
  HeaderProps,
  HeaderState,
} from "../../types/home/header.types";
import { isClient } from "../../lib/utils";
import LinkWrapper from "../../containers/shared/linkWrapper.container";
import Logo from "../home/Logo";
import {
  HeaderDrawerLink,
  HeaderMenuLink,
  HeaderSimpleLink,
} from "./HeaderLinks";

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
    links.map((headerLink: HeaderLink) => {
      if (headerLink?.subLinks && headerLink.subLinks.length > 0) {
        return <HeaderMenuLink key={headerLink.label} {...headerLink} />;
      }

      return <HeaderSimpleLink key={headerLink.label} {...headerLink} />;
    });

  const createDrawerMenuChoices = (): React.ReactNode[] =>
    links.map((headerLink: HeaderLink) => {
      if (headerLink?.subLinks && headerLink.subLinks.length > 0) {
        return (
          <div>
            {headerLink.subLinks?.map((hl) => (
              <HeaderDrawerLink key={hl.label} {...hl} />
            ))}
          </div>
        );
      }

      return <HeaderDrawerLink key={headerLink.label} {...headerLink} />;
    });

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
