import { HeaderProps } from "../../types/home/header.types";
import Header from "../../components/shared/Header";
import React from "react";

const navbarProps: HeaderProps = {
  links: [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Articles",
      link: "/articles",
    },
    {
      label: "Podcast",
      link: "/podcast",
    },
    {
      label: "Book Highlights",
      link: "/highlights",
    },
    {
      label: "Videos",
      link: "https://www.youtube.com/channel/UCAKherxCCvXWHyGaeQKy-Jw/videos",
      isExternal: true,
    },
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Support",
      subLinks: [
        {
          label: "Membership",
          isExternal: true,
          link: "https://www.youtube.com/@kassataypodcast/join",
        },
        {
          label: "Patreon",
          isExternal: true,
          link: "https://www.patreon.com/kassatay",
        },
        {
          label: "Paypal",
          isExternal: true,
          link: "https://paypal.com/paypalme/lectorem",
        },
        {
          label: "Coffee",
          isExternal: true,
          link: "https://buymeacoffee.com/kassatay",
        },
      ],
    },
  ],
};

export default function HeaderContainer(): JSX.Element {
  return <Header {...navbarProps} />;
}
