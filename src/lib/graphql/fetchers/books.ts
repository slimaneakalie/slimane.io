import { executeGraphqlQuery } from "../client";
import { BooksGraphqlResponse } from "../../../types/shared/graphql.types";
import { BooksMap } from "../../../types/books/booksPage.types";
import {
  GET_ALL_BOOKS_SLUGS,
  GET_BOOK_DATA,
  GET_PAGE_BOOKS,
} from "../queries/books";
import {
  mapBookResponseElement,
  mapResponseToBooksMap,
} from "../mappers/books.mappers";
import { StaticPath } from "../../../types/shared/next.types";
import { Book, BookPageData } from "../../../types/books/bookCard.types";
import { fetchHighlightsNotionContent } from "../../notion/fetchers/books";
import { shuffle } from "../../utils";

export async function fetchPageBooks(): Promise<BooksMap> {
  const response = await executeGraphqlQuery<BooksGraphqlResponse>(
    GET_PAGE_BOOKS,
    {}
  );

  return mapResponseToBooksMap(response);
}

export async function fetchAllBooksSlugs(): Promise<StaticPath[]> {
  const response = await executeGraphqlQuery<BooksGraphqlResponse>(
    GET_ALL_BOOKS_SLUGS,
    {}
  );

  const slugs: StaticPath[] = [];

  response?.data.books?.forEach((book) => {
    slugs.push({ params: { slug: book.highlightsNotionPageId } });
  });

  return slugs;
}

export async function fetchBookHighlightsFullData(
  slug: string
): Promise<BookPageData | undefined> {
  const response = await executeGraphqlQuery<BooksGraphqlResponse>(
    GET_BOOK_DATA,
    { slug }
  );

  if (!response || response?.data?.books.length === 0) {
    return undefined;
  }

  const book = mapBookResponseElement(response?.data.books[0]);

  book.highlightsNotionContent = await fetchHighlightsNotionContent(
    book.highlightsNotionPageId
  );

  const gqlBooks = shuffle(response?.data.otherBooks);
  const otherBooks: Book[] = new Array(gqlBooks.length);
  gqlBooks.forEach(
    (gqlBook, i) => (otherBooks[i] = mapBookResponseElement(gqlBook))
  );

  return { book, otherBooks } as BookPageData;
}
