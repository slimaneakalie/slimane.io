import { BooksMap } from "./booksPage.types";
import { Book, BookPageData } from "./bookCard.types";

export interface BooksPageState {
  books: BooksMap;
}

export interface SetBookItemStateAction {
  id: string;
  newState: BookPageData;
}
