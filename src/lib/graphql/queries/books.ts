import { gql } from "@apollo/client";

export const GET_PAGE_BOOKS = gql`
  query {
    books: allBook(sort: [{ _createdAt: DESC }]) {
      title
      slug {
        current
      }
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
      slug {
        current
      }
    }
  }
`;

export const GET_BOOK_DATA = gql`
  query getBookData($slug: String) {
    books: allBook(
      where: { slug: { current: { eq: $slug } } }
      limit: 1
      offset: 0
    ) {
      title
      slug {
        current
      }
      highlightsNotionPageId
      cover3dImage {
        asset {
          url
        }
      }
    }

    otherBooks: allBook(where: { slug: { current: { neq: $slug } } }) {
      title
      highlightsNotionPageId
      slug {
        current
      }
      cover3dImage {
        asset {
          url
        }
      }
    }
  }
`;
