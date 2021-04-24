import RecentArticles from "../components/RecentArticles";

const articles = {
  "125": {
    thumbnailURL: "thumb",
    title: "title",
    shortDescription: "description",
    readingTimeInMinute: 9,
    publishingDate: "publishingDate",
  },
};

export default function RecentArticlesContainer(): JSX.Element {
  return <RecentArticles articles={articles} />;
}
