// import { useStore } from '../store'
import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Header from "../src/containers/shared/header.container";

import theme from "../src/theme";
import Footer from "../src/components/shared/Footer";

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
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
