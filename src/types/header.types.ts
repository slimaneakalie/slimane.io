interface HeaderLink {
  link: string;
  label: string;
  isExternal?: boolean;
}

export interface HeaderProps {
  links: HeaderLink[];
}

export interface HeaderState {
  mobileView: boolean;
  drawerOpen: boolean;
}
