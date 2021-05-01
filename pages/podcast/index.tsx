import PodcastPageContainer from "../../src/containers/podcast/podcastPage.container";
import { getPodcastInitialState } from "../../src/store/podcast/initializeState";
import { PodcastState } from "../../src/types/podcast/store.podcast.types";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPodcastState } from "../../src/store/podcast/slice";

export default function PodcastPage(props: PodcastState): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPodcastState(props));
  }, []);
  return <PodcastPageContainer />;
}

export async function getStaticProps() {
  return {
    props: await getPodcastInitialState(),
  };
}
