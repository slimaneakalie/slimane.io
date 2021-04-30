import HomePageContainer from "../src/containers/home/homePage.container";
import { NextPageContext } from "next";
import { HomeState } from "../src/types/home/store.home.types";
import { setState } from "../src/store/home/slice";

import { useDispatch } from "react-redux";
import { getInitialState } from "../src/store/home/initializeState";

export default function Home(props: HomeState) {
  const dispatch = useDispatch();
  dispatch(setState(props));

  return <HomePageContainer />;
}

export async function getStaticProps(context: NextPageContext) {
  return {
    props: await getInitialState(),
  };
}
