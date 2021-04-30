import { gql } from "@apollo/client";

interface LatestNArticlesResponseElement {
  title: string;
  excerpt: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
  };
  readingTimeInMinute: number;
  _createdAt: string;
}

export interface LatestNArticlesResponse {
  allPost: LatestNArticlesResponseElement[];
}

export const GET_LATEST_N_ARTICLES = gql`
  query getLatestPosts($n: Int) {
    allPost(sort: [{ _createdAt: DESC }], limit: $n, offset: 0) {
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
