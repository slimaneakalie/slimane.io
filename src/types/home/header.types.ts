export interface HeaderLink {
  label: string;
  isExternal?: boolean;
  link?: string;
  subLinks?: HeaderLink[];
}

export interface HeaderProps {
  links: HeaderLink[];
}

export interface HeaderState {
  mobileView: boolean;
  drawerOpen: boolean;
}
