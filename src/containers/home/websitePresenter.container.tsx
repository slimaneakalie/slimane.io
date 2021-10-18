import WebsitePresenter from "../../components/home/WebsitePresenter";
import { selectHomeStateField } from "../../store/home/selectors";
import { useSelector } from "react-redux";
import React from "react";

export default function WebsitePresenterContainer(): JSX.Element {
  const videoId = useSelector(
    selectHomeStateField("presenterVideoId")
  ) as string;
  const videoStart = useSelector(
      selectHomeStateField("presenterVideoStart")
  ) as number;



  return <WebsitePresenter videoId={videoId} videoStart={videoStart} />;
}
