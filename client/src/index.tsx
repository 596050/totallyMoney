import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import { Server } from "miragejs";

import { makeServer } from "./api";
import App from "./App";
import { StoreProvider } from "./context";
import { theme, ThemeProvider } from "./util";

import { GlobalStyles } from "./App.styles";

// @ts-ignore
if (window.Cypress) {
  // mirage cypress server
  const cyServer = new Server({
    routes() {
      ["get", "put", "patch", "post", "delete"].forEach((method) => {
        // @ts-ignore
        this[method]("/*", (schema, request) => {
          // @ts-ignore
          return window.handleFromCypress(request);
        });
      });
    },
  });
  cyServer.logging = false;
} else if (!process.env.REACT_APP_PROXY) {
}

// mirage dev server
makeServer();

const Root = hot(() => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StoreProvider>
        <App />
      </StoreProvider>
    </ThemeProvider>
  </React.StrictMode>
));

ReactDOM.render(<Root />, document.getElementById("root"));
