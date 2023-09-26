import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.studio.thegraph.com/query/28076/testpunks/version/latest',
  }),
  cache: new InMemoryCache(),
});

export default client;
