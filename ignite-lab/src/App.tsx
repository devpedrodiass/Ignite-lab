import Router from "./Router";
import Event from "./pages/Event";
import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
