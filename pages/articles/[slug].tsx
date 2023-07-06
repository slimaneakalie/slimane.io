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
        <meta property="og:title" content={props.title} />
        <meta property="og:image" content={props.thumbnailURL} />
        <meta property="og:description" content={props.shortDescription} />
        <meta name="description" content={props.shortDescription} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:image" content={props.thumbnailURL} />
        <meta name="twitter:creator" content="@cd_slimane"></meta>
        <meta name="twitter:site" content="@cd_slimane"></meta>
        <meta
          name="twitter:description"
          content={props.shortDescription}
        ></meta>
      </Head>
      <ArticleItemPageContainer article={props} />
    </>
  );
}
