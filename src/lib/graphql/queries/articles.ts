import { gql } from "@apollo/client";

export const GET_PAGE_ARTICLES = gql`
  query {
    allPost(sort: [{ _createdAt: DESC }]) {
      title
      excerpt
      textOrientation
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
  query getArticleData($slug: String) {
    allPost(where: { slug: { current: { eq: $slug } } }, limit: 1, offset: 0) {
      title
      excerpt
      textOrientation
      slug {
        current
      }
      mainImage {
        asset {
          url
        }
      }
      author {
        name
        contactLink
      }
      tags {
        name
      }
      readingTimeInMinute
      _createdAt
      bodyRaw
      bodyMarkdown
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
