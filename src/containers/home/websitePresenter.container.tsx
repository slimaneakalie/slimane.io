import WebsitePresenter from "../../components/home/WebsitePresenter";
import { selectHomeStateField } from "../../store/home/selectors";
import { useSelector } from "react-redux";

export default function WebsitePresenterContainer(): JSX.Element {
  const videoId = useSelector(
    selectHomeStateField("presenterVideoId")
  ) as string;

  return <WebsitePresenter videoId={videoId} />;
}
