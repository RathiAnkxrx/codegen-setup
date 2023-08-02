import { ApolloProvider } from "@apollo/client";
import { InMemoryCache, ApolloClient } from "@apollo/client";
import "../styles/global.css";
import "../styles/page.css";

export default function App({ Component, pageProps }: any) {
  const client = new ApolloClient({
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
