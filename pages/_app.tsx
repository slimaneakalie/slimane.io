import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider as StoreProvider } from "react-redux";

import theme from "../src/theme";
import Header from "../src/containers/shared/header.container";
import Footer from "../src/components/shared/Footer";
import store from "../src/store";
import createEmotionCache from "../src/lib/ssr/createEmotionCache";

import "react-notion-x/src/styles.css";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Slimane Akalië</title>
        <link rel="preload" as="image" href="/slimane.png" />
        <link rel="preload" as="image" href="/book.png" />
        <link rel="stylesheet" href="/global.css" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="description"
          content="The official website of Slimane Akalië"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StoreProvider store={store}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </StoreProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
