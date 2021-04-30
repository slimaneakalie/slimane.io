import { gql } from "@apollo/client";

export const GET_PAGE_ARTICLES = gql`
  query {
    allPost(sort: [{ _createdAt: DESC }]) {
      title
      excerpt
      slug {
        current
      }
      mainImage {
        asset {
          url
        }
      }
      readingTimeInMinute
      _createdAt
    }
  }
`;
