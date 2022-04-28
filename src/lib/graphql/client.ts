import {
  ApolloClient,
  DocumentNode,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { ApolloQueryResult } from "@apollo/client/core/types";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: process.env.GRAPHQL_SERVER,
  cache: new InMemoryCache(),
});

export async function executeGraphqlQuery<T>(
  query: DocumentNode,
  variables: Record<string, unknown>
): Promise<ApolloQueryResult<T> | undefined> {
  try {
    const response = await client.query({
      query,
      variables,
    });
    return response;
  } catch (e) {
    console.log("error while executing the query: ", query, ", error: ", e);
  }
}
