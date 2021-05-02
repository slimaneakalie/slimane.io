import { gql } from "@apollo/client";

export const GET_ALL_PODCAST_EPISODES = gql`
  {
    allPodcast {
      _id
      thumbnailURL
      title
      excerpt
      streamingDateStr
    }
  }
`;

export const GET_ALL_PODCAST_IDS = gql`
  {
    allPodcast {
      _id
    }
  }
`;

export const GET_PODCAST_DATA = gql`
  query getPodcastData($id: ID!) {
    Podcast(id: $id) {
      _id
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
