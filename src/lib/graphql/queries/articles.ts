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

export const GET_ARTICLE_DATA = gql`
  query getArticleData($slug: Int) {
    allPost(where: { slug: { current: { eq: $slug } } }, limit: 1, offset: 0) {
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
      bodyRaw
    }
  }
`;

export const GET_ALL_ARTICLES_SLUGS = gql`
  {
    allPost {
      slug {
        current
      }
    }
  }
`;
