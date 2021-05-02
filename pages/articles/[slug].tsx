import { GetStaticPropsContext } from "next";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { setArticleItemState } from "../../src/store/articles/slice";
import Head from "next/head";
import {
  fetchAllArticleSlugs,
  fetchArticleCompleteData,
} from "../../src/lib/graphql/fetchers/articles";
import { Article } from "../../src/types/shared/articles.types";
import { useRouter } from "next/router";
import ArticleItemPageContainer from "../../src/containers/articles/articleItemPage.container";

export default function ArticleItem(props: Article): JSX.Element {
  const router = useRouter();
  const { slug } = router.query;
  const action = {
    id: slug as string,
    newState: props,
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setArticleItemState(action));
  }, []);

  return (
    <>
      <Head>
        <title>{props.title} | Slimane Akalië</title>
      </Head>
      <ArticleItemPageContainer article={props} />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext<any>) {
  const slug = context.params.slug as string;
  return {
    props: await fetchArticleCompleteData(slug),
  };
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: await fetchAllArticleSlugs(),
  };
}
