import RecentArticles from "../../components/home/RecentArticles";
import { ArticlesMap } from "../../types/home/recentArticles.types";

const articles: ArticlesMap = {
  "125": {
    id: "125",
    thumbnailURL: "https://picsum.photos/200/300",
    title: "Article title",
    shortDescription: "Article description",
    readingTimeInMinute: 9,
    publishingDateStr: new Date().toLocaleDateString(),
  },
  "126": {
    id: "126",
    thumbnailURL: "https://picsum.photos/200/300",
    title: "Article title 2",
    shortDescription: "Article description 2",
    readingTimeInMinute: 6,
    publishingDateStr: new Date().toLocaleDateString(),
  },
  "127": {
    id: "127",
    thumbnailURL: "https://picsum.photos/200/300",
    title: "Article title 2",
    shortDescription: "Article description 2",
    readingTimeInMinute: 6,
    publishingDateStr: new Date().toLocaleDateString(),
  },
};

export default function RecentArticlesContainer(): JSX.Element {
  return <RecentArticles articles={articles} />;
}
