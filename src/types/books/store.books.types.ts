import { BooksMap } from "./booksPage.types";
import { Book } from "./bookCard.types";

export interface BooksPageState {
  books: BooksMap;
}

export interface SetBookItemStateAction {
  id: string;
  newState: Book;
}
