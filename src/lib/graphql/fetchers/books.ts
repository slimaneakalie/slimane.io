import { executeGraphqlQuery } from "../client";
import {
  ArticlesGraphqlResponse,
  BooksGraphqlResponse,
} from "../../../types/shared/graphql.types";
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
import { Book } from "../../../types/books/bookCard.types";
import { GET_ARTICLE_DATA } from "../queries/articles";
import { mapArticleElement } from "../mappers/articles.mappers";
import { fetchHighlightsNotionContent } from "../../notion/fetchers/books";

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

  response?.data.allBook?.forEach((book) => {
    slugs.push({ params: { slug: book.highlightsNotionPageId } });
  });

  return slugs;
}

export async function fetchBookHighlightsFullData(
  slug: string
): Promise<Book | undefined> {
  const response = await executeGraphqlQuery<BooksGraphqlResponse>(
    GET_BOOK_DATA,
    { slug }
  );

  if (response && response.data.allBook.length > 0) {
    const book = mapBookResponseElement(response?.data.allBook[0]);
    book.highlightsNotionContent = await fetchHighlightsNotionContent(
      book.highlightsNotionPageId
    );
    return book;
  }
}
