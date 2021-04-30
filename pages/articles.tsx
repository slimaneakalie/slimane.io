import ArticlesPageContainer from "../src/containers/articles/articlesPage.container";
import Head from "next/head";
import React from "react";

export default function Articles(): JSX.Element {
  return (
    <>
      <Head>
        <title>Articles | Slimane Akalië</title>
      </Head>
      <ArticlesPageContainer />;
    </>
  );
}
