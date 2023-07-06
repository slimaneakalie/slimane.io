import React from "react";
import RecentVideos from "../../components/home/RecentVideos";
import { Video } from "../../types/home/videoCard.types";
import { useSelector } from "react-redux";
import { selectHomeStateField } from "../../store/home/selectors";

export default function RecentVideosContainer(): JSX.Element {
  const latestVideos = useSelector(
    selectHomeStateField("latestVideos")
  ) as Video[];

  const allVideosExternalLink = useSelector(
    selectHomeStateField("allVideosExternalLink")
  ) as string;

  return (
    <RecentVideos
      videos={latestVideos}
      allVideosExternalLink={allVideosExternalLink}
    />
  );
}
