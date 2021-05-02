import PodcastPageContainer from "../../src/containers/podcast/podcastPage.container";
import { getPodcastInitialState } from "../../src/store/podcast/initializeState";
import { PodcastState } from "../../src/types/podcast/store.podcast.types";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { setPodcastState } from "../../src/store/podcast/slice";
import Head from "next/head";

export default function PodcastPage(props: PodcastState): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPodcastState(props));
  }, []);

  return (
    <>
      <Head>
        <title>Podcast | Slimane Akalië</title>
      </Head>
      <PodcastPageContainer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: await getPodcastInitialState(),
  };
}
