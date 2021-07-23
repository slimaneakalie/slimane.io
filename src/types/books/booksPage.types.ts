import { Book } from "./bookCard.types";

export interface BooksMap {
  [bookId: string]: Book;
}

export interface BooksPageProps {
  books: BooksMap;
}

export interface BookItemPageProps {
  book: Book;
}
