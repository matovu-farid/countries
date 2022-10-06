import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import apollo_client from "../apollo_client";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apollo_client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
