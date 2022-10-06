const apollo_client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:3000/graphql",
});
export default apollo_client;
