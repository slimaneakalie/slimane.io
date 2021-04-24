import RecentArticles from "../components/RecentArticles";

const articles = {
  "125": {
    id: "125",
    thumbnailURL: "https://picsum.photos/200/300",
    title: "Article title",
    shortDescription: "Article description",
    readingTimeInMinute: 9,
    publishingDate: new Date(),
  },
};

export default function RecentArticlesContainer(): JSX.Element {
  return <RecentArticles articles={articles} />;
}
