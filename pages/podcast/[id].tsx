import { GetStaticPropsContext, NextPageContext } from "next";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { setPodcastItemState } from "../../src/store/podcast/slice";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  fetchAllPodcastIds,
  fetchPodcastCompleteData,
} from "../../src/lib/graphql/fetchers/podcast";
import { PodcastItem } from "../../src/types/podcast/podcast.types";
import PodcastItemPageContainer from "../../src/containers/podcast/podcastItemPage.container";

export default function PodcastItemPage(props: PodcastItem): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  const action = {
    id: id as string,
    newState: props,
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPodcastItemState(action));
  }, []);

  return (
    <>
      <Head>
        <title>{props.title} | Slimane Akalië</title>
        <meta name="description" content={props.excerpt}/>
      </Head>
      <PodcastItemPageContainer podcastItem={props} audioPlatforms={[]} />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext<any>) {
  const id = context.params.id as string;
  return {
    props: await fetchPodcastCompleteData(id),
  };
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: await fetchAllPodcastIds(),
  };
}
