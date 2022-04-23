import { gql } from "@apollo/client";

export const GET_ALL_PODCAST_EPISODES = gql`
  {
    allPodcast(sort: [{ streamingDateStr: DESC }]) {
      slug {
        current
      }
      thumbnailURL
      title
      excerpt
      streamingDateStr
    }
  }
`;

export const GET_ALL_PODCAST_SLUGS = gql`
  {
    allPodcast {
      slug {
        current
      }
    }
  }
`;

export const GET_PODCAST_DATA = gql`
  query getPodcastData($slug: String) {
    allPodcast(where: { slug: { current: { eq: $slug } } }, limit: 1, offset: 0) {
      _id
      slug {
        current
      }
      thumbnailURL
      title
      excerpt
      streamingDateStr
      videoId
      audioId
      arabicDescription
      englishDescription
    }
  }
`;
