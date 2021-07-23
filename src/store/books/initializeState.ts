import { BooksPageState } from "../../types/books/store.books.types";
import { BooksMap } from "../../types/books/booksPage.types";
import { fetchPageBooks } from "../../lib/graphql/fetchers/books";

export async function getBooksPageInitialState(): Promise<BooksPageState> {
  return {
    books: await fetchPageBooks(),
  };
}
