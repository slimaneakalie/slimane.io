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
