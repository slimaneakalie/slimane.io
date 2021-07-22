import { BooksPageState } from "../../types/books/store.books.types";
import { BooksMap } from "../../types/books/booksPage.types";

const booksPageState: BooksMap = {
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

export function getBooksPageInitialState(): BooksPageState {
  return {
    books: booksPageState,
  };
}
