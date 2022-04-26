import { Book, BookPageData } from "./bookCard.types";

export interface BooksMap {
  [bookId: string]: BookPageData;
}

export interface BooksPageProps {
  booksMap: BooksMap;
}

export interface BookItemPageProps {
  book: Book;
  otherBooks: Book[];
}

export interface BooksSliderProps {
  books: Book[];
}
