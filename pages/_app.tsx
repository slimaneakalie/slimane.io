// import { useStore } from '../store'
import React from "react";
import { AppProps } from "next/app";
import Navbar, { NavbarProps } from "../components/Navbar";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "../theme";
import Head from "next/head";

const navbarProps: NavbarProps = {
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

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Slimane Akalië</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar {...navbarProps} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
