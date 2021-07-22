import BooksPageComponent from "../../components/books/BooksPageComponent";
import { BooksMap } from "../../types/books/booksPage.types";

const books: BooksMap = {
  "digital-minimalism": {
    title: "Digital minimalism",
    coverImageName: "digital-minimalism",
    highlightsNotionId: "digital-minimalism",
  },
  "digital-minimalism-2": {
    title: "Digital minimalism",
    coverImageName: "digital-minimalism",
    highlightsNotionId: "digital-minimalism-2",
  },
  "digital-minimalism-3": {
    title: "Digital minimalism",
    coverImageName: "digital-minimalism",
    highlightsNotionId: "digital-minimalism-3",
  },
  "digital-minimalism-4": {
    title: "Digital minimalism",
    coverImageName: "digital-minimalism",
    highlightsNotionId: "digital-minimalism-4",
  },
  "digital-minimalism-5": {
    title: "Digital minimalism",
    coverImageName: "digital-minimalism",
    highlightsNotionId: "digital-minimalism-5",
  },
  "digital-minimalism-6": {
    title: "Digital minimalism",
    coverImageName: "digital-minimalism",
    highlightsNotionId: "digital-minimalism-6",
  },
};

export default function BooksContainer(): JSX.Element {
  return <BooksPageComponent books={books} />;
}
