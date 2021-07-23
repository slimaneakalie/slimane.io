import { gql } from "@apollo/client";

export const GET_PAGE_BOOKS = gql`
  query {
    allBook(sort: [{ _createdAt: DESC }]) {
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
    allBook {
      highlightsNotionPageId
    }
  }
`;

export const GET_BOOK_DATA = gql`
  query getBookData($slug: String) {
    allBook(
      where: { highlightsNotionPageId: { eq: $slug } }
      limit: 1
      offset: 0
    ) {
      title
      highlightsNotionPageId
      shortDescription
      cover3dImage {
        asset {
          url
        }
      }
    }
  }
`;
