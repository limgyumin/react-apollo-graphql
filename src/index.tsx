import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { client } from "./client/client";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
