import {
  AudioPlatform,
  WhereToListenContainerProps,
} from "../../types/shared/whereToListen.types";
import { useSelector } from "react-redux";
import { PodcastMap } from "../../types/podcast/podcast.types";
import { selectSharedStateField } from "../../store/shared/selectors";
import WhereToListen from "../../components/shared/WhereToListen";

export default function WhereToListenContainer({
  className,
}: WhereToListenContainerProps): JSX.Element {
  const audioPlatforms = useSelector(
    selectSharedStateField("audioPlatforms")
  ) as AudioPlatform[];

  return (
    <WhereToListen audioPlatforms={audioPlatforms} className={className} />
  );
}
