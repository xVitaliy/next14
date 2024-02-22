import { ApolloClient, ApolloLink, InMemoryCache, ServerParseError, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { create } from 'zustand';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';

type ErrorType = {
  hasError: boolean;
  error: any;
  date: number | undefined | null;
};

const wsLink = new GraphQLWsLink(
  createClient({
    url: `https://countries.trevorblades.com/graphql`,
    connectionParams: () => {
      const token = '';
      return {
        Authorization: `Bearer ${token}`,
      };
    },
  }),
);

export const useErrorsStore = create<ErrorType>(() => ({
  hasError: false,
  error: null,
  date: null,
}));

const httpLink = createUploadLink({
  uri: `https://countries.trevorblades.com/graphql`,
});

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (networkError || graphQLErrors?.[0]) {
    useErrorsStore.setState({
      hasError: true,
      error: networkError || graphQLErrors?.[0],
      date: Date.now(),
    });
  }

  if (networkError && (networkError as ServerParseError)?.statusCode === 401) {
    // localStorage.removeItem(AUTH_TOKEN);
    console.log('here');
  }
});

const authLink = setContext(async (_, { headers }) => {
  const token = '';
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink,
);

export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, splitLink]),
  cache: new InMemoryCache({
    addTypename: true,
  }),
});
