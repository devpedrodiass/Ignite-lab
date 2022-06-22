import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-us-west-2.graphcms.com/v2/cl4ojzh1h0hfs01w75v0c0bm7/master",
  cache: new InMemoryCache(),
});
