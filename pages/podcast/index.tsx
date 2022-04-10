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
        <meta name="description" content="Kass Atay Podcast by Slimane Akalië"/>
        <link rel="preload" as="image" href="/apple-podcasts-large.png"/>
        <link rel="preload" as="image" href="/deezer-large.png"/>
        <link rel="preload" as="image" href="/google-podcasts-large.png"/>
        <link rel="preload" as="image" href="/spotify-large.png"/>
        <link rel="preload" as="image" href="/youtube-large.png"/>
        <link rel="preload" as="image" href="/apple-podcasts.png"/>
        <link rel="preload" as="image" href="/deezer.png"/>
        <link rel="preload" as="image" href="/google-podcasts.png"/>
        <link rel="preload" as="image" href="/spotify.png"/>
        <link rel="preload" as="image" href="/youtube.png"/>
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
