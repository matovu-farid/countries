import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import apollo_client from "../apollo_client";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apollo_client}>
      <ToastContainer />
      <Navbar></Navbar>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
