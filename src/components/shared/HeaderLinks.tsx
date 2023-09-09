import { Button, Link as MaterialLink, Menu, MenuItem } from "@mui/material";
import React from "react";
import { useHeaderStyles } from "../../styles/shared/header.styles";
import { HeaderLink } from "../../types/home/header.types";
import LinkWrapper from "../../containers/shared/linkWrapper.container";

export function HeaderMenuLink(headerLink: HeaderLink): JSX.Element {
  const classes = useHeaderStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.linksMenuContainer}>
      <Button
        id="basic-button"
        color={"inherit"}
        className={classes.menuButton}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {headerLink.label}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className={classes.linksMenuContent}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {headerLink.subLinks?.map((hl) => (
          <HeaderSimpleLink key={"menuLink-" + hl.link} {...hl} />
        ))}
      </Menu>
    </div>
  );
}

export function HeaderSimpleLink(headerLink: HeaderLink): JSX.Element {
  const classes = useHeaderStyles();
  const buttonComp = (
    <Button color={"inherit"} className={classes.menuButton}>
      {headerLink.label}
    </Button>
  );
  return (
    <LinkWrapper
      isExternal={headerLink.isExternal}
      href={headerLink.link || ""}
      key={headerLink.label}
    >
      {headerLink.isExternal ? (
        <a
          className={classes.link}
          href={headerLink.isExternal ? headerLink.link : undefined}
          rel="noreferrer"
          target={headerLink.isExternal ? "_blank" : undefined}
        >
          {buttonComp}
        </a>
      ) : (
        buttonComp
      )}
    </LinkWrapper>
  );
}

export function HeaderDrawerLink(headerLink: HeaderLink): JSX.Element {
  const classes = useHeaderStyles();
  return (
    <LinkWrapper
      isExternal={headerLink.isExternal}
      href={headerLink.link || ""}
      key={headerLink.label}
    >
      <MaterialLink
        {...{
          className: classes.link,
          href: headerLink.isExternal ? headerLink.link : undefined,
          target: headerLink.isExternal ? "_blank" : undefined,
          rel: headerLink.isExternal ? "noreferrer" : undefined,
        }}
      >
        <MenuItem className={classes.menuDrawerItem}>
          {headerLink.label}
        </MenuItem>
      </MaterialLink>
    </LinkWrapper>
  );
}
