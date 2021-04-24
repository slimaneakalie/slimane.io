import { HeaderProps } from "../types/Header";
import Header from "../components/Header";
import React from "react";

const navbarProps: HeaderProps = {
  links: [
    {
      label: "Listings",
      link: "/listings",
    },
    {
      label: "Mentors",
      link: "/mentors",
    },
    {
      label: "My Account",
      link: "/account",
    },
    {
      label: "Log Out",
      link: "/logout",
    },
  ],
};

export default function HeaderContainer(): JSX.Element {
  return <Header {...navbarProps} />;
}
