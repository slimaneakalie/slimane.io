import { HeaderProps } from "../types/header.types";
import Header from "../components/Header";
import React from "react";

const navbarProps: HeaderProps = {
  links: [
    {
      label: "Articles",
      link: "/articles",
    },
    {
      label: "Podcast",
      link: "/podcast",
    },
    {
      label: "Tools",
      link: "/tools",
    },
    {
      label: "Videos",
      link: "https://www.youtube.com/channel/UCAKherxCCvXWHyGaeQKy-Jw/videos",
      isExternal: true,
    },
    {
      label: "Contact",
      link: "https://www.linkedin.com/in/slimaneakalie",
      isExternal: true,
    },
  ],
};

export default function HeaderContainer(): JSX.Element {
  return <Header {...navbarProps} />;
}
