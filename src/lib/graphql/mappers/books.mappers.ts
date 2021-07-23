import { ApolloQueryResult } from "@apollo/client/core/types";
import {
  BookGraphqlResponseElement,
  BooksGraphqlResponse,
} from "../../../types/shared/graphql.types";
import { BooksMap } from "../../../types/books/booksPage.types";
import { Book } from "../../../types/books/bookCard.types";

export function mapResponseToBooksMap(
  response?: ApolloQueryResult<BooksGraphqlResponse>
): BooksMap {
  const booksMap: BooksMap = {};
  if (response) {
    const books = response.data.allBook;
    books?.forEach((book) => {
      booksMap[book.highlightsNotionPageId] = mapBookResponseElement(book);
    });
  }

  return booksMap;
}

export function mapBookResponseElement(
  bookGraphql: BookGraphqlResponseElement
): Book {
  return {
    title: bookGraphql.title,
    highlightsNotionPageId: bookGraphql.highlightsNotionPageId,
    cover3dImageURL: bookGraphql.cover3dImage.asset.url,
    shortDescription: bookGraphql.shortDescription || null,
  };
}
