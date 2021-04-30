import { NextPageContext } from "next";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { setArticleElementState } from "../../src/store/articles/slice";
import Head from "next/head";
import ArticlesPageContainer from "../../src/containers/articles/articlesPage.container";
import {
  fetchAllArticleSlugs,
  fetchArticleCompleteData,
  fetchPageArticles,
} from "../../src/lib/graphql/fetchers/articles";
import { Article } from "../../src/types/shared/articles.types";
import { useRouter } from "next/router";

export default function Article(props: Article): JSX.Element {
  const router = useRouter();
  const { slug } = router.query;
  const action = {
    id: slug as string,
    newState: props,
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setArticleElementState(action));
  }, []);

  return (
    <>
      <Head>
        <title>{props.title} | Slimane Akalië</title>
      </Head>
      <ArticlesPageContainer />
    </>
  );
}

export async function getStaticProps(context: NextPageContext) {
  const { slug } = context.query;
  return {
    props: await fetchArticleCompleteData(slug as string),
  };
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: await fetchAllArticleSlugs(),
  };
}
