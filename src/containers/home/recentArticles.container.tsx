import RecentArticles from "../../components/home/RecentArticles";
import { ArticlesMap } from "../../types/home/recentArticles.types";
import { useSelector } from "react-redux";
import { selectHomeStateField } from "../../store/home/selectors";

export default function RecentArticlesContainer(): JSX.Element {
  const latestArticles = useSelector(
    selectHomeStateField("latestArticles")
  ) as ArticlesMap;

  return <RecentArticles articles={latestArticles} />;
}
