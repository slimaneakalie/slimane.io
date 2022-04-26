import { gql } from "@apollo/client";

export const GET_PAGE_BOOKS = gql`
  query {
    books: allBook(sort: [{ _createdAt: DESC }]) {
      title
      highlightsNotionPageId
      cover3dImage {
        asset {
          url
        }
      }
    }
  }
`;

export const GET_ALL_BOOKS_SLUGS = gql`
  query {
    books: allBook {
      highlightsNotionPageId
    }
  }
`;

export const GET_BOOK_DATA = gql`
  query getBookData($slug: String) {
    books: allBook(
      where: { highlightsNotionPageId: { eq: $slug } }
      limit: 1
      offset: 0
    ) {
      title
      highlightsNotionPageId
      cover3dImage {
        asset {
          url
        }
      }
    }

    otherBooks: allBook(where: { highlightsNotionPageId: { neq: $slug } }) {
      title
      highlightsNotionPageId
      cover3dImage {
        asset {
          url
        }
      }
    }
  }
`;
