import { gql } from "@apollo/client";

export const GET_LATEST_N_ARTICLES = gql`
  query getLatestPosts($n: Int) {
    allPost(sort: [{ _createdAt: DESC }], limit: $n, offset: 0) {
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
      author {
        name
        contactLink
      }
    }
  }
`;

export const GET_LATEST_PODCAST_EPISODE = gql`
  {
    allPodcast(sort: [{ streamingDateStr: DESC }], limit: 1, offset: 0) {
      _id
      thumbnailURL
      title
      excerpt
      streamingDateStr
    }
  }
`;
