import { NextPageContext } from "next";
import { getInitialState } from "../../src/store/articles/initializeState";
import { ArticlesState } from "../../src/types/articles/store.articles.types";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { setArticlesState } from "../../src/store/articles/slice";
import Head from "next/head";
import ArticlesPageContainer from "../../src/containers/articles/articlesPage.container";

export default function Article(props: ArticlesState): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setArticlesState(props));
  }, []);

  return (
    <>
      <Head>
        <title>Articles | Slimane Akalië</title>
      </Head>
      <ArticlesPageContainer />
    </>
  );
}

export async function getStaticProps(context: NextPageContext) {
  return {
    props: await getInitialState(),
  };
}
