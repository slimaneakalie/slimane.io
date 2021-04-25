import RecentArticles from "../../components/home/RecentArticles";

const articles = {
  "125": {
    id: "125",
    thumbnailURL: "https://picsum.photos/200/300",
    title: "Article title",
    shortDescription: "Article description",
    readingTimeInMinute: 9,
    publishingDate: new Date(),
  },
  "126": {
    id: "126",
    thumbnailURL: "https://picsum.photos/200/300",
    title: "Article title 2",
    shortDescription: "Article description 2",
    readingTimeInMinute: 6,
    publishingDate: new Date(),
  },
  "127": {
    id: "127",
    thumbnailURL: "https://picsum.photos/200/300",
    title: "Article title 2",
    shortDescription: "Article description 2",
    readingTimeInMinute: 6,
    publishingDate: new Date(),
  },
};

export default function RecentArticlesContainer(): JSX.Element {
  return <RecentArticles articles={articles} />;
}
